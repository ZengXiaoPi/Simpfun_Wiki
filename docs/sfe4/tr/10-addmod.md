---
title: 如何上传并使用mod
---

:::caution 仅适用

本教程**仅适用**以下服务端：

- TModLoader

:::

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

5. 返回上层，来到`/.local/share/Terraria/tModLoader`，点击`favorites.json`并编辑，将你目前使用的世界名后面的false改为true，例如，我这里有两个世界，`old`和`zaie`，他们的文件分别为`old.wld`和`zaie.wld`，此时，我就可以这样：

:::caution

如果文件里没有你世界的名字，请你手动添加。

如果你不改变世界名字，直接给文件中的`"SFE4.wld": false`改为`"SFE4.wld": true`就可以。

:::

```json 编辑前

{
  "World": {
    "old.wld": false,
    "zaie.wld": false
  }
}

```

```json 编辑后

{
  "World": {
    "old.wld": false,
    "zaie.wld": true
  }
}

```

6. 重启服务器，我们再打开，输入modlist（无需斜杠），就可以看到你添加的模组了：

![1](/img/pages/AddMod-TR.png)
