---
title: Floodgate
---

Floodgate允许从[**Geyser**](https://geysermc.org/)连接以加入在线模式(开启了正版验证)的服务器

## 下载
### 首先前往[Geyser主页](https://geysermc.org/)下载Floodgate

![GerserWebHome](/img/pages/GeyserWeb-1.png)
![FloodgateWebDownload](/img/pages/FloodgateWeb-0.png)
![FloodgateWebDownload](/img/pages/FloodgateWeb-1.png)

### 选择你需要的Geyser类型下载
Floodgate BungeeCord是给[BungeeCord](https://github.com/SpigotMC/BungeeCord)用的 Floodgate 插件

Floodgate Spigot/Paper是给[Spigot](https://www.spigotmc.org)系列插件加载器使用的 Floodgate 插件
:::tip 支持

- Paper
- Purpur
- Leaves

等等,支持spigot插件的服务端....
:::

Floodgate Velocity是给[Velocity](https://papermc.io/software/velocity)用的 Floodgate 插件

Floodgate Fabric是给[Fabric](https://fabricmc.net)Mod加载器使用的 Floodgate Mod

## 使用方法
插件版本的把Floodgate插件丢进plugins文件夹

Mod版本的丢进Mods文件夹

## 配置文件
这里演示的是插件版本

在你的服务器根目录文件找到plugins
![FloodgateConfig](/img/pages/FloodgateConfig-1.png)
然后找到配置文件夹(floodgate)
![FloodgateConfig](/img/pages/FloodgateConfig-2.png)
### config.yml
![FloodgateConfig](/img/pages/FloodgateConfig-3.png)
:::caution 温馨提示

如果你是Fabric服务器配置文件夹在服务器config目录下

:::

![FloodgateConfig](/img/pages/FloodgateConfig-4.png)
额，好像看不懂英文,随便找个翻译翻译一下
``` yml
# 在Floodgate中，基岩版玩家数据是加密发送的
# 下面的值应该指向Floodgate生成的密钥。
# 公钥应该用于Geyser，私钥用于Floodgate
key-file-name: key.pem

# Floodgate会在基岩版用户名前添加前缀以避免冲突
# 然而，某些冲突可能会导致一些插件出现问题，所以这个前缀是可配置的，使用下面的属性
# 建议使用一个不包含字母数字的前缀，以避免用户名重复的可能性。
username-prefix: "."

# 是否应该将基岩版用户名中的空格替换为'_'？
replace-spaces: true

# Floodgate的默认语言环境。默认情况下，Floodgate使用系统的语言环境
# default-locale: en_US

disconnect:
  # 当Geyser用户尝试使用无效密钥连接到服务器时应收到的断开连接消息
  invalid-key: 请通过官方Geyser连接
  # 当Geyser用户尝试使用正确的密钥但数据格式不正确连接到服务器时应收到的断开连接消息
  invalid-arguments-length: 预期{}个参数，收到{}个。Geyser是否已更新？

# 玩家链接的配置
player-link:
  # 是否启用链接系统。关闭这个将阻止
  # 即使他们已经链接，玩家也无法使用链接功能。
  enabled: true

  # 是否要求有一个链接的账户才能加入服务器。
  require-link: false

  # 当你想要托管你自己的链接数据库时，将以下选项设置为true。
  # -> 这可以与全局链接一起工作。
  # 注意，在启用此功能之前，你必须安装一个链接数据库实现，否则
  # 会导致错误。
  enable-own-linking: false

  # 以下三个选项仅在'enable-own-linking'设置为'true'时适用

  # 是否允许使用/linkaccount和/unlinkaccount
  # 你也可以使用权限floodgate.command.linkaccount和floodgate.command.unlinkaccount允许特定人员使用这些命令。
  # 这只是为了链接，已经连接的人将保持连接
  allowed: true
  # 链接代码过期的时间，以秒为单位。
  link-code-timeout: 300
  # 你想使用的玩家链接数据库类型。这个选项仅在配置目录中发现多个数据库实现时使用。
  type: sqlite

  # 是否启用全球链接。全球链接是一个中央服务器，人们可以在其中链接他们的
  # 账户（Java和基岩版）并加入启用了全球链接的服务器。全球链接的目标是
  # 通过不必在每个服务器上链接你的账户来使链接变得更容易。
  # -> 你的服务器特定的链接数据库将优先于全球链接。
  # 通常只有当你没有互联网接入或当
  # 你的互联网接入有限时才禁用全球链接。
  enable-global-linking: true

metrics:
  enabled: true
  uuid: 9aa97b8f-7d36-41fc-93a7-e00989dcdb94

# 不要改变这个
config-version: 3
```
示例配置文件服务器的UUID,与实际服务器UUID有所不同！！！
:::caution
每次调整完配置文件需要重启

不推荐**reload**命令重载

可能会遇到奇奇怪怪的问题

该页面的配置文件可能会因为随着Floodgate更新而落后
:::





