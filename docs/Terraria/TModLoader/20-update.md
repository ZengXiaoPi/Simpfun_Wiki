---
title: 更新 TModLoader
---

目前简幻欢提供的 TModLoader 并非最新版，会导致灾厄（Calamity）无法正常运行。  

我们需要手动更新 TModLoader 以解决这个问题。

1. 下载 [Watt Toolkit](https://steampp.net/) ，打开后勾选 Github 选项，并加速。

2. 进入 [Release](https://github.com/tModLoader/tModLoader/releases/latest) ，下载 `TModLoader.zip` 。

3. 进入控制台，删除以下文件和文件夹：

<details>
    <summary>
      展开文件列表
    </summary>

文件夹：

- DedicatedServerUtils

- LaunchUtils

- Libraries

- tModPorter

文件：

- tMLMod.targets

- tModLoader.deps.json

- tModLoader.dll

- tModLoader.pdb

- tModLoader.runtimeconfig.dev.json

- tModLoader.runtimeconfig.json

- tModLoader.xml

</details>


4. 将刚刚下载的 `TModLoader.zip` 上传，并解压即可。

## 使用bash脚本实现自动更新tModLoader版本
1.下载 [7-zip](https://www.7-zip.org/a/7z2406-linux-x64.tar.xz) ，在电脑上解压出来（通常需 `解压2次` 直到看见一个文件夹） 
  
2.将 `7z文件夹` 复制到你的简幻欢服务器实例中，接着将以下代码 粘贴到`start.sh` 里并保存,直接启动服务器  
  
```
#!/usr/bin/env bash
# 定义tModLoader的下载URL
download_url="https://github.com/tModLoader/tModLoader/releases/latest/download/tModLoader.zip"
# 检查tModLoader.zip是否存在
if [ ! -f "tModLoader.zip" ]; then
    # 输出下载信息并执行下载
    echo "正在自动更新Tmodloader: $download_url"
    curl -LJO "$download_url"
    # 检查下载状态
    if [ $? -eq 0 ]; then
        echo "tModLoader.zip 下载成功。"
    else
        echo "下载失败，请检查网络或URL是否有效。"
        exit 1
    fi
else
    echo "tModLoader.zip 已存在，跳过下载。"
fi
# 获取权限
chmod +x 7z/7zz
chmod +rx tModLoader.zip
# 解压文件
echo "正在解压tModLoader.zip"
"./7z/7zz" x "./tModLoader.zip" -aoa
echo "按任意键进入服务器并删除现有压缩包..."
# 暂停，等待用户输入
read -p "再次按任意键确认..." key
# 移除zip文件
rm "tModLoader.zip"
# 进入脚本所在的目录 启动Tmodloader
#!/usr/bin/env bash
cd "$(dirname "$0")" || exit
launch_args="-server"
launch_args="-server -config server.properties -lang 7"
dotnet tModLoader.dll $launch_args
```
  
3.替换回你原本的 `start.sh` 启动项  
  
ps：如果没电脑可直接下载[羽学写好的tModloader自动更新脚本](https://share.weiyun.com/he5SKsJs)，里面已含有解压好的二进制的 `7z`   
