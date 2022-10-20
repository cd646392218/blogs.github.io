"use strict";(self.webpackChunkakara=self.webpackChunkakara||[]).push([[6650],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(t),m=a,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(k,s(s({ref:n},p),{},{components:t})):r.createElement(k,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7988:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],c={sidebarDepth:4},l=void 0,i={unversionedId:"koa",id:"koa",title:"koa",description:"Koa",source:"@site/docs/koa.md",sourceDirName:".",slug:"/koa",permalink:"/docs/koa",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/koa.md",tags:[],version:"current",frontMatter:{sidebarDepth:4}},p={},u=[{value:"Koa",id:"koa",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:5},{value:"\u6838\u5fc3\u5b9e\u73b0",id:"\u6838\u5fc3\u5b9e\u73b0",level:5},{value:"koa-compose",id:"koa-compose",level:5},{value:"koa-router",id:"koa-router",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528-1",level:5},{value:"\u7b80\u6613\u5b9e\u73b0",id:"\u7b80\u6613\u5b9e\u73b0",level:5},{value:"koa-static",id:"koa-static",level:3},{value:"koa-body",id:"koa-body",level:3},{value:"koa-logger",id:"koa-logger",level:3},{value:"koa-views",id:"koa-views",level:3}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"koa"},"Koa"),(0,o.kt)("h5",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Koa = require('koa');\nconst app = new Koa();\n\napp.use(async (ctx, next) => {\n  const start = Date.now();\n  await next();\n  const ms = Date.now() - start;\n  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);\n});\n\n\n// response\napp.use(ctx => {\n  ctx.status = 200\n  ctx.set('Content-type', 'text/plain; charset=utf-8')\n  ctx.body = 'Hello Koa'\n});\n\napp.listen(3000);\n\n// \u4e00\u4e9b\u5176\u4ed6\u7684\u65b9\u6cd5\nctx.redirect('/home')\n// \u76f8\u5f53\u4e8e\n// res.status = 302\n// res.setHeader('Location', '/home')\n")),(0,o.kt)("h5",{id:"\u6838\u5fc3\u5b9e\u73b0"},"\u6838\u5fc3\u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Emitter = require('events')\n// \u4e09\u4e2a\u5bf9\u8c61\uff0c\u63d0\u524d\u5b9a\u4e49\u597d\u539f\u578b\u7684\u65b9\u6cd5\nconst context = require('./context')\nconst request = require('./request')\nconst response = require('./response')\nclass Koa extends Emitter {\n    constructor() {\n        super()\n        this.middleware = []\n        this.context = Object.create(context)\n        this.request = Object.create(request)\n        this.response = Object.create(response)\n    }\n\n    callback() {\n        const fn = compose(this.middleware)\n        return (req, res) => {\n            const ctx = this.createContext(req, res)\n            return this.handlerRequest(ctx, fn)\n        }\n    }\n\n    use(fn) {\n        if (typeof fn !== 'function') throw new TypeError('middleware must be a function!')\n        this.middleware.push(fn)\n        return this\n    }\n\n    listen(...args) {\n        const server = http.createServer(this.callback())\n        return server.listen(...args)\n    }\n\n    createContext(req, res) {\n        // \u5176\u5b9e\u5c31\u662f\u6839\u636e\u5df2\u6709\u7684req\u548cres\u521b\u5efa\u4e0a\u4e0b\u6587context\n        const context = Object.create(this.context);\n        const request = Object.create(this.request);\n        const response = Object.create(this.response);\n        context.request = request\n        context.response = response\n        context.app = request.app = response.app = this;\n        // \u91cd\u70b9\uff0c\u6302\u8f7dreq\u548cres\n        context.req = request.req = response.req = req;\n        context.res = request.res = response.res = res;\n        // \u4e92\u76f8\u5f15\u7528\n        request.ctx = response.ctx = context;\n        request.response = response;\n        response.request = request;\n        return context\n    }\n\n    handlerRequest(ctx, fn) {\n        const res = ctx.res\n        res.statusCode = 404\n        fn(ctx).catch(reason => {\n            console.log(reason)\n        })\n    }\n}\n")),(0,o.kt)("p",null,"Koa\u7684\u5b9e\u4f8bapp\u6709\u4e09\u4e2a\u516c\u5171\u7684API"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"use"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"app.use((ctx, next) => {\n\n})\n")),(0,o.kt)("p",{parentName:"li"},"use\u65b9\u6cd5\u7528\u4e8e\u5c06\u53c2\u6570\u4e2d\u95f4\u4ef6\u653e\u8fdbapp\u7684middleware\u6570\u7ec4\u91cc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"listen"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"app.listen(3000)\n")),(0,o.kt)("p",{parentName:"li"},"\u7b49\u4ef7\u4e8e"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"}," const server = http.createServer(this.callback())\n server.listen(3000)\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"callback"),(0,o.kt)("p",{parentName:"li"},"\u8be5\u51fd\u6570\u5185\u90e8\u5b9e\u73b0\u4e09\u4e2a\u529f\u80fd"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528koa-compose\u51fd\u6570\u5c06middleware\u4e2d\u95f4\u4ef6\u6570\u7ec4\u8f6c\u5316\u4e3a\u4e2d\u95f4\u4ef6fn")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8c03\u7528app.createContext\u51fd\u6570\u3002\u521b\u5efacontext\uff0crequest\uff0cresponse\u5bf9\u8c61\uff1b\u5c06request\u548cresponse\u6302\u8f7d\u5728context\u4e0a\uff1b\u628areq\u548cres\u6302\u8f7d\u5728\u4e09\u4e2a\u5bf9\u8c61\u4e0a\u3002"),(0,o.kt)("p",{parentName:"li"},"\u4f8b\u5982\uff1arequest\u7684\u539f\u578b\u5bf9\u8c61\u4e0a\u90e8\u5206\u4ee3\u7801\u5982\u4e0b"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"get header() {\n    return this.req.headers;\n},\nset header(val) {\n    this.req.headers = val;\n},\n")),(0,o.kt)("p",{parentName:"li"},"\u6211\u4eec\u73b0\u5728\u5c31\u53ef\u4ee5\u6839\u636e",(0,o.kt)("inlineCode",{parentName:"p"},"ctx.request.header"),"\u83b7\u53d6req\u7684headers\u4e86")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6267\u884chandleRequest\u51fd\u6570\uff0c\u672c\u8d28\u662f\u628a\u7ec4\u88c5\u597d\u7684context\u4f20\u5165\u4e2d\u95f4\u4ef6fn\u6267\u884c"))))),(0,o.kt)("p",null,"Koa\u6e90\u7801\u4e2d\u4f7f\u7528\u5230\u4e86Koa-compose\uff0c \u7528\u4e8e\u5c06\u591a\u4e2a\u4e2d\u95f4\u4ef6\u51fd\u6570\u7ec4\u5408\u4e3a\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u51fd\u6570"),(0,o.kt)("h5",{id:"koa-compose"},"koa-compose"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const compose = (middleware) => {\n    if (!Array.isArray(middleware)) throw new TypeError(\"Middleware stack must be an array!\")\n    for (const fn of middleware) {\n        if (typeof fn !== 'function') throw new TypeError(\"Middleware must be composed of functions!\")\n    }\n    let length = middleware.length\n    return function (ctx, next) {\n        let index = -1\n        return dispatch(0)\n        function dispatch(i) {\n            // \u4e00\u4e2a\u4e2d\u95f4\u4ef6\u5185\u90e8\u591a\u6b21\u8c03\u7528next\u65f6\uff0cindex\u5927\u4e8e\u7b49\u4e8ei\n            if ( index >= i) {\n                return Promise.reject(new Error('next() called multiple times'))\n            }\n            let fn\n            index = i\n            if (i < length) {\n                fn = middleware[i]\n            }\n            else if (i === length) {\n                // \u91cd\u70b9\uff0c \u5916\u90e8compose\u7684next\u4f20\u8fdb\u5185\u90e8compose\n                fn = next\n            }\n            // \u6700\u540e\u4e00\u4e2a\u4e2d\u95f4\u4ef6\u8c03\u7528next\u65f6\uff0c\u4ec0\u4e48\u4e5f\u4e0d\u505a\n            if (!fn) return\n            // \u5b98\u65b9\u6e90\u7801\u4f7f\u7528Promise\u662f\u4e3a\u4e86\u4f7f\u7528async\u4e2d\u95f4\u4ef6\uff0c\u4e0d\u8fc7\u8fd9\u91cc\u6ca1\u6709\u600e\u4e48\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd\uff0c\u5c31\u4e00\u4e2a\u6837\u5b50\n            return Promise.resolve(fn(ctx, dispatch.bind(null, (i + 1))))\n        }\n    }\n}\n")),(0,o.kt)("h3",{id:"koa-router"},"koa-router"),(0,o.kt)("h5",{id:"\u4f7f\u7528-1"},"\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Router = require('koa-router')\nconst router = new Router()\nrouter\n  .get('/', (ctx, next) => {\n    ctx.body = 'Hello World!';\n  })\n  .post('/users', (ctx, next) => {\n    // ...\n  })\n  .put('/users/:id', (ctx, next) => {\n    // ...\n  })\n  .del('/users/:id', (ctx, next) => {\n    // ...\n  })\n  .all('/users/:id', (ctx, next) => {\n    // ...\n  });\napp.use(router.routes())\napp.use(router.allowedMethods()) // \u6b64\u5904\u4f8b\u5b50\u6ca1\u6709\u5b9e\u73b0\u8be5\u65b9\u6cd5\n")),(0,o.kt)("h5",{id:"\u7b80\u6613\u5b9e\u73b0"},"\u7b80\u6613\u5b9e\u73b0"),(0,o.kt)("p",null,"\u7b80\u6613\u5b9e\u73b0\uff0c\u53ea\u5b9e\u73b0\u4e00\u4e2aget\u65b9\u6cd5\uff0c\u5b9e\u9645\u4e0a\u8981\u66f4\u590d\u6742\u7684\u591a\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class Router {\n    constructor() {\n        this.stack = []\n    }\n\n    get(url, fn) {\n        function middleware(ctx, next) {\n            if (ctx.req.method.toLowerCase() === 'get' && ctx.req.url === url) {\n                console.log('\u8def\u7531\u5339\u914d\u6210\u529f');\n                fn(ctx, next)\n            }\n            else {\n                console.log('\u8def\u7531\u5339\u914d\u5931\u8d25');\n                next()\n            }\n        }\n        this.stack.push(middleware)\n        return this\n    }\n\n    routes() {\n        return (ctx, next) => {\n            let fn = compose(this.stack)\n            // \u5fc5\u987b\u52a0\u4e0anext\u53c2\u6570\n            // koa\u672c\u8eab\u6709\u4e00\u4e2acompose\uff0c \u8fd9\u91cc\u4e5f\u6709\u4e00\u4e2a\uff0c\u6240\u4ee5\u8981\u628a\u5916\u90e8\u7684next\u4f20\u7ed9\u5185\u90e8\n            fn(ctx, next)\n        }\n    }\n}\n")),(0,o.kt)("h3",{id:"koa-static"},"koa-static"),(0,o.kt)("p",null,"\u7528\u4e8e\u5904\u7406\u9759\u6001\u8d44\u6e90\u7684koa\u4e2d\u95f4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const static = require('koa-static')\napp.use(static('public'))\n")),(0,o.kt)("h3",{id:"koa-body"},"koa-body"),(0,o.kt)("p",null,"\u5904\u7406\u8bf7\u6c42\u7684\u4e2d\u95f4\u4ef6\uff0c\u53ef\u4ee5\u8f7b\u677e\u83b7\u5f97\u8bf7\u6c42\u7684\u5185\u5bb9"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const body = require('koa-body')\napp.use(body({multipart: true}))\napp.use((ctx) => {\n    console.log(ctx.request.body)\n})\n")),(0,o.kt)("h3",{id:"koa-logger"},"koa-logger"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const logger = require('koa-logger')\napp.use(logger())\n")),(0,o.kt)("h3",{id:"koa-views"},"koa-views"),(0,o.kt)("p",null,"\u901a\u5e38\u7528\u4e8e\u642d\u914d\u6a21\u677f\u5f15\u64ce\u8fdb\u884c\u670d\u52a1\u7aef\u6e32\u67d3\uff0c\u4e0d\u8fc7\u4f3c\u4e4e\u73b0\u5728\u4e0d\u600e\u4e48\u7528\u4e86\u3002"),(0,o.kt)("p",null,"\u53e6\u5916\u4f7f\u7528\u7684\u573a\u5408\u8981\u989d\u5916\u53bb\u5b89\u88c5\u5bf9\u5e94\u7684\u6a21\u677f\u5f15\u64ce\uff0c\u6bd4\u5982\u60f3\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"ejs"),"\u8bb0\u5f97\u5148",(0,o.kt)("inlineCode",{parentName:"p"},"npm i ejs")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const views = require('koa-views')\nconst render = views('./views', { extension: 'ejs'})\n\napp.use(render)\napp.use(async ctx => {\n    await ctx.render('template', {\n        content: 'hello'\n    }) \n})\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ejs"},"\x3c!-- template.ejs --\x3e\n<!DOCTYPE html>\n<html>\n<head></head>\n<body>\n    <div><%= content %></div>    \n</body>\n</html>\n")))}m.isMDXComponent=!0}}]);