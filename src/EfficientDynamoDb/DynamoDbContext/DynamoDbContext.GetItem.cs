using System.IO;
using System.Threading;
using System.Threading.Tasks;
using EfficientDynamoDb.Internal.Metadata;
using EfficientDynamoDb.Internal.Operations.GetItem;
using EfficientDynamoDb.Operations.GetItem;
using EfficientDynamoDb.Operations.Query;

namespace EfficientDynamoDb
{
    public partial class DynamoDbContext
    {
        public IGetItemEntityRequestBuilder<TEntity> GetItem<TEntity>() where TEntity : class => new GetItemEntityRequestBuilder<TEntity>(this);

        public async Task<TEntity?> GetItemAsync<TEntity>(object partitionKey, CancellationToken cancellationToken = default)
            where TEntity : class
        {
            using var httpContent = new GetItemByPkObjectHttpContent<TEntity>(this, partitionKey);

            using var response = await Api.SendAsync(Config, httpContent, cancellationToken).ConfigureAwait(false);
            var result = await ReadAsync<GetItemEntityProjection<TEntity>>(response, cancellationToken).ConfigureAwait(false);

            return result.Item;
        }
        
        public async Task<TEntity?> GetItemAsync<TEntity>(object partitionKey, object sortKey, CancellationToken cancellationToken = default)
            where TEntity : class
        {
            using var httpContent = new GetItemByPkAndSkObjectHttpContent<TEntity>(this, partitionKey, sortKey);

            using var response = await Api.SendAsync(Config, httpContent, cancellationToken).ConfigureAwait(false);
            var result = await ReadAsync<GetItemEntityProjection<TEntity>>(response, cancellationToken).ConfigureAwait(false);

            return result.Item;
        }
        
        public async Task<TEntity?> GetItemFromStreamAsync<TEntity>(Stream stream, CancellationToken cancellationToken = default)
            where TEntity : class
        {
            var result = await ReadFromStreamAsync<GetItemEntityProjection<TEntity>>(stream, cancellationToken).ConfigureAwait(false);

            return result.Item;
        }

        public Task<TEntity?> GetItemAsync<TEntity, TPartitionKey>(TPartitionKey partitionKey, CancellationToken cancellationToken = default)
            where TEntity : class => GetItemAsync<TEntity>(Config.Metadata.GetOrAddClassInfo(typeof(TEntity)), new PartitionKeyNode<TPartitionKey>(partitionKey, null), cancellationToken);

        public Task<TEntity?> GetItemAsync<TEntity, TPartitionKey, TSortKey>(TPartitionKey partitionKey, TSortKey sortKey,
            CancellationToken cancellationToken = default) where TEntity : class =>
            GetItemAsync<TEntity>(Config.Metadata.GetOrAddClassInfo(typeof(TEntity)), new PartitionAndSortKeyNode<TPartitionKey, TSortKey>(partitionKey, sortKey, null), cancellationToken);
        
        internal async Task<TEntity?> GetItemAsync<TEntity>(DdbClassInfo classInfo, BuilderNode node, CancellationToken cancellationToken = default) where TEntity : class
        {
            using var httpContent = new GetItemHighLevelHttpContent(this, classInfo, node);

            using var response = await Api.SendAsync(Config, httpContent, cancellationToken).ConfigureAwait(false);
            var result = await ReadAsync<GetItemEntityProjection<TEntity>>(response, cancellationToken).ConfigureAwait(false);

            return result.Item;
        }
        
        internal async Task<GetItemEntityResponse<TEntity>> GetItemResponseAsync<TEntity>(DdbClassInfo classInfo, BuilderNode node, CancellationToken cancellationToken = default) where TEntity : class
        {
            using var httpContent = new GetItemHighLevelHttpContent(this, classInfo, node);

            using var response = await Api.SendAsync(Config, httpContent, cancellationToken).ConfigureAwait(false);
            return await ReadAsync<GetItemEntityResponse<TEntity>>(response, cancellationToken).ConfigureAwait(false);
        }
    }
}