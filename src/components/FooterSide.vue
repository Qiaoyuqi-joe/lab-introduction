<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-links">
        <h3>友情链接：</h3>
        <ul>
  <li><a href="https://www.bupt.edu.cn/" target="_blank">北京邮电大学主站</a></li>
  <li><a href="https://www.icourse163.org/" target="_blank">中国大学MOOC</a></li>
  <li><a href="https://sice.bupt.edu.cn/" target="_blank">信息与通信工程学院</a></li>
  <li><a href="https://www.ieee.org/" target="_blank">IEEE首页</a></li>
  <li><a href="https://www.xuetangx.com/" target="_blank">学堂在线</a></li>
  <li><a href="https://arxiv.org/" target="_blank">arXiv</a></li>
</ul>

      </div>
      <div class="footer-info">
        <h3>联系方式：</h3>
        <p>地址：北京市海淀区西土城路10号 <span class="postal-code">邮编：100876</span></p>
        <p>邮箱：<a href="mailto:hszhang@bupt.edu.cn" target="_blank">hszhang@bupt.edu.cn</a></p>
      </div>
    </div>
    <hr />
    <div class="footer-bottom">
      <p>版权所有 © 北京邮电大学 | 京ICP备14033833号-1 | 京公网安备110402430070</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
/* 统一使用 rem 进行单位调整 */
.footer {
  background-color: #140a66; /* 深蓝色背景，90% 透明度 */
  color: white;
  padding: 0.7rem 2.5rem; /* 20px -> 1.25rem, 40px -> 2.5rem */
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 62.5rem; /* 1000px -> 62.5rem */
  margin: 0 auto;
  text-align: left;
  gap: 2rem; /* 让左右内容有间隔 */
}

.footer-links,
.footer-info {
  flex: 1;
  min-width: 18.75rem; /* 300px -> 18.75rem */
 
}

/* 友情链接 */
.footer-links h3,
.footer-info h3 {
  font-size: 1.1rem;
  margin-bottom: 0.625rem; /* 10px -> 0.625rem */
}

.footer-links ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem 1.875rem; /* 10px -> 0.625rem, 30px -> 1.875rem */
}

.footer-links li {
  flex: 1 1 12.5rem; /* 200px -> 12.5rem */
}

.footer-links a,
.footer-info a {
  color: white;
  text-decoration: none;
}

.footer-links a:hover,
.footer-info a:hover {
  text-decoration: underline;
}

.footer-info p {
  font-size: 0.9rem;
  margin: 0.5rem 0;
}

.postal-code {
  margin-left: 1.25rem; /* 20px -> 1.25rem */
  font-weight: bold;
}

/* 底部版权信息 */
hr {
  border: 0;
  height: 0.0625rem; /* 1px -> 0.0625rem */
  background: rgba(255, 255, 255, 0.3);
  margin: 1.25rem 0; /* 20px -> 1.25rem */
}

.footer-bottom {
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
