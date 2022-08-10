"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1483],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=l.createContext({}),p=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=p(e.components);return l.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||a;return t?l.createElement(k,u(u({ref:n},s),{},{components:t})):l.createElement(k,u({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,u=new Array(a);u[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var p=2;p<a;p++)u[p]=t[p];return l.createElement.apply(null,u)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3281:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>u,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=t(7462),r=(t(7294),t(3905));const a={},u=void 0,i={unversionedId:"linux/anaible/\u7528\u6237\u7ba1\u7406",id:"linux/anaible/\u7528\u6237\u7ba1\u7406",title:"\u7528\u6237\u7ba1\u7406",description:"chap13 \u6587\u4ef6,\u6743\u9650\u53ca\u7528\u6237",source:"@site/docs\\linux\\03.anaible\\\u7528\u6237\u7ba1\u7406.md",sourceDirName:"linux/03.anaible",slug:"/linux/anaible/\u7528\u6237\u7ba1\u7406",permalink:"/docs/linux/anaible/\u7528\u6237\u7ba1\u7406",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/linux/03.anaible/\u7528\u6237\u7ba1\u7406.md",tags:[],version:"current",frontMatter:{},sidebar:"linux",previous:{title:"\u547d\u4ee4\u5217\u8868",permalink:"/docs/linux/anaible/\u547d\u4ee4\u5217\u8868"},next:{title:"linux_home",permalink:"/docs/linux/linux_home"}},o={},p=[],s={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,l.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"chap13 \u6587\u4ef6,\u6743\u9650\u53ca\u7528\u6237"),(0,r.kt)("p",null,"\u7528\u6237\u7ba1\u7406\n\u7528\u6237\u4fe1\u606f\u4fdd\u5b58\u5728/etc/passwd\u6587\u4ef6\u4e2d,\u4e00\u884c\u8868\u793a\u4e00\u4e2a\u7528\u6237\u7684,\u4e00\u4e2a"),(0,r.kt)("p",null,"\u7528:\u53f7\u5206\u5272,\u5171\u67097\u4e2a\u5b57\u6bb5,"),(0,r.kt)("p",null,"\u7528\u6237\u540d"),(0,r.kt)("p",null,"cat /etc/passwd"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u654f\u611f\u7684\u5bc6\u7801\u4fe1\u606f\u5219\u5355\u72ec\u5b58\u653e\u5728/etc/shadow\u6587\u4ef6\u4e2d"),(0,r.kt)("p",null,"]# cat /etc/passwd\nroot\u274c0:0:root:/root:/bin/bash\nbin\u274c1:1:bin:/bin:/sbin/nologin\ndaemon\u274c2:2:daemon:/sbin:/sbin/nologin\nliwuming\u274c1000:1000:liwuming:/home/liwuming:/bin/bash"),(0,r.kt)("p",null,"\u7528\u6237\u540d:\n\u5bc6\u7801:\ngid\nuid\n\u5bb6\u76ee\u5f55\n\u9ed8\u8ba4\u7684shell"),(0,r.kt)("p",null,"uid:\u7528\u6237id"),(0,r.kt)("p",null,"0:\u8d85\u7ea7\u7ba1\u7406\n1-999:\u7cfb\u7edf\u8d26\u53f7"),(0,r.kt)("p",null,"1000-60000:"),(0,r.kt)("p",null,"gid:\u7ec4id"),(0,r.kt)("p",null,"pid:\u8fdb\u7a0bid\ninode:"),(0,r.kt)("p",null,"/etc/group\u6587\u4ef6"),(0,r.kt)("p",null,"\u7ec4\u540d\n\u7fa4\u7ec4\u5bc6\u7801\ngid\n\u6b64\u7fa4\u7ec4\u652f\u6301\u7684\u8d26\u53f7\u540d\u79f0"),(0,r.kt)("h1",{id:"\u7ec4\u4fe1\u606f"},"\u7ec4\u4fe1\u606f"),(0,r.kt)("p",null,"\u7528\u6237\u7684\u7ec4\u4fe1\u606f\u4fdd\u5b58\u5728/etc/group\u6587\u4ef6\u4e2d"),(0,r.kt)("p",null,"id\nuseradd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"-u,uid,\u6307\u5b9a\u7528\u6237id"),(0,r.kt)("li",{parentName:"ul"},"-g,\u521d\u59cb\u7fa4\u7ec4"),(0,r.kt)("li",{parentName:"ul"},"-G,\u6b21\u8981\u7fa4\u7ec4"),(0,r.kt)("li",{parentName:"ul"},"-c,\u8bf4\u660e\u680f"),(0,r.kt)("li",{parentName:"ul"},"-d,\u5bb6\u76ee\u5f55\u7edd\u5bf9\u8def\u5f84"),(0,r.kt)("li",{parentName:"ul"},"-m/M,m\u5efa\u7acb\u5bb6\u76ee\u5f55,M\u4e0d\u5efa\u7acb\u5bb6\u76ee\u5f55,"),(0,r.kt)("li",{parentName:"ul"},"-r,\u5efa\u7acb\u4e00\u4e2a\u7cfb\u7edf\u8d26\u6237"),(0,r.kt)("li",{parentName:"ul"},"-s,\u6307\u5b9ashell\u7c7b\u578b")),(0,r.kt)("p",null,"useradd liwuming\n\u9ed8\u8ba4\u521b\u5efa\u975e\u7cfb\u7edf\u7528\u6237,\u56e0\u6b64\u4f1a\u521b\u5efa\u5bb6\u76ee\u5f55,\u5bb6\u76ee\u5f55\u7684\u6743\u9650\u4e3a700,\u6b64\u5904\u9700\u8981\u6ce8\u610f"),(0,r.kt)("p",null,"\u4ec0\u4e48\u662f\u7cfb\u7edf\u8d26\u6237"),(0,r.kt)("p",null,"\u4e0d\u9700\u8981\u767b\u5f55,"),(0,r.kt)("p",null,"\u7cfb\u7edf\u8d26\u6237\u7528\u6237\u542f\u52a8\u5b88\u62a4\u8fdb\u7a0b\u7684\u670d\u52a1\u8f6f\u4ef6,\u5176\u7279\u70b9\u662f\u4e0d\u9700\u8981\u767b\u5f55,\u56e0\u800c\u4e5f\u5c31\u6ca1\u6709\u5bb6\u76ee\u5f55\u7684\u9700\u8981"),(0,r.kt)("p",null,"useradd -D\u547d\u4ee4\u6765\u67e5\u770buseradd\u547d\u4ee4\u7684\u53c2\u8003\u6587\u6863\n/etc/default/useradd\u547c\u53eb\u51fa\u6765\u7684"),(0,r.kt)("p",null,"userdel"),(0,r.kt)("p",null,"addgroup\ndelgroup"),(0,r.kt)("p",null,"passwd:\u4fee\u6539\u5bc6\u7801"),(0,r.kt)("p",null,"\u5728\u811a\u672c\u4e2d\u5982\u4f55\u5b9e\u73b0\u66f4\u6539\u5bc6\u7801\u64cd\u4f5c"),(0,r.kt)("p",null,"echo 'password' | passwd --stdin user_name"),(0,r.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u4e2a\u9009\u9879\u5e76\u4e0d\u5b58\u5728\u6240\u6709distributions\u7248\u672c\u4e2d\uff0c\u5728\u4f7f\u7528\u4e4b\u524d\u8bf7\u4f7f\u7528man passwd\u547d\u4ee4\u786e\u8ba4distribution\u662f\u5426\u652f\u6301\u6b64\u9009\u9879"),(0,r.kt)("p",null,"usermod\u547d\u4ee4"),(0,r.kt)("p",null,"\u8fdb\u884c\u7528\u6237\u4fe1\u606f\u6570\u636e\u7684\u5fae\u8c03"),(0,r.kt)("p",null,"chsh"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"l:\u5217\u51fa\u5f53\u524d\u7cfb\u7edf\u7684\u53ef\u7528shell,\u4e5f\u5c31\u662f/etc/shell\u6587\u4ef6\u7684\u5185\u5bb9"),(0,r.kt)("li",{parentName:"ul"},"s:\u8bbe\u5b9a\u4fee\u6539\u81ea\u5df1\u7684shell")),(0,r.kt)("p",null,"\u65b0\u589e\u4e0e\u79fb\u9664\u7fa4\u7ec4\ngroupadd\u547d\u4ee4"),(0,r.kt)("p",null,"chown:\u4fee\u6539\u5c5e\u4e3b\u5c5e\u7ec4\u4fe1\u606f\nchmod:\u4fee\u6539\u6743\u9650\u4fe1\u606f"),(0,r.kt)("p",null,"chap14 \u8fdb\u7a0b\u7ba1\u7406"))}c.isMDXComponent=!0}}]);