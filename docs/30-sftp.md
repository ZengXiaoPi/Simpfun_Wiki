---
title: 【实例管理】如何使用 SFTP 管理文件
---

:::caution

使用SFTP上传文件后，你需要在控制台->实例->文件->工具箱执行 `解决权限和文件名乱码问题`，否则会因权限不足导致服务器运行异常！
![](https://github.com/shenbimicro233/Simpfun_Wiki/assets/116066110/33644322-aa22-460f-9d05-1170b7064758)


:::

在以下情况中，我们需要使用 SFTP ：  

- 删除乱码文件
- 上传文件夹
- ……

## 流程（Windows）

1. 下载 [WINSCP](https://winscp.net/download/WinSCP-6.1.1-Setup.exe)

2. 安装后打开 WINSCP 

![1](/img/pages/SFTP-1.png)

3. 进入实例，点击`管理`，在`SFTP文件管理服务器`查看四个信息。

![2](/img/pages/SFTP-2.png)  

![3](/img/pages/SFTP-3.png)

4. 将`服务器IP`填入`主机名`，`服务器端口`填入`端口`，`用户名`填入`用户名`，`密码`填入`密码`。

![4](/img/pages/SFTP-4.png)  

5. 点击`登录`即可。

## 流程（Android）

1、打开ES文件管理器，点击左上角三个横线进入到侧栏之中。

![5](/img/pages/SFTP-5.png)  

2、在侧栏的`网络`下选择`FTP`进入到FTP管理界面。

![6](/img/pages/SFTP-6.png)    

3、点击右边的`新建`按钮，建立一个FTP服务器。

![7](/img/pages/SFTP-7.png)    

4、点击`SFTP`。  

5、将`服务器IP`填入`服务器`，`服务器端口`填入`端口`，`用户名`填入`用户名`，`密码`填入`密码`。

![8](/img/pages/SFTP-8.png)    

6、点击确定后就可以对各种文件编辑管理了。
