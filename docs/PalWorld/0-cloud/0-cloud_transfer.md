---
title: 面板服务器转移服务器存档/升级服务器版本
---

:::danger

服务有价，数据无价！  
本篇操作可能较为危险。  
在任何操作之前，先保存你的`Pal/Saved`文件夹。

:::

:::caution

本篇使用简幻云面板作为演示。  
简幻欢用户请另等专用教程。

:::

:::caution

人物数据在本地存储，更新后有可能丢失人物数据，但并未证实。

:::

本篇教程将教你如何在简幻云升级/转移你的服务器。

1. 进入`Pal/Saved/SaveGames/0`文件夹，记录这个文件夹的名称。

![](/img/pages/Cloud_transfer_2.png)

2. 保存你的`Pal/Saved`文件夹。压缩此文件夹后**下载生成的压缩文件**。

:::danger

请确认保存好你的存档！

:::

![](/img/pages/Cloud_transfer_1.png)

3. 切换游戏。

:::tip

使用调优版本做演示，因为调优版本能够自动更新。

:::

![](/img/pages/Cloud_transfer_3.png)

4. 先开启一次服务器。

:::tip

由于调优版本特性，需要先开启一次服务器，让其自己下载，并安装最新版。

:::

5. 等待加载成功，点击关闭即可。（如果迟迟没有关闭，终止就行。）

![](/img/pages/Cloud_transfer_4.png)

6. 进入`Pal/Saved/Config/LinuxServer`文件夹，进入`GameUserSettings.ini`文件，将`DedicatedServerName`改为你刚刚在第一步记录的名称。

![](/img/pages/Cloud_transfer_5.png)

![](/img/pages/Cloud_transfer_6.png)

7. 进入`Pal/Saved/SaveGames/0`文件夹，删掉这里面的文件夹。上传你第二步下载下来的压缩包，并进行解压。

![](/img/pages/Cloud_transfer_7.png)

8. 完成！