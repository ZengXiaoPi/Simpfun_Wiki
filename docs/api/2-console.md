---
title: 控制台基础操作及获取
---
:::tip
非常简单😋(以curl为例{因为每个设备基本都有curl})
这些操作多数都需要token
因此在原本的获取需要多一个提交token的操作
:::

:::info
比如获取拥有实例列表
curl -X GET "https://api.simpfun.cn/api/ins/list" -H "Authorization: ${token}"
:::tip
-H "Authorization: ${token}"，${token}那部分需要把获取到的token给替换掉,如果直接
'curl -X GET "https://api.simpfun.cn/api/ins/list" -H "Authorization: ${token}"'能获取个空气,大多数只能返回个错
:::
