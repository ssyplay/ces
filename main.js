import Vue from 'vue';
import router from './routers/router';
import store from './store'
import App from './App.vue'
import 'common/stylus/font.styl';
//import 'common/stylus/animate.css'
import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin);
import  { AlertPlugin } from 'vux'
Vue.use(AlertPlugin);
import config from 'api';
Vue.prototype.IP=config.ip;
import axios from 'axios';
Vue.prototype.$http = axios;




// 注册组件
/**
 * 创建和挂载根实例。
 * 记得要通过 router 配置参数注入路由，
 * 从而让整个应用都有路由功能
 */
const routerApp = new Vue({
  router,
  store,
}).$mount('#app')
export default routerApp;
