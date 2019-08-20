// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import TodoList from './TodoList'
import Element from 'element-ui'
Vue.config.productionTip = false
var axios = require('axios')
axios.defaults.baseURL = 'http://http://94.191.87.159:8080/lilium/'
axios.defaults.withCredentials = false
Vue.use(Element)
// 将API方法绑定到全局
Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#TodoList',
  components: { TodoList },
  template: '<TodoList/>'
})
