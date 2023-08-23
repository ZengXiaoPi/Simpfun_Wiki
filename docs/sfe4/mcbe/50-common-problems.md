---
title: 基岩版服务器常见问题
---
## 无法获得管理员
可能的原因：

* 玩家不在线
* 控制台输入指令时带斜杠，即"/"
* 玩家代号大小写不匹配

## 无法开关游戏设置
请看 **基岩版服务器配置文件介绍 - 隐藏的 op-permission-level**

## 无法开启作弊？

请看 [**基岩版服务器配置文件介绍**](/docs/sfe4/mcbe/server-properties)
在`server.properties`内有这样一行配置：
```
allow-cheats=false
# 为世界启用作弊模式，允许使用例如 /give 等指令。
# 允许值(请填写引号内的内容): "true"开 或 "false"关
```
↑看到那个`false`了吗？把它改成`true`,然后你就可以开启作弊辣！

![这个B问题群里天天都有人问](/img/pages/MCBEProblems-1.png)
~~(群友的愤怒)~~

## 没有显示坐标

在控制台输入以下命令：

```
gamerule showcoordinates true
注：需要启用作弊
```

 这个问题也天天有人问，却没人写（
