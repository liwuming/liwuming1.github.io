"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2503],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=l,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const i={},o="\u6587\u672c\u4e09\u5251\u5ba2",a={unversionedId:"linux/rabbitMQ/\u65b0\u6536\u83b7",id:"linux/rabbitMQ/\u65b0\u6536\u83b7",title:"\u6587\u672c\u4e09\u5251\u5ba2",description:"\u5173\u4e8emysql\u7684\u4f7f\u7528\u89c4\u8303",source:"@site/docs\\linux\\13.rabbitMQ\\\u65b0\u6536\u83b7.md",sourceDirName:"linux/13.rabbitMQ",slug:"/linux/rabbitMQ/\u65b0\u6536\u83b7",permalink:"/docs/linux/rabbitMQ/\u65b0\u6536\u83b7",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/linux/13.rabbitMQ/\u65b0\u6536\u83b7.md",tags:[],version:"current",frontMatter:{},sidebar:"linux1",previous:{title:"swoole",permalink:"/docs/linux/rabbitMQ/swoole"},next:{title:"04-21",permalink:"/docs/linux/04-21"}},u={},c=[{value:"mysql\u7684\u4e8b\u52a1\u5b89\u5168",id:"mysql\u7684\u4e8b\u52a1\u5b89\u5168",level:2},{value:"mysql\u7684innodb\u5b58\u50a8\u5f15\u64ce",id:"mysql\u7684innodb\u5b58\u50a8\u5f15\u64ce",level:2},{value:"mysql\u7684\u7d22\u5f15",id:"mysql\u7684\u7d22\u5f15",level:2}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6587\u672c\u4e09\u5251\u5ba2"},"\u6587\u672c\u4e09\u5251\u5ba2"),(0,l.kt)("h1",{id:"mysql-dba"},"mysql dba"),(0,l.kt)("p",null,"\u5173\u4e8emysql\u7684\u4f7f\u7528\u89c4\u8303"),(0,l.kt)("p",null,"\u5168\u5c40\u7ea7\u522b"),(0,l.kt)("p",null,"\u6570\u636e\u8868\u7ea7\u522b\n\u5b57\u6bb5\u7c7b\u578b\u5c3d\u53ef\u80fd\u7684\u7b80\u5355\uff0c\u5728\u6ee1\u8db3\u4e1a\u52a1\u7684\u60c5\u51b5\u4e0b\u5b57\u6bb5\u5e94\u5c3d\u53ef\u80fd\u7684\u5c0f\n\u9996\u5148\u8003\u8651\u6570\u503c\u7c7b\u578b\uff0c\u5176\u6b21\u662f\u5b57\u7b26\u7c7b\u578b\n\u5efa\u8bae\u5b57\u6bb5\u8bbe\u7f6e\u4e3anot null"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u6570\u503c\u7c7b\u578b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u786e\u5b9a\u975e\u8d1f\u7684\u60c5\u51b5\u4e0b,\u5e94\u5c06\u5176\u8bbe\u7f6e\u4e3aunsigned,\u907f\u514d\u8bbe\u7f6e\u663e\u793a\u5bbd\u5ea6,\u5982int(4)"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528decimal\u7c7b\u578b\u4ee3\u66ffdouble\u548cfloat\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},"\u907f\u514d\u4f7f\u7528enum\u7c7b\u578b\uff0c\u5e94\u5c06\u5176\u7528tinyint\u7b49\u4ee3\u66ff")),(0,l.kt)("h2",{id:"mysql\u7684\u4e8b\u52a1\u5b89\u5168"},"mysql\u7684\u4e8b\u52a1\u5b89\u5168"),(0,l.kt)("h2",{id:"mysql\u7684innodb\u5b58\u50a8\u5f15\u64ce"},"mysql\u7684innodb\u5b58\u50a8\u5f15\u64ce"),(0,l.kt)("h2",{id:"mysql\u7684\u7d22\u5f15"},"mysql\u7684\u7d22\u5f15"),(0,l.kt)("p",null,"\u6570\u636e\u5e93\u5907\u4efd"),(0,l.kt)("p",null,"\u5b89\u5168\u95ee\u9898\n\u9884\u5904\u7406\n\u5f02\u5e38\u6355\u83b7"),(0,l.kt)("h1",{id:"redis"},"redis"))}p.isMDXComponent=!0}}]);