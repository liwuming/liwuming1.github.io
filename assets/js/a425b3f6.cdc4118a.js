"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1536],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=u(n),f=l,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const o={},i=void 0,a={unversionedId:"linux/4-02/\u5b66\u4e60\u76ee\u6807",id:"linux/4-02/\u5b66\u4e60\u76ee\u6807",title:"\u5b66\u4e60\u76ee\u6807",description:"\u5b66\u4e60\u76ee\u6807",source:"@site/docs\\linux\\4-02\\\u5b66\u4e60\u76ee\u6807.md",sourceDirName:"linux/4-02",slug:"/linux/4-02/\u5b66\u4e60\u76ee\u6807",permalink:"/docs/linux/4-02/\u5b66\u4e60\u76ee\u6807",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/linux/4-02/\u5b66\u4e60\u76ee\u6807.md",tags:[],version:"current",frontMatter:{},sidebar:"linux1",previous:{title:"\u5173\u4e8evi\u7f16\u8f91\u5668",permalink:"/docs/linux/4-02/vim\u7f16\u8f91\u5668"},next:{title:"\u5e38\u7528\u547d\u4ee4",permalink:"/docs/linux/4-02/\u5e38\u7528\u547d\u4ee4"}},c={},u=[],s={toc:u};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5b66\u4e60\u76ee\u6807\n1\u3001login shell\u4e0enologin shell\u7684\u533a\u522b\n2\u3001rsyslog\u7684\u4f7f\u7528\n3\u3001\u8fdb\u7a0b\u7ba1\u7406\n4\u3001\u7f51\u7edc\u7ba1\u7406\n5\u3001\u6587\u4ef6\uff0c\u7528\u6237\u53ca\u6743\u9650\u7684\u7ba1\u7406"),(0,l.kt)("p",null,"\u5927\u591a\u6570linux\u7684\u53d1\u884c\u7248\u672c\u7684\u9ed8\u8ba4shell\u90fd\u662fGNU bash shell\uff0c\n\u5173\u4e8ebash\u7684\u4e00\u4e9b\u7279\u6027\n1\u3001\u4ee3\u7801\u8def\u5f84\u7684\u81ea\u52a8\u8865\u5168\n2\u3001history\n\u7528\u6237\u6240\u6267\u884c\u7684\u547d\u4ee4\u4fdd\u5b58\u5728\u5185\u5b58\u4e2d\uff0c\u5f53\u7528\u6237\u6b63\u5e38\u9000\u51fa\u65f6\uff0c\u4f1a\u5c06\u5185\u5b58\u4e2d\u7684\u547d\u4ee4\u5386\u53f2\u5237\u65b0\u5230\u7528\u6237\u5bb6\u76ee\u5f55\u7684.bash_history\u4e2d"),(0,l.kt)("p",null,"\u83b7\u53d6\u4e0a\u4e00\u547d\u4ee4"),(0,l.kt)("p",null,"\u5173\u4e8ehistory\u7684\u914d\u7f6e"),(0,l.kt)("p",null,"3\u3001alias"),(0,l.kt)("p",null,"linux\u7684\u53d1\u884c\u7248\u672c\u4e2d\u4e00\u822c\u90fd\u4f1a\u81ea\u5e26vi\uff0c\u800c\u4e0d\u5e26vim\uff0cvim\u662fvi\u7684\u5347\u7ea7\u7248\uff0c\u81ea\u5e26\u4ee3\u7801\u9ad8\u4eae"),(0,l.kt)("p",null,"\u5b89\u88c5vim\u4e4b\u540e\uff0c\u5e0c\u671b\u901a\u8fc7vi\u547d\u4ee4\u8c03\u7528vim\u7f16\u8f91\u5668\uff0c\u53ef\u4ee5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vi ~/.bashrc\n\nalias vi=vim\n")),(0,l.kt)("p",null,"\u4fdd\u5b58\u9000\u51fa\u540e\uff0c\u9700\u8981\u6267\u884csource ~/.bashrc\u547d\u4ee4\u65b9\u53ef\u751f\u6548"),(0,l.kt)("p",null,"4\u3001\u547d\u4ee4\u5c55\u5f00\n~:\u5c55\u5f00\u4e3a\u7528\u6237\u7684\u5bb6\u76ee\u5f55\nhello1.md,hello2.md,hello3.md\ntouch hello","[1,2,3]",".md\u4f1a\u88ab\u5c55\u5f00\u4e3atouch hello1.md hello2.md hello3.md"))}p.isMDXComponent=!0}}]);