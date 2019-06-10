              入门webpack
(https://segmentfault.com/a/1190000006178770)
1.常见webpack.config.js配置文件

2.webpack作用：模块打包机。分析项目结构，找到js模块以及其他一些浏览器不能直接运行的拓展语言（scss,typescript)，将其转换和打包为适合格式浏览器使用。

3.和Grunt/Gulp相比：
 Gulp/Grunt是一种能够优化前端的开发流程的工具，而WebPack是一种模块化的解决方案，不过Webpack的优点使得Webpack在很多场景下可以替代Gulp/Grunt类的工具。
 Grunt/Gulp:在一个配置文件中，指明对某些文件进行类似编译，组合，压缩等任务的具体步骤，工具之后可以自动替你完成这些任务。
 Webpack:把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的JavaScript文件。

4.使用
 4.1 npm安装：
	sudo npm install -g webpack(全局安装)
  (sudo npm install --save-dev webpack -g)
	npm install --save-dev webpack(安装到项目)
 4.2 项目中创建package.json文件，标准的npm说明文件，里面蕴含了丰富的信息，包括当前项目的依赖模块，自定义的脚本任务等等。
	mkdir webpack-demo; cd webpack-demo;  //新建项目
  npm init;  //自动生成package.json
	npm install --save-dev webpack(安装到webpack-demo项目)
 4.3 新建public/index.html
  >...
     新建app/main.js Greeter.js
  >...
 4.4 使用webpack:webpack {entry file} {destination for bundled file}
 //非全局安装
 (node_modules/.bin/)webpack app/main.js (-o) public/bundle.js;  //新版本webpack+4.32.2需要加上-o
 4.5 通过配置文件来使用webpack
 ...
 配置后直接 (node_modules/.bin/)webpack 代替 webpack app/main.js -o public/bundle.js
 4.6 更快捷的执行打包任务
 在packape.json中对scripts对象进行相关设置,json中不支持注释
 ...
 npm start 代替 (...)webpack
 npm的start命令是一个特殊的脚本名称，其特殊性表现在，在命令行中使用npm start就可以执行其对于的命令，如果对应的此脚本名称不是start，想要在命令行中运行时，需要这样用npm run {script name}如npm run build.
+(npm install -D webpack-cli)

5. webpack强大的功能
	5.1 生成Source Maps(使调试更容易)
  通过打包后的文件，不容易找到出错了的地方，对应的你写的代码的位置的，Source Maps就是来帮我们解决这个问题的。通过简单的配置，webpack就可以在打包时为我们生成的source maps，这为我们提供了一种对应编译文件和源文件的方法，使得编译后的代码可读性更高，也更容易调试。
	配置webpack.config.js
	>devtool: 'eval-source-map'
	5.2 使用webpack构建本地服务器
	让你的浏览器监听你的代码的修改，并自动刷新显示修改后的结果.Webpack提供一个可选的本地开发服务器，这个本地服务器基于node.js构建，可以实现你想要的这些功能，不过它是一个单独的组件，在webpack中进行配置之前需要单独安装它作为项目依赖
	npm install --save-dev webpack-dev-server;
  在webpack.config.js中配置devserver
	>...
	在package.json中添加server
	>...
	运行：npm run server
	5.3 Loaders
	Loaders是webpack提供的最激动人心的功能之一了。通过使用不同的loader，webpack有能力调用外部的脚本或工具，实现对不同格式的文件的处理，比如说分析转换scss为css，或者把下一代的JS文件（ES6，ES7)转换为现代浏览器兼容的JS文件，对React的开发而言，合适的Loaders可以把React的中用到的JSX文件转换为JS文件。
	在webpack.config.js中对modules配置
	>...
	 *test:一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）
	 *loader:loader的名称（必须）
	 *include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
	 *query:为loaders提供额外的设置选项（可选）
	在配置loader之前，把Greeter.js中问候消息放在单独JSON文件中：
  新建app/config.json
	>...
	更新后的Greeter.js
	>...
	(由于webpack3.*/webpack2.*已经内置可处理JSON文件，这里我们无需再添加webpack1.*需要的json-loader)
	5.4 Babel
	Babel是一个编译js的平台。让你能使用最新的JavaScript代码（ES6，ES7...），而不用管新标准是否被当前使用的浏览器完全支持；让你能使用基于JavaScript进行了拓展的语言，比如React的JSX；
  1）安装及配置
	 Babel其实是几个模块化的包，其核心功能位于称为babel-core的npm包中，webpack可以把其不同的包整合在一起使用，对于每一个你需要的功能或拓展，你都需要安装单独的包（用得最多的是解析Es6的babel-env-preset包和解析JSX的babel-preset-react包）。
	 npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react
	  + babel-loader@8.0.6
		+ babel-preset-env@1.7.0
		+ babel-preset-react@6.24.1
		+ babel-core@6.26.3

	 在webpack中配置Babel
	 >...
	 现在的webpack配置允许使用ES6及JSX语法。不过此次使用React,安装React和React-DOM。
	 npm install --save react react-dom
	  + react@16.8.6
		+ react-dom@16.8.6

	 使用es6语法，更新Greeter.js并返回一个React组件
	 >...
	 修改main.js，使用es6的模块定义和渲染Greeter模块
	 >...
	 重新使用npm start打包,运行
	 =========出错==========
	 babel-loader@8.0.6与babel-core版本不对应
	 babel-loader 8.x对应babel-core 7.x
	 babel-loader 7.x对应babel-core 6.x
	 重装：npm install -D @babel/core; 
					+ @babel/core@7.4.5
				 npm i --save-dev babel-core@7.1.5
	 =======================
	 Error: Plugin/Preset files are not allowed to export objects, only functions.
	 babel 几个依赖包不兼容。


 


================================问题================================
1. webpack命令一直提示安装webpack-cli:
*webpack4最新文档，建议每个项目都是用单独的webpack，也就是局部安装。这样一个项目中的package.json都能管理好依赖的环境包了。
npm init -y
npm install webpack -D
npm install webpack-cli -D
写好webpack配置文件后，打包命令:
npx webpack
全局的webpack也是可行的。只是如果项目拷贝到别人的电脑上，不能保证webpack是统一版本了。
*webpack 4X 后需要安装webpack-cli 请注意需要安装在同一目录
npm install --save-dev webpack -g
npm install --save-dev webpack-cli -g

2. webpack main.js bundle.js报错
>RROR in multi ./app/main.js public/bundle.js
Module not found:...
 webpack版本高：webpack main.js -o bundle.js

