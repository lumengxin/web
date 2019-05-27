import './assets/common.less';
import Vue from 'vue';
import App from './components/App.vue';

import Router from 'vue-router'

Vue.use(Router);  //install $router $route

const PureComponent = {
  name: 'VText',
  render(h) {
    return h('h1', null, "hello")
  }
}

//localhost:38187/#/to
const PureComponent2 = {
  name: 'VText2',
  // render(h) {
  //   return h('h1', null, "hello2")
  // },
  //必须<div>包裹
  template: `
    <div>   
    <h2>VText2</h2>
    <router-view></router-view>
    </div>
  `,
  //动态路由
  created() {
    console.log(this.$route)
    //this.$router.push()
  },
  beforeRouteEnter(to, from, next) {
    console.log(to)
    console.log(from)
    next()
  },
  beforeRouteUpdate(to, from, next) {
    next()
  },
  beforeRouteLeave(to, from, next) {
    next()
  }
}

const Tip = {
  template: '<div>this is tips</div>'
}

const OP = {
  template: '<div>this is ops</div>'
}

const router = new Router({
  routes: [
    { path: '/', name: 'home', component: PureComponent},
    { 
      path: '/to/:id', 
      name: 'sss', 
      component: PureComponent2,
      //嵌套路由
      children: [
        {
          path: '',
          component: Tip,
        },
        {
          path: 'op',
          component: OP
        }
      ]

    }
  ]
})

new Vue({
  el: '#root',
  router,
  render: h => h(App)
});