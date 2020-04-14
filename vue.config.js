// export const configureWebpack = {
// 	resolve: {
// 		alias: {
// 			// 配置别名
// 			'assets': '@/assets',
// 			'common': '@/common',
// 			'components': '@/components',
// 			'network': '@/network',
// 			'views': '@/views'
// 		}
// 	}
// };
const path = require('path');//引入path模块
function resolve(dir){
		return path.join(__dirname,dir)
		//path.join(__dirname)设置绝对路径
}

module.exports = {
	chainWebpack:(config)=>{
		config.resolve.alias
		.set('@',resolve('./src'))
		.set('assets',resolve('./src/assets'))
		.set('common',resolve('./src/common'))
		.set('components',resolve('./src/components'))
		.set('network',resolve('./src/network'))
		//set第一个参数：设置的别名，第二个参数：设置的路径　　　
  },
	lintOnSave: false,
	configureWebpack: {
		externals: {
			'axios': 'axios',
			// 左边代表要引入资源包的名字，右边代表该模块在外面使用引用的名字
			'swiper': 'Swiper'
		}
	}
}

