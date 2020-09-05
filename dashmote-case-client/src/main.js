import Vue from 'vue';
//import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';
import { Button, Layout, Table, Popconfirm} from 'ant-design-vue';
import VueMobileDetection from 'vue-mobile-detection';
import App from './App';

Vue.use(Layout);
Vue.use(Button);
Vue.use(Table);
Vue.use(Popconfirm);
Vue.use(VueMobileDetection);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');