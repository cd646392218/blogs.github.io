"use strict";(self.webpackChunkakara=self.webpackChunkakara||[]).push([[4380],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,k=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(k,c(c({ref:t},s),{},{components:n})):a.createElement(k,c({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1930:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),c=["components"],p={sidebarDepth:4},i=void 0,l={unversionedId:"react/types",id:"react/types",title:"types",description:"\u53c2\u8003https://react-typescript-cheatsheet.netlify.app/",source:"@site/docs/react/types.md",sourceDirName:"react",slug:"/react/types",permalink:"/docs/react/types",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/types.md",tags:[],version:"current",frontMatter:{sidebarDepth:4},sidebar:"tutorialSidebar",previous:{title:"\u7b2c\u4e09\u65b9\u5e93",permalink:"/docs/react/\u7b2c\u4e09\u65b9\u5e93"},next:{title:"\u524d\u7aef\u5de5\u7a0b\u5316",permalink:"/docs/infra/\u524d\u7aef\u5de5\u7a0b\u5316"}},s={},d=[{value:"\u5e38\u7528\u7c7b\u578b",id:"\u5e38\u7528\u7c7b\u578b",level:2},{value:"<code>React.ReactElement</code> \uff5c <code>JSX.Element</code>",id:"reactreactelement--jsxelement",level:3},{value:"<code>React.ReactNode</code>",id:"reactreactnode",level:3},{value:"<code>React.ComponentProps</code>",id:"reactcomponentprops",level:3},{value:"<code>React.CSSProperties</code>",id:"reactcssproperties",level:3},{value:"Form and Event",id:"form-and-event",level:3},{value:"\u51fd\u6570\u7ec4\u4ef6",id:"\u51fd\u6570\u7ec4\u4ef6",level:2},{value:"\u7c7b\u7ec4\u4ef6",id:"\u7c7b\u7ec4\u4ef6",level:2},{value:"Ref",id:"ref",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"class\u7ec4\u4ef6\u548c\u51fd\u6570\u7ec4\u4ef6\u7684\u8fd4\u56de\u503c\u7c7b\u578b\u4e0d\u540c",id:"class\u7ec4\u4ef6\u548c\u51fd\u6570\u7ec4\u4ef6\u7684\u8fd4\u56de\u503c\u7c7b\u578b\u4e0d\u540c",level:3},{value:"\u4e0d\u63a8\u8350\u4f7f\u7528React.FC",id:"\u4e0d\u63a8\u8350\u4f7f\u7528reactfc",level:3}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://react-typescript-cheatsheet.netlify.app/"},"https://react-typescript-cheatsheet.netlify.app/"))),(0,o.kt)("h2",{id:"\u5e38\u7528\u7c7b\u578b"},"\u5e38\u7528\u7c7b\u578b"),(0,o.kt)("h3",{id:"reactreactelement--jsxelement"},(0,o.kt)("inlineCode",{parentName:"h3"},"React.ReactElement")," \uff5c ",(0,o.kt)("inlineCode",{parentName:"h3"},"JSX.Element")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type Key = string | number\ninterface ReactElement<T, P> { // \u4f2a\u4ee3\u7801\n    type: T,\n    props: P,\n    Key: Key | null\n}\nnamespace JSX {\n    interface Element extends React.ReactElement<any, any> {}\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const App = (): JSX.Element => <div>test</div>;\n")),(0,o.kt)("h3",{id:"reactreactnode"},(0,o.kt)("inlineCode",{parentName:"h3"},"React.ReactNode")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;\n\ntype ReactText = string | number\ntype ReactChild = ReactElement | ReactText\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const App = ({ children }: { children?: React.ReactNode}) => {}\n")),(0,o.kt)("h3",{id:"reactcomponentprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"React.ComponentProps")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type ComponentProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> =\n    T extends JSXElementConstructor<infer P>\n        ? P\n        : T extends keyof JSX.IntrinsicElements\n            ? JSX.IntrinsicElements[T]\n            : {};\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const App = (props: { name: string } & React.ComponentProps<'button'>) => {\n    const { name, ...rest } = props\n    return <button {...rest} />\n}\n\ntype Test = React.ComponentProps<typeof App>\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u9700\u8981\u6ce8\u610f\u7684\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"JSX.IntrinsicElements"),"\u4f1a\u5305\u62ec\u4e00\u4e2a\u989d\u5916\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"ref"),"\u5b57\u6bb5\uff0c\u5e76\u4e14\u7c7b\u578b\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"LegacyRef")),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type LegacyRef<T> = string | Ref<T>;\ninterface ClassAttributes<T> extends Attributes {\n    ref?: LegacyRef<T> | undefined;\n}\n")),(0,o.kt)("p",{parentName:"div"},"\u5b9e\u9645\u60c5\u51b5\u4e0b\u6211\u4eec\u66f4\u591a\u4f1a\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentPropsWithoutRef"),"\u83b7\u53d6\u7ec4\u4ef6\u6216HTML\u5143\u7d20\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"props"),"\uff0c\u800c\u5bf9\u4e8e\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"forwardRef"),"\u521b\u5efa\u7684\u7ec4\u4ef6\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"ComponentPropsWithRef"),"\u83b7\u53d6\u5176",(0,o.kt)("inlineCode",{parentName:"p"},"props")))),(0,o.kt)("h3",{id:"reactcssproperties"},(0,o.kt)("inlineCode",{parentName:"h3"},"React.CSSProperties")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type props = {\n    style: React.CSSProperties;\n}\n")),(0,o.kt)("h3",{id:"form-and-event"},"Form and Event"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type props = {\n    onClick(event: React.MouseEvent<HTMLButtonElement>): void;\n    onClick2: React.MouseEventHandler<HTMLButtonElement>;\n};\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u4e0d\u5173\u5fc3\u4e8b\u4ef6\u7684\u5177\u4f53\u7c7b\u578b\uff0c\u6211\u4eec\u53ef\u4ee5\u6307\u5b9a\u5176\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"React.SyntheticEvent")))),(0,o.kt)("h2",{id:"\u51fd\u6570\u7ec4\u4ef6"},"\u51fd\u6570\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type myProps = {\n    count: number\n}\nconst App = ({ count }: myProps) => <div>{count}</div>\n")),(0,o.kt)("h2",{id:"\u7c7b\u7ec4\u4ef6"},"\u7c7b\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type myProps = {\n    count: number;\n}\n\ntype myState = {\n    name: string;\n}\nclass Parent extends React.Component<myProps, myState> {\n    state: myState = {\n        name: 'akara'\n    }\n    render() {\n        const { name } = this.state \n        return <div>{name}</div>\n    }\n}\n\n")),(0,o.kt)("h2",{id:"ref"},"Ref"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export default class App extends React.Component<appProps, appState> {\n    myRef = React.createRef<HTMLButtonElement>()\n    render() {\n        return (\n            <>\n                <FancyButton ref={this.myRef} style={{color: 'red'}}>\n                    akara\n                </FancyButton>     \n                <button onClick={() => console.log(this.myRef.current)}>\u70b9\u6211</button>           \n            </>\n        )\n    }\n}\n\ntype myProps = {\n    style?: React.CSSProperties;\n    children: React.ReactNode;\n} \n\nconst FancyButton = React.forwardRef<HTMLButtonElement, myProps>((props, ref) => {\n    const {\n        style,\n        children,\n    } = props\n    return <button style={style} ref={ref}>{children}</button>\n})\n")),(0,o.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,o.kt)("h3",{id:"class\u7ec4\u4ef6\u548c\u51fd\u6570\u7ec4\u4ef6\u7684\u8fd4\u56de\u503c\u7c7b\u578b\u4e0d\u540c"},"class\u7ec4\u4ef6\u548c\u51fd\u6570\u7ec4\u4ef6\u7684\u8fd4\u56de\u503c\u7c7b\u578b\u4e0d\u540c"),(0,o.kt)("p",null,"\u56e0\u4e3a\u5386\u53f2\u9057\u7559\u539f\u56e0\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"class"),"\u7ec4\u4ef6\u8fd4\u56de\u503c\u7c7b\u578b\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"React.ReactNode"),"\uff1b\u800c\u51fd\u6570\u7ec4\u4ef6\u7684\u8fd4\u56de\u503c\u7c7b\u578b\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"JSX.Element | null"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"class A extends React.Component {\n    render() {\n        return 'aka' // React.ReactNode\n    }\n}\n\nfunction B() {\n    return 'aka' // \u62a5\u9519\n}\n")),(0,o.kt)("h3",{id:"\u4e0d\u63a8\u8350\u4f7f\u7528reactfc"},"\u4e0d\u63a8\u8350\u4f7f\u7528React.FC"),(0,o.kt)("p",null,"\u4eca\u5929\u7684\u666e\u904d\u5171\u8bc6\u662f\u4e0d\u8981\u53bb\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"React.FC"),"\u3002"),(0,o.kt)("p",null,"\u987a\u5e26\u4e00\u63d0\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"React.FC"),"\u548c\u666e\u901a\u7684\u51fd\u6570\u7ec4\u4ef6\u8fd8\u662f\u6709\u4e9b\u533a\u522b\u7684\uff0c\u6bd4\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"React.FC"),"\u63d0\u4f9b\u4e86",(0,o.kt)("strong",{parentName:"p"},"\u9690\u5f0f\u7684",(0,o.kt)("inlineCode",{parentName:"strong"},"children"),"\u7c7b\u578b\u5b9a\u4e49"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const A = ({\n    title,\n    children,\n}: {\n    title: string;\n    children: React.ReactNode;\n}) => {\n    return <div>{title}{children}</div>\n}\n\nconst B: React.FC<{\n    title: string;\n    // \u9690\u5f0f\u7684\u5b9a\u4e49\u4e86children\n}> = ({\n    title,\n    children,\n}) => {\n    return <div>{title}{children}</div>\n}\n")))}u.isMDXComponent=!0}}]);