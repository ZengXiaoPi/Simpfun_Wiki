---
title: 如何不使用自带压缩功能的情况下压缩/解压文件
---

:::info 适用场景
     
(仅适用Linux系统的实例)简幻欢任务队列出现**大量积压或出现不可预知的故障**，可使用本方法。此外，如果您的文件较大，我们也推荐使用此方法，**这不仅保证您自己不受任务队列的影响，而且也不会影响到他人**，利人利己。
     
:::
##  与简幻欢自带的压缩/解压功能的区别？
### 请看下表:

|  | 官方压缩/解压功能 | 本方法压缩/解压 |
|---|---|---|
| 区别 | 简单，便捷，但受限于任务队列，可能出现长时间等待问题 | 操作相对复杂，但较为稳定，解压速度仅依赖当前实例的CPU型号 |

### 在了解区别后，让我们开始吧！
___
## 上传软件包
----------
 - 从[7-ZIP官网](https://www.7-zip.org/download.html)下载对应的软件
 ![1](/img/pages/Advancedoperations/zipinstartsh-1.png)
 - 将下载好的文件在本地打开，取出其中的 `.tar` 后缀的文件后通过[官网网页控制台上传](../11-upload.md) 或 [sftp上传](../30-sftp.md)
   
## 修改启动脚本,解压软件包
--------
::: 消歧义
   
此步骤**并非在解压/压缩**您所希望的文件，而是解压软件包。该步骤使用 `tar` 解压您的压缩软件，但实际上， `tar` 功能并不强大，因此不推荐使用 `tar` 解压您的压缩包，此步骤仅提供一个解压压缩软件一个可行的思路。

:::
 - 前往 `文件` 页，进入 `start.sh` ，按下图示例修改：
 ![2](/img/pages/Advancedoperations/zipinstartsh-2.png)
 - 启动示例，执行下方命令：
 ```
 mkdir -p my_folder && tar -xvf XXX.tar -C my_folder
 ```
该命令的含义是在创建文件夹的同时解压您的压缩软件。其中需要将 `my_folder` 改为您需要创建的文件夹，将 `XXX.tar` 改为您上传压缩软件的文件名。
 ![3](/img/pages/Advancedoperations/zipinstartsh-3.png)

## 压缩/解压您的文件
---------
 - 压缩命令如下：
 `"./解压后文件的相对路径/7zz" a archive.7z example`   
 该命令的含义是将某个文件夹压缩到一个压缩包中，其中`archive.7z`为您希望得到压缩后的文件名,支持`zip` 后缀 ;example为 `要压缩的文件夹名` ，可使用相对路径指定。
 若想同时压缩多个文件/文件夹，可在命令末尾添加更多需要解压的文件或者是文件夹,如 `"./7zip/7zz" a archive.7z example text.txt server.jar`
 如您不懂如何寻找相对路径，可按照下图理解操作：
 ![4](/img/pages/Advancedoperations/zipinstartsh-4.png)
 - 同理，解压命令如下：
 ` "./解压后文件夹相对路径/7zz" x XXX.zip -omy_folder  `
 其中 `XXX.zip` 为您的压缩包文件名, ` -omy_folder ` 为要解压到的文件路径，支持相对路径，如为空，则自动解压到当前执行命令的路径,如不出意外的话，那么将解压到 `根目录` 。当然，本教程推荐指定一个文件夹，以免出现**文件重复带来的各种麻烦问题**。
- 解压完成后，可执行 `chmod 777 -R ./` 命令来保证文件权限不出问题!

 ## 在一切工作完成后，将 `start.sh` 中的 `bash` 重新注释后，取消注释您的主启动命令，重启服务器即可！
    
## 实战演练   
---------   
#### - 如图，当前解压后的压缩软件路径为 `7zip/7zz` , 则在解压/压缩操作时需要修改的相对路径为
`./7zip/7zz` 。      
 ![5](/img/pages/Advancedoperations/zipinstartsh-5.png)     
#### 当前，我需要压缩下图中的 `server.jar` 和 `eula.txt`     
 ![6](/img/pages/Advancedoperations/zipinstartsh-6.png)     
 #### 此时，执行的命令为 ` "./7zip/7zz" a server.zip purpur-1.20.4-2176.jar eula.txt ` 。      
 ![7](/img/pages/Advancedoperations/zipinstartsh-7.png)     
 #### 如上图，显示 ` Everything is Ok ` 时，证明解压成功。     
 #### 在查看文件时，我们发现多了一个 `server.zip` 文件：     
 ![8](/img/pages/Advancedoperations/zipinstartsh-8.png)       
 #### 此时，我们删除现有的 `server.jar` 和 `eula.txt`，并执行解压 `server.zip` 的命令:
 #### 此时，执行的命令为 ` "./7zip/7zz" x server.zip  ` 。
 ![9](/img/pages/Advancedoperations/zipinstartsh-9.png)     
 #### 在操作完成后，执行 `chmod -R 777 ./` 来保证文件权限的正常。    
 #### 此时将启动命令修改回去，如图：       
 ![10](/img/pages/Advancedoperations/zipinstartsh-10.png)      
 #### 启动服务器，发现可以正常运行！       
 #### 你可以保留解压后的软件包，在日后需要时重新按照上述流程操作！   
 
:::info 小结
   
虽然该操作较为麻烦，但解决了**因任务执行队列导致长时间不完成任务，无法操作**的痛点，如您想要在此基础上进行更多操作，我们推荐您前往[7zip官网](https://sparanoid.com/lab/7z/)或通过搜索引擎了解更多！
   
:::
