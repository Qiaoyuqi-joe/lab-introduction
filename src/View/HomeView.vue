<template>
  <div class="main-content">
    <h1>欢迎！</h1>
    <p style="text-indent: 2em;">
      <strong>
        北邮WSPN实验室是泛网无线通信教育部重点实验室的重要组成，本研究组主要面向无线网络能力提升和移动互联网业务承载优化的重大需求，以提升无线网络效能为科学目标，主要研究方向：算力网络与移动边缘网络、星地融合信息网络、多模态信息融合处理等。
      </strong>
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
      <strong>如有更多问题请点击
        <a href="#">Q&A</a> 获得更多咨询！</strong>
    </p>

    <h2>联系我们</h2>
    <p>实验室位置：北京邮电大学科研楼630，鸿通楼201</p>

    <p>
      联系邮箱:
      <a href="hszhang@bupt.edu.cn">hszhang@bupt.edu.cn</a>
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
  padding: 1.25rem; /* 20px -> 1.25rem */
}

.main-content h1 {
  font-size: 2.5rem; /* 字号不变，因为已经是 rem 单位 */
  font-weight: bold;
  margin-bottom: 0.9375rem; /* 15px -> 0.9375rem */
}

.main-content p {
  font-size: 1.3rem; /* 字号使用 rem 单位 */
  line-height: 1.5;
  margin-bottom: 0.9375rem; /* 15px -> 0.9375rem */
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
  margin: 1.25rem 0; /* 20px -> 1.25rem */
}

.lab-photo img {
  max-width: 100%;
  height: 25rem; /* 400px -> 25rem */
  border-radius: 0.5rem; /* 8px -> 0.5rem */
}

.main-content h2 {
  font-size: 1.7rem; /* 字号使用 rem 单位 */
  font-weight: bold;
  margin-top: 1.875rem; /* 30px -> 1.875rem */
  margin-bottom: 0.625rem; /* 10px -> 0.625rem */
}
</style>
