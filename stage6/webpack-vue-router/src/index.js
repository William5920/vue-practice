//项目的js入口文件

import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import app from './App.vue'

import router from './router.js'

import './lib/mui/css/mui.min.css'






var vm = new Vue({
	el: '#app',
	render: c => c(app),
	router
})
