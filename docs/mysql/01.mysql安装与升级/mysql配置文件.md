
# 客户端配置
[client]

[mysql]


# mysql服务端配置
[mysqld]
user=mysqld
port=3306
socket=
pid-file=

# 应用目录
basedir=

# 数据目录
datadir=


## 编码设置
character-set-server=utf8

## 错误日志配置
log_error=error.log
log_warning=2


- log_warning:0,
- log_warning:1,
- log_warning>1时,表示记录各类警告