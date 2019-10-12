//项目的js入口文件
console.log('ok')

// import Vue from '../node_modules/vue/dist/vue.js'
import Vue from 'vue'




// var login = {
// 	template: '<h1>这是login组件，是使用网页中形式创建出来的组件</h1>'
// }

import login from './login.vue'

var vm = new Vue({
	el: '#app',
	data: {
		msg: '123'
	},
	// components: {
	// 	login
	// }
	render: function(createElements){
		return createElements(login)
	}
})