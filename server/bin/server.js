!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=r(2),m=n(o),u=r(3),s=n(u),i=(0,m.default)();i.set("view engine","ejs"),i.use(m.default.static("public")),i.use("/*",s.default),i.listen(3e3,function(){console.log("Hello World listening on port 3000!")})},function(e,t){e.exports=require("express")},function(e,t){throw new Error("Module build failed: SyntaxError: C:/Users/z1148/Desktop/10. react-redux with expressjs/server/routes/ssr.js: Unexpected token (48:4)\n\n[0m [90m 46 | [39m\n [90m 47 | [39m  [36mconst[39m html [33m=[39m [33mReactDOMServer[39m[33m.[39mrenderToString(\n[31m[1m>[22m[39m[90m 48 | [39m    [33m<[39m[33mProvider[39m store[33m=[39m{store}[33m>[39m\n [90m    | [39m    [31m[1m^[22m[39m\n [90m 49 | [39m      [33m<[39m[33mStaticRouter[39m\n [90m 50 | [39m        location[33m=[39m{req[33m.[39moriginalUrl}\n [90m 51 | [39m        context[33m=[39m{context}[0m\n")}]);
//# sourceMappingURL=server.js.map