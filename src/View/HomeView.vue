<template>
  <div class="main-content">
    <h1>北京邮电大学信通院WSPN实验室欢迎您！</h1>
    <p style="text-indent: 2em;">
      欢迎访问无线边缘智能与星地融合信息网络研究组！
    </p>
    <p style="text-indent: 2em;">
      本实验室紧密围绕新一代无线网络能力提升与移动互联网业务优化的国家重大战略需求，以“提升网络效能、驱动智能变革”为核心使命，致力于突破6G通信、算网融合、星地协同等前沿技术领域的科学难题。
    </p>

    <div class="lab-photo">
      <img src="../assets/images/GroupPhoto.jpg" alt="Lab Group Photo" />
    </div>

    <p style="text-indent: 2em;">
      实验室研究方向聚焦未来信息网络的核心使能技术，涵盖<strong>算力网络与移动边缘智能、6G算网融合、星地融合信息网络以及LLM多模态信息融合处理</strong>。实验室始终秉持“前沿创新、学科交叉、产业驱动”的理念，在异构资源智能编排、星地算力协同、多模态认知推理等方向取得了一系列原创成果，助力国家新型信息基础设施建设。
    </p>

    <p style="text-indent: 2em;">
      团队汇聚了一批在通信、计算与人工智能领域深耕的青年学者与优秀学生，依托国家级科研平台和产学研合作网络，持续推动理论创新与技术落地。
    </p>

    <p style="text-indent: 2em;">
      我们诚邀国内外同行、青年学子及产业伙伴携手，在智能信息时代共绘技术蓝图，赋能智能互联未来！
    </p>

    <p style="text-indent: 2em;">
      <strong>
        探索创新边界，共创智慧网络。期待与您同行！
      </strong>
    </p>
    
    

    <h2>联系我们</h2>
    <p>实验室位置：北京邮电大学科研楼630，鸿通楼201</p>
    <p>
      联系人:张老师
      <!-- eslint-disable-next-line vue/no-parsing-error -->
      <a href="mailto:hszhang@bupt.edu.cn" target="_blank">hszhang@bupt.edu.cn</a>
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
  border-radius: 0.5rem; /* 图片圆角 */
  box-shadow:  0 0.625rem 1.875rem rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}

.main-content h2 {
  font-size: 1.7rem; /* 字号使用 rem 单位 */
  font-weight: bold;
  margin-top: 1.875rem; /* 30px -> 1.875rem */
  margin-bottom: 0.625rem; /* 10px -> 0.625rem */
}
</style>
