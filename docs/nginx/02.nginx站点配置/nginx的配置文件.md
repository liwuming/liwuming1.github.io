nginx的配置文件默认位于安装目录下的conf目录中

可通过nginx -V命令查看

> nginx -v仅能查看nginx版本信息，而nginx -V不仅能查看版本信息还可以查看编译信息

```bash
# nginx -v选项
[root@localhost ~]# nginx -v
nginx version: nginx/1.22.0

# nginx -V选项
[root@localhost ~]# nginx -V
nginx version: nginx/1.22.0
built by gcc 4.8.5 20150623 (Red Hat 4.8.5-44) (GCC)
built with OpenSSL 1.0.2k-fips  26 Jan 2017
TLS SNI support enabled
configure arguments: --sbin-path=/usr/sbin/nginx --pid-path=/usr/local/nginx/nginx.pid --conf-path=/etc/nginx.conf --with-http_ssl_module --with-http_gzip_static_module
```


nginx的配置文件分为三部分：全局块，events块，http块

# 全局块

user,
worker_process




## 其他全局块指令
- daemon

作用：设置nginx是否以守护进程方式启动

语法：on/off

默认值：on


- pid,

- error_log,
- include

# events块
- accpect_

- multi_accept

- worker_connects

- use
设置nginx的事件处理模型
 

# http块

- mime
用来设置可识别的mime类型


浏览器是多用途的应用软件，其主要用途是发送http请求，展示http请求响应的内容，那么浏览器是如何显示不同的内容呢？答案就是mime类型

那mime为何物？所谓mime即媒体类型，是一种标准，

常见的mime类型


text类型
text/plain:默认的文本类型
text/html:默认的文本类型
text/css:默认的文本类型
text/javaScript:默认的文本类型

image类型
image/png:
image/jpge:

application:
application/-stream
application/json




## default_type



## sendfile
是否使用sendfile函数来处理静态文件，sendfile


