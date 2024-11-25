<template>
  <aside class="sidebar">
    <div class="whats-new">
      <h2>What's New</h2>
      <ul>
        <li><a href="/news">新智能路口沙盘演示平台</a></li>
        <li><a href="#">Dolphins Dataset</a></li>
        <li><a href="#">Niulab成员参加第一届6G通信感知一体化学术研讨会</a></li>
        <li><a href="#">Niulab成员参加第六届牛顿论坛</a></li>
        <li><a href="#">Niulab学生调研团建——北京车展2020</a></li>
        <li><a href="#">更多...</a></li>
      </ul>
    </div>
    <div class="links">
      <h2>Links</h2>
      <ul>
        <li><a href="/people">Dept. E.E. Tsinghua Univ.</a></li>
        <li><a href="#">School of Information Science</a></li>
        <li><a href="#">Dolphins Dataset</a></li>
      </ul>
    </div>
    
  </aside>
</template>

<style scoped>
.sidebar {
  width: 20%;
  padding: 20px;
  background-color: #f5f5f5;
}

.sidebar h2 {
  font-size: 1.2rem;
  color: #333;
}

.whats-new ul,
.links ul {
  list-style-type: disc; /* 使用黑点作为列表项符号 */
  padding-left: 20px;    /* 添加左边距以对齐黑点 */
}

.whats-new ul li,
.links ul li {
  margin-bottom: 5px;    /* 每个列表项之间增加间距 */
}

.pageviews {
  text-align: center;
  margin-top: 20px;
}

.pageviews img {
  width: 100%;
}
</style>
