"use strict";(self.webpackChunkakara=self.webpackChunkakara||[]).push([[2063],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(t),u=r,N=s["".concat(p,".").concat(u)]||s[u]||m[u]||o;return t?a.createElement(N,i(i({ref:n},d),{},{components:t})):a.createElement(N,i({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=s;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},769:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={sidebarDepth:4},p=void 0,c={unversionedId:"react/React",id:"react/React",title:"React",description:"\u865a\u62dfDOM",source:"@site/docs/react/React.mdx",sourceDirName:"react",slug:"/react/",permalink:"/docs/react/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/React.mdx",tags:[],version:"current",frontMatter:{sidebarDepth:4},sidebar:"tutorialSidebar",previous:{title:"vue",permalink:"/docs/vue"},next:{title:"\u57fa\u7840",permalink:"/docs/react/\u57fa\u7840"}},d={},m=[{value:"\u865a\u62dfDOM",id:"\u865a\u62dfdom",level:2},{value:"Fiber Node",id:"fiber-node",level:2}],s={toc:m};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react"},"React"),(0,o.kt)("h2",{id:"\u865a\u62dfdom"},"\u865a\u62dfDOM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'const element = <h1 class="hello">hello, world!</h1>\nconst component = <App /> \n')),(0,o.kt)("p",null,"\u4e0a\u65b9\u7684\u4ee3\u7801\u88ab\u79f0\u4e4b\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"JSX"),"\u8bed\u6cd5\uff0c\u5b9e\u9645\u4e0a\u4f1a\u88ab\u7f16\u8bd1\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"React.createElement"),"\uff0c\u56e0\u6b64\u7b49\u4ef7\u4e8e\u4ee5\u4e0b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const element = React.createElement('h1', { class: 'hello' }, 'hello, world')\nconst component = React.createElement(App, null, null)\n")),(0,o.kt)("p",null,"\u5b9e\u9645\u4e0a",(0,o.kt)("inlineCode",{parentName:"p"},"React.createElement"),"\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u666e\u901a\u7684\u5bf9\u8c61\uff0c\u8fd9\u79cd\u5bf9\u8c61\u88ab\u79f0\u4e4b\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"JSX.Element"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"React.ReactElement"),"\uff0c\u4e5f\u53ef\u4ee5\u88ab\u53eb\u505a",(0,o.kt)("strong",{parentName:"p"},"\u865a\u62dfDOM")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const element = {\n    $$typeof: Symbol(react.element),\n    key: null,\n    props: {class: "hello", children: "hello, world!"},\n    ref: null,\n    type: "h1",\n}\n\nconst component = {\n    $$typeof: Symbol(react.element),\n    key: null,\n    props: {},\n    ref: null,\n    // highlight-next-line\n    type: App(), // \u6e32\u67d3\u51fd\u6570\n}\n')),(0,o.kt)("h2",{id:"fiber-node"},"Fiber Node"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4ece\u4e0a\u8ff0\u4ee3\u7801\u4e2d\u6211\u4eec\u80fd\u4e86\u89e3\u5230\uff0c\u865a\u62dfDOM\u672c\u8eab\u4e0d\u5b58\u5728\u6307\u5411\u5176\u4ed6\u865a\u62dfDOM\u7684\u6307\u9488\uff0c\u5b9e\u9645\u4e0a\u9664\u4e86\u6211\u4eec\u6700\u521d\u4f20\u7ed9",(0,o.kt)("inlineCode",{parentName:"p"},"ReactDOM.render"),"\u7684\u865a\u62dfDOM\uff0c\u5927\u591a\u6570\u865a\u62dfDOM\u90fd\u662f\u5728\u6e32\u67d3\u51fd\u6570",(0,o.kt)("strong",{parentName:"p"},"\u8fd0\u884c\u65f6"),"\u52a8\u6001\u751f\u6210\u7684\uff0c\u901a\u8fc7\u5728\u8fd0\u884c\u65f6\u9012\u5f52\u8c03\u7528\u6e32\u67d3\u51fd\u6570\u6211\u4eec\u80fd\u591f\u6784\u5efa\u51fa\u4e00\u9897\u771f\u6b63\u7684\u6811\u3002"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function App() {\n  return <Test />;\n}\n\nfunction Test() {\n  return <div>test</div>;\n}\n\nReactDOM.render(<App />, document.getElementById('root'));\n")),(0,o.kt)("p",null,"\u5bf9\u4e8e\u4e0a\u65b9\u7684\u4ee3\u7801\uff0c\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"ReactDOM.render"),"\u6211\u4eec\u80fd\u591f\u9012\u5f52\u8c03\u7528\u6e32\u67d3\u51fd\u6570\uff0c\u5e76\u4e14\u5bf9\u4e8e\u6bcf\u4e00\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\uff08\u6216\u8005\u8bf4\u865a\u62dfDOM\uff09\u6211\u4eec\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"Fiber Node"),"\uff0c\u56e0\u4e3a\u662f\u8fd0\u884c\u65f6\u521b\u5efa\u6240\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"Fiber Node"),"\u80fd\u591f\u77e5\u9053\u5176\u6240\u5173\u8054\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"parent"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"child"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"sibling"),"\uff09",(0,o.kt)("inlineCode",{parentName:"p"},"Fiber Node"),"\n\u662f\u8c01\u3002"),(0,o.kt)("p",null,"\u503c\u5f97\u4e00\u63d0\u7684\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"Hook"),"\u6240\u4f7f\u7528\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"memorizedState"),"\u5c31\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"Fiber Node"),"\u7684\u4e00\u4e2a\u5c5e\u6027\u3002"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4f2a\u4ee3\u7801\uff0c\u4e3b\u8981\u7528\u6765\u8868\u8fbe",(0,o.kt)("inlineCode",{parentName:"p"},"FiberNode"),"\u4e4b\u95f4\u7684\u8fde\u63a5\u5173\u7cfb"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"{\n    type: App(),\n    fiberNode: { // fiberNode1\n        child: fiberNode2,\n        return: null, // parent\n        memoizedState: {},\n        ...rest,\n    } \n}\n\n{\n    type: Test(),\n    fiberNode: { //  fiberNode2\n        child: fiberNode3,\n        return: fiberNode1\n    }\n}\n\n{\n    type: 'div',\n    fiberNode: { //  fiberNode3\n        child: null,\n        return: fiberNode2,\n    }\n}\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u603b\u7ed3")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"ReactDOM.render"),"\u4ee5\u6211\u4eec\u4f20\u5165\u7684\u865a\u62dfDOM\u4e3a\u5165\u53e3\uff0c\u9012\u5f52\u8c03\u7528\u6e32\u67d3\u51fd\u6570\u751f\u6210\u865a\u62dfDOM\uff0c\u5e76\u4e14\u6bcf\u4e2a\u865a\u62dfDOM\u90fd\u6709\u5bf9\u5e94\u7684\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"Fiber Node"),"\uff0c\u8fd9\u4e9b",(0,o.kt)("inlineCode",{parentName:"p"},"Fiber Node"),"\u901a\u8fc7\u5730\u5740\u5f62\u6210\u4e86\u4e00\u9897\u5b8c\u6574\u7684\u6811\u3002"))))}u.isMDXComponent=!0}}]);