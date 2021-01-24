# Angular
### 环境配置
1. 安装node.js
   
    - 官网安装，自动安装npm
2. 安装cnpm
    - 通过淘宝镜像(https://npm.taobao.org/)
    - 全局安装命令:
`npm install -g cnpm --registry=https://registry.npm.taobao.org`
3. 安装Angular脚手架
    - 使用下列命令行安装脚手架：
`cnpm install -g @angular/cli`
**注：安装最新版的CLI无法运行时，将CLI降为低版本**，步骤为：
    * 首先通过`npm(cnpm) uninstall -g @angular/cli`卸载CLI
    * 运行`ng v`查看是否卸载干净，若出现版本号则使用`npm cache clean`或者`npm cache clean -force`卸载缓存
    * 最后运行`cnpm install -g @angular/cli@8.2.2`安装指定版本
### 创建项目
1. 打开命令行进入自己定义的根目录
2. `ng new [name]`创建一个项目(自动安装依赖，可能会导致失败)
3. 利用`ng new [name] --skip-install`安装项目并且跳过依赖，利用`cnpm install`安装依赖（**推荐**）
4. 通过`ng serve --open`运行项目