---
title: 关于config.json
---

:::tip

## 本配置文件说明基于RW-HPS官方文档修改，文档地址：[https://github.com/RW-HPS/RW-HPS/blob/master/docs/zh/run/Config.md](https://github.com/RW-HPS/RW-HPS/tree/master/docs)

在SFE4中，该文件在`/data`文件夹中,负责服务端的配置。

注意: RW-HPS**不支持**热重载配置,每次修改配置请先关闭服务器!

:::

:::info

true=启用，false=禁用

:::

-----

## 在SFE4中，config.json文件内容如下：

```json

{
  "DefStartCommand": "start",
  "Log": "WARN",
  "ServerName": "SFE4-SERVER",
  "Subtitle": "SFE4-SERVER",
  "Port": 10000,
  "Passwd": "",
  "MaxPlayer": 10,
  "MaxGameIngTime": 7200,
  "StartMinPlayerSize": -1,
  "AutoStartMinPlayerSize": 4,
  "MaxMessageLen": 40,
  "MaxUnit": 200,
  "DefIncome": 1.0,
  "OneAdmin": true,
  "SaveRePlayFile": true,
  "IpCheckMultiLanguageSupport": false,
  "SingleUserRelay": false,
  "SingleUserRelayMod": false,
  "WebGameBypassPort": false,
  "WebService": false,
  "SeparateWebPort": 5124,
  "SSL": false,
  "SSLPasswd": "RW-HPS",
  "AutoReLoadMap": false,
  "Turnstoneintogold": false,
  "RunPid": 12
}

```
## 其中各项配置解释如下：


---

### defStartCommand
#### 服务器默认启动命令(str)
Server模式为**start**  
Relay模式为**startrelay**/**startrelaytest**
> startrelay 直接转发消耗更多带宽，效果与使用 VPN 转发相同  
> startrelaytest 使用多播, 减少宽带消耗

默认配置为**start**

---

### log
#### log记录等级(str)
决定log记录的级别,通常级别越高输出内容越多  
> 输入错的则默认 ALL  
> OFF FATAL ERROR WARN INFO DEBUG TRACE ALL  

默认配置为**WARN**

---

### serverName
#### 服务器名(str)
服务器在列表处的服务器名  

默认配置为**SFE4-SERVER**

---

### subtitle
#### 地图名(str)
服务器在列表处的地图名  
未配置则为地图名  

默认**SFE4-SERVER**

---

### port
#### 服务器端口(int)
指定服务器所使用的端口  

默认配置为**控制台给出的端口**

---

### passwd
#### 服务器密码(str)
给服务器设置密码,所有玩家进入服务器时需要输入密码才能进入  
未配置则不设置密码

默认**未配置**

---

### maxPlayer
#### 最大玩家数(int)
设置服务器所能容纳的最大玩家数

默认配置为**10**

---

### maxGameIngTime
#### 最长游戏时间(int)
设置游戏运行的时间,若达到设定的时间,则关闭此房间(不关闭服务器)  
配置为`-1`时则无限制  
单位: 秒(sec)  

默认配置为**7200**

---

### startMinPlayerSize
#### 最小开始人数(int)
服务器开始游戏所需的最小人数  
配置为`-1`则无限制  

默认配置为**无限制**

---

### autoStartMinPlayerSize
#### 自动开始人数(int)
当服务器人数大于或等于(≥)此配置项时,服务器将自动开始游戏  
配置为`-1`则禁用此功能

默认配置为**4**

---

### maxMessageLen
#### 最大发言长度(int)
服务器所允许的最大发言长度  

默认配置为**40**

---

### maxUnit
#### 最大单位数量(int)
服务器所允许的最大单位数量  

默认配置为**200**

---

### defIncome
#### 默认倍率(float)
服务器默认资金倍率(支持小数)  

默认配置为**1.0**

---

### oneAdmin
#### 将第一个进入的玩家设置为管理员(bool)
服务器将第一个进入服务器的玩家设置为管理员

默认配置为**启用**

---

### saveRePlayFile
#### 保存RePlay文件(bool)
服务器允许客户端保存RePlay文件用于回放游戏过程  

默认配置为**启用**

---

### ipCheckMultiLanguageSupport
#### 基于IP判断多语言支持(bool)
可以通过玩家IP判断玩家的国家从而对每个玩家都显示它的本国语言(前提是翻译文件有那个语言) 

默认配置为**禁用**

---

### singleUserRelay
#### Relay单用户模式(bool)
类似与Relay模式,但是只有一个房间  
>如果你不知道这是什么的话不建议修改

默认配置为**禁用**

---

### singleUserRelayMod
#### Relay单用户模式的mod支持(bool)
为Relay单用户模式启用mod支持  
>如果你不知道这是什么不建议修改

默认配置为**禁用**

---

### ssl
#### 启用HTTPS(bool)

不建议使用SSL，这可能导致你的SFE4账号被**封禁**

启用HTTP服务器的SSL(即HTTPS) 默认配置为**禁用**

---

### sslPasswd
#### SSL证书的密码(str)

警告: 明文密码
要配置SSL,你需要在和jar同级的地方放置ssl.jks(大小写敏感)
然后在此配置项输入JKS证书密码

默认**RW-HPS**

---

### turnStoneIntoGold
#### 点石成金(bool)
字面意思  
建筑单位*不需要*时间并且*不需要*资金  

默认配置为**禁用**

---

### runPid
#### 服务器运行PID(int)
你不需要知道这是干什么的,也不需要动它  
> 如果你想知道的话:  
> 提供当前 JVM 的 pid, 便于使用其他程序关闭 JVM

---
