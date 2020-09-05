import Vue from 'vue';
//import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';
import { Button, Layout} from 'ant-design-vue';
import App from './App';

Vue.use(Layout);
Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');