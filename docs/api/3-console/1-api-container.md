---
title: 容器控制API
---

::info
先讲获取容器信息吧 🤔

##获取容器信息(里面会有与容器相关的信息)
curl -X GET "https://api.simpfun.cn/api/ins/容器id/detail" -H "Authorization: ${token}"

##查看任务
curl -X GET "https://api.simpfun.cn/api/ins/容器id/tasks" -H "Authorization: ${token}"

##查看备份
curl -X GET "https://api.simpfun.cn/api/ins/容器id/backup" -H "Authorization: ${token}"

##查看sftp信息
curl -X GET "https://api.simpfun.cn/api/ins/容器id/sftp" -H "Authorization: ${token}"

##创建备份
curl -X POST "https://api.simpfun.cn/api/ins/容器id/backup" -H "Authorization: ${token}" -d "tag=标识 (自定义标识,用于区分备份)"

##重装容器
curl -X POST "https://api.simpfun.cn/api/ins/容器id/reinstall" -H "Authorization: ${token}" -d "version_id=实例版本id&diff=false&save=false"

##文件权限修复(toolbox)
curl -X POST "https://api.simpfun.cn/api/ins/容器id/toolbox" -H "Authorization: ${token}" -d "action=fix_permission_and_charset"

##容器变配(说实话在某多数情况下不如新建一个新的容器)
curl -X POST "https://api.simpfun.cn/api/ins/容器id/change" -H "Authorization: ${token}" -d "item_id=机器类型ID"

##评价第三方镜像
喜欢curl -X POST "https://api.simpfun.cn/api/ins/容器id/rating" -H "Authorization: ${token}" -d "like=true&dislike=false&comment=填写体验反馈"
不喜欢curl -X POST "https://api.simpfun.cn/api/ins/容器id/rating" -H "Authorization: ${token}" -d "like=false&dislike=true&comment=填写体验反馈"

##发起技术支持
curl -X POST "https://api.simpfun.cn/api/ins/容器id/support" -H "Authorization: ${token}" -d "comment=备注发起技术支持的原因"

##新建端口
curl -X POST "https://api.simpfun.cn/api/ins/容器id/allocation" -H "Authorization: ${token}"

##删除实例
curl -X POST "https://api.simpfun.cn/api/ins/容器id/delete" -H "Authorization: ${token}"

