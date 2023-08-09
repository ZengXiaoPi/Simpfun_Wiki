---
title: 关于server.properties
---

:::tip

server.properties是Minecraft服务器的配置文件，在基岩版服务器和Java版服务器中都存在且承担同样职责（互通服为利用间歇泉插件将基岩版数据翻译为Java版），如果你有什么关于服务器的问题，可以先看看这个文档。

以下是对于server.properties中各项设置的介绍和解释，其中多次引用[Minecraft Wiki](https://minecraft.fandom.com/zh/wiki/)如果你觉得有纰漏之处或者基岩Java有不同需要区分，欢迎来简幻欢交流群10（974338645）或muteme群（817575962）砍死我，当然你也可以fork一个文档去GitHub自己改。

[minecraft wiki上的文档](https://minecraft.fandom.com/wiki/Server.properties)

:::

true=是，false=否

:::

allow-flight：允许飞行

此处飞行指的是作弊飞行，鞘翅移动不算在内。其实mc服务端内置有反作弊，会监测玩家行为并踢出ban掉，但如果确保自己服务器不会进来hacker建议开启，如果网卡了可能会造成服务器误判并踢出（很有节目效果）

此项默认为false。

:::

allow-nether：启用下界

如果你不想要地狱这个维度可以把它关掉，但一般没人动这个（只有小游戏服需要调这些吧）

此项默认为true。

:::

broadcast-console-to-ops：广播控制台输出到在线op

如果启用则服主在控制台敲代码会被op看到

此项默认为true。

:::

broadcast-rcon-to-ops：向在线的op发送通过rcon执行的命令的输出

如果启用则远程控制台输出会被op看到

此项默认为true。

:::

debug：修bug

如果服务器出现bug则自动发送错误报告给mojang帮助改善，开不开对个人无所谓，不过如果mod服建议关闭

此项默认为false。

:::

difficulty：游戏难度

此项的合法值为peaceful（和平），easy（简单），normal（普通）和hard（困难）。同时可以指定旧版难度编号0（和平），1（简单），2（普通）及3（困难），服务器会自动翻译。

关于难度的详细解释请看[minecraft wiki的内容](https://minecraft.fandom.com/zh/wiki/%E9%9A%BE%E5%BA%A6) 

此项同样可以在游戏内调整。指令：/difficulty

:::

enable-command-block：启用命令方块

如果禁用此项则无法获取并使用命令方块。

此项默认为false。

:::

enable-jmx-monitoring：公开部分服务器运行参数（“公开具有对象名称和两个属性的 MBean“引自minecraft wiki机翻）和游戏的[tick](https://minecraft.fandom.com/wiki/Tick)值。

为了在Java启动时运行jmx，还需要添加几项启动参数。详见[Oracle给的配置文档](https://docs.oracle.com/javase/8/docs/technotes/guides/management/agent.html)

此项默认为false。

:::

enable-query：启用查询

启用GameSpy4协议服务器监听器，用于获取有关服务器的信息。

此项默认为false。

:::

enable-rcon：远程连接

启用后可以远程连接服务器控制台，但同时若采用不安全的互联网连接可能导致传输的信息泄露。“不建议将 RCON 暴露给互联网，因为 RCON 协议传输的所有内容而不加密。RCON 服务器和客户端之间通信的所有内容（包括 RCON 密码）都可能泄露给监听您连接的人。”引自minecraft wiki。

注：简幻欢所用控制台不属于远程连接，同时正常访问网络不会导致信息泄露，如果你不知道自己在做什么，不要调整此项配置。

此项默认为false。

:::

enable-status：启用状态

让服务器在服务器列表中看起来是在线的。如果关闭此项则不会显示在线，但可以正常连入。

此项默认为true。

:::

enforce-secure-profile：强制安全配置文件（？）

引自minecraft wiki：“如果设置为 true，没有 Mojang 签名公钥的玩家将无法连接到服务器”

此项默认为true。

:::

enforce-whitelist：强制启用白名单

如果启用则不在白名单上的玩家会被踢出游戏。

此项默认为false。

:::

entity-broadcast-range-percentage：实体广播范围百分比

[wiki](https://minecraft.fandom.com/wiki/Server.properties)说的很清楚：“控制实体在发送到客户端之前需要有多近。较高的值意味着它们将从更远的地方渲染，这可能会导致更多的延迟。这表示为默认值的百分比。例如，设置为 50 将使其像往常一样减半。这模仿了客户端视频设置上的功能（与渲染距离不同，客户端可以自定义渲染距离，只要它在服务器的设置下）。”

此项默认为100，合法值为10~1000的整数。

:::

force-gamemode：强制游戏模式

如果启用则玩家连入游戏时会被强制更改为设置的游戏模式，禁用则沿用退出时的游戏模式。

此项默认为false，如果启用请将false改为难度。

:::

function-permission-level：函数默认权限级别

设置函数的默认权限级别（1~4），此级别和op权限级别通用。

此项默认为2.

:::

gamemode：游戏模式

关于游戏模式的更多信息详见[minecrfat wiki](https://minecraft.fandom.com/wiki/Game_mode)

此项可设定为旧版值0（生存），1（创造），2（冒险）和3（旁观）

该项默认为survival（生存）

:::

generate-structures：生成结构

决定是否生成结构（如村庄、女巫小屋、废弃矿井和沙漠神殿等）。但即使关闭，地牢（Dungeness）也会生成。

此项默认为true。

:::

generator-settings：自定义世界生成设置

用于自定义世界生成的设置。遵循[其格式](https://minecraft.fandom.com/wiki/Java_Edition_level_format#generatorOptions_tag_format)并写入相应的 JSON 字符串。

此项默认为空{}。

:::

hardcore：极限模式

如果启用则无视服务器难度设置强制改为困难，并在玩家死亡后强制改为旁观者模式。似乎在allow-cheat为true时可以作弊。

此项默认为false。

:::

hide-online-players：隐藏在线玩家

如果启用则状态请求时不会发送在线玩家列表。

此项默认为false。

:::

initial-disabled-packs：初始禁用包

逗号分隔的数据包列表，在创建世界时不会自动启用。

此项默认为空白。

:::

initial-enabled-packs：初始启用包

创建世界时启用的数据包列表，英文逗号分割。

:::

level-name：存档（世界）名称

Java：此项默认为world。注：在各个Java服务端内核之间有不同：如spigot的文件结构为main/world，world,world_nether和world_end文件夹直接存储三个维度的数据，此项设置无效；如果文件结构中没有main/world_nether和world_end这两个文件夹，如fabric，则此项设定的名称即为存档名称，如果没有以此为名的文件夹则自动生成存档。

基岩：此项默认为Bedrock level且world文件夹名为worlds，同时存档作为文件夹存储在worlds文件夹下。

:::

level-seed：生成世界所用的种子

此项默认为空。

:::

level-type：世界类型

用于确定世界生成的预设。

使用世界预设 ID 时需要转义 “：”，并且可以省略原版世界预设 ID 的命名空间 minecraft:

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

max-chained-neighbor-updates：限制连锁NC更新的数量，超过此数量的连锁NC更新会被跳过。若为负数则无限制。

此项默认为1000000

:::

max-players：最大玩家数量

服务器软件上允许的最大玩家数量，如果在线人数达到后将拒绝新玩家连入，op连入不受影响。可以改成114514

此项默认值为20，最大值为2147483647。

:::

max-tick-time：最大刻时间

摘自wiki：“设置每个tick花费的最大毫秒数。超过该毫秒数时，服务器watchdog插件将停止服务器程序并附带上信息：服务器的一个tick花费了60.00秒（最长也应该只有0.05秒）；判定服务器已崩溃，它将被强制关闭。遇到这种情况的时候，它会调用 System.exit(1)。
译者注：如果你监测服务程序的返回代码，此时返回代码会为1。（习惯上，程序正常退出应当返回0）”  改成-1的话会禁用看门狗（watchdog）插件。

对于普通玩家没什么用，顶多决定如果服务器真崩了的话玩家要等多少个[tick](https://minecraft.fandom.com/zh/wiki/%E5%88%BB)会收到服务器已关闭的信息。

此项默认为60000，可设定值为0~(2^63 - 1)之间的整数。

:::

max-world-size：最大世界尺寸

引自wiki：

“设置可让世界边界获得的最大半径值，单位为方块。通过成功执行的命令能把世界边界设置得更大，但不会超过这里设置的最大方块限制。如果设置的max-world-size超过默认值的大小，那将不会起任何效果。

例如：

  设置 max-world-size为1000将会有2000×2000的地图边界。
  设置 max-world-size为4000将会有8000×8000的地图边界。”
  
此项默认为29999984。

:::

motd：服务器在列表里显示的信息

wiki：

“MOTD 支持[样式代码](https://minecraft.fandom.com/zh/wiki/%E6%A0%B7%E5%BC%8F%E4%BB%A3%E7%A0%81)。
MOTD 支持特殊符号，比如"♥"。然而，这些符号需要转换为Unicode转义字符。你可以在[这里](http://www.freeformatter.com/string-utilities.html#charinfo)找到一个转换器。
如果MOTD超过59个字符，服务器列表很可能会返回“通讯错误”。”

此项默认为A Minecraft Server。

:::

network-compression-threshold：网络压缩阈值

wiki：

“默认会允许n-1字节的数据包正常发送, 如果数据包为n字节或更大时会进行压缩。所以，更低的数值会使得更多的数据包被压缩，但是如果被压缩的数据包字节太小将反而使压缩后字节更大。
-1 - 完全禁用数据包压缩
0 - 压缩全部数据包
注：以太网规范要求把小于64字节的数据包填充为64字节。因此，设置一个低于64的值可能没有什么好处。也不推荐让设置的值超过MTU（通常为1500字节）。”

此项默认值为256.

:::

online-mode：在线模式

如果启用则会在玩家加入时验证正版，禁用则不验证。对于修改验证服务器的第三方登录，如果启用则连接第三方服务器api进行验证，禁用则不验证。

另外，原版服务端中正版验证和离线的uuid不是同一套，此处涉及playerdata的知识。

上面那个playerdata应该有个超链接，但没人写我链什么

简幻欢所用预设中此项默认为false。

#不想写了，休息去，晚上滚回来继续
