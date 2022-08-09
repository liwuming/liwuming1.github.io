"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9284],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>b});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=l.createContext({}),p=function(e){var n=l.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return l.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(t),b=a,d=m["".concat(i,".").concat(b)]||m[b]||c[b]||r;return t?l.createElement(d,s(s({ref:n},u),{},{components:t})):l.createElement(d,s({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=m;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<r;p++)s[p]=t[p];return l.createElement.apply(null,s)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3859:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var l=t(7462),a=(t(7294),t(3905));const r={},s="ansible\u6982\u8ff0",o={unversionedId:"linux/ansible/\u65b0\u6536\u83b7",id:"linux/ansible/\u65b0\u6536\u83b7",title:"ansible\u6982\u8ff0",description:"ansible\u662f\u4e00\u4e2aIT\u81ea\u52a8\u5316\u5de5\u5177",source:"@site/docs\\linux\\10.ansible\\\u65b0\u6536\u83b7.md",sourceDirName:"linux/10.ansible",slug:"/linux/ansible/\u65b0\u6536\u83b7",permalink:"/docs/linux/ansible/\u65b0\u6536\u83b7",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/linux/10.ansible/\u65b0\u6536\u83b7.md",tags:[],version:"current",frontMatter:{},sidebar:"linux1",previous:{title:"swoole",permalink:"/docs/linux/ansible/swoole"},next:{title:"ssh\u670d\u52a1",permalink:"/docs/linux/zabbix/ssh\u670d\u52a1"}},i={},p=[],u={toc:p};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,l.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ansible\u6982\u8ff0"},"ansible\u6982\u8ff0"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"ansible\u662f\u4e00\u4e2aIT\u81ea\u52a8\u5316\u5de5\u5177")),(0,a.kt)("p",null,"\u662f\u4e00\u4e2a\u7528python\u7f16\u5199\u7684"),(0,a.kt)("h1",{id:"ansible\u5b89\u88c5"},"ansible\u5b89\u88c5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"yum\u5b89\u88c5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install epel-release\nyum install ansible\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"pip\u5b89\u88c5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yum install epel-release\nyum install python2-pip\npip install ansible\n")),(0,a.kt)("h1",{id:"ansible\u539f\u7406"},"ansible\u539f\u7406"),(0,a.kt)("p",null,"\u7ba1\u7406\u8282\u70b9\n\u88ab\u7ba1\u7406\u8282\u70b9"),(0,a.kt)("p",null,"\u5982\u4f55\u901a\u8bafssh-id"),(0,a.kt)("p",null,"\u73af\u5883\u8981\u6c42\n\u7ba1\u7406\u8282\u70b9\nopenssh\npython>=2.6\nansible"),(0,a.kt)("p",null,"\u88ab\u7ba1\u7406\u8282\u70b9\nopenssh\npython>=2.4"),(0,a.kt)("p",null,"centos6,centos7\u73af\u5883\u90fd\u6ca1\u95ee\u9898\uff0ccentos6\u9ed8\u8ba4\u7684python\u7248\u672c2.6,centos7\u9ed8\u8ba4\u7684python\u7248\u672c2.7"),(0,a.kt)("p",null,"\u5c06192.168.31.110\u4f5c\u4e3a\u7ba1\u7406\u8282\u70b9\uff0c\u5c06192.168.31.120\u4f5c\u4e3a\u88ab\u7ba1\u7406\u8282\u70b9\uff0c"),(0,a.kt)("p",null,"vm\u865a\u62df\u673a\u5728\u514b\u9686\u65f6\uff0cmac\u5730\u5740\u51b2\u7a81\u600e\u4e48\u529e\n1.\u5173\u95edlinux\uff0c\u91cd\u65b0\u751f\u6210mac\u5730\u5740\n2."),(0,a.kt)("p",null,"\u4fee\u6539ip\u5730\u5740\nvi /etc/sysconfig/network-script/ifcfg-eth0"),(0,a.kt)("h1",{id:""}),(0,a.kt)("p",null,"gnome-shell"),(0,a.kt)("p",null,"apt-get install -y gnome-tweak-tool\napt-get install -y gnome-shell-extensions"),(0,a.kt)("p",null,"apt-get remove -y gnome-tweak"),(0,a.kt)("p",null,"sudo apt-get install gnome-shell         #\u5b89\u88c5gnome\u684c\u9762\u7a97\u53e3\u7ba1\u7406\u7a0b\u5e8f\nsudo apt install gnome-tweaks        #\u5b89\u88c5\u7ba1\u7406\u5de5\u5177\nsudo apt install gnome-shell-extensions  #\u6269\u5c55\u7ba1\u7406"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/34608388"},"https://zhuanlan.zhihu.com/p/34608388")),(0,a.kt)("p",null,"\u66f4\u6539ubuntu\u7684\u6e90"),(0,a.kt)("p",null,"sudo apt update"),(0,a.kt)("p",null,"sudo apt install sassc optipng libcanberra-gtk-module\nsudo apt install gnome-tweaks\nsudo apt install chrome-gnome-shell\nsudo apt install gnome-shell-extensions\nsudo apt install gtk2-engines-murrine gtk2-engines-pixbuf"),(0,a.kt)("p",null,"sudo apt update\nsudo apt install gnome-tweaks chrome-gnome-shell\nsudo apt install gtk2-engines-murrine gtk2-engines-pixbuf\nsudo apt install sassc optipng inkscape libcanberra-gtk-module libglib2.0-dev libxml2-utils"),(0,a.kt)("p",null,"user themes\ndash to dock\nnetspeed"))}c.isMDXComponent=!0}}]);