// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import Vue from 'vue'
import Vue from "vue/dist/vue.common.js"
import VueProgressBar from 'vue-progressbar'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/global.css'

import App from './App'
import router from './router'
import store from './store'
import api from './api'

Vue.config.productionTip = false

//开启调试模式
localStorage.setItem('debug', 'leancloud*')

//发布文章必须登录
//vue router官网代码 路由元信息
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.needLogin)) {
    if (!store.state.user) {
      // Vue.prototype.$message.error("请先登录");
      app.$message.error("请先登录");
      next({
        path: '/signIn'
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

Vue.mixin({
  beforeCreate() {
    if(!this.$api) {
      this.$api = api;
    }
  }
});

//精度条设置
const options = {
  color: '#99CCCC',
  faileColor: '#874b4b',
  thickness: '4px',
  tansition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)

Vue.use(ElementUI)

const user = api.SDK.User.current()
console.log(user)
if(user) {
  store.commit('setUser', user);
}


/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  //将带编译模式修改为运行时模式
  //components: { App },
  //template: '<App/>'
  render: h => h(App),
})
