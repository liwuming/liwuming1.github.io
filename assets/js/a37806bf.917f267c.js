"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),k=a,d=c["".concat(u,".").concat(k)]||c[k]||m[k]||l;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},o=void 0,i={unversionedId:"nginx/\u8def\u7531\u91cd\u5199/rewrite\u529f\u80fd",id:"nginx/\u8def\u7531\u91cd\u5199/rewrite\u529f\u80fd",title:"rewrite\u529f\u80fd",description:"rewrite\u51e0\u4e4e\u662fweb\u670d\u52a1\u5668\u4ea7\u54c1\u4e2d\u51e0\u4e4e\u5fc5\u5907\u7684\u529f\u80fd\uff0c\u7528\u4e8e\u5bf9url\u7684\u91cd\u5199\uff0c\u5f53\u7136\u4f5c\u4e3a\u4f7f\u7528\u5e7f\u6cdb\u7684nginx\u5fc5\u987b\u6709\u8be5\u529f\u80fd",source:"@site/docs\\nginx\\05.\u8def\u7531\u91cd\u5199\\rewrite\u529f\u80fd.md",sourceDirName:"nginx/05.\u8def\u7531\u91cd\u5199",slug:"/nginx/\u8def\u7531\u91cd\u5199/rewrite\u529f\u80fd",permalink:"/docs/nginx/\u8def\u7531\u91cd\u5199/rewrite\u529f\u80fd",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nginx/05.\u8def\u7531\u91cd\u5199/rewrite\u529f\u80fd.md",tags:[],version:"current",frontMatter:{},sidebar:"nginx",previous:{title:"URi\u91cd\u5199\u529f\u80fd",permalink:"/docs/nginx/\u8def\u7531\u91cd\u5199/URi\u91cd\u5199\u529f\u80fd"},next:{title:"LVS\u56db\u5c42\u8d1f\u8f7d\u5747\u8861",permalink:"/docs/nginx/\u8d1f\u8f7d\u5747\u8861/LVS\u56db\u5c42\u8d1f\u8f7d\u5747\u8861"}},u={},p=[{value:"set\u6307\u4ee4",id:"set\u6307\u4ee4",level:2},{value:"set\u6307\u4ee4",id:"set\u6307\u4ee4-1",level:2},{value:"if\u6307\u4ee4",id:"if\u6307\u4ee4",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"rewrite\u51e0\u4e4e\u662fweb\u670d\u52a1\u5668\u4ea7\u54c1\u4e2d\u51e0\u4e4e\u5fc5\u5907\u7684\u529f\u80fd\uff0c\u7528\u4e8e\u5bf9url\u7684\u91cd\u5199\uff0c\u5f53\u7136\u4f5c\u4e3a\u4f7f\u7528\u5e7f\u6cdb\u7684nginx\u5fc5\u987b\u6709\u8be5\u529f\u80fd"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"nginx\u670d\u52a1\u5668\u7684rewrite\u4f9d\u8d56\u4e8ePCRE\u7684\u652f\u6301,\u56e0\u6b64\u5728\u7f16\u8bd1\u5b89\u88c5nginx\u5668\u65f6\uff0c\u9700\u8981\u5b89\u88c5pcre\u5e93")),(0,a.kt)("p",null,"rewrite\u7684\u5e94\u7528\u573a\u666f\nurl\u91cd\u5199\n\u72ec\u7acb\u57df\u540d\n\u57df\u540d\u8df3\u8f6c\n\u57df\u540d\u955c\u50cf\n\u76ee\u5f55\u81ea\u52a8\u6dfb\u52a0/\n\u5408\u5e76\u76ee\u5f55\n\u5b9e\u73b0\u9632\u76d7\u94fe"),(0,a.kt)("h1",{id:"rewrite\u7684\u76f8\u5173\u547d\u4ee4"},"rewrite\u7684\u76f8\u5173\u547d\u4ee4"),(0,a.kt)("h2",{id:"set\u6307\u4ee4"},"set\u6307\u4ee4"),(0,a.kt)("p",null,"\u7528\u6765\u8bbe\u7f6e\u4e00\u4e2a\u53d8\u91cf"),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u53d8\u91cf\u540d\u7684\u547d\u540d\uff0c\u4e0d\u53ef\u4e0e\u5168\u5c40\u53d8\u91cf\u91cd\u540d\uff0c\u90a3\u5168\u5c40\u53d8\u91cf\u6709\u54ea\u4e9b\uff1f"),(0,a.kt)("p",null,"document_uri\uff0c\u8bbf\u95eeurl\u7684uri\nremote_addr,\u5ba2\u6237\u7aefip\nargs\uff0c\u8bbf\u95eeurl\u4e2d\u7684\u53c2\u6570\u5217\u8868"),(0,a.kt)("p",null,"http_user_agent,\u5ba2\u6237\u7aefagent\u4fe1\u606f\nhttp_cookie,\u5ba2\u6237\u7aefagent\u4fe1\u606f"),(0,a.kt)("p",null,"document_root #\u5f53\u524d\u8bf7\u6c42\u5728root\u6307\u4ee4\u4e2d\u6307\u5b9a\u7684\u503c\u3002\ndocument_uri #\u4e0euri\u76f8\u540c\u3002\nhost #\u8bf7\u6c42\u4e3b\u673a\u5934\u5b57\u6bb5\uff0c\u5426\u5219\u4e3a\u670d\u52a1\u5668\u540d\u79f0\u3002\nhostname #Set to themachine\u2019s hostname as returned by gethostname\nhttp_HEADER"),(0,a.kt)("p",null,'args #\u8fd9\u4e2a\u53d8\u91cf\u7b49\u4e8e\u8bf7\u6c42\u884c\u4e2d(GET\u8bf7\u6c42)\u7684\u53c2\u6570\uff0c\u5982\uff1afoo=123&bar=blahblah;\nis_args #\u5982\u679c\u6709args\u53c2\u6570\uff0c\u8fd9\u4e2a\u53d8\u91cf\u7b49\u4e8e\u201d?\u201d\uff0c\u5426\u5219\u7b49\u4e8e\u201d"\uff0c\u7a7a\u503c\u3002'),(0,a.kt)("p",null,"http_user_agent #\u5ba2\u6237\u7aefagent\u4fe1\u606f\nhttp_cookie #\u5ba2\u6237\u7aefcookie\u4fe1\u606f"),(0,a.kt)("p",null,"limit_rate #\u8fd9\u4e2a\u53d8\u91cf\u53ef\u4ee5\u9650\u5236\u8fde\u63a5\u901f\u7387\u3002\nrequest_body_file #\u5ba2\u6237\u7aef\u8bf7\u6c42\u4e3b\u4f53\u4fe1\u606f\u7684\u4e34\u65f6\u6587\u4ef6\u540d\u3002\nrequest_method #\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u52a8\u4f5c\uff0c\u901a\u5e38\u4e3aGET\u6216POST\u3002\nremote_addr #\u5ba2\u6237\u7aef\u7684IP\u5730\u5740\u3002\nremote_port #\u5ba2\u6237\u7aef\u7684\u7aef\u53e3\u3002\nrequest_method #GET\u6216POST\nrequest_filename #\u5f53\u524d\u8bf7\u6c42\u7684\u6587\u4ef6\u8def\u5f84\uff0c\u7531root\u6216alias\u6307\u4ee4\u4e0eURI\u8bf7\u6c42\u751f\u6210\u3002\nrequest_uri #\u5305\u542b\u8bf7\u6c42\u53c2\u6570\u7684\u539f\u59cbURI\uff0c\u4e0d\u5305\u542b\u4e3b\u673a\u540d\uff0c\u5982\uff1a\u201d/foo/bar.php?arg=baz\u201d\u3002\u4e0d\u80fd\u4fee\u6539\u3002"),(0,a.kt)("p",null,"\u8bb0\u5fc6\u65b9\u6cd5"),(0,a.kt)("p",null,"\u5ba2\u6237\u7aef\u6765\u8bf7\u6c42\u670d\u52a1\u7aef\u4fe1\u606f\uff0c\n\u5148\u8bb0\u5fc6\u5ba2\u6237\u7aef\u4fe1\u606f\nremote_addr,\u5ba2\u6237\u7aefip\nremote_port,\u5ba2\u6237\u7aef\u7aef\u53e3\u53f7"),(0,a.kt)("p",null,"args\uff0c\nis_args,"),(0,a.kt)("p",null,"http_cookie\nhttp_user_agent"),(0,a.kt)("p",null,"remote_addr\nremote_port\nrequest_method\nargs\nis_args"),(0,a.kt)("p",null,"if\nbreak\nreturn\nrewrite\nrewrite_log"),(0,a.kt)("h2",{id:"set\u6307\u4ee4-1"},"set\u6307\u4ee4"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u53d8\u91cf"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u8bed\u6cd5\u8bf4\u660e"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bed\u6cd5\u8bf4\u660e")))),(0,a.kt)("h2",{id:"if\u6307\u4ee4"},"if\u6307\u4ee4"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7528\u4e8e\u6267\u884c\u903b\u8f91\u6761\u4ef6\u5224\u65ad"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u8bed\u6cd5\u8bf4\u660e"),(0,a.kt)("td",{parentName:"tr",align:null},"if (condition){   //\u6267\u884c   }")))),(0,a.kt)("p",null,"condition\u652f\u6301\u4ee5\u4e0b\u683c\u5f0f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53d8\u91cf\u540d,0\u548c\u7a7a\u5b57\u7b26\u4e32\u4e3afalse,\u5176\u4ed6\u4e3atrue"),(0,a.kt)("li",{parentName:"ol"},"=/!=,\u7528\u4e8e\u6bd4\u8f83\u5b57\u7b26\u4e32\u4e0e\u53d8\u91cf\u662f\u5426\u76f8\u7b49,\u76f8\u7b49\u4e3atrue,\u4e0d\u80fd\u4e3afalse"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u5bf9\u53d8\u91cf\u8fdb\u884c\u5339\u914d--~,~",(0,a.kt)("em",{parentName:"li"},",!~,!~")),(0,a.kt)("li",{parentName:"ol"},"\u76ee\u5f55\u662f\u5426\u5b58\u5728 -d"),(0,a.kt)("li",{parentName:"ol"},"\u6587\u4ef6\u662f\u5426\u5b58\u5728 -f"),(0,a.kt)("li",{parentName:"ol"},"\u6587\u4ef6\u6216\u76ee\u5f55\u662f\u5426\u5b58\u5728-e"),(0,a.kt)("li",{parentName:"ol"},"\u6587\u4ef6\u662f\u5426\u53ef\u6267\u884c-x")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"location /hello1 {\n    if ($request_method = GET){\n        return 200 'ok';\n    }   \n    return 200 'post';\n}\n\nlocation /hello2 {\n    if ($http_user_agent ~ AppleWebKit){\n        return 200 'Google Chrome';\n    }   \n    return 200 'firefox';\n}\n\nlocation /hello3 {\n    if ( !-f $request_filename){\n        return 404 'file not found';\n    }   \n    return 200 'file is exists';\n}\n\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u65e2\u7136\u8bed\u6cd5\u50cfjs\u7684if\u8bed\u53e5\uff0c\u597d\u5947\u662f\u5426\u652f\u6301\u53d6\u53cd\u64cd\u4f5c,\u5982if(!$num){}?\u7ecf\u6d4b\u8bd5\u53d1\u73b0\u4e0d\u652f\u6301\u53d6\u53cd\u64cd\u4f5c")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"if\u6307\u4ee4\u548cjs\u4e2d\u7684if\u8bed\u53e5\u7c7b\u4f3c--\u90fd\u4f1a\u5728condition\u4e3atrue\u65f6--\u4e0d\u4e3a\u7a7a\u4e14\u4e0d\u4e3a0\uff0c\u624d\u4f1a\u6267\u884c\u62ec\u53f7\u5185\u7684\u4ee3\u7801\uff0c\u4f46\u4ee5\u4e0b\u4e24\u70b9\u503c\u5f97\u6ce8\u610f\uff1a"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"if\u4e0e()\u4e4b\u95f4\u5fc5\u987b\u81f3\u5c11\u6709\u4e00\u4e2a\u7a7a\u683c"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u53d8\u91cf\u548c\u5b57\u7b26\u4e32\u6bd4\u8f83\u65f6\uff0c\u5b57\u7b26\u4e32\u53ef\u4f7f\u7528\u5f15\u53f7\u62ec\u8d77\u6765\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u4f7f\u7528\u5f15\u53f7"))),(0,a.kt)("h1",{id:"break\u6307\u4ee4"},"break\u6307\u4ee4"),(0,a.kt)("h1",{id:"last\u6307\u4ee4"},"last\u6307\u4ee4"),(0,a.kt)("p",null,"break\u548clast\u7684\u7528\u6cd5\u76f8\u540c,\u4f46\u662f\u542b\u4e49\u4e0d\u540c--\u9700\u8981\u653e\u5728rewrite\u5c3e\u90e8,\u7528\u6765\u63a7\u5236\u91cd\u5199\u540e\u7684\u94fe\u63a5\u662f\u5426\u7ee7\u7eed\u88abnginx\u914d\u7f6e\u6267\u884c"),(0,a.kt)("p",null,"\u5728location\u5916\u90e8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"\nrewrite /1.html /2.html break;\nrewrite /2.html /3.html;\n\nlocation /2.html {\n    return 200 'hello world';\n}\n")),(0,a.kt)("p",null,"\u8bbf\u95ee/1.html\u65f6\uff0c\u5728\u6ca1\u6709\u4e0b\u65b9location\u5757\u65f6\uff0c\u4f1a\u6309\u7167\u88ab\u91cd\u5199\u52302.html;\n\u5728\u6709\u4e0b\u65b9location\u5757\u65f6\uff0c\u4f1a\u7ee7\u7eed\u6267\u884clocation\u5757"),(0,a.kt)("p",null,"\u5728location\u5185\u90e8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"server{\n    listen 80; \n    server_name test.com;\n    root /tmp/123.com;\n    \n    location / {\n        rewrite /1.html /2.html break;\n        rewrite /2.html /3.html;\n    }\n    location /2.html{\n        rewrite /2.html /a.html;\n    }\n    location /3.html{\n        rewrite /3.html /b.html;\n    }\n}\n")),(0,a.kt)("p",null,"\u5f53\u8bbf\u95ee/1.html\u65f6\uff0c\u6700\u7ec8\u8bbf\u95ee\u7684\u662f2.html;\u4e5f\u5c31\u662f\u8bf4\u5728location\u5185\u90e8\u9047\u5230break\u5c31\u560e\u7136\u800c\u6b62\u4e86\uff0c\u56e0\u4e3a\u6ca1\u6709\u6bd4location\u66f4\u5c0f\u7684\u4f5c\u7528\u57df\u4e86\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u628abreak\u6362\u6210last\u4f1a\u600e\u6837\u5462\uff1f\u90a3\u6837\u7684\u8bdd\u4f1a\u6700\u7ec8\u8bbf\u95eea.html;"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728location{}\u5185\u90e8\uff0c\u9047\u5230last\uff0c\u672clocation{}\u5185\u540e\u7eed\u6307\u4ee4\u4e0d\u518d\u6267\u884c\uff0c\u800c\u91cd\u5199\u540e\u7684url\u518d\u6b21\u4ece\u5934\u5f00\u59cb\uff0c\u4ece\u5934\u5230\u5c3e\u5339\u914d\u4e00\u904d\u89c4\u5219\u3002")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/oldxu/p/11568223.html"},"https://www.cnblogs.com/oldxu/p/11568223.html")),(0,a.kt)("h1",{id:"return\u6307\u4ee4"},"return\u6307\u4ee4"),(0,a.kt)("p",null,"\u7528\u4e8e\u5b8c\u6210\u8bf7\u6c42\u5904\u7406\uff0c\u76f4\u63a5\u50cf\u5ba2\u6237\u7aef\u8fd4\u56de\nrerturn coce ","[text]","|","[code]"," url;"),(0,a.kt)("p",null,'arg_PARAMETER #\u8fd9\u4e2a\u53d8\u91cf\u5305\u542bGET\u8bf7\u6c42\u4e2d\uff0c\u5982\u679c\u6709\u53d8\u91cfPARAMETER\u65f6\u7684\u503c\u3002\nargs #\u8fd9\u4e2a\u53d8\u91cf\u7b49\u4e8e\u8bf7\u6c42\u884c\u4e2d(GET\u8bf7\u6c42)\u7684\u53c2\u6570\uff0c\u5982\uff1afoo=123&bar=blahblah;\nbinary_remote_addr #\u4e8c\u8fdb\u5236\u7684\u5ba2\u6237\u5730\u5740\u3002\nbody_bytes_sent #\u54cd\u5e94\u65f6\u9001\u51fa\u7684body\u5b57\u8282\u6570\u6570\u91cf\u3002\u5373\u4f7f\u8fde\u63a5\u4e2d\u65ad\uff0c\u8fd9\u4e2a\u6570\u636e\u4e5f\u662f\u7cbe\u786e\u7684\u3002\ncontent_length #\u8bf7\u6c42\u5934\u4e2d\u7684Content-length\u5b57\u6bb5\u3002\ncontent_type #\u8bf7\u6c42\u5934\u4e2d\u7684Content-Type\u5b57\u6bb5\u3002\ncookie_COOKIE #cookie COOKIE\u53d8\u91cf\u7684\u503c\ndocument_root #\u5f53\u524d\u8bf7\u6c42\u5728root\u6307\u4ee4\u4e2d\u6307\u5b9a\u7684\u503c\u3002\ndocument_uri #\u4e0euri\u76f8\u540c\u3002\nhost #\u8bf7\u6c42\u4e3b\u673a\u5934\u5b57\u6bb5\uff0c\u5426\u5219\u4e3a\u670d\u52a1\u5668\u540d\u79f0\u3002\nhostname #Set to themachine\u2019s hostname as returned by gethostname\nhttp_HEADER\nis_args #\u5982\u679c\u6709args\u53c2\u6570\uff0c\u8fd9\u4e2a\u53d8\u91cf\u7b49\u4e8e\u201d?\u201d\uff0c\u5426\u5219\u7b49\u4e8e\u201d"\uff0c\u7a7a\u503c\u3002\nhttp_user_agent #\u5ba2\u6237\u7aefagent\u4fe1\u606f\nhttp_cookie #\u5ba2\u6237\u7aefcookie\u4fe1\u606f\nlimit_rate #\u8fd9\u4e2a\u53d8\u91cf\u53ef\u4ee5\u9650\u5236\u8fde\u63a5\u901f\u7387\u3002\nquery_string #\u4e0eargs\u76f8\u540c\u3002\nrequest_body_file #\u5ba2\u6237\u7aef\u8bf7\u6c42\u4e3b\u4f53\u4fe1\u606f\u7684\u4e34\u65f6\u6587\u4ef6\u540d\u3002\nrequest_method #\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684\u52a8\u4f5c\uff0c\u901a\u5e38\u4e3aGET\u6216POST\u3002\nremote_addr #\u5ba2\u6237\u7aef\u7684IP\u5730\u5740\u3002\nremote_port #\u5ba2\u6237\u7aef\u7684\u7aef\u53e3\u3002\nremote_user #\u5df2\u7ecf\u7ecf\u8fc7Auth Basic Module\u9a8c\u8bc1\u7684\u7528\u6237\u540d\u3002\nrequest_completion #\u5982\u679c\u8bf7\u6c42\u7ed3\u675f\uff0c\u8bbe\u7f6e\u4e3aOK. \u5f53\u8bf7\u6c42\u672a\u7ed3\u675f\u6216\u5982\u679c\u8be5\u8bf7\u6c42\u4e0d\u662f\u8bf7\u6c42\u94fe\u4e32\u7684\u6700\u540e\u4e00\u4e2a\u65f6\uff0c\u4e3a\u7a7a(Empty)\u3002\nrequest_method #GET\u6216POST\nrequest_filename #\u5f53\u524d\u8bf7\u6c42\u7684\u6587\u4ef6\u8def\u5f84\uff0c\u7531root\u6216alias\u6307\u4ee4\u4e0eURI\u8bf7\u6c42\u751f\u6210\u3002\nrequest_uri #\u5305\u542b\u8bf7\u6c42\u53c2\u6570\u7684\u539f\u59cbURI\uff0c\u4e0d\u5305\u542b\u4e3b\u673a\u540d\uff0c\u5982\uff1a\u201d/foo/bar.php?arg=baz\u201d\u3002\u4e0d\u80fd\u4fee\u6539\u3002\nscheme #HTTP\u65b9\u6cd5\uff08\u5982http\uff0chttps\uff09\u3002\nserver_protocol #\u8bf7\u6c42\u4f7f\u7528\u7684\u534f\u8bae\uff0c\u901a\u5e38\u662fHTTP/1.0\u6216HTTP/1.1\u3002\nserver_addr #\u670d\u52a1\u5668\u5730\u5740\uff0c\u5728\u5b8c\u6210\u4e00\u6b21\u7cfb\u7edf\u8c03\u7528\u540e\u53ef\u4ee5\u786e\u5b9a\u8fd9\u4e2a\u503c\u3002\nserver_name #\u670d\u52a1\u5668\u540d\u79f0\u3002\nserver_port #\u8bf7\u6c42\u5230\u8fbe\u670d\u52a1\u5668\u7684\u7aef\u53e3\u53f7\u3002'))}m.isMDXComponent=!0}}]);