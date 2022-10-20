"use strict";(self.webpackChunkakara=self.webpackChunkakara||[]).push([[1782],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(p,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4033:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},p=void 0,c={unversionedId:"javascript/basic",id:"javascript/basic",title:"basic",description:"typeof",source:"@site/docs/javascript/basic.md",sourceDirName:"javascript",slug:"/javascript/basic",permalink:"/docs/javascript/basic",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javascript/basic.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"css",permalink:"/docs/css"},next:{title:"\u6570\u7ec4",permalink:"/docs/javascript/\u6570\u7ec4"}},u={},s=[{value:"typeof",id:"typeof",level:2},{value:"\u57fa\u672c\u5305\u88c5\u7c7b\u578b",id:"\u57fa\u672c\u5305\u88c5\u7c7b\u578b",level:2},{value:"\u5224\u65ad\u76f8\u7b49",id:"\u5224\u65ad\u76f8\u7b49",level:2},{value:"nullish",id:"nullish",level:2},{value:"\u95ed\u5305",id:"\u95ed\u5305",level:2}],f={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u57fa\u7840"},"\u57fa\u7840"),(0,i.kt)("h2",{id:"typeof"},"typeof"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"typeof undefined === 'undefined'\ntypeof null === 'object'\ntypeof 123 === 'number'\ntypeof '123' === 'string'\ntypeof true === 'boolean'\ntypeof Symbol() === 'symbol'\ntypeof 123n === 'bigint' \n// \u4e00\u5171\u4e03\u79cd\u57fa\u672c\u7c7b\u578b\uff0c\u6700\u540e\u4e00\u79cdbigint\u4e3a\u65b0\u589e\u57fa\u672c\u7c7b\u578b\ntypeof {} === 'object'\ntypeof function() {} === 'function'\n")),(0,i.kt)("h2",{id:"\u57fa\u672c\u5305\u88c5\u7c7b\u578b"},"\u57fa\u672c\u5305\u88c5\u7c7b\u578b"),(0,i.kt)("p",null,"\u5f53\u6211\u4eec\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"'1'.toString()"),"\u7684\u65f6\u5019\uff0c\u5b9e\u9645\u4e0a\u53d1\u751f\u4e86\u4ee5\u4e0b\u8fc7\u7a0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"var s = new String('1');\ns.toString();\ns = null;\n")),(0,i.kt)("h2",{id:"\u5224\u65ad\u76f8\u7b49"},"\u5224\u65ad\u76f8\u7b49"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"==")," \u4f1a\u8fdb\u884c\u7c7b\u578b\u8f6c\u6362"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"===")," \u4e0d\u4f1a\u8fdb\u884c\u7c7b\u578b\u8f6c\u6362\uff0c\u4f46\u662f",(0,i.kt)("inlineCode",{parentName:"li"},"NaN"),"\u4e0d\u7b49\u4e8e\u81ea\u8eab\uff0c\u4ee5\u53ca",(0,i.kt)("inlineCode",{parentName:"li"},"+0"),"\u7b49\u4e8e",(0,i.kt)("inlineCode",{parentName:"li"},"-0 ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Object.is()")," \u5b8c\u5168\u76f8\u7b49")),(0,i.kt)("h2",{id:"nullish"},"nullish"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"||")," \u7528\u6765\u5224\u65ad",(0,i.kt)("inlineCode",{parentName:"p"},"falsey"),"\u503c\uff0c\u4f46\u6709\u7684\u65f6\u5019\u6211\u4eec\u7684\u53d8\u91cf\u53ef\u80fd\u662f0\u6216\u8005false\u3002\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"??"),"\u6765\u5224\u65ad",(0,i.kt)("inlineCode",{parentName:"p"},"nullish"),"\u503c\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"\uff09"),(0,i.kt)("h2",{id:"\u95ed\u5305"},"\u95ed\u5305"),(0,i.kt)("p",null,"JavaScript\u91c7\u7528\u7684\u662f\u8bcd\u6cd5\u4f5c\u7528\u57df\uff08\u6216\u8005\u53eb\u9759\u6001\u4f5c\u7528\u57df\uff09\uff0c\u4e5f\u5c31\u662f\u8bf4",(0,i.kt)("strong",{parentName:"p"},"\u51fd\u6570\u4f5c\u7528\u57df\u7684\u4f4d\u7f6e\u5728\u58f0\u660e\u51fd\u6570\u7684\u65f6\u5019\u5df2\u7ecf\u51b3\u5b9a\u4e86"),"\uff08\u6ce8\u610f\u53ea\u662f\u51b3\u5b9a\u4e86\u4f4d\u7f6e\uff0c\u51fd\u6570\u53ea\u6709\u8c03\u7528\u7684\u65f6\u5019\u624d\u4f1a\u5b9e\u9645\u751f\u6210\u4f5c\u7528\u57df\uff09\u3002"),(0,i.kt)("p",null,"\u4e0e\u4e4b\u5bf9\u5e94\u7684\u662f\u52a8\u6001\u4f5c\u7528\u57df\uff08\u6bd4\u5982Bash\u811a\u672c\uff09\uff0c\u6b64\u65f6",(0,i.kt)("strong",{parentName:"p"},"\u51fd\u6570\u4f5c\u7528\u57df\u7684\u4f4d\u7f6e\u53d6\u51b3\u4e8e\u8c03\u7528\u8be5\u51fd\u6570\u65f6\u7684\u73af\u5883"),"\u3002"),(0,i.kt)("p",null,"\u53e6\u5916\uff0c\u901a\u5e38\u5f53\u4e00\u4e2a\u51fd\u6570\u8c03\u7528\u5b8c\u6210\u540e\u4f1a\u9500\u6bc1\u4f5c\u7528\u57df\u4ee5\u53ca\u4f5c\u7528\u57df\u5185\u90e8\u7684\u53d8\u91cf\uff0c\u4f46\u662f\u5982\u679c\u51fd\u6570\u8c03\u7528\u5b8c\u6210\u65f6\u5185\u90e8\u7684\u53d8\u91cf\u4f9d\u7136\u88ab\u5916\u90e8\u5f15\u7528\u4e86\uff0c\u90a3\u4e48\u8be5\u51fd\u6570\u7684\u4f5c\u7528\u57df\u5c31\u4e0d\u4f1a\u88ab\u9500\u6bc1\u3002"),(0,i.kt)("p",null,"\u4ece\u4ee5\u4e0a\u4e24\u70b9\u51fa\u53d1\uff0c\u5c31\u80fd\u7406\u89e3\u4f55\u4e3a\u95ed\u5305\u4e86\u3002"))}d.isMDXComponent=!0}}]);