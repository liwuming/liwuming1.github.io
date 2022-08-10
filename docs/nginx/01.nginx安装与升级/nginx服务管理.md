

在nginx安装之后，会多出一个nginx二进制程序，对于nginx命令有很多参数，可通过`nginx -?`来查看
```bash
[root@localhost ~]# nginx -?
nginx version: nginx/1.22.0
Usage: nginx [-?hvVtTq] [-s signal] [-p prefix]
             [-e filename] [-c filename] [-g directives]

Options:
  -?,-h         : this help
  -v            : show version and exit
  -V            : show version and configure options then exit
  -t            : test configuration and exit
  -T            : test configuration, dump it and exit
  -q            : suppress non-error messages during configuration testing
  -s signal     : send signal to a master process: stop, quit, reopen, reload
  -p prefix     : set prefix path (default: /usr/local/nginx/)
  -e filename   : set error log file (default: logs/error.log)
  -c filename   : set configuration file (default: /etc/nginx.conf)
  -g directives : set global directives out of configuration file
```

nginx常用参数有三个：-c,-s,-t
- -c，用于指定配置文件所在路径
- -s，用于给nginx发送信号，完成指定操作
- -t，用于检测nginx配置文件是否有语法错误


关于nginx的信号有哪些？
- -reopen，
- -reload，优雅的重新加载nginx配置文件
- -quit，优雅的结束nginx服务
- -stop，立即结束nginx服务



托管systemd来管理nginx服务

```vi
cat > /etc/systemd/system/nginx.service <<-EOF
[Unit]
Description=The NGINX HTTP and reverse proxy server
After=network.target remote-fs.target nss-lookup.target


[Service]
Type=forking
PIDFile=/usr/local/nginx/nginx.pid
ExecStartPre=/usr/local/sbin/nginx -t -c /etc/nginx.conf
ExecStart=/usr/local/sbin/nginx -c /etc/nginx.conf
ExecReload=/usr/local/sbin/nginx -s reload
ExecStop=/usr/local/sbin/nginx -s stop
PrivateTmp=true

[Install]
WantedBy=multi-user.target
EOF
```


# 启动nginx
systemctl start nginx

# 查看nginx状态
systemctl status nginx

# 停止nginx服务
systemctl stop nginx

# 设置nginx开机启动
systemctl enable nginx


