<template>
    <div id="app">
      <LayoutView>
        <router-view /> <!-- 渲染当前路由匹配的视图 -->
      </LayoutView>
    </div>
  </template>
  
  <script>
  import LayoutView from './View/LayoutView.vue'; // 确保路径正确
  
  export default {
    name: 'App',
    components: {
      LayoutView,
    },
  };
  </script>
  
  <style>
  /* 你可以在这里添加全局样式 */
  </style>
  