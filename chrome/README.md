×××××××××××××××Chrome 开发工具指南***********
1.推荐
1.1 概述：谷歌chrome开发工具，基于谷歌浏览器内含的一套网页制作和调试工具。允许网页开发者深入浏览器和网页应用程序的内部。可以有效的追踪布局问题，设置js断点并深入理解代码的最优策略。
1.2 参考：https://developer.chrome.com/devtools/index
	https://developers.google.com/web/tools/setup?hl=en
developers.google.com/speed/pagespeed/insights...

2.Element
2.1 f12打开 ，Elements;
		Styles：filter过滤器，搜索相应css高亮显示
						.cls 为元素添加class(点击bounceIn勾叉掉，取消class);
		右键网页相应内容，点击‘检查’，可跳转到相应dom;
		dom中右键，点击‘fouce state->:hover’，显示Styles中hover;
		Styles中点击‘+’，添加临时css;
		dom中右键，点击‘copy->copy selecter’,在Console中粘贴，$('...')快速查找;
2.2 Styles->Computed计算属性
					->Event Listeners事件监听：勾选Framework,查找监听代码
					->DOM Breakpoints
					->Properties原型链

3.Console
(选项卡之间切换：ctrl+{/})
3.1 清空：点击'半圆图标'、clear（）、ctrl+r
3.2 层级：默认top
3.3 查看：console.dir(),console.log()
3.4 平时调试：window.log = console.log;
							log('hello'); >hello
				上线：window.log = () => {};
							log('123'); >undefined


4.Source
4.1 Snippets
	新建文件pwd(生成随机密码) >> 输入Math.random().toString(36).substr(2); 运行ctrl+enter ; 快速查找 ctrl+p -> ? -> !Run snippet
4.2 断点调试（刷新，鼠标滚动相应位置触发执行） 
						 ‘ ’恢复执行
						 ‘ ’跳过函数，执行下一条
						 ‘ ’进入函数
						 ‘ ’跳出当前函数
						 watch: 添加监听 >> t_id(回车)

5.性能分析（Pertomance)
5.1 merrcry 内存 （或者Merrcry 选项卡)

6.Network（分析接口、爬虫、路径...)
6.1 过滤

7.Application（记录缓存...)
7.1 Frames 右键 在Network中显示

8.其他Panel
Security:查看证书
Aucits:分析网站建议

9.设置

