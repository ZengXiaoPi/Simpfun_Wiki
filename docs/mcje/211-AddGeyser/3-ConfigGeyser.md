---
title: 配置Geyser
---

# 配置Geyser

## 首次加载Geyser,如果你是首次加载Geyser,请等待它把语言文件之类的下载完成

![](/img/pages/FirstTimeLoadingGeyser.png)

### 这里演示的是插件版本
在你的服务器根目录文件找到plugins
![](/img/pages/GeyserFile-1.png)

然后找到配置文件夹(Geyser-xxx)

"xxx"是你的Geyser类型,这里使用的是Paper服务端,Spigot的下游服务端
![](/img/pages/GeyserFile-2.png)

:::caution 温馨提示

不同的类型的Geyser这个文件夹名字会不一样

比如Fabric的是Geyser-Fabric

以及如果你是Fabric和Neoforge,配置文件夹在服务器config目录下

:::

### config.yml
![](/img/pages/GeyserFile-3.png)
配置方面基本只要留意这个文件

![](/img/pages/GeyserFile-4.png)

额，好像看不懂英文,随便找个翻译翻译一下
``` yml
# --------------------------------
# Geyser配置文件
#
# Minecraft: Bedrock Edition和Minecraft: Java Edition之间的桥梁。
#
# GitHub: https://github.com/GeyserMC/Geyser
# Discord: https://discord.gg/geysermc
# Wiki: https://wiki.geysermc.org/
#
# 注意：查看 https://wiki.geysermc.org/geyser/setup/ 获取设置指南,许多视频教程已过时
# 在大多数情况下，特别是与服务器托管提供商一起，需要进一步的特定于托管的配置
# --------------------------------

bedrock:
  # 将侦听连接的IP地址。
  # 通常，如果要限制哪些IP可以连接到服务器，则应仅取消注释并更改此内容(用来绑定IP,让基岩版客户端只能使用设置的服务器IP进入服务器)
  #address: 0.0.0.0
  # 将侦听连接的端口(基岩版客户端可从这个端口进入)clone-remote-port选项为true,则此选项无关紧要
  port: 19132
  # 一些托管服务在每次启动服务器时更改您的Java端口并要求使用相同的端口用于基岩版
  # 此选项使基岩版端口在每次启动服务器时与Java端口相同
  # 此选项仅适用于插件版本
  clone-remote-port: false
  # 将广播到Minecraft 基岩版客户端的MOTD,如果“passthrough-motd”设置为true,则此选项无关紧要
  # 如果其中任何一个为空,则相应的字符串将默认为“Geyser”
  motd1: "Geyser"
  motd2: "Another Geyser server."
  # 将发送到Minecraft 基岩版客户端的服务器名称,这在暂停菜单和设置菜单中可见
  server-name: "Geyser"
  # 压缩网络流量到基岩版客户端的程度,数字越高,使用的CPU越多,但使用的带宽越小,在-1以下或9以上没有任何效果,设置为-1以禁用
  compression-level: 6
  # 广播到基岩版客户端的端口,显示他们应该用来连接服务器的MOTD
  # 除非Geyser在用于连接的内部端口上运行不同的端口，否则不要取消注释并更改此内容
  # broadcast-port: 19132
  # 是否为客户端启用PROXY协议,除非在Geyser实例前运行UDP反向代理，否则您不想要此功能
  enable-proxy-protocol: false
  # 允许的PROXY协议讲话代理IP地址/子网的列表。仅在启用“enable-proxy-protocol”时有效，并且
  # 当您无法使用适当的防火墙时（通常与共享托管提供商等为真）才应该使用
  # 保持此列表为空意味着没有IP地址白名单
  # IP地址和子网都受支持
  #proxy-protocol-whitelisted-ips: [ "127.0.0.1", "172.18.0.0/16" ]
remote:
  # Minecraft Java服务器的IP地址
  # 如果是“auto”，对于独立版本,远程地址将设置为127.0.0.1
  # 对于插件版本,建议将其保留为“auto”,这样Geyser将自动配置地址、端口和auth-type
  # 如果安装了floodgate，则请保持为“auto”
  address: auto
  # Minecraft Java服务器的端口
  # 对于插件版本,如果地址已设置为“auto”,端口也将遵循服务器的侦听端口
  port: 25565
  # 认证类型 可以是offline、online或floodgate（参见https://github.com/GeyserMC/Geyser/wiki/Floodgate）
  # 对于插件版本,建议将`address`字段保持为“auto”,以便自动配置Floodgate支持
  # 如果安装了Floodgate并且`address:`设置为“auto”,则将自动使用“auth-type: floodgate”
  auth-type: online
  # 允许通过Geyser进行基于密码的身份验证方法。仅在在线模式下有用
  # 如果此选项为false，则用户必须使用Geyser在其桌面上提供的代码对Microsoft进行身份验证
  allow-password-authentication: true
  # 在连接到服务器时是否启用PROXY协议
  # 仅当：
  # 1）您的服务器支持PROXY协议（可能不支持）
  # 2）您在代理的主配置中启用了选项时，Velocity或BungeeCord
  # 如果您不知道这是什么，请勿修改！
  use-proxy-protocol: false
  # 将基岩版客户端用于连接的主机名转发到Java服务器
  # 这是为强制主机在代理上使用而设计的
  forward-hostname: false

# Floodgate使用加密以确保来自授权来源的使用
# 这应该指向Floodgate生成的公钥（BungeeCord、Spigot或Velocity）
# 如果不使用Floodgate，则可以忽略此项
# 如果您在同一服务器上使用插件版本的Floodgate，则密钥将自动从Floodgate中获取
floodgate-key-file: key.pem

# 仅适用于在线模式身份验证类型
# 存储应在登录后保存其Java Edition帐户的基岩版玩家列表
# 这将保存一个令牌,可以在以后重新验证玩家,这不会保存电子邮件或密码
# 但在向此列表添加内容并向其他人提供对此Geyser实例文件的访问时,仍应谨慎
# 从此列表中删除名称将在下次Geyser启动时删除其缓存的登录信息
# 将保存刷新令牌的文件位于与此配置文件相同的文件夹中，命名为“saved-refresh-tokens.json”
saved-user-logins:
  - ThisExampleUsernameShouldBeLongEnoughToNeverBeAnXboxUsername
  - ThisOtherExampleUsernameShouldAlsoBeLongEnough

# 指定等待用户授权Geyser访问其Microsoft帐户的秒数
# 用户在此期间可以断开与服务器的连接
pending-authentication-timeout: 120

# 当第一次打开命令提示符时，基岩版客户端可能会冻结
# 禁用此功能将阻止发送命令建议并解决基岩版客户端的冻结问题
command-suggestions: true

# 以下三个选项启用“ping passthrough” - MOTD、玩家计数和/或协议名称从Java服务器检索
# 将MOTD从远程服务器中继到基岩版玩家
passthrough-motd: true
# 将玩家计数和最大玩家从远程服务器中继到基岩版玩家
passthrough-player-counts: true
# 启用LEGACY ping passthrough。除非您的MOTD或玩家计数未正确显示,否则不需要启用此选项
# 这个选项在独立模式下什么也不做
legacy-ping-passthrough: false
# 每隔多少秒ping远程服务器,仅适用于独立或传统ping通过
# 如果出现BrokenPipe错误,请增加此值
ping-passthrough-interval: 3

# 是否将玩家ping转发到服务器,启用此选项将允许基岩版玩家具有更准确的
# ping，但也可能导致玩家更容易超时
forward-player-ping: false

# 可连接的最大玩家数量,目前仅是视觉上的限制,实际上不会限制玩家数量,取决于服务端的最大玩家数量
max-players: 100

# 如果应通过控制台发送调试消息
debug-mode: false

# 允许第三方披风可见,当前允许的有：
# OptiFine披风、LabyMod披风、5Zig披风和Minecraft披风
allow-third-party-capes: false

# 允许第三方deadmau5耳朵可见,当前允许的有：
# Minecraft披风
allow-third-party-ears: false

# 允许发送虚假冷却指示器,否则,基岩版玩家不会看到冷却，因为他们仍在使用1.8战斗
# 请注意：如果启用了冷却,一些用户可能在冷却序列期间看到黑色框，如下所示：
# https://cdn.discordapp.com/attachments/613170125696270357/957075682230419466/Screenshot_from_2022-03-25_20-35-08.png
# 可以通过进入基岩版设置，在可访问性选项卡下设置“文本背景不透明度”为0来禁用此功能
# 此设置可以设置为“title”、“actionbar”或“false”
show-cooldown: title

# 控制是否向玩家显示坐标
show-coordinates: true

# 是否阻止基岩版玩家执行他们的脚手架式桥接
disable-bedrock-scaffolding: false

# 如果设置，当基岩版玩家执行任何表情时，它将交换副手和主手物品,就像Java Edition键绑定一样
# 有三个选项可以设置：
# disabled - 默认/回退，不应用此解决方法
# no-emotes - 表情将不会发送到其他基岩版客户端,副手将被交换,这实际上禁用所有表情的显示
# emotes-and-offhand - 表情将发送到基岩版客户端并交换副手
emote-offhand-workaround: "disabled"

# 如果我们没有客户端请求的默认语言，则使用默认的语言环境。取消注释以不使用默认系统语言
# default-locale: en_us

# 指定将图像缓存到磁盘以节省从互联网下载的时间的秒数
# 值为0表示禁用。（默认值：0）
cache-images: 0

# 允许显示自定义头骨,保持启用可能会导致旧/较弱设备性能下降
allow-custom-skulls: true

# 每个玩家显示的最大自定义头骨数量,增加此值可能会降低较弱设备的性能
# 将此设置为-1将导致显示所有自定义头骨,而不考虑距离或数量
max-visible-custom-skulls: 128

# 玩家周围多少个方块的半径内显示自定义头骨
custom-skull-render-distance: 32

# 是否添加任何在基岩版中通常不存在的物品和方块
# 只有在使用不使用“传输数据包”样式的服务器切换代理时才需要禁用此选项
# 如果禁用此功能，熔炉矿车物品将映射到漏斗矿车物品
# Geyser的块、物品和头骨映射系统也将被禁用
# 更改此设置需要重启Geyser
add-non-bedrock-items: true

# 基岩版阻止在地狱上方Y127处建造和显示方块
# 此配置选项通过将地狱维度ID更改为末地ID来解决此问题
# 这样做的主要缺点是整个地狱将具有相同的红色雾而不是每个生物群系都有不同的雾
above-bedrock-nether-building: false

# 强制客户端加载所有资源包（如果有）
# 如果设置为false,玩家可以在不接受服务器资源包的情况下加入服务器
force-resource-packs: true

# 允许解锁Xbox成就。
# 这将禁止所有基岩版游戏内命令成功运行,否则基岩版会认为您在作弊
xbox-achievements-enabled: false

# 是否由服务器记录玩家IP地址。
log-player-ip-addresses: true

# 是否向控制台和操作员通知新版本的Geyser可用，该版本支持此Geyser版本不支持的基岩版版本
# 建议保持此选项启用,因为许多基岩版平台会自动更新
notify-on-new-bedrock-update: true

# 用于标记基岩版玩家库存中不可用插槽的项目,这些示例包括在创意模式下的2x2配方网格
# 或具有与通常的3x9不同大小的自定义库存菜单,默认项目是屏障块
unusable-space-block: minecraft:barrier

# bStats是一个完全匿名的统计跟踪器，仅跟踪关于Geyser的基本信息
# 例如在线人数、使用Geyser的服务器数量、正在使用的操作系统等,您可以在这里了解有关bStats的更多信息：https://bstats.org/
# https://bstats.org/plugin/server-implementation/GeyserMC
metrics:
  # 是否启用度量
  enabled: true
  # 服务器的UUID，不要更改！
  uuid: 2c685abc-5b4e-4dda-8405-7216c7086662

# 高级选项 - 除非您知道自己在做什么，否则请勿触摸！

# Geyser在每个记分板数据包后更新记分板，但当Geyser尝试每秒处理大量记分板数据包时可能会导致严重的延迟
# 此选项允许您指定每秒多少个记分板数据包
# 记分板更新将限制为每秒四次更新
scoreboard-packet-threshold: 20

# 允许来自ProxyPass和Waterdog的连接
# 请参阅https://www.spigotmc.org/wiki/firewall-guide/以获取帮助-使用UDP而不是TCP
enable-proxy-connections: false

# 互联网支持最大MTU为1492，但可能会导致数据包分片问题
# 默认值为1400
mtu: 1400

# 是否直接连接到Java服务器而不创建TCP连接
# 仅当插件与数据包或网络进行交互的插件无法正确使用Geyser时才应禁用此功能
# 如果在插件版本上启用，将忽略远程地址和端口部分
# 如果在插件版本上禁用，预期性能降低和延迟增加
use-direct-connection: true

# 是否尝试为基岩版玩家禁用压缩,这应该是一个好处,因为在不处理Java数据包的情况下,没有必要压缩数据
# 当需要通过网络处理Java数据包时
# 这要求use-direct-connection为true
disable-compression: true

config-version: 4
```
示例配置文件服务器的UUID,与实际服务器UUID有所不同

:::caution
每次调整完配置文件需要重启

不推荐**reload**命令重载

可能会遇到奇奇怪怪的问题

该页面的配置文件可能会因为随着Geyser更新而落后
:::


