---
title: 如何上传并使用mod
---

1. 进入实例，点击`文件`

:::tip

如果没有`.local`文件夹，可以开启一次服务器，再关闭。

:::

2. 进入`/.local/share/Terraria/tModLoader/Mods`

3. 上传您以`.tmod`为后缀的 mod 文件。

:::tip

您可以在`Steam目录\steamapps\workshop\content\1281930`下找到您订阅的所有mod文件。

:::

4. 在`/.local/share/Terraria/tModLoader/Mods`创建一个文件，叫做`enabled.json`，在其中输入下面的内容：

```json

[
  "第一个模组",
  "第二个模组"
]

```

例如，我往mods文件夹放入了三个模组，一个`CalamityMod.tmod`，一个`CalamityCN.tmod`，一个`Aimbot.tmod`，那么，我就应该输入：

```json

[
  "CalamityMod",
  "CalamityCN",
  "Aimbot"
]

```

5. 重启服务器，我们再打开，输入modlist（无需斜杠），就可以看到你添加的模组了：

![1](/img/pages/AddMod-TR.png)
