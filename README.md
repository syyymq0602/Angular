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
### 创建项目
1. 打开命令行进入自己定义的根目录
2. `ng new [name]`创建一个项目(自动安装依赖，可能会导致失败)
3. 利用`ng new [name] --skip-install`安装项目并且跳过依赖，利用`cnpm install`安装依赖（**推荐**）
4. 通过`ng serve --open`运行项目