---
title: 一些常见问题
---

:::tip

此文档汇总了一些我的世界开服的常见问题…所以建议任何新人**建好实例以后**都进来看看。

如果此处不能解答你的疑问，可以移步[必应](https://cn.bing.com)或者在交流群问问群u。

关于如何提问题，详见[此处](/docs/howtoask)

:::

:::info

本篇部分图片搬运自[官方文档](https://simpfun.me)。

:::

-----

## Minecraft 服务器如何给op

### 进入服务器控制台

直到进入以下图片的页面后回到此处：

![](https://www.simpfun.me/assets/images/%E7%BB%88%E7%AB%AF%E8%A7%A3%E6%9E%90-d86ed842811934d638a63900d57cf74c.png)

### 输入指令

在显示“输入命令 无需加斜杠”的输入栏内输入以下指令：

`op <name>`

其中`<name>`这一项需要被替换 请连带`<>`符号一同改成你的游戏ID

:::tip

注：玩家需要在线！

:::

### 玩家已获得op但是无法执行切换游戏模式等操作，为什么？

**多半是服务器未启用作弊导致的！！！**

去`server.properties`里将`allow-cheat`这一项改为`true`即可启用作弊。

~~我超捏吗我忘记在`server.properties`文档里面写`allow-cheat`了，我的锅~~

-----

## 服务器开机与关机

此图中右上角的蓝色“启动”按钮即为服务器开机。

![](https://www.simpfun.me/assets/images/%E9%A1%B5%E9%9D%A2%E8%A7%A3%E6%9E%90-fa8e5ba37e9ee0556bfe80e354020d12.png)

开机后，服务器控制台看起来像这样：

![](/img/pages/CommonQuestions-1.png)

此时蓝色启动按钮变成了三个小按键

![](/img/pages/CommonQuestions-2.png)

现在它们的功能变成了重启、关机和强制关机。

:::info

关于关机和强制关机的区别：关机是在控制台输入stop命令执行关机，当然你也可以自己输入，游戏会自动保存；强制关机相当于结束进程，游戏来不及保存就被杀了。所以如果你的服务器正常运行，不要按下强制关机！

:::

点击它们，弹出确认窗口询问是否执行操作。如果你确定要执行此操作，请按`确定`。

![](/img/pages/CommonQuestions-3.png)

随后，服务器保存并关机。

![](/img/pages/CommonQuestions-4.png)
