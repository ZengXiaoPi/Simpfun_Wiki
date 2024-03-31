---
title: Tshock5.2   config翻译
---
   
# 配置文件位置: `/tshock/config.json`
___
```
{
  "Settings": {
    "ServerPassword": "",    //服务器密码
    "ServerPort": 7777,    //服务器端口
    "MaxSlots": 8,    //最大人数
    "ReservedSlots": 20,    //服务器满员时，保留玩家可以加入的保留空位数量。
    "ServerName": "",    //服务器名称（请检查是否是 utf 编码，如果不是记事本打开另存为选择 utf-8）
    "UseServerName": false,    //是否使用服务器名称，如果使用，将显示上面服务器名称而不是世界名称
    "LogPath": "tshock/logs",    //日志路径，像默认填的 tshock/logs 就是指服务器根目录 \tshock\logs
    "DebugLogs": false,    //是否启用报错日志（一般不用开启）
    "DisableLoginBeforeJoin": false,    //启用此项将禁止用户在加入时使用帐户密码登录。
    "IgnoreChestStacksOnLoad": false,    //启用此项将允许箱子中的堆叠数量超出堆叠限制。
    "AutoSave": true,   //是否自动保存存档
    "AnnounceSave": true,    //是否自动保存存档时发送广播通知（开启后自动保存会在聊天框里显示 saving world...）
    "ShowBackupAutosaveMessages": true,    //是否显示自动保存提示（显示自动保存消息）
    "BackupInterval": 10,    //备份频率，填入的值为分钟，保存的文件在 \tshock\backups 文件夹中。
    "BackupKeepFor": 240,    //备份保存时间，填入的值为分钟
    "SaveWorldOnCrash": true,     //崩溃时是否自动保存
    "SaveWorldOnLastPlayerExit": true,    //是否在最后一个玩家退出后自动保存世界
    "InvasionMultiplier": 1,    //入侵乘数（人话：打事件进度条需要多少怪）计算入侵事件规模的公式为：100 + 乘数*（生命值大于 200 的在线玩家数量）
    "DefaultMaximumSpawns": 5,    //每波生成的默认最大怪物数。越高意味着该波中有更多的小怪。
    "DefaultSpawnRate": 600,    //波之间的延迟。较低的值会导致更多的怪物。
    "InfiniteInvasion": false,    //使入侵规模永不减小。运行指令 /invade，注意这会向地图的生成队列中添加超过 200 万个哥布林。
    "PvPMode": "normal",    //填入的值可为："always"——强制开启；"disabled"——强制关闭；"normal"——正常模式
    "SpawnProtection": true,    //是否启用出生点保护（岩浆和水生成黑曜石可以恶意堵上）开启状态下玩家在出生点附近无法放置和破坏物块
    "SpawnProtectionRadius": 10,    //出生点保护范围（出生点为中心的正方形）
    "RangeChecks": true,    //是否启用根据玩家互连块位置之间的距离的反作弊范围检查
    "HardcoreOnly": false,    //是否启用强制硬核
    "MediumcoreOnly": false,    //是否启用强制中核
    "SoftcoreOnly": false,    //是否启用强制软核
    "DisableBuild": false,    //是否禁止建筑
    "DisableHardmode": false,    //如果为 true 禁止进入肉后
    "DisableDungeonGuardian": false,    //是否禁止生成地牢守卫
    "DisableClownBombs": false,    //是否禁止小丑炸弹爆炸
    "DisableSnowBalls": false,    //是否禁止雪球射弹生成
    "DisableTombstones": true,    //是否禁止墓碑生成
    "DisablePrimeBombs": false,    //是否禁止炸弹爆炸
    "ForceTime": "normal",    //day 永昼；night 永夜；normal 正常
    "DisableInvisPvP": false,    //是否在pvp中禁用隐身药水
    "MaxRangeForDisabled": 10,    //被禁用玩家可以移动的最大距离（以方块为单位）
    "RegionProtectChests": false,    //是否保护保护区域内的箱子
    "RegionProtectGemLocks": true,    //是否保护保护区域内的宝石锁
    "IgnoreProjUpdate": false,    //是否忽略检查玩家能否更新射弹
    "IgnoreProjKill": false,    //是否忽略检查玩家能否击毁射弹
    "AllowCutTilesAndBreakables": false,    //是否允许玩家破坏易碎方块（草或者花）
    "AllowIce": false,    //是否允许玩家在无法建筑的地方放冰块
    "AllowCrimsonCreep": true,    //是否开启猩红蔓延
    "AllowCorruptionCreep": true,    //是否开启猩红腐化蔓延
    "AllowHallowCreep": true,    //是否开启神圣蔓延
    "StatueSpawn200": 3,    //雕像在 200 格内生成最大数量
    "StatueSpawn600": 6,    //同上，但是是 600 格
    "StatueSpawnWorld": 10,    //雕像可以生成多少 npc
    "PreventBannedItemSpawn": false,    //是否开启防止被禁的物品生成或指令拿到
    "PreventDeadModification": true,    //是否开启阻止玩家在死亡后与世界互动
    "PreventInvalidPlaceStyle": true,    //是否开启防止玩家放置无效方块
    "ForceXmas": false,    //是否强制圣诞节
    "ForceHalloween": false,    //是否强制万圣节
    "AllowAllowedGroupsToSpawnBannedItems": false,    //是否允许管理员获取被禁的物品
    "RespawnSeconds": 0,    //玩家重生时间，单位为秒
    "RespawnBossSeconds": 0,    //附近有 Boss 时玩家重生时间，单位为秒
    "AnonymousBossInvasions": true,    //是否公告 Boss 重生或者入侵事件开始
    "MaxHP": 500,     //没有装备增益的情况下玩家最大生命值
    "MaxMP": 200,    //没有装备增益的情况下玩家最大魔法值
    "BombExplosionRadius": 5,    //炸弹影响范围
    "GiveItemsDirectly": false,    //如果设置为 true，给予玩家的物品将直接插入他们的库存中。需要 SSC。否则，给予玩家的物品将作为掉落物品生成。实验性功能。可能无法正常工作或导致物品丢失。
    "DefaultRegistrationGroupName": "default",    //新注册玩家默认权限组
    "DefaultGuestGroupName": "guest",    //未注册玩家默认权限组
    "RememberLeavePos": false,    //根据玩家的 IP 记忆玩家离开的位置，服务器重新启动会导致上述记忆丢失。开启此项可使玩家再次进入服务器时出生在上次离开的位置
    "MaximumLoginAttempts": 3,    //登录失败最大次数
    "KickOnMediumcoreDeath": false,    //是否踢出死亡的中核玩家
    "MediumcoreKickReason": "Death results in a kick",    //踢出死亡中核玩家的原因
    "BanOnMediumcoreDeath": false,    //是否在中核玩家死亡后 ban 掉他
    "MediumcoreBanReason": "Death results in a ban",    //中核玩家死亡后 ban 的原因
    "DisableDefaultIPBan": false,    //此项为true，则如果没有参数传递给 ban 命令，则默认禁用 IP 禁止。
    "EnableWhitelist": false,    //是否启用白名单
    "WhitelistKickReason": "You are not on the whitelist.",    //不在白名单中玩家被踢出原因
    "ServerFullReason": "Server is full",    //服务器已满玩家无法进入显示的原因
    "ServerFullNoReservedReason": "Server is full. No reserved slots open.",    //保留人数达到上限玩家无法进入显示的原因
    "KickOnHardcoreDeath": false,    //是否踢出死亡的硬核玩家
    "HardcoreKickReason": "Death results in a kick",    //踢出死亡硬核玩家的原因
    "BanOnHardcoreDeath": false,    //是否在硬核玩家死亡后 ban 掉他
    "HardcoreBanReason": "Death results in a ban",    //中核玩家死亡后 ban 的原因
    "KickProxyUsers": true,    //如果 GeoIP 可用，ban 掉通过代理链接服务器的玩家
    "RequireLogin": false,    //强制注册登录
    "AllowLoginAnyUsername": true,    //允许玩家登录的账号与角色名不符
    "AllowRegisterAnyUsername": false,    //允许玩家注册与角色名称不同的账号
    "MinimumPasswordLength": 4,    //新账号密码的最短长度（最大2147483647）
    "BCryptWorkFactor": 7,    //决定使用的 BCrypt 工作因子
    "DisableUUIDLogin": false,    //是否禁止用客户端 UUID 登录
    "KickEmptyUUID": false,    //踢出不把 UUID 上传服务器的玩家
    "TilePaintThreshold": 15,    //如果一秒刷漆超过此数量的方块，则禁止该玩家
    "KickOnTilePaintThresholdBroken": false,    //玩家超过一秒刷漆上限是否 ban
    "MaxDamage": 1175,    //玩家可以造成的最大伤害
    "MaxProjDamage": 1175,    //射弹最大伤害
    "KickOnDamageThresholdBroken": false,    //超过最大伤害是否踢出服务器
    "TileKillThreshold": 60,    //如果一秒破坏超过此数量的方块，则禁止该玩家
    "KickOnTileKillThresholdBroken": false,    //玩家超过一秒破坏方块上限是否 ban
    "TilePlaceThreshold": 32,    //如果一秒放置超过此数量的方块，则禁止该玩家
    "KickOnTilePlaceThresholdBroken": false,    //玩家超过一秒放置方块上限是否 ban
    "TileLiquidThreshold": 50,    //如果一秒放置超过此数量的液体，则禁止该玩家
    "KickOnTileLiquidThresholdBroken": false,    //玩家超过一秒放置液体上限是否 ban
    "ProjIgnoreShrapnel": true,    //射弹数量计算是否加上水晶子弹碎片
    "ProjectileThreshold": 50,    //如果一秒发射超过此数量的射弹，则禁止该玩家
    "KickOnProjectileThresholdBroken": false,    //玩家超过一秒发射射弹上限是否 ban
    "HealOtherThreshold": 50,    //如果一秒发送超过此数量的 HealOtherPlayer 数据包，则禁止该玩家
    "KickOnHealOtherThresholdBroken": false,    //玩家超过一秒发送 HealOtherPlayer 数据包上限是否 ban
    "SuppressPermissionFailureNotices": false,    //是否禁止显示权限失败通知（人话：权限不够打完指令也不告诉你）
    "DisableModifiedZenith": false,    //是否禁用修改后的天顶剑
    "DisableCustomDeathMessages": true,    //是否禁用自定义死亡消息
    "CommandSpecifier": "/",    //指令前缀（一个字符不能为中文）（如果设为* 那么打指令是这样的 * give）
    "CommandSilentSpecifier": ".",    //指令静音处理前缀（没有任何动静处理命令，恶搞必备）
    "DisableSpewLogs": true,    //是否阻止日志记录发送给有日志权限的玩家
    "DisableSecondUpdateLogs": false,    //防止 OnSecondUpdate 检查写入日志文件
    "SuperAdminChatRGB": [
      255,
      255,
      255
    ],    //管理员权限组在聊天框显示颜色
    "SuperAdminChatPrefix": "(Super Admin) ",    //管理员权限组在聊天框显示的前置字（低调点就不填或者空格，双引号里的括号能删）
    "SuperAdminChatSuffix": "",    //管理员权限组在聊天框后置显示的字
    "EnableGeoIP": false,    //是否根据玩家ip在加入服务器的时候广播国家/地区
    "DisplayIPToAdmins": false,    //向具有日志权限的玩家显示加入玩家的ip
    "ChatFormat": "{1}{2}{3}: {4}",    //聊天格式{0}=权限组名称 {1}=权限组前置字串 {2}=玩家名称 {3}=权限组后置字串 {4}=聊天信息（注意！双引号里那个冒号也能改！）
    "ChatAboveHeadsFormat": "{2}",    //用聊天泡泡时改变玩家名称
    "EnableChatAboveHeads": false,    //是否在玩家头上显示聊天信息（这玩意就是聊天泡泡）
    "BroadcastRGB": [
      127,
      255,
      212
    ],    //广播信息的 RGB 颜色
    "StorageType": "sqlite",    //数据库类型，可选：mysql；sqlite
    "SqliteDBPath": "tshock.sqlite",    //储存数据库路径（像tshock.sqlite的意思就是服务器根目录\tshock）
    "MySqlHost": "localhost:3306",    //mysql连接的ip和端口
    "MySqlDbName": "",    //mysql作为存储类型时用的数据库名称
    "MySqlUsername": "",    //mysql作为存储类型时用的账号
    "MySqlPassword": "",    //mysql作为存储类型时用的密码
    "UseSqlLogs": false,    //是否将日志存到数据库而不是txt
    "RevertToTextLogsOnSqlFailures": 10,    //SQL 日志必须在回复到文本日志之前无法插入日志的次数
    "RestApiEnabled": false,    //是否开启 Rest Api
    "RestApiPort": 7878,    // Rest Api 使用的端口
    "LogRest": false,    //是否记录 Rest Api 连线
    "EnableTokenEndpointAuthentication": false,    //是否通过权限认证才能使用
    "RESTMaximumRequestsPerInterval": 5,    //拒绝请求前连线池中最大的 rest 请求数（最小为5）
    "RESTRequestBucketDecreaseIntervalMinutes": 1,    // rest 请求连线池以分钟为单位所减少1单位数量的频率，最小为1（分钟）
    "ApplicationRestTokens": {}    //外部应用可对服务器查询的 rest 权限列表
  }
}
```