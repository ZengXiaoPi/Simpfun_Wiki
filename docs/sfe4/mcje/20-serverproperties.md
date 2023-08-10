---
title: 关于server.properties
---

:::tip

server.properties是Minecraft服务器的配置文件，在基岩版服务器和Java版服务器中都存在且承担同样职责（互通服为利用间歇泉插件将基岩版数据翻译为Java版），如果你有什么关于服务器的问题，可以先看看这个文档。

以下是对于server.properties中各项设置的介绍和解释，其中多次引用[Minecraft Wiki](https://minecraft.fandom.com/zh/wiki/)。引用内容均用*斜体*标注。

[minecraft wiki上的文档](https://minecraft.fandom.com/zh/wiki/Server.properties)
:::

:::tip 

需要在文件系统内进行配置。如果你还不知道“文件系统”是什么，去看看[这个官方文档](https://www.simpfun.me/docs/instance-management/file)

注意: RW-HPS不支持热重载配置,每次修改配置请先关闭服务器!

:::

:::info

`true`=是，`false`=否。所有`值`均以`这个框框`标出。

:::

-----

## allow-flight：允许飞行

此处飞行指的是漂浮在空中，鞘翅移动，漂浮效果不算在内，基本是个摆设。如果网卡，或者有命令方块等，可能会造成服务器误判并踢出。

此项默认为`false`。

-----

## allow-nether：启用下界

如果你不想要地狱这个维度可以把它关掉，会导致地狱维度不生成，且无法进入。

此项默认为`true`。

-----

## broadcast-console-to-ops：广播控制台输出到在线op

如果启用则服主在控制台敲代码会被op看到。

此项默认为`true`。

-----

## broadcast-rcon-to-ops：向在线的op发送通过rcon执行的命令的输出

如果启用则远程控制台输出会被op看到。

此项默认为`true`。

-----

## debug：修bug

如果服务器出现bug则自动发送错误报告给mojang帮助改善，如果是mod服建议关闭。

此项默认为`false`。

-----

## difficulty：游戏难度

此项的合法值为`peaceful`（和平），`easy`（简单），`normal`（普通）和`hard`（困难）。  
同时可以指定旧版难度编号0（和平），1（简单），2（普通）及3（困难），服务器会自动翻译。

建议不要在游戏中调整难度。

-----

## enable-command-block：启用命令方块

如果禁用此项则无法使用命令方块，表现为能够获取命令方块但保存命令时显示`命令方块未在此服务器启用`。

此项默认为`false`。

-----

## enable-jmx-monitoring：公开部分服务器运行参数  

*（“公开具有对象名称和两个属性的 MBean“引自minecraft wiki机翻）和游戏的[tick](https://minecraft.fandom.com/wiki/Tick)值。*

为了在Java启动时运行jmx，还需要添加几项启动参数。详见[Oracle给的配置文档](https://docs.oracle.com/javase/8/docs/technotes/guides/management/agent.html)

此项默认为`false`。

-----

## enable-query：启用查询

启用GameSpy4协议服务器监听器，用于获取有关服务器的信息。

此项默认为`false`。

-----

## enable-rcon：远程连接

启用后可以远程连接服务器控制台，但同时若采用不安全的互联网连接可能导致传输的信息泄露。

如果你不知道自己在做什么，不要调整此项配置。

此项默认为`false`。

-----

## enable-status：启用状态

让服务器在服务器列表中看起来是在线的。如果关闭此项则不会显示在线，但可以正常连入。

此项默认为`true`。

-----

## enforce-secure-profile：强制安全配置文件

*引自minecraft wiki：“如果设置为 true，没有 Mojang 签名公钥的玩家将无法连接到服务器”*

此项默认为`true`。

-----

## enforce-whitelist：强制启用白名单

如果启用则不在白名单上的玩家会被踢出游戏。  

白名单命令为：`/whitelist`

此项默认为`false`。

-----

## entity-broadcast-range-percentage：实体广播范围百分比

*[wiki](https://minecraft.fandom.com/wiki/Server.properties)：“控制实体在发送到客户端之前需要有多近。较高的值意味着它们将从更远的地方渲染，这可能会导致更多的延迟。这表示为默认值的百分比。例如，设置为 50 将使其像往常一样减半。这模仿了客户端视频设置上的功能（与渲染距离不同，客户端可以自定义渲染距离，只要它在服务器的设置下）。”*

此项默认为`100`，合法值为`10~1000`的整数。

-----

## force-gamemode：强制游戏模式

如果启用则玩家连入游戏时会被强制更改为设置的游戏模式，禁用则沿用退出时的游戏模式。

此项默认为false，如果启用请将false改为游戏模式。

关于游戏模式请查看：`gamemode`

-----

## function-permission-level：函数默认权限级别

设置函数的默认权限级别（`1~4`），此级别和op权限级别通用。

此项默认为2.

-----

## gamemode：游戏模式

关于游戏模式的更多信息详见[minecrfat wiki](https://minecraft.fandom.com/wiki/Game_mode)

此项可设定为旧版值`0`（生存），`1`（创造），`2`（冒险）和`3`（旁观）

该项默认为`survival`（生存）

-----

## generate-structures：生成结构

决定是否生成结构（如村庄、女巫小屋、废弃矿井和沙漠神殿等）。但即使关闭，地牢（Dungeness）也会生成。

此项默认为`true`。

-----

## generator-settings：自定义世界生成设置

用于自定义世界生成的设置。遵循[其格式](https://minecraft.fandom.com/wiki/Java_Edition_level_format#generatorOptions_tag_format)并写入相应的 JSON 字符串。

此项默认为空`{}`。

-----

## hardcore：极限模式

如果启用则无视服务器难度设置强制改为困难，并在玩家死亡后强制改为旁观者模式。  

若在创建世界时就启用此项，玩家的血量贴图变为极限模式样式；若创建游戏时未启用而后续启用则贴图为原版。

此项默认为`false`。

-----

## hide-online-players：隐藏在线玩家

如果启用则状态请求时不会发送在线玩家列表。

此项默认为`false`。

-----

## initial-disabled-packs：初始禁用包

逗号分隔的数据包列表，在创建世界时不会自动启用。

此项默认为空白。

-----

## initial-enabled-packs：初始启用包

创建世界时启用的数据包列表，英文逗号分割。

-----

## level-name：存档（世界）名称

Java：此项默认为world。注：在各个Java服务端内核之间有不同：如spigot的文件结构为`world`，`world_nether`和`world_the_end`文件夹直接存储三个维度的数据，此项设置无效；如果文件结构中没有`world_nether`和`world_the_end`这两个文件夹，如`fabric`和`Vanilla`，则此项设定的名称即为存档名称，如果没有以此为名的文件夹则自动生成存档。

基岩：此项默认为Bedrock level且`world`文件夹名为`worlds`，同时存档作为文件夹存储在`worlds`文件夹下。

-----

## level-seed：生成世界所用的种子

此项默认为空。

-----

## level-type：世界类型

用于确定世界生成的预设。

使用世界预设 ID 时需要转义 “：”，并且可以省略原版世界预设 ID 的命名空间 minecraft:

:::info

世界预设包含：

  minecraft:normal：正常的世界

  minecraft:flat：超平坦世界，可通过预设修改

  minecraft:large_biomes：放大生物群系

  minecraft:amplified：放大化世界：提升建筑高度限制

  minecraft:single_biome_surface：单一群系世界

  buffet：仅限1.15及以前的版本。如果不改动生成器设置则与normal相同

  default_1_1：仅限 1.15 及更早版本。与默认值相同，但计为不同的世界类型。

  customized ：自定义，仅限1.15及更早版本，1.13后与normal相同，1.12及以前可用于创建完全自定义的世界。关于自定义的[详细信息](https://minecraft.fandom.com/zh/wiki/%E8%87%AA%E5%AE%9A%E4%B9%89/Java%E7%89%881.13%E5%89%8D)
  
:::

-----

## max-chained-neighbor-updates：限制连锁NC更新的数量，超过此数量的连锁NC更新会被跳过。若为负数则无限制。

此项默认为`1000000`。

-----

## max-players：最大玩家数量

服务器软件上允许的最大玩家数量，如果在线人数达到后将拒绝新玩家连入，op连入不受影响。可以改成114514

此项默认值为`20`，最大值为`2147483647`。

-----

## max-tick-time：最大刻时间

*摘自wiki：“设置每个tick花费的最大毫秒数。超过该毫秒数时，服务器watchdog插件将停止服务器程序并附带上信息：服务器的一个tick花费了60.00秒（最长也应该只有0.05秒）；判定服务器已崩溃，它将被强制关闭。遇到这种情况的时候，它会调用 System.exit(1)。*
*译者注：如果你监测服务程序的返回代码，此时返回代码会为1。（习惯上，程序正常退出应当返回0）”  改成-1的话会禁用看门狗（watchdog）插件。*

对于普通玩家没什么用，顶多决定如果服务器真崩了的话玩家要等多少个[tick](https://minecraft.fandom.com/zh/wiki/%E5%88%BB)会收到服务器已关闭的信息。

此项默认为`60000`，可设定值为`0~(2^63 - 1)`之间的整数。

-----

## max-world-size：最大世界尺寸

*引自wiki：*

*“设置可让世界边界获得的最大半径值，单位为方块。通过成功执行的命令能把世界边界设置得更大，但不会超过这里设置的最大方块限制。如果设置的max-world-size超过默认值的大小，那将不会起任何效果。*

*例如：*

  *设置 max-world-size为1000将会有2000×2000的地图边界。*
  *设置 max-world-size为4000将会有8000×8000的地图边界。”*
  
此项默认为`29999984`。

-----

## motd：服务器在列表里显示的信息

*wiki：*

*“MOTD 支持[样式代码](https://minecraft.fandom.com/zh/wiki/%E6%A0%B7%E5%BC%8F%E4%BB%A3%E7%A0%81)。*
*MOTD 支持特殊符号，比如"♥"。然而，这些符号需要转换为Unicode转义字符。你可以在[这里](http://www.freeformatter.com/string-utilities.html#charinfo)找到一个转换器。*
*如果MOTD超过59个字符，服务器列表很可能会返回“通讯错误”。”*

SFE-4里可以自己改汉字，也可以用特殊字符把字变成彩色的。就是这个符号`§`。[关于颜色代码](https://minecraft.tools/en/color-code.php)

此项默认为`A Minecraft Server`，在SFE-4中其默认值为`SFE4-SERVER`

-----

## network-compression-threshold：网络压缩阈值

*wiki：*

*“默认会允许n-1字节的数据包正常发送, 如果数据包为n字节或更大时会进行压缩。所以，更低的数值会使得更多的数据包被压缩，但是如果被压缩的数据包字节太小将反而使压缩后字节更大。*
*-1 - 完全禁用数据包压缩*
*0 - 压缩全部数据包*
*注：以太网规范要求把小于64字节的数据包填充为64字节。因此，设置一个低于64的值可能没有什么好处。也不推荐让设置的值超过MTU（通常为1500字节）。”*

此项默认值为`256`.

-----

## online-mode：在线模式

如果启用则会在玩家加入时验证正版，禁用则不验证。对于修改验证服务器的第三方登录，如果启用则连接第三方服务器api进行验证，禁用则不验证。

另外，原版服务端中正版验证和离线的uuid不是同一套，此处涉及playerdata的知识。

上面那个playerdata应该有个超链接，但没人写我链什么
留个坑吧，过几天写关于playerdata

此项默认值为true，SFE-4中此项默认为false。

-----

## op-permission-level：op权限等级

:::info

op权限等级可设置为1234四个整数，以下是各个等级op的权限：

  op-permission-level=1时op可以无视出生点保护


  op-permission-level=2时op可以使用作弊命令（如`/gamerule`,`/clear`和`/tp`等并可编辑命令方块）

  op-permission-level=3时op可以使用`/ban`（禁止玩家加入服务器）、`/deop`（撤销别人的op）、`/kick`（将玩家踢出服务器）以及 `/op`（给予其他玩家op）命令

  op-permission-level=4时op可以使用`/stop`命令关闭服务器

:::

此项默认值为`4`.

-----

## player-idle-timeout：踢掉挂机玩家

wiki：如果不为0，服务器将在玩家的空闲时间达到设置的时间（单位为分钟）时将玩家踢出服务器。

:::info

以下操作会重置玩家空闲时间：

  [点击窗口](http://wiki.vg/Protocol#Click_Window)
  [附魔物品](http://wiki.vg/Protocol#Enchant_Item)
  [更新告示牌](http://wiki.vg/Protocol#Update_Sign)
  [挖掘方块](http://wiki.vg/Protocol#Player_Digging)
  [放置方块](http://wiki.vg/Protocol#Player_Block_Placement)
  [切换手持物品](http://wiki.vg/Protocol#Held_Item_Change_.28serverbound.29)
  [动画](http://wiki.vg/Protocol#Animation_.28serverbound.29)注：仅限基岩版
  [实体动作](http://wiki.vg/Protocol#Entity_Action)
  [客户端状态](http://wiki.vg/Protocol#Client_Status)
  [发送聊天信息](http://wiki.vg/Protocol#Chat_Message_.28serverbound.29)
  [与实体交互](http://wiki.vg/Protocol#Use_Entity)

注：以上超链接源自`wiki.vg`，没有中文

此项默认为`0`（服务器不会踢人），如果服务器公开且流量大建议开启。

:::

-----

## prevent-proxy-connections：防止代理连接

wiki：如果服务器发送的ISP/AS和Mojang的验证服务器的不一样，玩家将会被踢出。

用来防止有人挂一堆梯子ddos服务器，一般不用管它。

此项默认为`false`。

-----

## pvp：玩家互相攻击

如果启用则玩家可以互相攻击，禁用则不行。

此项默认为true。

-----

## query.port：监听开放端口

设置服务器开放到的端口。别管他

-----

## rate-limit：速率限制

设置玩家被踢出服务器前，可以发送的数据包数量。为0表示关闭此功能。

此项默认为`0`.

-----

## rcon.password 远程连接控制台密码

此项默认为空。

## rcon.port 远程连接控制台端口

此项默认为`25575`.

:::tip

SFE-4所用控制台不属于远程控制台，这两项不用管它

:::

-----

## require-resource-pack：需要资源包

*wiki：当此选项启用（设为true）时，玩家会被提示作出选择（是否启用服务器资源包）。如果玩家拒绝则会被服务器断开连接。*编辑服务器里有选服务器资源包是询问、接受还是拒绝，询问则会弹出窗口，接受直接下载资源包并启用，拒绝会被服务器拒绝连接。

:::tip

*还是wiki:但是，若玩家使用Linux系统加入服务器，游戏目录内的`server-resource-packs`没有写权限，则会提示“无法应用服务器资源包”“所有依赖自定义资源包的功能都有可能不按预期工作”，并提示玩家“继续”或“断开连接”。若玩家选择“继续”，则仍可在此服务器中游戏。*

:::

此项默认为空白。

-----

## resource-pack：资源包

用于告诉客户端服务器所采用的资源包。

*wiki：*

*可选选项，可输入指向一个资源包的URI。玩家可选择是否使用该资源包。*
*注意若该值含":"和"="字符，需要在其前加上反斜线(\)，例如 http\://somedomain.com/somepack.zip?someparam\=somevalue 资源包大小理应不能超过*

*`50 MiB`（1.15-pre5前）*
*`100 MiB`（1.15-pre5到1.18-pre8）*
*`250 MiB`（1.18-rc1起）*
*注意，下载成功或失败由客户端记录，而非服务器。*

此项默认为空白。

-----

## resource-pack-prompt：资源包提示符

*wiki：可选，用于在使用`require-resource-pack`时在资源包提示界面显示自定义信息。*

*与聊天组件语法一致，可以包含多行文本。*

此项默认为空白。

-----

## resource-pack-sha1：资源包的sha1值

*wiki：资源包的SHA-1值，必须为小写十六进制，建议填写它。这还没有用于验证资源包的完整性，但是它提高了资源包缓存的有效性和可靠性。*

此项默认为空白。

-----

:::caution

## **SFE-4服务器不要动以下设置！！！**

:::

### server-ip：服务器绑定的IP

### server-port：服务器绑定的端口号

**SFE-4已经配置好了网络环境，请勿调整以上设置。**

-----

## simulation-distance：模拟距离

*wiki：设置服务端可更新实体范围的最大值，即玩家各个方向上的区块数量（是以玩家为中心的半径，不是直径）。超出此范围的实体不会被更新，对玩家也不可见。*
*默认/推荐设置为10，如果有严重卡顿的话，减少该数值。*

注：和单人世界的模拟距离是同一个概念。

此项默认值为`10`.（话说wiki提到了了来着）

-----

## spawn-animals：生成动物

决定服务器是否生成动物，关闭则生成后立刻消失。

*wiki觉得如果很卡就把这项改`false`，但很明显你应该先看看是不是有其他问题，如果节点性能不够则升级节点*

此项默认值为`true`。

-----

## spawn-monsters：生成怪物

决定服务器是否生成怪物，关闭则不会生成。如果`difficulty`=`0`或`peaceful`即游戏难度为和平，此项不会有任何影响。

*wiki还是觉得如果卡就把这项改`false`*

此项默认值为`true`。

-----

## spawn-npcs：生成村民

决定服务器是否生成村民，关闭则不会生成。

此项默认值为`true`。

-----

## spawn-protection：重生半径

*wiki：通过将该值进行2x+1的运算来决定出生点的保护半径。设置为1会保护以出生点为中心的3×3方块的区域，2会保护5×5方块的区域，3会保护7×7方块的区域，以此类推。这个选项不在第一次服务器启动时生成，只会在第一个玩家加入服务器时出现。如果服务器没有设置OP，这个选项会自动禁用。*
*设置为0将不会禁用出生点保护，但会保护位于出生点的那一个方块（13w05a前）。*
*设置为0会禁用出生点保护（13w05a起，参见[MC-666](https://bugs.mojang.com/browse/MC-666)）。*

此项默认值为`16`。

-----

## sync-chunk-writes：同步区块写入

*wiki：启用后区块文件以同步模式写入。*

此项默认值为`true`。

-----

## text-filtering-config：屏蔽文本

在此输入的文本会被服务器屏蔽。

此项默认值为空白。

-----

## use-native-transport：使用本地传输

用于针对Linux平台发送的数据包进行优化。

注：此项仅在Linux平台的服务器上生成。

此项默认值为`true`。

-----

## view-distance：视距

*本条信息引自wiki*

设置服务端发送给客户端的世界数据量，也就是设置玩家各个方向上的区块数量（是以玩家为中心的半径，不是直径）。它决定了服务端的可视距离。（另见渲染距离）
默认/推荐设置为`10`，如果有严重卡顿的话，减少该数值。

-----

## white-list：白名单

*本条信息引自wiki*

	启用服务器的白名单。
当启用时，只有白名单上的用户才能连接服务器。白名单主要用于私人服务器，例如提供给相识的朋友、通过互联网谨慎选择的陌生人等。

`false` - 不使用白名单。
`true` - 从whitelist.json文件加载白名单。
注: OP会自动被视为在白名单上，所以无需再将OP加入白名单。

-----

## log-ips：登入时记录IP

是否在有新玩家加入游戏时，在服务器日志中记录其IP地址。

注：这条设置是JE1.20.2新加的（甚至sfe4在我敲下这行字的时候还没有1.20.2的服务端），所以不会有什么影响，这条放在最末

此项默认值为true。（我朝，更方便ban-ip了）
