"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[398],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),a=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=a(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=a(n),y=l,d=m["".concat(s,".").concat(y)]||m[y]||p[y]||i;return n?r.createElement(d,u(u({ref:t},c),{},{components:n})):r.createElement(d,u({ref:t},c))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,u=new Array(i);u[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,u[1]=o;for(var a=2;a<i;a++)u[a]=n[a];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=n(7462),l=(n(7294),n(3905));const i={},u="systemd",o={unversionedId:"linux/linux\u57fa\u7840/\u8f6f\u4ef6\u7ba1\u7406/2",id:"linux/linux\u57fa\u7840/\u8f6f\u4ef6\u7ba1\u7406/2",title:"systemd",description:"unit",source:"@site/docs\\linux\\linux\u57fa\u7840\\\u8f6f\u4ef6\u7ba1\u7406\\2.md",sourceDirName:"linux/linux\u57fa\u7840/\u8f6f\u4ef6\u7ba1\u7406",slug:"/linux/linux\u57fa\u7840/\u8f6f\u4ef6\u7ba1\u7406/2",permalink:"/docs/linux/linux\u57fa\u7840/\u8f6f\u4ef6\u7ba1\u7406/2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/linux/linux\u57fa\u7840/\u8f6f\u4ef6\u7ba1\u7406/2.md",tags:[],version:"current",frontMatter:{},sidebar:"linux1",previous:{title:"\u8ba1\u5212\u4efb\u52a1",permalink:"/docs/linux/linux\u57fa\u7840/\u8f6f\u4ef6\u7ba1\u7406/1"},next:{title:"selinux",permalink:"/docs/linux/linux\u57fa\u7840/\u8f6f\u4ef6\u7ba1\u7406/selinux"}},s={},a=[{value:"unit",id:"unit",level:2},{value:"systemctl\u547d\u4ee4",id:"systemctl\u547d\u4ee4",level:2},{value:"\u5176\u4ed6\u5e38\u7528\u547d\u4ee4",id:"\u5176\u4ed6\u5e38\u7528\u547d\u4ee4",level:2}],c={toc:a};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"systemd"},"systemd"),(0,l.kt)("h2",{id:"unit"},"unit"),(0,l.kt)("h2",{id:"systemctl\u547d\u4ee4"},"systemctl\u547d\u4ee4"),(0,l.kt)("p",null,"unit\u914d\u7f6e"),(0,l.kt)("h2",{id:"\u5176\u4ed6\u5e38\u7528\u547d\u4ee4"},"\u5176\u4ed6\u5e38\u7528\u547d\u4ee4"),(0,l.kt)("p",null,"\u5173\u673a\nsystemctl halt\nsystemctl poweroff"),(0,l.kt)("p",null,"\u91cd\u542f\nsystemctl reboot\n\u6302\u8d77\nsystemctl suspend"),(0,l.kt)("p",null,"server unit file\n\u901a\u5e38\u6709\u4e09\u90e8\u5206\u7ec4\u6210unit,unit type\uff0cinstall"),(0,l.kt)("p",null,"unit\uff1a\u5b9a\u4e49\u4e0eunit\u7c7b\u578b\u65e0\u5173\u7684\u901a\u7528\u9009\u9879\uff0c\ninstall\uff1asystemctl enable/disable \u9009\u9879"),(0,l.kt)("p",null,"[service]","\ntype\nsimple:\u4e3b\u8fdb\u7a0b\uff0c\u7528\u4e8e\u7ba1\u7406\u64cd\u4f5c\nforking\uff1a\nonehost\uff1a\ndbus\uff1a\nnotify\uff1a\nenviromentfile\uff1a\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("p",null,"[install]","\nalias\uff1a\u522b\u540d\nrequiredby\uff1a\u88ab\u90a3\u4e9bunit\u6240\u4f9d\u8d56\nwantedby\uff1a\u88ab\u90a3\u4e9bunit\u6240\u4f9d\u8d56"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u65b0\u521b\u5efa/\u7f16\u8f91unit\u6587\u4ef6\nsystemctl daemon-reload"),(0,l.kt)("p",null,"\u4f7f\u7528systemctl\u7ba1\u7406mysqld\u670d\u52a1"))}p.isMDXComponent=!0}}]);