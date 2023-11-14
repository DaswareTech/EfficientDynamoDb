using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using EfficientDynamoDb.DocumentModel;
using EfficientDynamoDb.Exceptions;
using EfficientDynamoDb.Internal;
using EfficientDynamoDb.Internal.Converters.Json;
using EfficientDynamoDb.Internal.Extensions;
using EfficientDynamoDb.Internal.Operations.BatchGetItem;
using EfficientDynamoDb.Internal.Reader;
using EfficientDynamoDb.Operations.BatchGetItem;
using static EfficientDynamoDb.DynamoDbLowLevelContext;

namespace EfficientDynamoDb
{
    public partial class DynamoDbContext : IDynamoDbContext
    {
        private readonly DynamoDbLowLevelContext _lowContext;
        
        internal DynamoDbContextConfig Config => _lowContext.Config;
        DynamoDbContextConfig IDynamoDbContext.Config => Config;
        private HttpApi Api => _lowContext.Api;

        [Obsolete("Going to be removed in 1.0. Use LowLevel instead")]
        // ReSharper disable once ConvertToAutoPropertyWhenPossible
        public DynamoDbLowLevelContext LowContext => _lowContext;

        public IDynamoDbLowLevelContext LowLevel => _lowContext;

        public DynamoDbContext(DynamoDbContextConfig config)
        {
            _lowContext = new DynamoDbLowLevelContext(config, new HttpApi(config.HttpClientFactory));
        }

        public T ToObject<T>(Document document) where T : class => document.ToObject<T>(Config.Metadata);

        public Document ToDocument<T>(T entity) where T : class => entity.ToDocument(Config.Metadata);

        async Task<TResponse> IDynamoDbContext.ExecuteAsync<TResponse>(HttpContent httpContent, CancellationToken cancellationToken) where TResponse : class
        {
            using var response = await Api.SendAsync(Config, httpContent, cancellationToken).ConfigureAwait(false);
            return await ReadAsync<TResponse>(response, cancellationToken).ConfigureAwait(false);
        }

        private async ValueTask<TResult> ReadAsync<TResult>(HttpResponseMessage response, CancellationToken cancellationToken = default) where TResult : class
        {
            await using var responseStream = await response.Content.ReadAsStreamAsync().ConfigureAwait(false);
            
            var expectedCrc = GetExpectedCrc(response);
            var classInfo = Config.Metadata.GetOrAddClassInfo(typeof(TResult), typeof(JsonObjectDdbConverter<TResult>));
            var result = await EntityDdbJsonReader.ReadAsync<TResult>(responseStream, classInfo, Config.Metadata, expectedCrc.HasValue, cancellationToken: cancellationToken).ConfigureAwait(false);
            
            if (expectedCrc.HasValue && expectedCrc.Value != result.Crc)
                throw new ChecksumMismatchException();

            return result.Value!;
        }
        
        private async ValueTask<TResult> ReadFromStreamAsync<TResult>(Stream responseStream, CancellationToken cancellationToken = default) where TResult : class
        {
            var classInfo = Config.Metadata.GetOrAddClassInfo(typeof(TResult), typeof(JsonObjectDdbConverter<TResult>));
            var result = await EntityDdbJsonReader.ReadAsync<TResult>(responseStream, classInfo, Config.Metadata, false, cancellationToken: cancellationToken).ConfigureAwait(false);

            return result.Value!;
        }
        
        public async Task<List<TEntity>> GetItemsFromStreamAsync<TEntity>(Stream stream, CancellationToken cancellationToken = default) where TEntity : class
        {
            var result = await ReadFromStreamAsync<BatchGetItemEntityResponse<TEntity>>(stream, cancellationToken).ConfigureAwait(false);
            List<TEntity>? items = null;
            if (result.Responses?.Count > 0)
            {
                foreach (var values in result.Responses.Values)
                {
                    if (items == null)
                        items = values;
                    else
                        items.AddRange(values);
                }
            }

            return items ?? new List<TEntity>();
        }
    }
}