---
title: 更新 TModLoader
---

目前简幻欢提供的 TModLoader 并非最新版，会导致灾厄（Calamity）无法正常运行。  

我们需要手动更新 TModLoader 以解决这个问题。

1. 下载 [Watt Toolkit](https://steampp.net/) ，打开后勾选 Github 选项，并加速。

2. 进入 [Release](https://github.com/tModLoader/tModLoader/releases/latest) ，下载 `TModLoader.zip` 。

3. 进入控制台，删除以下文件和文件夹：

<details>
    <summary>
      展开文件列表
    </summary>

文件夹：

- DedicatedServerUtils

- LaunchUtils

- Libraries

- tModPorter

文件：

- tMLMod.targets

- tModLoader.deps.json

- tModLoader.dll

- tModLoader.pdb

- tModLoader.runtimeconfig.dev.json

- tModLoader.runtimeconfig.json

- tModLoader.xml

</details>


4. 将刚刚下载的 `TModLoader.zip` 上传，并解压即可。