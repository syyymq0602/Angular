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

### 了解项目
1. src/app根目录负责逻辑代码的编写，主要分为module.ts根模块和component根组件，通过`ng g component [name1]/[name2]`创建新的组件。
    - 在NgModule装饰器中有三个元数据对象，作用为：
    	 * `declarations`:配置当前项目运行的组件
    	 * `imports`:配置当前模块运行依赖的其他模块
    	 * `providers`:配置项目所需的服务
    	 * `bootstrap`:指定应用的主视图
    
2. 其他组件之间可以相互调用，一个根模块可以挂载多个组件。

### my-app：
1. 学习在组件中如何绑定数据。
2. 通过`*ngFor="let item of items"`来循环对象。
### angulardemo01：
1. 引入图片：`src=".."`为引入静态图片，`[src]='...'`为引用动态图片
2. 使用`*ngFor="let item of item"`循环遍历数组
3. 使用`*ngIf="expression"`实现动态判断
4. `[ngClass]="{'class': true}"`实现动态属性改变
5. `[ngStyle]="{'property': expression}"`实现动态样式改变
6. `<button (click)='run()'>`按钮点击事件
7. `<input type="text" (keydown)='keyDown($event)' />`表单事件
8. `<input [(ngModel)]="keywords" />`实现数据双向绑定，目前只针对于表单事件，需要在**根模块中**引入`import { FormsModule } from '@angular/forms';`，在`imports`模块中导入`FormsModule`。
### demo02：
1. 人员登记系统
2. 使用以下组件制作一个简单的登记页面：
	 * `<input type="text">`
	 * `<input type="radio">`
	 * `<select name="city" id="city">`
	 * `<input type="checkbox">`
	 * `<textarea name="mark" id="mark">`
### jingdong：
#### search：
1. 仿照京东的搜索界面做了一个简单的搜索页面，主要完成了**去重**以及数组缓存的功能，以及可以对数据进行删除。
2. 添加了本地缓存**服务**，实现数据的持久化。
#### todo-list
1. 在search项目基础上使用`[hidden]="expression"`实现项目的动态显示。
2. 对于对象的查重只能使用`for`循环遍历，而不能使用`indexof()`来去重。
3. 在`StorageService`服务中设置了3个方法来设置、读取历史数据。关于**服务**有以下注意事项：
	+ 使用`ng g service [name1]`来创建服务。
	+ 需要在根模块以及对应的组件中**引用服务**。
	+ `constructor()`在**构造函数**中定义服务属性
	+ `ngOnInit()`在**生命周期函数**中初始化本地缓存
	+ 使用`localStorage.setItem()`代码添加本地缓存；`localStorage.getItem()`获取本地缓存；`localStorage.removeItem()`删除本地缓存。
### demo03
1. 实现了DOM侧边栏动画
2. `ngOnInit()`函数只负责初始化指令/组件，而`ngAfterViewInit()`是在初始化完组件试图及其子视图之后再调用的，适合获取DOM节点
3. `ViewChild`组件也可以获取DOM节点（**推荐**）
### demo04
1. 父子组件传值：
	* 父传子使用`@Input`装饰器，有两种引用方法
		- （1）@input装饰器直接使用：
		```typescript
		父组件：
		<input [(ngModel)]="input"/>
		<app-demo [demoinput]="input"></app-demo>
		子组件：@Input() demoinput:any
		```
		- （2）@input通过别名去使用
		```typescript
		父组件：
        <input [(ngModel)]="input"/>
        <app-demo [testinput]="input"></app-demo>
        子组件：
        @Input('testinput') input
        <input [(ngModel)]="input" (input)="change()"/>
     ```
	* 子传父可以使用`@Output`装饰器或者`@ViewChild`装饰器
		+ （1）@Output装饰器调用：
		```typescript
		子组件：
        @Output() output = new EventEmitter();//实例化output
          change() {
            this.output.emit(this.test)//回调
          }
        <input [(ngModel)]="test" (input)="change()"/>
        父组件：
        <input [(ngModel)]="input"/>
         <app-demo [testinput]="input" (output)="test($event)" ></app-demo>
        test(data){
           this.input=data
          }//通过回调赋值
		```

		+ （2）@ViewChild装饰器调用：
		``` typescript
		@ViewChild("childDemo",{static:true}) childDemo:any;
		```
		调用整个子组件
2. 非父子组件的数据传递：使用`service`服务以及`LocalStorage`传递
3. 总结：
	- [()]：实现双向绑定
	- []：父组件向子组件传递
	- ()：子组件向父组件传递 