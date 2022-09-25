

如何同内核交互--命令

所谓命令，就是


bash是什么，




终端是什么？


学习计算机多年，感觉自己有些编程经验，但是对于一些概念，却又说不出自己的理解，


何为终端，与计算系统系统相连的输入输出设备称之为终端



终端的类型
1、按照功能，分为输入终端和输出终端
2、按照与主机的距离，分为本地终端和远程终端
3、按照与主机的连接方式，分为物理终端和虚拟终端


物理终端在tty



使用`who`命令可以查看当前登录系统的用户及所使用的终端类型




什么是shell和bash


发送指令给bash，由bash交给linux系统的内核执行，




# 什么是bash

bash是众多linux发行版的默认shell，要了解bash，就不得不先了解一下shell

什么是shell


shell的类型
tcsh，zsh，bash


如何查看当前系统的默认shell呢？
```bash
[root@localhost ~]# echo $SHELL
/bin/bash
```
> 当前系统所使用的shell类型保存在系统环境变量--$SHELL中

如何查看当前系统所支持的shell类型呢？
```bash
/bin/sh
/bin/bash
/usr/bin/sh
/usr/bin/bash
```

细心的话会发现，`/bin/sh`和`/usr/bin/sh``分别是`/bin/bash`和`/usr/bin/bash`的连接文件
```bash
[root@localhost ~]# ll /bin/sh /usr/bin/sh
lrwxrwxrwx. 1 root root 4 Sep 14 19:40 /bin/sh -> bash
lrwxrwxrwx. 1 root root 4 Sep 14 19:40 /usr/bin/sh -> bash
```

bash何以成为默认的shell？




