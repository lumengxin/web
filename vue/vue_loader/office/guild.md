                       vue loader官方-指南
1.介绍：
	Vue Loader是一个webpack的loader,允许以一种名为单文件组件（SFCs)的格式撰写Vue组件。
	特性：
	。允许为 Vue 组件的每个部分使用其它的 webpack loader，例如在 <style> 的部分使用 Sass 和在 <template> 的部分使用 Pug；
	。允许在一个 .vue 文件中使用自定义块，并对其运用自定义的 loader 链；
	。使用 webpack loader 将 <style> 和 <template> 中引用的资源当作模块依赖来处理；
	。...
    ###
	运行单个的.vue文件，需要用到快速原型开发
	使用vue serve, vue build
	cnpm install -g @vue/cli-service-global;
	vue serve first.vue;
	vue build first.vue;
	###

2.起步：
	2.1.Vue CLI
	 如果不想手动设置webpack，使用Vue CLI 直接创建一个项目的脚手架。通过 Vue CLI 创建的项目会针对多数常见的开发需求进行预先配置，做到开箱即用。
	2.2.手动配置
	 安装：npm install -D vue-loader vue-template-compiler
	 webpack配置：...
	 

