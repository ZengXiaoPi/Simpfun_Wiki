---
title: config.json文件说明
---

:::caution 不适用

此教程不适用于以下服务端：

- Forge
- Fabric

:::

## 其他插件服务端

:::caution 不适用

此段不适用于以下服务端：

- SpongeForge

:::

1. 进入实例，点击`文件`

2. 进入`plugins`文件夹

3. 上传您的插件

:::tip

注意检查插件版本，前置等。  

混合端可能出现部分插件不兼容。  

不支持 Sponge 或其他服务端的插件。

:::

## SpongeForge

:::caution 不适用

此段**仅**适用于以下服务端：

- SpongeForge

:::

1. 进入实例，点击`文件`

2. 进入`mods`文件夹

3. 上传您的 Sponge 插件。

:::danger

本服务端不支持 Bukkit 插件。  

您需要下载专门的 Sponge　插件。

:::


‘‘‘ json linenums="1"
{
  "DefStartCommand": "start",
  "Log": "WARN",
  "ServerName": "SFE4-SERVER",
  "Subtitle": "SFE4-SERVER",
  "Port": 10663,
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
‘‘‘