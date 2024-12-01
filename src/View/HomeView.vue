<template>
  <div class="main-content">
    <h1>欢迎！</h1>
    <p style="text-indent: 2em;">
      <strong>    无线信号处理与网络（WSPN）实验室</strong>是泛网无线通信教育部重点实验室的重要组成, 面向无线网络能力提升和移动互联网业务承载优化的实际需求，以提升无线网络效能为科学目标。
    </p>
    <p style="text-indent: 2em;">
      <strong>
      主要研究方向：算力网络与移动边缘网络、星地融合信息网络、社区计算与大数据等
    </strong>
    </p>
   
    <div class="lab-photo">
      <img src="../assets/images/GroupPhoto.jpg" alt="Lab Group Photo" />
    </div>

    <p>
      <strong
        >如有更多问题请点击
        <a href="#">Q&A</a> 获得更多咨询！</strong
      >
    </p>

    <h2>联系我们</h2>
    <p>FIT Building 3-326~3-329 & Rohm Building 8-205</p>
    <p>Tsinghua University, Beijing, 100084, China</p>
    <p>Secretary: Xu Ping</p>
    <p>Phone No.: +86-10-62773634</p>
    <p>
      Email:
      <a href="mailto:xuping811@tsinghua.edu.cn">xuping811@tsinghua.edu.cn</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.main-content {
  padding: 20px;
}

.main-content h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.main-content p {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 15px;
}

.main-content a {
  color: #140a66; /* 紫色链接 */
  text-decoration: none;
}

.main-content a:hover {
  text-decoration: underline;
}

.lab-photo {
  text-align: center;
  margin: 20px 0;
}

.lab-photo img {
  max-width: 100%;
  height: 400px;
  border-radius: 8px; /* 让图片有一点圆角 */
}

.main-content h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 10px;
}
</style>
