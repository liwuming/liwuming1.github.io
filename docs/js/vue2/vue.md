
# axios

axios配置


default.timeout=1000;


请求拦截
axios.interceptors.request.use(
	
);




响应拦截
axios.interceptors.request.use(
	
);




路由拦截










# vuex
mapState，返回的是一个对象

computed，
## getter，获取派生状态--可能过滤，查找

### mapGetters辅助函数



## Mutation
更改vuex的store中的唯一方法是提交mutation，mutation非常类似于事件，每个mutation都有一个字符串的事件类型和一个回调函数。

```js
//声明
mutation:{
	increment(state,obj){
		state.count += obj.step;
	}
}

//提交
//方式1
store.comment('increment',{step:10});

//方式2
store.comment({type:'increment',step:10});
```
通常使用常量替代mutation事件类型，




触发事件，store.commit(event);


在组件中，如何触发mutation事件？




> 都是同步事务，



## action

action类似于mutation，但又区别于mutation，

action提交的是mutation，而不是直接变更状态。
action可以包含任意异步操作。


context对象，具有与store实例相同方法和属性。


dispatch




## module，




# vue如何生成动态路由

静态路由，还有一种是动态路由，

静态路由适用于需要仅有部分页面需要进行权限控制。
动态路由可以更好的进行权限控制，适用于需要强制性登录的信息，


关于后台返回的路由，无非有两种，一种是有层级结构的，一种是无层级关系的

在请求接口获取到菜单数据信息后，将其保存到store中，



角色，控制菜单，并控制页面按钮的展示。






# 项目结构

整个应用只能有一个store对象，

只能通过事件的方式来间接更新store中的状态信息，
同步更新状态使用mutation，异步更新状态信息使用action。

如果mutation，action或者getter文件过多，可以将其分割在不同的文件中。








rowView

avue,

rowAdd,打开表单新增窗口
rowEdit,打开表单编辑窗口
rowView,打开表单查看窗口




