"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3992],{3905:(l,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>k});var n=t(7294);function a(l,e,t){return e in l?Object.defineProperty(l,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):l[e]=t,l}function s(l,e){var t=Object.keys(l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(l);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable}))),t.push.apply(t,n)}return t}function r(l){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){a(l,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(l,e,Object.getOwnPropertyDescriptor(t,e))}))}return l}function p(l,e){if(null==l)return{};var t,n,a=function(l,e){if(null==l)return{};var t,n,a={},s=Object.keys(l);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(a[t]=l[t]);return a}(l,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(l);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(l,t)&&(a[t]=l[t])}return a}var m=n.createContext({}),o=function(l){var e=n.useContext(m),t=e;return l&&(t="function"==typeof l?l(e):r(r({},e),l)),t},i=function(l){var e=o(l.components);return n.createElement(m.Provider,{value:e},l.children)},u={inlineCode:"code",wrapper:function(l){var e=l.children;return n.createElement(n.Fragment,{},e)}},y=n.forwardRef((function(l,e){var t=l.components,a=l.mdxType,s=l.originalType,m=l.parentName,i=p(l,["components","mdxType","originalType","parentName"]),y=o(t),k=a,c=y["".concat(m,".").concat(k)]||y[k]||u[k]||s;return t?n.createElement(c,r(r({ref:e},i),{},{components:t})):n.createElement(c,r({ref:e},i))}));function k(l,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof l||a){var s=t.length,r=new Array(s);r[0]=y;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=l,p.mdxType="string"==typeof l?l:a,r[1]=p;for(var o=2;o<s;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},7046:(l,e,t)=>{t.r(e),t.d(e,{assets:()=>m,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var n=t(7462),a=(t(7294),t(3905));const s={title:"MySQL\u7b80\u4ecb",sidebar_position:0},r="mysql\u7b80\u4ecb",p={unversionedId:"mysql-dba/intro",id:"mysql-dba/intro",title:"MySQL\u7b80\u4ecb",description:"mysql\u662f\u5f00\u6e90\u514d\u8d39\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93",source:"@site/docs/mysql-dba/intro.md",sourceDirName:"mysql-dba",slug:"/mysql-dba/intro",permalink:"/docs/mysql-dba/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/mysql-dba/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"MySQL\u7b80\u4ecb",sidebar_position:0},sidebar:"mysql-dba",previous:{title:"\u5b89\u88c5\u6216\u5347\u7ea7mysql",permalink:"/docs/mysql-dba/mysql\u5b89\u88c5\u4e0e\u5347\u7ea7/\u5b89\u88c5\u6216\u5347\u7ea7mysql"},next:{title:"mysql\u6982\u8ff0",permalink:"/docs/mysql-dba/mysql\u5b89\u88c5\u4e0e\u5347\u7ea7/\u5b89\u88c5"}},m={},o=[],i={toc:o};function u(l){let{components:e,...t}=l;return(0,a.kt)("wrapper",(0,n.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mysql\u7b80\u4ecb"},"mysql\u7b80\u4ecb"),(0,a.kt)("p",null,"mysql\u662f\u5f00\u6e90\u514d\u8d39\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93"),(0,a.kt)("p",null,"\u4f55\u4e3a\u5173\u7cfb\u578b\u6570\u636e\u5e93?\n\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0c\u662f\u6307\u91c7\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"\u5173\u7cfb\u6a21\u578b"),"\u6765\u7ec4\u7ec7\u6570\u636e\u7684\u6570\u636e\u5e93\uff0c\u5176\u4ee5\u884c\u548c\u5217\u7684\u5f62\u5f0f\u5b58\u50a8\u6570\u636e\uff0c"),(0,a.kt)("h1",{id:"\u5173\u4e8emysql\u6570\u636e\u5e93\u7684\u5b89\u88c5"},"\u5173\u4e8emysql\u6570\u636e\u5e93\u7684\u5b89\u88c5"),(0,a.kt)("p",null,"\u5728mysql\u5b89\u88c5\u4e4b\u524d\u9700\u8981\u5bf9mysql\u5206\u578b\u548c\u7248\u672c\u8fdb\u884c\u9009\u62e9"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"mysql\u7684\u5206\u652f\n\u7531\u4e8emysql\u5b98\u65b9\u7248\u4e0d\u4e00\u5b9a\u80fd\u9002\u5408\npercona\nmariadb\ndrizzle")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"mysql\u7684\u7248\u672c")),(0,a.kt)("p",null,"\u7531\u4e8emysql\u662f\u5f00\u6e90\u6570\u636e\u5e93,\u56e0\u6b64\u6709\u4f17\u591a\u7684\u5206\u652f,\u5176\u4e2d\u4e3b\u8981\u5206\u652f\u6709:"),(0,a.kt)("p",null,"mysql\u7684\u53d1\u884c\u7248\u6709"),(0,a.kt)("p",null,"\u6e90\u7801\u5b89\u88c5\n\u4e8c\u8fdb\u5236\u5305\u5b89\u88c5,\u7eff\u8272\u5b89\u88c5,\nyum\u5b89\u88c5,"),(0,a.kt)("p",null,"\u5bf9mysql\u6570\u636e\u5e93\u7684\u8ba4\u77e5"),(0,a.kt)("p",null,"mysql\u662f\u6d41\u884c\u7684\u5f00\u6e90\u514d\u8d39\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93,"),(0,a.kt)("p",null,"\u5173\u4e8emysql\u7684\u67b6\u6784,"),(0,a.kt)("p",null,"\u9009\u62e9\u5b98\u65b9\u7248\u7684mysql5.7"),(0,a.kt)("p",null,"mysql5.7\u7684\u65b0\u7279\u6027\n\u4ecemysql5.7.8\u7248\u672c\u5f00\u59cb,\u63d0\u4f9b\u4e86json\u7684\u652f\u6301"),(0,a.kt)("p",null,"\u5173\u4e8emysql\u7684json\u7684\u4e24\u70b9\u7591\u60d1:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"mysql5.7\u63d0\u4f9b\u7684json\u652f\u6301\u4e0e\u5b58\u50a8\u5f15\u64ce\u6ca1\u6709\u5173\u7cfb"),(0,a.kt)("li",{parentName:"ol"},"mysql\u7684json\u4e0emongodb\u7684\u6bd4\u8f83\nmysql\u652f\u6301")),(0,a.kt)("p",null,"MGR,\nGTID,"),(0,a.kt)("p",null,"mysql\u662f\u5f00\u6e90\u514d\u8d39\u7684\u9ad8\u6027\u80fd\u7684c/s\u67b6\u6784\u7684\u5173\u7cfb\u578b\u6570\u636e\u5e93"),(0,a.kt)("p",null,"mysql\u6570\u636e\u5e93\u81ea\u5e26\u90a3\u4e9b\u5de5\u5177:\nmysql:mysql\u5ba2\u6237\u7aef\nmysqld:mysql\u670d\u52a1\u7aef\nmysqld_safe:"),(0,a.kt)("p",null,"mysql_install_db:"),(0,a.kt)("p",null,"mysqldump:\u7528\u4e8e\u5907\u4efd\u6570\u636e\u5e93\u7684\u5b57\u5178\nmysqldumpslow"),(0,a.kt)("p",null,"mysqladmin:\nmysqlshow:"),(0,a.kt)("p",null,"mysqlbinlog:"),(0,a.kt)("p",null,"innochecksum\nlz4_decompress"),(0,a.kt)("p",null,"my_print_defaults"),(0,a.kt)("p",null,"mysqlcheck\nmysql_client_test_embedded\nmysql_config\nmysql_config_editor"),(0,a.kt)("p",null,"mysqld-debug\nmysqld_multi"),(0,a.kt)("p",null,"mysql_embedded\nmysqlimport"),(0,a.kt)("p",null,"mysql_plugin\nmysqlpump\nmysql_secure_installation"),(0,a.kt)("p",null,"mysqlslap\nmysql_ssl_rsa_setup\nmysqltest_embedded\nmysql_tzinfo_to_sql\nmysql_upgrade\nmysqlxtest\nperror\nreplace\nresolveip\nresolve_stack_dump\nzlib_decompress"),(0,a.kt)("p",null,"myisam_ftdump\nmyisamlog\nmyisampack\nmyisamchk"),(0,a.kt)("p",null,"mysql\u4e4broot\u8d26\u6237\u5fd8\u8bb0\u5bc6\u7801\u600e\u4e48\u529e?"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5173\u95edmysqld\u670d\u52a1,"),(0,a.kt)("li",{parentName:"ol"},"\u4ee5\u8df3\u8fc7\u6388\u6743\u8868,\u7981\u6b62\u8fdc\u7a0b\u767b\u5f55\u7684\u65b9\u5f0f\u767b\u5f55")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-mysql"},"mysqld_safe --skip-grant-tables --skip-networking\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u6267\u884cflush privileges;"),(0,a.kt)("li",{parentName:"ol"},"\u6267\u884cset password=password('new_password');")),(0,a.kt)("p",null,"set\u547d\u4ee4\nset password ","[for user_name@host]","=password('new_password');"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f'user_name@host'\u662f\u9519\u8bef\u7684,\u65e0\u9700\u52a0\u5f15\u53f7,\u56e0\u4e3a\u8fd9\u4e2a\u539f\u56e0,\u597d\u591a\u6b21\u6ca1\u6709")),(0,a.kt)("h1",{id:"mysql\u7684\u5b89\u88c5"},"mysql\u7684\u5b89\u88c5"),(0,a.kt)("p",null,"\u5b89\u88c5\u65b9\u5f0f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6e90\u7801\u7f16\u8bd1\u5b89\u88c5"),(0,a.kt)("li",{parentName:"ol"},"\u4e8c\u8fdb\u5236\u5305\u88c5"),(0,a.kt)("li",{parentName:"ol"},"rpm\u5b89\u88c5")),(0,a.kt)("p",null,"\u66f4\u52a0\u63a8\u8350\u4e8c\u8fdb\u5236\u5b89\u88c5,\u53ef\u4ee5\u5b9a\u5236,"),(0,a.kt)("p",null,"\u5b89\u88c5\u89c4\u8303"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5230mysql\u5b98\u7f51,\u4e0b\u8f7d\u7b26\u5408\u4e3b\u673a\u5e73\u53f0\u7684\u4e8c\u8fdb\u5236\u5305"),(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efamysql\u7528\u6237"),(0,a.kt)("li",{parentName:"ol"},"\u4e3a\u4e86\u6570\u636e\u5b89\u5168,\u5e94\u5c3d\u53ef\u80fd\u5e94\u7528\u4e0e\u6570\u636e\u5206\u79bb,\u6570\u636e\u5355\u72ec\u5b58\u5728\u5728\u4e00\u5757\u78c1\u76d8\u4e0a,")),(0,a.kt)("p",null,"\u5173\u4e8emysql\u7684\u914d\u7f6e\n\u5e94\u7528\u76ee\u5f55\n\u6570\u636e\u76ee\u5f55\n\u65e5\u5fd7\u76ee\u5f55"),(0,a.kt)("h1",{id:"\u5173\u4e8emysql\u7684\u5b89\u88c5"},"\u5173\u4e8emysql\u7684\u5b89\u88c5"),(0,a.kt)("p",null,"\u521d\u59cb\u5316"),(0,a.kt)("p",null,"mysql5.6"),(0,a.kt)("p",null,"mysql5.7\nmysqld --initialzie --user=mysql"),(0,a.kt)("h1",{id:"\u5173\u4e8emysql\u7684\u914d\u7f6e"},"\u5173\u4e8emysql\u7684\u914d\u7f6e"),(0,a.kt)("p",null,"\u5b57\u7b26\u96c6"),(0,a.kt)("p",null,"\u5b57\u7b26\u96c6\n\u670d\u52a1\u7aef\u5b57\u7b26\u96c6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93"),(0,a.kt)("li",{parentName:"ul"},"\u8868\u5b57\u7b26\u96c6"),(0,a.kt)("li",{parentName:"ul"},"\u5b57\u6bb5\u5b57\u7b26\u96c6\n\u5ba2\u6237\u7aef\u5b57\u7b26\u96c6")),(0,a.kt)("p",null,"\u5173\u4e8e\u5b57\u7b26\u96c6\u7684\u9009\u62e9\uff0c\u4e00\u822c\u9009\u62e9utf8\u662f\uff0c\u5bf9\u4e8e\u9700\u8981\u652f\u6301\u8868\u60c5\u5305\u7684\u53ef\u4f7f\u7528utf8mb4,"),(0,a.kt)("p",null,"\u9047\u5230\u4e71\u7801\uff0c\u5c31\u662f\u5b57\u7b26\nset names utf8;"),(0,a.kt)("p",null,"\u5173\u4e8emysql\u7684\u96be\u70b9"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4e8b\u52a1\u5b89\u5168")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"mvcc")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7d22\u5f15")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u9501\u673a\u5236")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"mysql\u7684\u590d\u5236")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"mysql\u7684\u5907\u4efd\u4e0e\u6062\u590d"))),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"mysql\u7684")),(0,a.kt)("p",null,"mysql\u7684\u5b89\u88c5\n\u521d\u59cb\u5316"),(0,a.kt)("p",null,"mysql5.7\u7248\u672c\nmysqld --initizlize"),(0,a.kt)("p",null,"mysql\u81ea\u5e26\u5de5\u5177"),(0,a.kt)("p",null,"mysql\u67b6\u6784"),(0,a.kt)("p",null,"mysql\u7269\u7406"),(0,a.kt)("p",null,"mysql\u7684\u6570\u636e\u5e93\u5b57\u5178\n\u6240\u8c13\u6570\u636e\u5b57\u5178\uff0c\u4e5f\u5c31\u662fmysql\u7684\u5143\u6570\u636e\uff0c\u662fmysql"),(0,a.kt)("p",null,"mysql\u6570\u636e\u7684\u5b58\u50a8\n\u6570\u636e\u5e93\u7531\u4e00\u7cfb\u5217\u7684\u8868\u7ec4\u6210\uff0c\u8868\u662f"),(0,a.kt)("p",null,"\u8868\u903b\u8f91\u4e0a\uff0c\u9875\u662f\u7ec4\u6210\u8868\u7684\u57fa\u672c\u5355\u4f4d\uff0c\n1\u9875=16k\uff0c\n64\u9875=1\u533a\n64\u533a=1\u6bb5\uff0c\u4e00\u5f20\u8868\u5c31\u662f\u7531n\u4e2a\u6570\u636e\u6bb5\u7ec4\u6210\u7684"),(0,a.kt)("p",null,"\u7c7b\u4f3c\u7684\uff0c\u5c31\u4e00\u4e2a\u6570\u636e\u5e93\u5c31\u662f\u4e00\u4e2a\u5c0f\u533a\uff0c\u4e00\u5f20\u8868\u5c31\u662f\u4e00\u680b\u697c\uff0c\u4e00\u4e2a\u533a\uff0c\u5c31\u662f"),(0,a.kt)("h1",{id:"\u65e5\u5fd7\u6587\u4ef6"},"\u65e5\u5fd7\u6587\u4ef6"),(0,a.kt)("p",null,"\u9519\u8bef\u65e5\u5fd7\n\u6162\u67e5\u8be2\u65e5\u5fd7\n\u4e8c\u8fdb\u5236\u65e5\u5fd7\n\u4e2d\u7ee7\u65e5\u5fd7"),(0,a.kt)("p",null,"\u6570\u636e\u5b57\u5178"),(0,a.kt)("p",null,"mysql\u662f\u5426\u53ef\u4ee5\u50cfbash\u4e00\u6837\u81ea\u52a8\u8865\u5168\uff1f"),(0,a.kt)("h1",{id:"\u4f7f\u7528\u7b2c\u4e09\u65b9\u8f6f\u4ef6mycli"},"\u4f7f\u7528\u7b2c\u4e09\u65b9\u8f6f\u4ef6mycli"),(0,a.kt)("p",null,"yum install -y epel-release"),(0,a.kt)("p",null,"yum install -y python-pip python-devel\nyum remove -y python-pip python-devel"),(0,a.kt)("p",null,"pip install mycli"),(0,a.kt)("p",null,"python3 pip install --upgrade pip\npython3 -m pip install pip==\u7248\u672c\u53f7"),(0,a.kt)("p",null,'Command "python setup.py egg',(0,a.kt)("em",{parentName:"p"},'info" failed with error code 1 in /tmp/pip-build-bICix'),"/pip/\nYou are using pip version 8.1.2, however version 22.1.2 is available.\nYou should consider upgrading via the 'pip install --upgrade pip' command."),(0,a.kt)("p",null,"python -m pip install --upgrade --force pip"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5982\u4f55\u5224\u65ad\u662f\u5426\u5b89\u88c5\u4e86epel-release\u6e90\u7801\nyum list")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"centos7\u5982\u4f55\u5b89\u5168\u5347\u7ea7python3\uff0c\u4e3b\u8981\u62c5\u5fc3\u4e0d\u517c\u5bb9"))),(0,a.kt)("p",null,"\u6570\u636e\u5b57\u5178\uff0c\u5143\u6570\u636e\uff0c\u90fd\u662f\u5173\u4e8e\u6570\u636e\u7684\u6570\u636e\nmysql,\ninformation_schema,\nperformance_schema,\nsys"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5176\u4e2dsys\u5728mysql5.7\u7248\u672c\u5f00\u59cb\u51fa\u73b0")),(0,a.kt)("p",null,"show\u547d\u4ee4\uff0c\u5176\u5b9e\u5c31\u662f\u5bf9\u5143\u6570\u636e\u7684\u5c01\u88c5\uff1b\nshow databases;//\u67e5\u770b\u6570\u636e\u5e93\u5217\u8868\nshow database();//\u67e5\u770b\u5f53\u6240\u5728\u6570\u636e\u5e93\nshow tables;//\u67e5\u770b\u5f53\u524d\u6570\u636e\u5e93\u7684\u6570\u636e\u8868\u5217\u8868"),(0,a.kt)("p",null,"show\u547d\u4ee4"),(0,a.kt)("p",null,"show databases/tables;\nselect database();"),(0,a.kt)("p",null,"show create database/table/user ;\nshow drop database/table/user ;"),(0,a.kt)("p",null,"show tables from databases;"),(0,a.kt)("p",null,"\u6743\u9650\u7ba1\u7406"),(0,a.kt)("p",null,"\u7528\u6237\uff0c\u89d2\u8272"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"# \u521b\u5efa\u7528\u6237\ncreate user liwuming@'%' identified by 'admin123';\n\n# \u67e5\u770b\u7528\u6237\u4fe1\u606f\nshow create user liwuming@'%';\n\n# \u7528\u6237\u6388\u6743\ngrant \n\nselect,insert,update,\n\n\n\n# \u56de\u6536\u6743\u9650\n\n# \u5220\u9664\u7528\u6237\n\n")),(0,a.kt)("h1",{id:"\u521b\u5efa\u6570\u636e\u5e93"},"\u521b\u5efa\u6570\u636e\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"\n# \u521b\u5efa\u6570\u636e\u5e93--accp\ncreate database accp [default charset set utf8];\n\n# \u67e5\u770b\u5efa\u8868\u8bed\u53e5\nshow create database db_name;\n\n\nuse accp;\ncreate table user(\nid int auto_increment,\nsname varchar(30) not null default '' comment '\u540d\u5b57',\nage tinyint unsigned not null default 0 comment '\u5e74\u9f84',\nprimary key(id)\n)engine=innodb;\n\n\ntable\u91cd\u547d\u540d\nrename table user to student;\n\nshow master status;\n")),(0,a.kt)("p",null,"select database();"),(0,a.kt)("p",null,"\u67e5\u770b\u53d8\u91cf\nshow variables like '';"),(0,a.kt)("p",null,"\u5728mysql8\u4e4b\u540e\u589e\u52a0\u4e86\u7528\u6237\u7ec4\u7684\u6982\u5ff5"),(0,a.kt)("p",null,"\u5bf9\u4e8einnodb\u67b6\u6784"),(0,a.kt)("p",null,"\u5185\u5b58\u548c\u78c1\u76d8"))}u.isMDXComponent=!0}}]);