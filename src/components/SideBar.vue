<template>
  <aside class="sidebar">
    <div class="sidebar-view">
      <div class="whats-new">
        <h2>最新资讯</h2>
        <ul>
          <li><a href="/news/0">协作边缘计算网络中基于算力网络图的任务调度系统Demo</a></li>
          <li><a href="#">Dolphins Dataset</a></li>
          <li><a href="#">Niulab成员参加第一届6G通信感知一体化学术研讨会</a></li>
          <li><a href="#">Niulab成员参加第六届牛顿论坛</a></li>
          <li><a href="#">Niulab学生调研团建——北京车展2020</a></li>
          <li><a href="#">更多...</a></li>
        </ul>
      </div>
      <div class="links">
        <h2>相关链接</h2>
        <ul>
          <li><a href="/people">Dept. E.E. Tsinghua Univ.</a></li>
          <li><a href="#">School of Information Science</a></li>
          <li><a href="#">Dolphins Dataset</a></li>
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

<style scoped>
.sidebar {
  width: 17.5%;  /* 不需要修改百分比 */
  padding-left: 0.625rem;  /* 10px -> 0.625rem */
  padding-right: 0.9375rem;  /* 15px -> 0.9375rem */
  background-color: #cdcaca;
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
  margin-bottom: 0.3125rem;  /* 5px -> 0.3125rem */
}

.pageviews {
  text-align: center;
  margin-top: 1.25rem;  /* 20px -> 1.25rem */
}

.pageviews img {
  width: 90%;  /* 保持百分比不变 */
}
</style>
