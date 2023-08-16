---
title:如何配置start.sh
---
:::info
这里只暂时演示Forge 1.19.2 服务端

##配置流程:

1.创建服务器进入控制台(Forge端)

2.点击文件

3.根据以下路径/libraries/net/minecraftforge/forge/1.19.2-43.2.0

4.复制“1.19.2-43.2.0”转到start.sh

5.替换“${openjdk17} -Xms1024M -Xmx${result}M @libraries/net/minecraftforge/forge/此处为版本号/unix_args.txt "$@"”中的版本号为“1.19.2-43.2.0”

6.启动服务器即可
:::info
此时加载时间会比较长
