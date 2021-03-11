(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{112:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return v}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(r),u=n,v=p["".concat(i,".").concat(u)]||p[u]||b[u]||o;return r?a.a.createElement(v,l(l({ref:t},s),{},{components:r})):a.a.createElement(v,l({ref:t},s))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},81:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),o=(r(0),r(112)),i={id:"converters",title:"Custom Converters",slug:"../dev-guide/high-level/converters"},l={unversionedId:"dev_guide/high_level/converters",id:"dev_guide/high_level/converters",isDocsHomePage:!1,title:"Custom Converters",description:"A converter is a class that converts .NET type to and from DynamoDb JSON or low-level Document object. A custom converter allows to work with unsupported types or to override the default converter behavior.",source:"@site/docs/dev_guide/high_level/converters.md",slug:"/dev_guide/dev-guide/high-level/converters",permalink:"/EfficientDynamoDb/docs/dev_guide/dev-guide/high-level/converters",editUrl:"https://github.com/alloczero/EfficientDynamoDb/edit/master/website/docs/dev_guide/high_level/converters.md",version:"current",sidebar:"someSidebar",previous:{title:"Transact",permalink:"/EfficientDynamoDb/docs/dev_guide/dev-guide/high-level/transact"},next:{title:"Retry Strategies",permalink:"/EfficientDynamoDb/docs/dev-guide/retry-strategies"}},c=[{value:"Basic converter",id:"basic-converter",children:[]},{value:"Applying converters",id:"applying-converters",children:[{value:"For property",id:"for-property",children:[]},{value:"For type",id:"for-type",children:[]},{value:"For context",id:"for-context",children:[]}]},{value:"Direct JSON converter",id:"direct-json-converter",children:[{value:"JSON reading",id:"json-reading",children:[]},{value:"JSON writing",id:"json-writing",children:[]}]},{value:"Sparse converters",id:"sparse-converters",children:[]}],s={toc:c};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A converter is a class that converts .NET type to and from DynamoDb JSON or low-level ",Object(o.b)("inlineCode",{parentName:"p"},"Document")," object. A custom converter allows to work with unsupported types or to override the default converter behavior."),Object(o.b)("p",null,"Converters on par with DynamoDb JSON parsing are one of the most critical components from the performance point of view.\nAll ",Object(o.b)("strong",{parentName:"p"},"EfficientDynamoDb")," built-in converters are optimized separately for entity to ",Object(o.b)("inlineCode",{parentName:"p"},"Document"),"  and entity to JSON conversions in order to allocate no additional memory."),Object(o.b)("h2",{id:"basic-converter"},"Basic converter"),Object(o.b)("p",null,"To create a custom converter:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Inherit from ",Object(o.b)("inlineCode",{parentName:"li"},"DdbConverter<TValue>")," class."),Object(o.b)("li",{parentName:"ul"},"Implement both ",Object(o.b)("inlineCode",{parentName:"li"},"Read")," and ",Object(o.b)("inlineCode",{parentName:"li"},"Write")," methods.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"public class CompositeAddressConverter : DdbConverter<Address>\n{\n    // Converts DynamoDb attribute to the .NET type\n    public override Address Read(in AttributeValue attributeValue)\n    {\n        var parts = attributeValue.AsString().Split('#');\n        return new Address(parts[0], parts[1]);\n    }\n\n    // Converts .NET type to the DynamoDb attribute\n    public override AttributeValue Write(ref Address address)\n    {\n        return new StringAttributeValue($\"{address.Country}#{address.Street}\");\n    }\n}\n")),Object(o.b)("h2",{id:"applying-converters"},"Applying converters"),Object(o.b)("h3",{id:"for-property"},"For property"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},'[DynamoDbProperty("address", typeof(CompositeAddressConverter))]\npublic Address Address { get; set; }\n')),Object(o.b)("h3",{id:"for-type"},"For type"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"[DynamoDBConverter(typeof(CompositeAddressConverter))]\npublic struct Address { ... }\n")),Object(o.b)("h3",{id:"for-context"},"For context"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"var config = new DynamoDbContextConfig(regionEndpoint, awsCredentials)\n{\n    Converters = new[] {new CompositeAddressConverter()}\n};\n")),Object(o.b)("p",null,"If converter can't be instantiated in advance and depends on the target value type, a custom converter factory can be implemented by inheriting from the ",Object(o.b)("inlineCode",{parentName:"p"},"DdbConverterFactory")," class and registering it for context the same way as other custom converters."),Object(o.b)("p",null,"For example, a string enum converter factory can be defined like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"public sealed class StringEnumDdbConverterFactory : DdbConverterFactory\n{\n    public override bool CanConvert(Type typeToConvert) => typeToConvert.IsEnum;\n\n    public override DdbConverter CreateConverter(Type typeToConvert, DynamoDbContextMetadata metadata)\n    {\n        return (DdbConverter) Activator.CreateInstance(typeof(StringEnumDdbConverter<>).MakeGenericType(typeToConvert));\n    }\n}\n")),Object(o.b)("h2",{id:"direct-json-converter"},"Direct JSON converter"),Object(o.b)("p",null,"Not all .NET types map nicely to DynamoDb attributes. Creation of intermediate ",Object(o.b)("inlineCode",{parentName:"p"},"AttributeValue")," struct can involve unnecessary allocations that can be avoided by reading / writing directly into JSON buffer.\nIn case when a custom type can't be converted to the ",Object(o.b)("inlineCode",{parentName:"p"},"AttributeValue")," without allocations, it is possible to implement two additional low-level ",Object(o.b)("inlineCode",{parentName:"p"},"Read")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Write")," methods that work with JSON buffers.\nDuring deserialization / serialization of entities to JSON, more optimized low-level implementations will be called."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"public class CustomIntConverter : DdbConverter<int>\n{\n    // Efficient zero-allocation JSON to int conversion\n    public override int Read(ref DdbReader reader)\n    {\n        if (!Utf8Parser.TryParse(reader.JsonReader.ValueSpan, out int value, out _))\n            throw new DdbException($\"Couldn't parse int ddb value from '{reader.JsonReaderValue.GetString()}'.\");\n\n        return value;\n    }\n    \n    // Efficient zero-allocation int to JSON conversion\n    public override void Write(in DdbWriter writer, ref int value)\n    {\n         writer.JsonWriter.WriteStartObject();\n         writer.JsonWriter.WriteString(DdbTypeNames.Number, value);\n         writer.JsonWriter.WriteEndObject();\n    }\n    \n    public override int Read(in AttributeValue attributeValue) => attributeValue.AsNumberAttribute().ToInt();\n    \n    public override AttributeValue Write(ref T value) => new NumberAttributeValue(value.ToString());   \n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"EfficientDynamoDb")," uses ",Object(o.b)("inlineCode",{parentName:"p"},"System.Text.Json")," for all JSON manipulations. "),Object(o.b)("h3",{id:"json-reading"},"JSON reading"),Object(o.b)("p",null,"When a low-level read is called, ",Object(o.b)("inlineCode",{parentName:"p"},"DdbReader.JsonReader")," is already pointed to the JSON value. Current attribute type is automatically parsed and can be accessed using ",Object(o.b)("inlineCode",{parentName:"p"},"DdbReader.AttributeType")," property."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"DdbReader.JsonReader.Read")," method should not be called explicitly unless you are writing a converter for a non-primitive JSON type like an object or array."),Object(o.b)("h3",{id:"json-writing"},"JSON writing"),Object(o.b)("p",null,"When a low-level write is called, a converter has to write DynamoDb JSON including the attribute type.\n",Object(o.b)("inlineCode",{parentName:"p"},"DdbWriter")," class provides various simplified overloads that write attribute types automatically. But in case if suitable overload does not exist, attribute type has to be written manually like in the ",Object(o.b)("inlineCode",{parentName:"p"},"CustomIntConverter")," example above."),Object(o.b)("h2",{id:"sparse-converters"},"Sparse converters"),Object(o.b)("p",null,"Sparse converters don't save certain values and completely remove an attribute instead. It is a powerful concept that can be used for various purposes like size savings or to conditionally include an entity in the GSI."),Object(o.b)("p",null,"By default all built-in converters act as sparse converters when it comes to handling ",Object(o.b)("inlineCode",{parentName:"p"},"null")," values, meaning that ",Object(o.b)("inlineCode",{parentName:"p"},"null")," properties are never saved and entire attribute is deleted."),Object(o.b)("p",null,"To add an additional sparse condition, ",Object(o.b)("inlineCode",{parentName:"p"},"ShouldWrite")," method has to be overriden. For example. here is a simple sparse int converter:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-csharp"},"public class SparseIntConverter : DdbConverter<int>\n{\n    public override bool ShouldWrite(ref int value) => value != 0;\n    \n    ...\n}\n")),Object(o.b)("p",null,"Note: Sparse converters don't remove attributes when they are part of a ",Object(o.b)("inlineCode",{parentName:"p"},"Dictionary")," class."))}d.isMDXComponent=!0}}]);