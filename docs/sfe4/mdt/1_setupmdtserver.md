# 如何像人类一样开像素工厂服务器

***提要: 如果您发现本文章有哪些错误请立刻联系我进行更正，祝您有愉快的阅读体验***

- **第零步**

> - 打开您的**sfe4**
> - 左上角
> - 控制台
> - 新建实例
> - Mindustry
> - 自由发挥
> - 进入您的实例
> - 启动

以下是自定义版本内容
------
- **第一步**:

> - 打开你可以使用的浏览器

- **第二步**:

> - 复制

 > https://github.com/Anuken/Mindustry/releases

> 并且在浏览器打开

:::caution  注意：

您如果像我一样**无法访问**github，您可以尝试一下使用**移动数据**连接或者使用**第三方科技**，当然***最简单的办法***就是去[这里](www.baidu.com)寻找该服务器包

当然还有一种方法那便是参考下面链接并在浏览器打开
```
https://ghproxy.com/https://github.com/Anuken/Mindustry/releases/download/v您的版本号/server-release.jar
```
例：
```
https://ghproxy.com/https://github.com/Anuken/Mindustry/releases/download/v145.1/server-release.jar
```
:::

- **第三步**

> 选择您需要的版本并且找到**Asset**下的**server-release.jar**并下载到本机

- **第四步**

> 打开mt管理器或者任何一个**拥有搜索功能**的文件管理器并**搜索server-release.jar**或者 您也可以打开文件管理－Download－找到server-release.jar

>(**路径可能随机型变化而变化**)

您已经完成了一半了！
------
- **第五步**

> - 打开您的sfe4
- 进入控制台
- 新建实例
- 自定义
- 自由发挥
- 确认创建。
- 这样您就拥有了一个自定义服务器

- **第六步**

> - 左上角
- 控制台
- 您刚刚创建的实例
- 文件
- 右下角
- 上传文件
- 选择您第四步找到的**server-release.jar**文件并等待

- **第七步**

> - 找到**start.sh**并找到**#${openjdk8} -jar server-release.jar**字样
- 将前面的*#*删除并保存，当然如果您对jdk有要求可以参考上文的预置镜像，例如${openjdk11} -jar server-release.jar
```
注意:上文的命令内的server -release. jar为您上传的文件名，灵活一点
```

- **第八步**

> - 终端
- 启动，并保存服务器ip和端口

这样，您就完成了这***艰难***的开服过程，如果发现终端里面的信息有**Permission denied**字样，请移步去文件-选中server-release.jar-右下角-工具箱-选中唯一选项-点击执行

祝你生活愉快
