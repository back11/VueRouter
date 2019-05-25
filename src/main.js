import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from 'axios';

// 配置请求接口的URL地址
axios.defaults.baseURL = 'https://wd8157332191lxfwom.wilddogio.com/'

Vue.use(iView);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
