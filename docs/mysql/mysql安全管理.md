mysql一般应用在互联网行业中，

# 数据库的安全受哪些因素的影响

1. 外围网络
2. 主机
3. mysql本身的安全性
4. 




root账户忘记密码怎么办?

mysqld_safe --defaults-file=/etc/my.cnf --skip-grant-tables --skip-networking &

在执行set password=password('123');出现出下错误信息
ERROR 1133 (42000): Can't find any matching row in the user table
原来跳过了授权表，此时必须指定user,host可选，才能执行成功

