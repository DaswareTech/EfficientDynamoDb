(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(n),u=r,m=s["".concat(i,".").concat(u)]||s[u]||d[u]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(108)),i={id:"attributes",title:"Attributes",slug:"../dev-guide/high-level/attributes"},c={unversionedId:"dev_guide/high_level/attributes",id:"dev_guide/high_level/attributes",isDocsHomePage:!1,title:"Attributes",description:"When using high-level API, data classes have to be marked with certain attributes in order to map the data to DynamoDB tables.",source:"@site/docs/dev_guide/high_level/attributes.md",slug:"/dev_guide/dev-guide/high-level/attributes",permalink:"/EfficientDynamoDb/docs/dev_guide/dev-guide/high-level/attributes",editUrl:"https://github.com/alloczero/EfficientDynamoDb/edit/master/website/docs/dev_guide/high_level/attributes.md",version:"current",sidebar:"someSidebar",previous:{title:"Accessing the API",permalink:"/EfficientDynamoDb/docs/dev-guide/setup"},next:{title:"Reading",permalink:"/EfficientDynamoDb/docs/dev_guide/dev-guide/high-level/read"}},p=[{value:"DynamoDBTable",id:"dynamodbtable",children:[]},{value:"DynamoDBProperty",id:"dynamodbproperty",children:[{value:"Mapping primary key",id:"mapping-primary-key",children:[]},{value:"Custom converters",id:"custom-converters",children:[]}]},{value:"DynamoDBConverter",id:"dynamodbconverter",children:[]},{value:"DynamoDBVersion",id:"dynamodbversion",children:[]}],l={toc:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When using high-level API, data classes have to be marked with certain attributes in order to map the data to DynamoDB tables."),Object(o.b)("h2",{id:"dynamodbtable"},"DynamoDBTable"),Object(o.b)("p",null,"Specifies a target table name."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Required:")," true"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-C#"},'[DynamoDBTable("users")]\npublic class UserEntity { ... }\n')),Object(o.b)("p",null,"Note:  ",Object(o.b)("em",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"em"},"DynamoDBTable")," supports inheritance, can be applied to the base class.")),Object(o.b)("h2",{id:"dynamodbproperty"},"DynamoDBProperty"),Object(o.b)("p",null,"Maps a property to the DynamoDB attribute."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Required:")," true"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-C#"},'[DynamoDBProperty("fist_name")]\npublic string FirstName { get; set; }\n')),Object(o.b)("h3",{id:"mapping-primary-key"},"Mapping primary key"),Object(o.b)("p",null,"Partition and sort key properties have to additionally specify ",Object(o.b)("inlineCode",{parentName:"p"},"DynamoDbAttributeType"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-C#"},'[DynamoDBProperty("pk", DynamoDbAttributeType.PartitionKey)]\npublic string Pk { get; set; }\n\n[DynamoDBProperty("sk", DynamoDbAttributeType.SortKey)]\npublic string Sk { get; set; }\n')),Object(o.b)("h3",{id:"custom-converters"},"Custom converters"),Object(o.b)("p",null,"An optional converter can also be specified per property. For more details describing how to create your own converters check our Converters guide."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-C#"},'[DynamoDBProperty("gender", typeof(StringEnumDdbConverter<Gender>))]\npublic Gender Gender { get; set; }\n')),Object(o.b)("h2",{id:"dynamodbconverter"},"DynamoDBConverter"),Object(o.b)("p",null,"Associates class or struct with specified converter, thus removing the need to specify converter type in ",Object(o.b)("inlineCode",{parentName:"p"},"DynamoDBProperty")," every single time."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-C#"},"[DynamoDBConverter(typeof(CompositeAddressConverter))]\npublic class Address { ... }\n")),Object(o.b)("h2",{id:"dynamodbversion"},"DynamoDBVersion"),Object(o.b)("p",null,"Enables optimistic concurrency. Can only be applied to properties of ",Object(o.b)("inlineCode",{parentName:"p"},"byte?"),", ",Object(o.b)("inlineCode",{parentName:"p"},"short?"),", ",Object(o.b)("inlineCode",{parentName:"p"},"int?")," and ",Object(o.b)("inlineCode",{parentName:"p"},"long?")," types."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-C#"},'[DynamoDBVersion, DynamoDBProperty("version"))]\npublic int? Version { get; set; }\n')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"DynamoDBVersion")," attribute is designed for backward compatibility with official AWS SDK, it only works with ",Object(o.b)("inlineCode",{parentName:"p"},"SaveAsync")," extension method and does not affect other operations."))}b.isMDXComponent=!0}}]);