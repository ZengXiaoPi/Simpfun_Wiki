---
title: 进阶文档：使用第三方验证服务器登录
---

:::tip

你还在因为离线模式下多人联机**无法使用皮肤**而苦恼吗？还在因为你认为原版内置皮肤丑得批爆而厌烦吗？加入光荣的**authlib第三方登录**吧！！

第三方登录允许你使用微软自己的正版验证服务器以外的验证服务器进行验证，**可以使用皮肤！！**而且**完美规避了`离线模式服务器账号数据不安全，谁来都能登都能玩`的问题**而不需要繁琐的注册插件！

[哇袄！](https://minecraft.net/zh-hans/)这么好的登录方式怎么配置？请看本文档！

注：本文档中有引用（链接）其它不同项目文档。

:::

:::tip

本文档**默认有自定义开服的知识基础。**

:::

:::tip

**为了启用第三方登录验证，请在`server.properties`中将`online-mode`改为`true`。**

第三方验证的原理是修改验证服务器，所以你如果不让它验证了则毫无效果。

:::

-----

# 服务端操作

## 下载authlib-injector插件并上传到服务器

到[authlib-injector的官网](https://authlib-injector.yushi.moe/)下载。点进去默认是最新的1.2.3版本，下这个就行。

![全然わかんない 全然わかんない 全然わかんない~本当くだんない 本当くだんない 本当くだんない](/img/pages/AuthlibInjector-1.png)

下载后扔到与`start.sh`同级的目录。

## 配置`start.sh`文件中的启动命令

为启用第三方登录，请在启动命令中添加参数使authlib-injector插件启动服务器核心。

:::tip

注：高版本forge服务器启动游戏是运行一个txt文件中的指令。请在`start.sh`中找到该文件并在txt内配置。

如果你不想自己配置命令，可以使用这个[我的世界服务器启动命令生成器](https://deploy-preview-60--lovely-jalebi-5579a8.netlify.app/minecraftbat)

:::

下面是一个服务器启动命令示例，它来源于[自定义教程](/docs/mcje/500-customization.md)

```sh
${openjdk17} -Xms1024M -Xmx${maxmem}M -jar server-release.jar
```

接下来请在启动命令中**正确的位置**`（-jar xxx.jar 之前）`插入 `-javaagent`参数。

以下是一个`-javaagent`参数示例：

```sh
-javaagent:authlib-injector-1.2.3.jar=https://littleskin.cn/api/yggdrasil 
```

它表示：

  使用名为`authlib-injector-1.2.3.jar`的文件进行第三方登录；
  
  第三方登录文件与服务器核心处在同一目录下；
  
  第三方登录服务器验证地址为`https://littleskin.cn/api/yggdrasil`（此第三方登录服务器为[LittleSkin](https://littleskin.cn/)）

:::tip

**注意：`start.sh`中各项启动参数之间有空格，同时必须有且只有一个空格。检查你的启动命令确认是否出错！**

:::

将`-javaagent`参数正确插入后，该命令如下：

```sh
${openjdk17} -Xms1024M -Xmx${maxmem}M -javaagent:authlib-injector-1.2.3.jar=https://littleskin.cn/api/yggdrasil -jar server-release.jar
```

注：此项二级标题下的内容部分参考[Blessing Skin 用户手册-为游戏服务端加载authlib-injector](https://blessing.netlify.app/yggdrasil-api/authlib-injector.html#%E4%B8%BA%E6%B8%B8%E6%88%8F%E6%9C%8D%E5%8A%A1%E7%AB%AF%E5%8A%A0%E8%BD%BD-authlib-injector)，同时该文档同样介绍了如何为游戏服务端加载authlib-injector，如果理解此文档有障碍，不妨去该文档看看。

到此为止服务端的配置完成，下面介绍客户端配置。

# 客户端操作

需要在启动器修改登录方式。

:::tip

注：修改了登录方式到第三方的客户端无法用于验证正版，多人游戏下只能加入启用相同第三方验证服务器的服务器和离线服务器；单人游戏不受影响。

:::

:::tip

本部分教程均以[LittleSkin](https://littleskin.cn)为例

:::

## PCL2

注册好[LittleSkin](https://littleskin.cn/)账号后进入如下页面

![見当違いの愛 手にしたって you got a 未来の後悔~捨て台詞くらいにはなるか？ 威張んなよ お前が](/img/pages/AuthlibInjector-2.png)

直接鼠标左键长按那个`将此按钮拖动至启动器`的按钮 然后把它拖到PCL2上并松开左键 PCL2会自动为你开启当前版本的第三方登录验证

然后你需要在PCL2里输入自己的LittleSkin账密来获取角色，然后的然后就可以正常游玩了！

## HMCL

1.将红框内的按钮直接拖入HMCL中，在弹出的窗口中选择“完成”
![Twelve你AuthlibInjector-2.png的名字都打错了](/img/pages/AuthlibInjector-3.png)
<!--好好好，你人还挺好的嘞-->
2.点击HMCL左侧的`账户`，在二级页面的左侧选择`LittleSkin`，输入你的用户名和密码进行登录
![我给改回来了](/img/pages/AuthlibInjector-4.png)     
<!--原神启动-->
<!---->
3.登录完成后选择一个角色，然后你就可以开始游戏辣

## BakaXL 3.x

配置相较于以上两个启动器较为麻烦

1.在BakaXL的开始页面点击`本体设置`
![上一个编写的人图片名夹带私货是吧,那我也夹点](/img/pages/AuthlibInjector-5.png)
2.在左栏选择`账户与档案`，下滑找到“Minecraft用户档案”，选择`新增一个档案`
![Never gonna give you up](/img/pages/AuthlibInjector-6.png)
3.连续点击“游戏启动模式”三次，切换到外置登录，在验证服务器处输入`https://littleskin.cn/api/yggdrasil`，在下方输入你的邮箱和密码，点击`进行验证并返回`
![Never gonna let you down](/img/pages/AuthlibInjector-7.png)
![Never gonna run around and desert you](/img/pages/AuthlibInjector-8.png)
<!--Never gonna make you cry-->
<!--Never gonna say good bye-->
<!--Never gonna tell a lie and hurt you-->
4.此时它会提示你选择一个角色，选择你需要登录的角色即可

## BakaXL 2.x
BakaXL 2 已停更，WinXP~Win8.1建议使用兼容更好的HMCL

# 推荐的第三方登录验证服务器

[LittleSkin](https://littleskin.cn/) —— 国内首选，目前为国内第一大的第三方皮肤站(因为Skinme寄了)
