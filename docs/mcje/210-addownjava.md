---
title: 在简幻欢使用自定义的java
---
   
:::info
   
众所周知，简幻欢提供了一些常用的java供用户使用，但总有人**有一些特殊需求**。那么，本文将教你如何在简幻欢使用自定义的java。
     
:::

## 上传，解压java
   
> - [新建](../10-createserver.md)或[重装](../15-reinstall.md)一个为自定义-Java镜像
>      
>    
> - 从[zulu](https://www.azul.com/downloads/)或[华为镜像源](https://repo.huaweicloud.com/java/jdk/)下载需要使用的java **压缩包**
:::info

- 务必选择正确的java，不要选择arm和32位的java。    
- 不要在使用Linux镜像的实例中上传Windows版java，反之同理！
         
:::
> - [上传](../11-upload.md)并解压下载好的java
>![上传文件](/img/pages/MCJE-210-addownjava-1.png)
>![解压文件](/img/pages/MCJE-210-addownjava-2.png)
      
## 获取解压后的java路径，编辑启动参数
    
> - 根据图示，寻找到解压后的java文件。如图中当前java文件在 `/zulu21.30.15ca-jre21.0.1-linux_x64/bin` 中，则你的java路径为 `/zulu21.30.15ca-jre21.0.1-linux_x64/bin/java` ，Windows同理。
>![寻找路径](/img/pages/MCJE-210-addownjava-3.png)
>编辑你的 `start.sh` ，修改启动参数，如图示：
>![修改参数](/img/pages/MCJE-210-addownjava-4.png)

**一切准备妥当后，启动服务器即完成操作！**
![enjoy!](/img/pages/MCJE-210-addownjava-5.png)
