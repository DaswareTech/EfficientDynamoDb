using System;
using EfficientDynamoDb.Operations.BatchGetItem;
using EfficientDynamoDb.Operations.BatchWriteItem;

namespace EfficientDynamoDb
{
    public static class Batch
    {
        public static IBatchPutItemBuilder PutItem<TEntity>(TEntity entity) where TEntity : class => new BatchPutItemBuilder(typeof(TEntity), entity);

        public static IBatchPutItemBuilder PutItem(object entity, Type type)
        {
            if (type != entity?.GetType())
                throw new InvalidOperationException("The type of the entity must match the type of the entity parameter");
            
            return new BatchPutItemBuilder(type, entity);   
        }
        
        public static IBatchDeleteItemBuilder DeleteItem<TEntity>() where TEntity : class => new BatchDeleteItemBuilder(typeof(TEntity));
        public static IBatchDeleteItemBuilder DeleteItem(Type type) => new BatchDeleteItemBuilder(type);

        public static IBatchGetTableBuilder<TTableEntity> FromTable<TTableEntity>() where TTableEntity : class => new BatchGetTableBuilder<TTableEntity>();

        public static IBatchGetItemBuilder GetItem<TEntity>() where TEntity : class => new BatchGetItemBuilder<TEntity>();
    }
}