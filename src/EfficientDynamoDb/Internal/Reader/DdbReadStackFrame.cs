using System;
using System.Buffers;
using System.Collections.Generic;
using System.Runtime.CompilerServices;
using System.Runtime.InteropServices;
using EfficientDynamoDb.DocumentModel;
using EfficientDynamoDb.DocumentModel.AttributeValues;
using EfficientDynamoDb.Internal.Core;

namespace EfficientDynamoDb.Internal.Reader
{
    [StructLayout(LayoutKind.Auto)]
    public struct DdbReadStackFrame
    {
        public ReusableBuffer<string> KeysBuffer;
        public ReusableBuffer<AttributeValue> AttributesBuffer;

        public string? KeyName;

        public AttributeType AttributeType;

        public int BufferLengthHint;

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public bool IsProcessingValue() => KeyName != null;

        public void Reset()
        {
            KeyName = null;
            BufferLengthHint = 32;
            AttributeType = default;
            KeysBuffer.Index = 0;
            AttributesBuffer.Index = 0;
        }

        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public Document? CreateDocumentFromBuffer()
        {
            if (KeysBuffer.Index == 0)
                return null;
            
            var document = new Document(KeysBuffer.Index);
            
            for (var i = 0; i < KeysBuffer.Index; i++)
                document.Add(KeysBuffer.RentedBuffer![i], AttributesBuffer.RentedBuffer![i]);
            
            // DocumentBuffer.Dispose();
            
            return document;
        }
        
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static AttributeValue[] CreateListFromBuffer(ref ReusableBuffer<AttributeValue> buffer)
        {
            if (buffer.Index == 0)
                return Array.Empty<AttributeValue>();
            
            var array = new AttributeValue[buffer.Index];

            // Buffer.BlockCopy(buffer.RentedBuffer!, 0, array, 0, buffer.Index);

            Array.Copy(buffer.RentedBuffer!, array, 1);

            // buffer.Dispose();
            
            return array;
        }
        
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static HashSet<string> CreateStringSetFromBuffer(ref ReusableBuffer<AttributeValue> buffer)
        {
            if (buffer.Index == 0)
                return new HashSet<string>();
            
            var set = new HashSet<string>(buffer.Index);

            for (var i = 0; i < buffer.Index; i++)
                set.Add(buffer.RentedBuffer![i]._stringValue.Value);

            // buffer.Dispose();
            
            return set;
        }
        
        [MethodImpl(MethodImplOptions.AggressiveInlining)]
        public static string[] CreateNumberArrayFromBuffer(ref ReusableBuffer<AttributeValue> buffer)
        {
            if (buffer.Index == 0)
                return Array.Empty<string>();
            
            var array = new string[buffer.Index];

            for (var i = 0; i < buffer.Index; i++)
                array[i] = buffer.RentedBuffer![i]._stringValue.Value;

            // buffer.Dispose();
            
            return array;
        }
    }
}