import { createApp } from 'vue';
import App from './App.vue'; // 使用 App.vue 作为入口
import router from './router';
import ElementPlus from 'element-plus'; // 引入 Element Plus
import 'element-plus/dist/index.css'; // 引入 Element Plus 的样式

createApp(App) // 创建 Vue 应用
  .use(router) // 使用 Vue Router
  .use(ElementPlus) // 使用 Element Plus
  .mount('#app'); // 挂载到 #app 元素上
