import { createApp } from 'vue';
import App from './App.vue'; // 使用App.vue作为入口
import router from './router';

createApp(App) // 挂载App.vue
  .use(router)
  .mount('#app');
