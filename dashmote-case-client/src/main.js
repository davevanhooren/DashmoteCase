import Vue from 'vue';
import 'ant-design-vue/dist/antd.css';
import { Button, Layout, Table, Popconfirm, Icon, Input, Drawer, Form, Select } from 'ant-design-vue';
import App from './App';

//The required dependencies.
Vue.use(Layout);
Vue.use(Input);
Vue.use(Button);
Vue.use(Table);
Vue.use(Popconfirm);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Form);
Vue.use(Select);

Vue.config.productionTip = false;


new Vue({
    render: h => h(App),
}).$mount('#app');