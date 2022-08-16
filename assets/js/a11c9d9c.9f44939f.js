"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8622],{3905:(e,t,r)=>{r.d(t,{Zo:()=>y,kt:()=>u});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},y=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,y=a(e,["components","mdxType","originalType","parentName"]),p=m(r),u=l,f=p["".concat(c,".").concat(u)]||p[u]||i[u]||o;return r?n.createElement(f,s(s({ref:t},y),{},{components:r})):n.createElement(f,s({ref:t},y))}));function u(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,s=new Array(o);s[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:l,s[1]=a;for(var m=2;m<o;m++)s[m]=r[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},548:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>i,frontMatter:()=>o,metadata:()=>a,toc:()=>m});var n=r(7462),l=(r(7294),r(3905));const o={},s=void 0,a={unversionedId:"mysql-dba/mysql\u7684\u5b89\u88c5/mysql\u7684\u914d\u7f6e\u6587\u4ef6",id:"mysql-dba/mysql\u7684\u5b89\u88c5/mysql\u7684\u914d\u7f6e\u6587\u4ef6",title:"mysql\u7684\u914d\u7f6e\u6587\u4ef6",description:"\u914d\u7f6e\u6587\u4ef6",source:"@site/docs\\mysql-dba\\01.mysql\u7684\u5b89\u88c5\\02.mysql\u7684\u914d\u7f6e\u6587\u4ef6.md",sourceDirName:"mysql-dba/01.mysql\u7684\u5b89\u88c5",slug:"/mysql-dba/mysql\u7684\u5b89\u88c5/mysql\u7684\u914d\u7f6e\u6587\u4ef6",permalink:"/docs/mysql-dba/mysql\u7684\u5b89\u88c5/mysql\u7684\u914d\u7f6e\u6587\u4ef6",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mysql-dba/01.mysql\u7684\u5b89\u88c5/02.mysql\u7684\u914d\u7f6e\u6587\u4ef6.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"mysql-dba",previous:{title:"\u5173\u4e8emysql\u5206\u652f\u53ca\u7248\u672c\u7684\u9009\u62e9",permalink:"/docs/mysql-dba/mysql\u7684\u5b89\u88c5/mysql\u7684\u5b89\u88c5\u4e0e\u5347\u7ea7"},next:{title:"mysql\u67b6\u6784",permalink:"/docs/mysql-dba/mysql\u7684\u5b89\u88c5/mysql\u67b6\u6784"}},c={},m=[],y={toc:m};function i(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("p",null,"mysql\u7684\u914d\u7f6e\u6587\u4ef6\u6709\u5f88\u591a\uff0c\u53ef\u901a\u8fc7mysqld --help --verbose |grep mysql.cnf\u6765\u67e5\u770b"),(0,l.kt)("p",null,"mysql\u7684\u914d\u7f6e\u6587\u4ef6\u4e0d\u6b62\u4e00\u4e2a,\u591a\u4e2a\u914d\u7f6e\u6587\u4ef6\u7684\u8bfb\u53d6\u987a\u5e8f"),(0,l.kt)("p",null,"/etc/mysql/my.cnf /etc/my.cnf ~/.my.cnf"),(0,l.kt)("p",null,"\u5728mysql\u542f\u52a8\u65f6,\u4ece\u5de6\u5f80\u53f3\u4e00\u6b21\u8bfb\u53d6\u914d\u7f6e\u6587\u4ef6,\u82e5\u6709\u76f8\u540c\u7684\u914d\u7f6e\u9879,\u540e\u9762\u7684\u914d\u7f6e\u9879\u4f1a\u8986\u76d6\u524d\u9762\u7684\u914d\u7f6e\u9879"))}i.isMDXComponent=!0}}]);