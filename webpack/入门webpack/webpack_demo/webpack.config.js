module.exports = {
	//__dirname:node.js中的一个全局变量，只想当前执行脚步所在目录
	devtool: 'eval-source-map',
	entry: __dirname + "/app/main.js",  //唯一入口文件
	output: {
		path: __dirname + "/public",  //打包后文件存放的地方
		filename: "bundle.js"  //打包后输出文件的文件名
	},

	devServer: {
		contentBase: "./public", //本地服务器所加载的页面的所在目录
		historyApiFallback: true, //不跳转
		inline: true  //实时刷新
	},

	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"env", "react"
						]
					}
				},
				exclude: /node_modules/
			}
		]
	}
};
