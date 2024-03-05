---
title: 自定义开设forge服务器
---
   
:::info
   
本教程适用于如下场景：   
- 因官方镜像更新不及时导致的forge版本低，从而无法运行某些mod
- 希望能够使用官方镜像未给出的forge版本
   
:::

:::tip
   
如你希望使用curseforge标准的forge整合包，可从[这里](./202-forgeinstall.md#修改参数启动你的forge)开始。
   
:::

- ## 获取Forge安装包
   
>从[forge官方下载地址](https://files.minecraftforge.net/net/minecraftforge/forge/)获取对应版本的安装包
     
:::tip
   
由于forge官方的下载链接存在广告，可复制下载链接后自行获取真正的下载链接。
   
:::
   
- ## 安装forge服务端
   
> - [新建](../10-createserver.md)或[重装](../15-reinstall.md)一个为自定义-Java镜像，并将文件使用[官网网页控制台上传](../11-upload.md)或[sftp上传](../30-sftp.md)
> - 修改 `start.sh` 按照下方格式设置启动参数:
> ![1](/img/pages/MCJE-202-forgeinstall-1.png)
> 可参考的参数如下：
> ```
>  ${openjdk17} -Xms1024M -Xmx${maxmem}M -jar Forge-1.20.1-47.2.20.jar nogui   --installServer
> ```
> - 运行安装包，等待出现下图提示时，则你成功安装了forge。
> ![2](/img/pages/MCJE-202-forgeinstall-2.png)
   
- ## 修改参数，启动你的forge！
       
> - 前往 `文件` 页，进入 `run.sh` ，并复制下图内容:
> ![3](/img/pages/MCJE-202-forgeinstall-3.png)
> - 修改 `start.sh` 按照下方格式设置启动参数:
> ![3](/img/pages/MCJE-202-forgeinstall-4.png)
> - 启动服务器后，会发现很快就停止运行，这是由于未同意eula协议导致，在 `文件` 页中修改 `eula.txt` ，将 `eula=false` 改为 `eula=true` ，再次启动即可！
 

