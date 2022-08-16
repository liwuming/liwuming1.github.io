"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8254],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9177:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const l={},a=void 0,i={unversionedId:"mysql-dba/mysql\u7684\u4f18\u5316/\u4e8b\u52a1\u7684\u5b9e\u73b0",id:"mysql-dba/mysql\u7684\u4f18\u5316/\u4e8b\u52a1\u7684\u5b9e\u73b0",title:"\u4e8b\u52a1\u7684\u5b9e\u73b0",description:"\u4e8b\u52a1\u7684\u5b9e\u73b0",source:"@site/docs\\mysql-dba\\mysql\u7684\u4f18\u5316\\\u4e8b\u52a1\u7684\u5b9e\u73b0.md",sourceDirName:"mysql-dba/mysql\u7684\u4f18\u5316",slug:"/mysql-dba/mysql\u7684\u4f18\u5316/\u4e8b\u52a1\u7684\u5b9e\u73b0",permalink:"/docs/mysql-dba/mysql\u7684\u4f18\u5316/\u4e8b\u52a1\u7684\u5b9e\u73b0",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mysql-dba/mysql\u7684\u4f18\u5316/\u4e8b\u52a1\u7684\u5b9e\u73b0.md",tags:[],version:"current",frontMatter:{},sidebar:"mysql-dba",previous:{title:"mysql\u590d\u5236",permalink:"/docs/mysql-dba/mysql\u7684\u4f18\u5316/mysql\u590d\u5236"},next:{title:"\u5173\u4e8eMVCC",permalink:"/docs/mysql-dba/mysql\u7684\u4f18\u5316/\u5173\u4e8eMVCC"}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4e8b\u52a1\u7684\u5b9e\u73b0"),(0,o.kt)("p",null,"\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u662f\u6570\u636e\u5e93\u5904\u7406\u7684\u57fa\u7840\uff1b"),(0,o.kt)("p",null,"\u9501\u673a\u5236\uff0c\nredo+undo"),(0,o.kt)("h1",{id:"redo-log"},"redo log"),(0,o.kt)("p",null,"\u5148\u5c06redo buffer pool\u4e2d\u7684\u65e5\u5fd7\u5237\u65b0\u5230redo log\uff0c\u7136\u540e\u8c03\u7528\uff0c\u5c06\u6570\u636e\u9875\u5237\u65b0\u5230\u78c1\u76d8"),(0,o.kt)("p",null,"\u5f53\u810f\u9875\u5237\u65b0\u5230\u78c1\u76d8\u4e4b\u540e\uff0credo log\u4efb\u52a1\u5c31\u5b8c\u6210\u4e86\uff0c\u5360\u7528\u7684\u7a7a\u95f4\u5c31\u53ef\u4ee5\u91cd\u7528\u4e86"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u7684\u53cc\u4e00\u7b56\u7565\uff0c\nsync_binlog=1\ninnodb_flush_log_at_trx_commit=1"),(0,o.kt)("p",null,"innodb_flush_log_at_trx_commit\u63a7\u5236\u4f55\u65f6\u5c06data buffer pool\u4e2d\u7684\u6570\u636e\u5237\u65b0\u5230\u78c1\u76d8\uff0c\n0\uff0c\n1\uff0c\u6bcf\u6b21\u4e8b\u52a1\u63d0\u4ea4\u65f6\uff0c\u5c06data buffer pool\u4e2d\u7684\u6570\u636e\u5237\u65b0\u5230\u78c1\u76d8\n2\uff0c\u6bcf\u6b21\u4e8b\u52a1\u63d0\u4ea4\u65f6\uff0c\u5c06data buffer pool\u4e2d\u7684\u6570\u636e\u5237\u65b0os buffer\uff0c\u7136\u540e\u5237\u65b0\u5230\u78c1\u76d8"),(0,o.kt)("p",null,"\u7269\u7406\u6587\u4ef6ib_logfile1 && ib_logfile2"),(0,o.kt)("h1",{id:"undo-log"},"undo log"),(0,o.kt)("p",null,"\u7528\u4e8e\u56de\u6eda\uff0c\u540c\u65f6\u53ef\u4ee5\u63d0\u4f9b\u591a\u7248\u672c\u5e76\u53d1\u63a7\u5236\u4e0b\u7684\u8bfb\u53d6mvcc\uff0c\u5373\u65e0\u9501\u5b9a\u8bfb"),(0,o.kt)("p",null,"binlog\u7684\u8fc7\u671f\u65f6\u95f4"),(0,o.kt)("p",null,"expire_logs_days"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/blog/what-are-the-differences-and-functions-of-the-redo-log-undo-log-and-binlog-in-mysql_598035"},"https://www.alibabacloud.com/blog/what-are-the-differences-and-functions-of-the-redo-log-undo-log-and-binlog-in-mysql_598035")))}p.isMDXComponent=!0}}]);