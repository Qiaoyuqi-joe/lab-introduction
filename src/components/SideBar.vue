<template>
  <aside class="sidebar" :class="{ 'sidebar-visible': isMenuVisible }">
    <!-- 菜单按钮 -->
    <button class="menu-toggle" @click="toggleMenu">→</button>
    
    <!-- 菜单内容 -->
    <div class="sidebar-view">
      <div class="whats-new">
        <h2>最新资讯</h2>
        <ul>
          <li><a href="/news/0" target="_blank">协作边缘计算网络中基于算力网络图的任务调度系统Demo</a></li>
          <li><a href="/news/1" target="_blank">实验室成员参加2024GLOBECOM会议并进行口头汇报</a></li>
          <li><a href="/news" target="_blank">更多...</a></li>
        </ul>
      </div>
      <div class="links">
        <h2>相关链接</h2>
        <ul>
          <li><a href="https://www.bupt.edu.cn/" target="_blank">Beijing University of Posts and Telecommunications</a></li>
          <li><a href="https://sice.bupt.edu.cn/" target="_blank">School of Information and Communication Engineering</a></li>
        </ul>
      </div>

      <!-- Map Widget -->
      <div class="pageviews">
        <h2>访客分布</h2>
        <a href="https://clustrmaps.com/site/1c34f" title="Visit tracker" target="_blank">
          <img
            src="//www.clustrmaps.com/map_v2.png?d=ae77rM7hDQA1i0FPcsXj9p1Pj3o_3JEfLbElYE9iSSA&cl=ffffff&w=400"
            alt="访客地图"
          />
        </a>
      </div>
    </div>
  </aside>
</template>


<script>
export default {
  name: 'MobileSidebar',
  data() {
    return {
      isMenuVisible: false,  // 控制菜单显示与隐藏
    };
  },
  methods: {
    // 切换菜单的显示和隐藏
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
  },
};
</script>

<style scoped>
.menu-toggle {
  display: none; 
  font-size: 5rem;
  font-weight:bold;
  background-color: rgba(0, 6, 119, 0.6);  /* 透明背景 */
  border: none;
  color: #ffffff;
  position: fixed;
  top: 50%;
  left: 0%;
  transform: translate(-50%, -50%);  /* 居中按钮 */
  padding: 15px;
  border-radius: 50%;  /* 圆形按钮 */
  cursor: pointer;
  z-index: 1001;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);  /* 阴影效果 */
  transition: all 0.3s ease;  /* 平滑过渡 */
}



.sidebar {
  width: 17.5%;  /* 不需要修改百分比 */
  padding-left: 0.625rem;  /* 10px -> 0.625rem */
  padding-right: 0.9375rem;  /* 15px -> 0.9375rem */
  background-color: #cdcaca;
  transition: left 0.3s ease;
}

/* 隐藏侧边栏并通过右箭头按钮显示 */
.sidebar-visible {
  left: 0;  /* 菜单可见时，设置位置为 0 */
}

a {
  text-decoration: none;
}

.sidebar-view {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  flex-direction: column;
}

.sidebar h2 {
  font-size: 1.2rem;  /* 字号使用 rem 单位 */
  color: #333;
}

.whats-new, .links {
  margin: 0.625rem;  /* 10px -> 0.625rem */
}

.whats-new ul,
.links ul {
  list-style-type: disc;  /* 使用黑点作为列表项符号 */
  padding-left: 1.25rem;  /* 20px -> 1.25rem */
}

.whats-new ul li,
.links ul li {
  margin-bottom: 1.95rem;  /* 5px -> 0.3125rem */
}

.pageviews {
  text-align: center;
  margin-top: 1.25rem;  /* 20px -> 1.25rem */
}

.pageviews img {
  width: 90%;  /* 保持百分比不变 */
  margin-bottom: 10%;
}

/* 移动端样式 */
@media screen and (max-width: 768px) {
  .menu-toggle {
  display:block;
  font-size: 5rem;
  font-weight:bold;
  background-color: rgba(0, 6, 119, 0.6);  /* 透明背景 */
  border: none;
  color: #ffffff;
  position: fixed;
  top: 50%;
  left: 0%;
  transform: translate(-50%, -50%);  /* 居中按钮 */
  padding: 5px;
  border-radius: 50%;  /* 圆形按钮 */
  cursor: pointer;
  z-index: 1001;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);  /* 阴影效果 */
  transition: all 0.3s ease;  /* 平滑过渡 */
}

  .sidebar {
  left: -250px;  /* 初始隐藏侧边栏 */
  width: 140px;  /* 固定宽度 */
  position: fixed;
  height: 100%;
  background-color: rgb(205 202 202 / 64%);
  z-index: 1000;
  transition: left 0.3s ease;
}

  .sidebar-visible {
    left: 0;  /* 菜单展开时，位置为 0 */
  }

  /* 菜单按钮居中 */
  

  /* 菜单内容居中显示 */
  .sidebar-view {
    
    flex-direction: column;
    background-color: rgb(205 202 202 / 80%);
    padding-left: 9px;
    padding-right:9px;
    align-items: center;
  }
  .sidebar h2 {
    font-size: 2rem;  /* 增大标题字体 */
    color: #333;
  }

  .whats-new, .links {
    margin-bottom: 20px;
  }

  .whats-new ul, .links ul {
    list-style-type: disc;
    padding-left: 2rem;
  }

  .whats-new ul li, .links ul li {
    font-size: 1.3rem;  /* 增大列表字体 */
    margin-bottom: 0.5rem;
  }

  .pageviews {
    text-align: center;
    margin-top: 1.25rem;
  }
}
</style>