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
  mounted() {
    this.setRem();  // 设置根字体大小
    window.addEventListener('resize', this.setRem);  // 监听窗口大小变化
  },
  methods: {
    // 动态调整根字体大小
    setRem() {
      const html = document.documentElement;
      const width = html.clientWidth; // 获取窗口宽度
      
  let baseSize = width / 100;  // 默认1rem = 1/100窗口宽度

// 当窗口宽度小于等于600px时，增加根字体大小
if (width <= 600) {
  baseSize = width / 50;  // 在小屏幕设备上，调整基础字体大小
}

html.style.fontSize = `${baseSize}px`;  // 设置根字体大小
    }
  }
};
</script>

<style>
/* 你可以在这里添加全局样式 */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}
</style>
