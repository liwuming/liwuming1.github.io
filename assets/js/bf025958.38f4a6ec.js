"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6116],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=l,k=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),l=(n(7294),n(3905));const a={},o="\u4f55\u4e3a\u4e8b\u52a1",i={unversionedId:"mysql-dba/\u4e8b\u52a1\u5b89\u5168",id:"mysql-dba/\u4e8b\u52a1\u5b89\u5168",title:"\u4f55\u4e3a\u4e8b\u52a1",description:"\u4e8b\u52a1\u7684\u63d0\u4ea4\u65b9\u5f0f\uff0c\u7531\u53c2\u6570autocommit\u63a7\u5236\uff0c\u8be5\u53c2\u6570\u7684\u9ed8\u8ba4\u503c\u4e3ano\uff0c\u56e0\u6b64\u662f\u81ea\u52a8\u63d0\u4ea4\uff0c\u53ef\u7528\u8fc7show variables\u547d\u4ee4\u67e5\u770b",source:"@site/docs\\mysql-dba\\\u4e8b\u52a1\u5b89\u5168.md",sourceDirName:"mysql-dba",slug:"/mysql-dba/\u4e8b\u52a1\u5b89\u5168",permalink:"/docs/mysql-dba/\u4e8b\u52a1\u5b89\u5168",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mysql-dba/\u4e8b\u52a1\u5b89\u5168.md",tags:[],version:"current",frontMatter:{},sidebar:"mysql-dba",previous:{title:"\u4f55\u4e3a\u4e8b\u52a1",permalink:"/docs/mysql-dba/\u4e8b\u52a1\u5b89\u5168 - \u526f\u672c"},next:{title:"SQL\u57fa\u7840",permalink:"/docs/mysql-dba/\u6df1\u5165SQL"}},c={},u=[{value:"\u9694\u79bb\u7ea7\u522b",id:"\u9694\u79bb\u7ea7\u522b",level:2}],s={toc:u};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4f55\u4e3a\u4e8b\u52a1"},"\u4f55\u4e3a\u4e8b\u52a1"),(0,l.kt)("h1",{id:"\u4e8b\u52a1\u7684\u64cd\u4f5c"},"\u4e8b\u52a1\u7684\u64cd\u4f5c"),(0,l.kt)("p",null,"\u4e8b\u52a1\u7684\u63d0\u4ea4\u65b9\u5f0f\uff0c\u7531\u53c2\u6570autocommit\u63a7\u5236\uff0c\u8be5\u53c2\u6570\u7684\u9ed8\u8ba4\u503c\u4e3ano\uff0c\u56e0\u6b64\u662f\u81ea\u52a8\u63d0\u4ea4\uff0c\u53ef\u7528\u8fc7show variables\u547d\u4ee4\u67e5\u770b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"(root@localhost) [(none)]> show variables like 'autocommit';\n+---------------+-------+\n| Variable_name | Value |\n+---------------+-------+\n| autocommit    | ON    |\n+---------------+-------+\n1 row in set (0.06 sec)\n\n(root@localhost) [(none)]> select @@autocommit;\n+--------------+\n| @@autocommit |\n+--------------+\n|            1 |\n+--------------+\n1 row in set (0.00 sec)\n")),(0,l.kt)("p",null,"\u5982\u4f55\u663e\u793a\u7684\u63d0\u4ea4\u4e8b\u52a1"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5f00\u542f\u4e8b\u52a1")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"begin...end"),(0,l.kt)("li",{parentName:"ul"},"start transaction ")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"begin...end\u867d\u7136\u7b80\u5355\uff0c\u4f46\u662f\u7531\u4e8e\u4e0e\u5b58\u50a8\u8fc7\u7a0b\u7684\u5173\u952e\u5b57\u6709\u51b2\u7a81\uff0c\u56e0\u6b64\u5728\u5b58\u50a8\u8fc7\u7a0b\u4e2d\uff0c\u53ea\u80fd\u4f7f\u7528start transaction\u8bed\u53e5\u663e\u5f0f\u7684\u5f00\u542f\u4e8b\u52a1")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"commit/rollback")),(0,l.kt)("p",null,"\u9501\u673a\u5236\n\u4e8c\u9636\u6bb5\u9501\uff0c\u7b80\u5355\u7c97\u66b4"),(0,l.kt)("p",null,"innodb\u5b58\u50a8\u5f15\u64ce\u5b9e\u73b0\u4e86\u4e24\u79cd\u9501"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5171\u4eab\u9501-s\uff0c"),(0,l.kt)("li",{parentName:"ul"},"\u6392\u4ed6\u9501-x\uff0c")),(0,l.kt)("h1",{id:"mvcc\u89e3\u51b3\u7684\u8bfb\u5199\u5e76\u53d1"},"mvcc\uff0c\u89e3\u51b3\u7684\u8bfb\u5199\u5e76\u53d1"),(0,l.kt)("p",null,"mvcc\u5e76\u53d1\u63a7\u5236\u4e0b\u7684\u4e24\u7c7b\u8bfb\u64cd\u4f5c\uff0c\u5feb\u7167\u8bfb\u548c\u5f53\u524d\u8bfb"),(0,l.kt)("h1",{id:"\u4e8b\u52a1\u7684\u5b9e\u73b0"},"\u4e8b\u52a1\u7684\u5b9e\u73b0"),(0,l.kt)("p",null,"\u4e8b\u52a1\u901a\u8fc7\u4e8b\u52a1\u65e5\u5fd7--redo+undo\u6765\u5b9e\u73b0\uff0c\u5177\u4f53\u7684\n\u5728\u5f00\u542f\u4e00\u4e2a\u4e8b\u52a1\u65f6\uff0c\u4f1a\u751f\u6210\u4e00\u4e2a\u4e8b\u52a1id\uff0c\n\u5728\u6267\u884c\u4e8b\u52a1\u8bed\u53e5\u65f6\uff0c\u4f1a\u5411\u4e8b\u52a1\u7f13\u51b2\u533a\u63d2\u5165\u4e8b\u52a1\u65e5\u5fd7\uff0c\n\u5f53\u4e8b\u52a1\u7ed3\u675f\u65f6\uff0c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"commit\u65f6\uff0c\u5c06\u4e8b\u52a1\u7f13\u51b2\u533a\u4e2d\u7684\u4e8b\u52a1\u65e5\u5fd7\u5237\u65b0\u5230redo\u4e2d\uff0c\u7136\u540e\uff0c\u66f4\u65b0\u6570\u636e"),(0,l.kt)("li",{parentName:"ol"})),(0,l.kt)("h1",{id:"\u5173\u4e8emvcc\u7684\u5b9e\u73b0"},"\u5173\u4e8emvcc\u7684\u5b9e\u73b0"),(0,l.kt)("p",null,"\u53ea\u6709\u5728rc\u548crr\u9694\u79bb\u7ea7\u522b\u4e0b\u624d\u80fd\u4f7f\u7528mvcc\uff0c\u9053\u7406\u4e5f\u5f88\u7b80\u5355\u5728ru\u7ea7\u522b\u4e0b\uff0c\u5728read-uncommit\u9694\u79bb\u7ea7\u522b\u4e0b\u6ca1\u6709\u7248\u672c\u7684\u6982\u5ff5\uff0c\u5728serializable\u9694\u79bb\u7ea7\u522b\u4e0b\u6240\u6709\u7684\u8bfb\u53d6\u884c\u52a0\u9501"),(0,l.kt)("h2",{id:"\u9694\u79bb\u7ea7\u522b"},"\u9694\u79bb\u7ea7\u522b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"read-uncommitted--\u8bfb\u672a\u63d0\u4ea4"),(0,l.kt)("li",{parentName:"ul"},"read-commit--\u4e0d\u53ef\u91cd\u590d\u8bfb"),(0,l.kt)("li",{parentName:"ul"},"repeatable-read--\u53ef\u91cd\u590d\u8bfb"),(0,l.kt)("li",{parentName:"ul"},"serializable--\u4e32\u884c\u8bfb")),(0,l.kt)("p",null,"ru\u9694\u79bb\u7ea7\u522b\u5176\u5b9e\u5df2\u7ecf\u4e8b\u52a1\u7684\u9694\u79bb\u6027\uff0cserializable\u9694\u79bb\u7ea7\u522b\u4e25\u91cd\u5f71\u54cd\u6027\u80fd\uff0c\u6240\u4ee5\u8fd9\u4e24\u79cd\u9694\u79bb\u7ea7\u522b\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\u51e0\u4e4e\u4e0d\u4f1a\u7528\u5230\nrr\u662fmysql\u7684\u9ed8\u8ba4\u9694\u79bb\u7ea7\u522b\uff0c\u53ef\u901a\u8fc7show \u547d\u4ee4\u67e5\u770b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"(root@localhost) [(none)]> select @@tx_isolation;\n+-----------------+\n| @@tx_isolation  |\n+-----------------+\n| REPEATABLE-READ |\n+-----------------+\n1 row in set, 1 warning (0.00 sec)\n\n(root@localhost) [(none)]> show variables like 'tx_isolation';\n+---------------+-----------------+\n| Variable_name | Value           |\n+---------------+-----------------+\n| tx_isolation  | REPEATABLE-READ |\n+---------------+-----------------+\n1 row in set (0.00 sec)\n")),(0,l.kt)("p",null,"\u5728\u5176\u4ed6\u6570\u636e\u5e93\u4ea7\u54c1\u4e2d\u4f7f\u7528rc\u4f5c\u4e3a\u9ed8\u8ba4\u7684\u9694\u79bb\u7ea7\u522b\uff0c\u90a3\u4e48rc\u548crr\u4e24\u8005\u6709\u4f55\u533a\u522b\uff1f"),(0,l.kt)("p",null,"\u810f\u8bfb\uff0c\u4e0d\u53ef\u91cd\u590d\u8bfb\uff0c\u5e7b\u8bfb\n\u810f\u8bfb\uff0c\u5148\u5199\uff0c\u540e\u8bfb\n\u4e0d\u53ef\u91cd\u590d\u8bfb\uff0c\u5148\u8bfb\uff0c\u540e\u5199\n\u5e7b\u8bfb\uff0c\u5148\u8bfb\uff0c\u540e\u5199\uff0c\u518d\u8bfb"),(0,l.kt)("p",null,"set session transaction isolation level read commit;"),(0,l.kt)("p",null,"\u5728\u4e24\u4e2a\u4f1a\u8bdd\u7a97\u53e3\u7684\u4e8b\u52a1\u90fd\u662frc\u7ea7\u522b\u65f6\uff0c\u5728\u4e00\u4e2a\u4e8b\u52a1\u80fd\u8bfb\u53d6\u5230\u53e6\u4e00\u4e2a\u4e8b\u52a1\u63d0\u4ea4\u7684\u6570\u636e"),(0,l.kt)("h1",{id:"rr\u9694\u79bb\u7ea7\u522b\u4e0b\u7684\u4e24\u79cd\u7279\u6b8a\u95ee\u9898"},"rr\u9694\u79bb\u7ea7\u522b\u4e0b\u7684\u4e24\u79cd\u7279\u6b8a\u95ee\u9898"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"unique\u5931\u6548\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u51b2\u7a81")),(0,l.kt)("p",null,"mysql\u4e4bunique\u5173\u952e\u5b57"),(0,l.kt)("p",null,"\u4e3b\u952e\u7d22\u5f15\u4e0e\u552f\u4e00\u7d22\u5f15"),(0,l.kt)("p",null,"create table t1(id int,sname varchar(10) unique);"))}m.isMDXComponent=!0}}]);