"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3236],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=l.createContext({}),i=function(e){var n=l.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=i(e.components);return l.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(t),h=r,k=d["".concat(u,".").concat(h)]||d[h]||c[h]||a;return t?l.createElement(k,o(o({ref:n},p),{},{components:t})):l.createElement(k,o({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<a;i++)o[i]=t[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},857:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var l=t(7462),r=(t(7294),t(3905));const a={},o=void 0,s={unversionedId:"linux/3-31/\u5e38\u7528\u547d\u4ee4",id:"linux/3-31/\u5e38\u7528\u547d\u4ee4",title:"\u5e38\u7528\u547d\u4ee4",description:"ls",source:"@site/docs\\linux\\3-31\\\u5e38\u7528\u547d\u4ee4.md",sourceDirName:"linux/3-31",slug:"/linux/3-31/\u5e38\u7528\u547d\u4ee4",permalink:"/docs/linux/3-31/\u5e38\u7528\u547d\u4ee4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/linux/3-31/\u5e38\u7528\u547d\u4ee4.md",tags:[],version:"current",frontMatter:{},sidebar:"linux",previous:{title:"\u5b66\u4e60\u76ee\u6807",permalink:"/docs/linux/3-31/\u5b66\u4e60\u76ee\u6807"},next:{title:"\u6587\u672c\u4e09\u5251\u5ba2",permalink:"/docs/linux/3-31/\u6587\u672c\u4e09\u5251\u5ba2"}},u={},i=[{value:"useradd -- \u6dfb\u52a0/\u7f16\u8f91",id:"useradd----\u6dfb\u52a0\u7f16\u8f91",level:2},{value:"userdel -- \u5220\u9664\u7528\u6237",id:"userdel----\u5220\u9664\u7528\u6237",level:2},{value:"passwd -- \u4fee\u6539\u8bbe\u7f6e\u5bc6\u7801",id:"passwd----\u4fee\u6539\u8bbe\u7f6e\u5bc6\u7801",level:2}],p={toc:i};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,l.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ls"),(0,r.kt)("p",null,"pwd"),(0,r.kt)("h1",{id:"chown-\u4fee\u6539\u6587\u4ef6\u76ee\u5f55\u5c5e\u4e3b\u5c5e\u7ec4\u6743\u9650"},"chown \u4fee\u6539\u6587\u4ef6/\u76ee\u5f55\u5c5e\u4e3b/\u5c5e\u7ec4\u6743\u9650"),(0,r.kt)("h1",{id:"chmod-\u4fee\u6539\u6587\u4ef6\u76ee\u5f55\u8bfb\u5199\u6267\u884c\u6743\u9650"},"chmod \u4fee\u6539\u6587\u4ef6/\u76ee\u5f55\u8bfb/\u5199/\u6267\u884c\u6743\u9650"),(0,r.kt)("p",null,"\u5fc3\u7ec6\u7684\u8bdd\uff0c\u53ef\u80fd\u4f1a\u53d1\u73b0\u65b0\u5efa\u7684\u6587\u4ef6\u53ea\u6709\u8bfb\u5199\u6743\u9650\uff0c\u8fd9\u662f\u6587\u4ef6\u7684\u6267\u884c\u6743\u9650\u662f\u975e\u5e38\u5371\u9669\u7684\uff0c\u6240\u4ee5\u7cfb\u7edf\u9ed8\u8ba4\u5e76\u6ca1\u6709\u7ed9\u6587\u4ef6\u6267\u884c\u6743\u9650\numask"),(0,r.kt)("h1",{id:"\u7ec4\u7ba1\u7406"},"\u7ec4\u7ba1\u7406"),(0,r.kt)("h2",{id:""}),(0,r.kt)("h1",{id:"\u7528\u6237\u7ba1\u7406"},"\u7528\u6237\u7ba1\u7406"),(0,r.kt)("h2",{id:"useradd----\u6dfb\u52a0\u7f16\u8f91"},"useradd -- \u6dfb\u52a0/\u7f16\u8f91"),(0,r.kt)("h2",{id:"userdel----\u5220\u9664\u7528\u6237"},"userdel -- \u5220\u9664\u7528\u6237"),(0,r.kt)("h2",{id:"passwd----\u4fee\u6539\u8bbe\u7f6e\u5bc6\u7801"},"passwd -- \u4fee\u6539\u8bbe\u7f6e\u5bc6\u7801"),(0,r.kt)("p",null,"\u6587\u4ef6\u7ba1\u7406\n\u5217\u51fa\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\u7ea7\u76ee\u5f55--ls\n\u521b\u5efa\u6587\u4ef6--touch\n\u67e5\u770b\u6587\u4ef6\u5185\u5bb9--cat\nhead\ntail\nmore\nless"),(0,r.kt)("h1",{id:"shell\u7f16\u7a0b"},"shell\u7f16\u7a0b"),(0,r.kt)("p",null,"\u5173\u4e8eshell\u77e5\u8bc6\u77e5\u591a\u5c11?"),(0,r.kt)("p",null,"\u5173\u4e8eshell\u811a\u672c\u7f16\u5199\n\u5728\u9996\u884c\u6ce8\u660e\u6267\u884c\u811a\u672c\u7684\u7c7b\u578b\n\u6dfb\u52a0\u6ce8\u91ca--\u6ce8\u660e\u811a\u672c\u529f\u80fd\uff0c\u65e5\u671f\uff0c\u4f5c\u8005\uff0c\u90ae\u7bb1\u7b49\u4fe1\u606f"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u811a\u672c\u7684\u884c\u5e94\u6ce8\u660e\u6ce8\u91ca\n\u5728\u58f0\u660e\u53d8\u91cf\u65f6\uff0c\u7b49\u53f7\u4e24\u4fa7\u4e0d\u5e94\u8be5\u6709\u7a7a\u683c"),(0,r.kt)("p",null,"\u5173\u4e8eshell\u811a\u672c\u7684\u6267\u884c\u65b9\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vi bash.sh\n# \u8f93\u5165i,\u8fdb\u5165\u7f16\u8f91\u6a21\u5f0f\necho 'hello world';\n# \u8f93\u5165:wq\uff0c\u4fdd\u5b58\u9000\u51fa\n")),(0,r.kt)("p",null,"\u8d4b\u4e88\u811a\u672c\u6267\u884c\u6743\u9650\uff0c\u5c06\u5176\u53d8\u4e3a\u53ef\u6267\u884c\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod -x bash.sh\n./bash.sh\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u70b9\u53f7--.\u5fc5\u4e0d\u53ef\u5c11\uff0c\u5c11\u4e86\u70b9\u53f7\uff0c\u89e3\u91ca\u5668\u5c31\u4f1a\u628abash.sh\u5f53\u6210\u547d\u4ee4\uff0c\u5728\u7cfb\u7edf\u5e38\u91cf--PATH\u4e0b\u8fdb\u884c\u67e5\u627e\uff0c\u82e5\u5f53\u524d\u76ee\u5f55\u4e0d\u5728path\u8def\u5f84\u4e0b\uff0c\u5219\u4f1a\u62a5\u5982\u4e0b\u9519\u8bef\u63d0\u793a\uff1a-bash: bash.sh: command not found")),(0,r.kt)("p",null,"\u4f5c\u4e3ashell\u547d\u4ee4\u7684\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bash bash.sh\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6b64\u65f6\u811a\u672c\u53ef\u4e0d\u5177\u5907\u6267\u884c\u6743\u9650\uff0c\u4f46\u9996\u884c\u5e94\u4e3ashebeng--#!\u5f00\u5934\uff0c\u6267\u884c\u6ce8\u660e\u811a\u672c\u7684\u89e3\u91ca\u5668\u7c7b\u578b")),(0,r.kt)("p",null,"\u5173\u4e8eshell\u811a\u672c\u7684\u6267\u884c\u65b9\u5f0f"),(0,r.kt)("p",null,"nologin shell"),(0,r.kt)("p",null,"\u5173\u4e8ebash shell\u7684\u7279\u6027\n1\u3001\u547d\u4ee4/\u8def\u5f84\u7684\u81ea\u52a8\u8865\u5168\n2\u3001history\u5386\u53f2\u8bb0\u5f55\n3\u3001\u547d\u4ee4\u7684\u81ea\u52a8\u5c55\u5f00\n~\uff0c\u8868\u793a\u5f53\u524d\u7528\u6237\u7684\u5bb6\u76ee\u5f55\n4\u3001"),(0,r.kt)("p",null,"1\u3001bash\u7684\u7279\u6027\n2\u3001login shell\u4e0enologin shell\u7684\u533a\u522b\n3\u3001rsyslog\u7684\u7ba1\u7406\n4\u3001\u7ba1\u9053\u662f\u4ec0\u4e48\n5\u3001"),(0,r.kt)("p",null,"shell\u811a\u672c\u7684\u6ce8\u91ca--\u4ee5#\u53f7\u5f00\u5934\u7684\u884c\u4e3a\u6ce8\u91ca\u884c\uff0cshebang\u884c\u9664\u5916"),(0,r.kt)("p",null,"\u73af\u5883\u53d8\u91cf"),(0,r.kt)("p",null,"\u7279\u6b8a\u53d8\u91cf\n$1--\u83b7\u53d6\u7b2c\u4e00\u4e2a\u53c2\u6570\n$2--\u83b7\u53d6\u7b2c\u4e8c\u4e2a\u53c2\u6570\n...\n$@--\u83b7\u53d6\u6240\u6709\u53c2\u6570\n$#--\u83b7\u53d6\u53c2\u6570\u7684\u6570\u91cf\n$0--\u83b7\u53d6\u811a\u672c\u540d\u79f0\n$?--\u83b7\u53d6\u811a\u672c\u8fdb\u7a0bid--\u5373pid"),(0,r.kt)("p",null,"$?--\u9000\u51fa\u7801"),(0,r.kt)("p",null,"\u5173\u4e8esystemd\n\u5173\u4e8e\u9632\u706b\u5899\u7ba1\u7406\n\u5173\u4e8e\u7cfb\u7edf\u542f\u52a8\u8fc7\u7a0b"),(0,r.kt)("p",null,"\u5173\u4e8e\u5b57\u7b26\u5904\u7406\u4e09\u5251\u5ba2--grep\uff0csed\uff0cawk"))}c.isMDXComponent=!0}}]);