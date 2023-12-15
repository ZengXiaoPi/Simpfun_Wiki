---
title: 控制台基础API
---
:::tip
比如获取某一些信息,使用某一些东西
:::

:::caution
不含实例控制(也不含获取实例内信息)
:::

:::info
比如(示例)
##获取拥有实例
curl -X GET "https://api.simpfun.cn/api/ins/list" -H "Authorization: ${token}"

##获取用户配置
curl -X GET "https://api.simpfun.cn/api/auth/info" -H "Authorization: ${token}"

##获取所有公告
curl -X GET "https://api.simpfun.cn/api/announcement" -H "Authorization: ${token}"

##获取所有记录
curl -X GET "https://api.simpfun.cn/api/pointhistory" -H "Authorization: ${token}"

##获取推荐信息
curl -X GET "https://api.simpfun.cn/api/invite" -H "Authorization: ${token}"

##绑定QQ
curl -X POST "https://api.simpfun.cn/api/bindqq" -H "Authorization: ${token}" -d "qq=需要绑定的QQ号"
:::

:::tip
##下列为与获取创建实例信息相关的(仅获取可创建信息)

:::info
##获取可创建实例类别
curl -X GET "https://api.simpfun.cn/api/games/list" -H "Authorization: ${token}"

##怎么分辨呢?
看list大括号里面包着的东西
##list的大括号的每个小括号里面的' "id":字符 '就是他的ID,比如这里的"RustedWarfare"的ID是:4,以后与id相关的都差不多这么分辨
{"name":"RustedWarfare","pic_path":"https://api.simpfun.cn/static/images/rustedwarfare.png","id":4,"priority":0}

##获取可创建实例服务端
curl -X GET "https://api.simpfun.cn/api/games/kindlist?game_id=实例类别id" -H "Authorization: ${token}"

##获取可创建实例版本
curl -X GET "https://api.simpfun.cn/api/games/versionlist?kind_id=实例服务端id" -H "Authorization: ${token}"

##获取可选机型
curl -X GET "https://api.simpfun.cn/api/shop/list?version_id=实例版本id" -H "Authorization: ${token}"

##获取选择后总信息(用到了机型id:11和可创建实例版本id:51)

##返回大概长这样(示例)
我使用的是curl -X GET "https://api.simpfun.cn/api/shop/confirmation?version_id=51&item_id=11" -H "Authorization: $token"
得到的是{"code":200,"data":{"game_name":"自定义-需有开服经验","kind_name":"Java","version_name":"Java多版本镜像","cpu":6,"ram":16,"disk":30,"grade":"B.L.L","description":null,"point":210}}
:::

:::tip
以上仅用于获取可创建实例信息,没有实质性操作
:::

:::info
##创建实例
curl -X POST "https://api.simpfun.cn/api/ins/create" -H "Authorization: ${token}" -d "item_id=机型id&version_id=实例版本id"
##返回大概不是返回创建成功,就是返回不能创,不对的话直接就返错了😋

:::tip
以下都为开发者API{就是左边栏的那个开发者里面的东西(但似乎并未对普通用户开放)}
后期可能会更变url
:::

##获取自己新建的镜像
curl -X GET "https://api.simpfun.cn/api/dev/list" -H "Authorization: ${token}"

##获取别人发起的技术支持
curl -X GET "https://api.simpfun.cn/api/dev/support/list" -H "Authorization: ${token}"

##获取备份信息
curl -X GET "https://api.simpfun.cn/api/dev/backup?all=true&is_windows=false" -H "Authorization: ${token}"

##获取已创建镜像信息
curl -X GET "https://api.simpfun.cn/api/dev/镜像id/detail" -H "Authorization: ${token}"

##获取已创建镜像版本信息
curl -X GET "https://api.simpfun.cn/api/dev/镜像id/version" -H "Authorization: ${token}"

##获取已创建镜像用户反馈
curl -X GET "https://api.simpfun.cn/api/dev/镜像id/feedback" -H "Authorization: ${token}"

##给已创建镜像添加新的版本
curl -X POST "https://api.simpfun.cn/api/dev/镜像id/version" -H "Authorization: ${token}" -d "backup_id=备份的id&version=版本信息&description=版本描述&recommend_setting=建议配置"

##删除已创建镜像版本
curl -X POST "https://api.simpfun.cn/api/dev/镜像id/version" -H "Authorization: ${token}" -d "version=镜像版本id"
:::








:::
