---
title: 服务端常见崩溃类型
---

:::tip 提示
     
服务端崩溃看不懂？看这里！

:::
   
>## "watchdog错误——狗叫"
   
----
     
### 此类报错一般是这样的:
```
---- Minecraft Crash Report ----
Description: Watching Server
java.lang.Error: Watchdog
... ...
```
#### 报错原因:
这是由于MC原版自带的watchdog机制，在滞后/卡顿超过  `server.properties`  所规定的时间后，认为服务端已崩溃，从而结束进程。
#### 解决办法:
 - 将 `server.properties` 中的 `max-tick-time`  改为更大的数值或-1(不会完美解决问题，如频繁出现内存溢出或卡顿问题，应考虑升级您的配置。)   
     
:::warning 警告
   
如在上述操作后依旧感觉卡顿，应该注意是否添加了严重影响性能的mod，或者检查存档是否有导致服务端卡顿的机器等。
   
:::
     
----
      
施工中... ...