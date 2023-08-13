像素工厂服务器部分指令解析：
===
###提要:如果你发现本文章有错误的地方请务必联系本人进行更正/doge
- **help**－万物起源 开服的时候来个help不会亏的，当然大佬就不用了。这个是帮助菜单

- **version**－显示服务器的版本
- **exit**－关闭服务器（相当于关闭这个服务端）
- **stop**－关闭服务器（不关闭服务端）
```
注意：这两个的关闭程度exit是高于stop，你可以理解成stop就是关闭一个页面但还可以开一个新页面，但exit是关闭浏览器
```

- **host**－开启服务器。语法：**host 地图名字 模式**(默认为生存)。**模式：survival－生存   sandbox－沙盒  attack－进攻  pvp－pvp** ```模式无需注意大小写但地图需要注意大小写```

- **maps**－显示你的地图（不是小地图)。语法 **maps 参数**。**参数：all－全部地图**（包括内置）  **custom－自己的地图  default－内置地图**     ```地图文件放在config－maps里面```
- **reloadmaps**－在目录里刷新地图
- **status**－服务器状态。大致内容:
```
游玩着xxx/波次xxx
xxx秒后下一波次
xxx个单位/xxx个敌人
xxx帧率/xxx内存被占用
玩家xxx/id
```

- **mods**－显示你安装的所有mod
- **mod**－显示一个mod的详细信息。语法：**mod 名字** 。
```
名字－是该mod里面的mod.json内的name
不是你mods显示的那个名字
（当然如果mod里面没有配置displayName的话就是它的但不建议这样子还是老老实实的去找吧）
```
。**大致内容：名字：xxx    内部名字**（就是刚刚提到的那个）**：xxx  版本：xxx     作者：xxx    路径**（相对的）**：xxx   描述：xxx**

- **js**：纯纯的执行你的js，这里不提供js教程哈（因为我也不会)。语法：**js 脚本内容**

- **say**：发送一条消息。语法：**say 内容**```（不用加引号）```

- **pause**：暂停游戏（就平时你打单人的时候的那个暂停)。语法：**pause 选项    选项：on－开启   off－关闭**

- **rules**：等大佬来补坑

-**fillitems**：向核心内填满物品。语法:**等大佬填坑**

- **playerlimit**：服务器玩家数量限制。语法：**playerlimit 参数。参数：off－不限制   数字－限制xx人**（就比方说playerlimit 2 就服务器限制2人）

- **subnet-ban**：禁一个子网
```
就是什么账号只要是这个子网发出来的都不给进而且是模糊ban（就差不多这个意思)
比方说你是192.168.44.2
我输入了subnet-ban add 192.168.44
你就进不来了当然192.168.44.324也进不了
 ```
语法：**subnet-ban 选项 ip地址。选项：add－添加 remove－移除**   你也可以**只输入subnet-ban**这样会显示你已经禁掉的ip

- **whitelist**：白名单，懂得都懂就像你家钥匙一样。语法：**whitelist 参数 ID   参数：add－添加   remove－移除**。 
```
注意这里必须要使用ID
你也知道mdt是可以重名的但ID是唯一的
```

- **shuffle**：混洗地图（随机地图的意思)。语法：*shuffle 参数。参数：none－不混洗  all－全部地图一起洗  custom－自己的地图一起洗  builtin－内置地图一起洗**。```注意：当shuffle不为none的时候，host可以不带参数，不然会报错直接给你免费执行一个exit（指host）```

- **nextmap**：设置游戏结束后的下一张地图（预定)。语法：**nextmap 地图名字**

- **kick**：踢人。语法：**kick 玩家名字**```（显示的那个）```

- **ban**：禁人。语法：**ban 类型 值。类型：id－ID  name－名字  ip－IP。值：随意咯你**
```
简单的例子就是：
ban id xxxxx
就通过id的标记标记到玩家然后禁掉
其他参数也是一样的（看ip自己参考下文）
```

- **bans**：你禁人的的列表

- **unban**：解禁。语法：**unban 参数。参数：ip－IP   id－ID**```如果你忘记了你禁过谁或者忘记了它的id你可以直接bans去看然后复制粘贴```

- **pardon**：赦免票出去的玩家并允许他再次进入。语法：**pardon ID**。咱暂时也不知道怎么去开启票决哈，但是有一个mod好像可以，感兴趣的可以点[这里](https://github.com/way-zer/MyMindustryPlugin)前往该mod的gayhub地址

- **admin**：给管理员。语法：**admin 选项 参数**。选项：**add－添加   remove－删除    参数：名字，ID，IP都可以**

- **admins**：列出你的管理员们

- **players**：列出你的服务器玩家们

- **runwave**：马上进行下一波次/doge

- **load**：加载存档。语法：**load 存档名字**

- **save**：存档。**语法：save 存档名字**
```
你自己起，这将保存在config/saves/并且不会影响游戏运行
```

- **saves**：列出你存过的档。

- **info**：查看玩家的详细信息/doge。语法：**info 参数**。**参数－名字，ID，uuid都可以 **    大致内容：
```
找到的玩家：xxx（因为可以重名所以你用名字搜索的话可能会显示几个出来，前提是游戏里面得有）
玩家的信息  xxx/uuid xxxx/ raw xxx
所有用过的名字：xxx
ip：xxx
所有用过的ip：xxxxx
加入的次数：x
被踢出去的次数：xxxx
```

- **search**：寻找玩家（就单纯的判断它在不在)。语法：**search 参数。参数：名字，ID什么的都可以**

- **gc**：触发垃圾收集，仅限测试。```我的建议是不懂就别碰，就像我一样等大佬补文/doge```

- **yes**：运行最后一个错误的命令
```
你这样理解：
你想ban人
但不小心手一滑，输入了bam
然后终端会给你返回一些字里面包括
Did you mean "ban"?
这时候你输入yes就等效于你输入了一次ban
但注意的是他不会补齐你后面的参数
比方说我输入bam sukabing
然后它给我弹出那个Did you mean我再输入yes 
那它收到的指令就是ban
而不是ban sukabing
```

- **config**：***配置文件***（放在最后讲是因为这里面的内容真的很多)。语法：***config 名字 值***
####你以为这就是  极限  了吗？？？？
***
当你只输入一个config的时候它会给你显示可以配置的选项以及默认选项，下面是部分参数的讲解/doge
```
    name：服务器名字 值：随意
    desc：服务器描述，最多100字符，就显示在服务器名字下面的那些，去学术端看看就知道了
小插曲：颜色字体可以使用[颜色英文]来实现，当你想恢复原来的颜色时，仅使用[]就可以了
    port：端口 值：数字   不过简幻欢的话就没必要动了因为端口已经摆在那了
    autoUpdate：自动更新并且在更新前自动退出 值：true/false 应该是更新客户端哈默认是false感兴趣的可以自己试试
    showConnectMessages：显示玩家出入信息（游戏与终端一起的） 值：true/false 建议是true啊除非你遇到了那些进进出出的那没办法，反正如果是我我就会ban
    enableVotekick：是否启用Votekick 值：true/false
    startCommands:设置启动时候的命令 值：大抵是随意的，每一句都要用英文半角逗号分开，你不想用的是有就设为none   注意：这里面的启动是指你服务端（exit和stop比喻里面的浏览器）启动的时候执行的
    logging：留下log（建议开启） 值：true/false
    strict：严格模式，防止重复的uuid（建议开启避免不小心ban了俩 值：true/false
    antiSpam：垃圾邮件发送者是否被自动提出并且限制（建议开启） 值：true/false
    interactRateWindow：阻止交互速率限制窗口，以秒为单位（咱也不知道是什么东西这个是译文/doge） 值：数字
    interactRateLimit：块交互速率限制（咱也不知道是什么东西这个也是译文）  值：数字
    interactRateKick：玩家要在窗口内互动多少次才被踢（咱还是不知道是什么东西这个还是译文） 值：数字
    messageRateLimit：消息发送速率限制 0就是完全不管你爱怎么发怎么发 以秒为单位，参考咱的频道 值：数字
    messageSpamKick：玩家在冷却时间前发送多少信息才被踢 0就不管    打个比方就是你1分钟只能发10条但是你就是倔偏要发然后我设置为3你一旦发大于等于3条就自动走人 值：数字
    packetSpamLimit：限制3秒内发送的数据包计数，这会导致拉进小黑屋＋踢 值：数字
   chatSpamLimit：限制2秒内发送的聊天数据包计数，这也会导致垃圾小黑屋＋踢。和rate limit不同   值：数字
    socketInput：允许本地应用程序通过本地tcp套接字（socket）控制这个服务器 咱应该就没必要了主要是因为我也不太懂，感兴趣的可以自己研究，有所见解的可以联系我或者是发帖的人改了/doge 值：true/false
    socketInputPort：socket使用的端口 值：数字
    socketInputAddress：socket所绑定的地址 值：ip地址
    allowCustomClients：是否允许自定义客户端进行连接（学术端没问题的哦） 值：true/false
    whitelist：是否使用白名单 值：true/false
    motd：进服提示
    autosave：自动保存 值：true/false
    autosaveSpacing：自动保存间隔 单位是秒 值：数字
    debug：调试功能开不开（不太建议一般时候一般人开，因为这样你的控制台会很乱） 值：true/false
    snapshotInterval：客户端实体快照间隔（毫秒)(咱还是不知道这是干嘛的） 值L数字
    autoPause：没人在线就自动暂停（注意这个默认值是关闭） 值：true/false
```
***
看到这里了就不妨背记一下吧/doge
