<template>

<div class="divider"></div>

  <div class="research-content">
    <!-- 研究方向1 -->
    <div class="research-section">
      <h1>研究方向1：无线算力网络与边缘智能</h1>

      <!-- 简短介绍和图片 -->
      <div class="short-description">
        <p style="text-indent: 2em;">
          “计算、网络、边缘、智能”深度融合的网络形态，满足网络和计算融合演进的需求，进行算力的灵活调度。
        </p>
        <div class="image-section">
          <img src="../assets/images/Research1.png" alt="6G Smart Society Diagram" />
        </div>
        <!-- 使用 router-link 进行跳转 -->
        <router-link :to="{ name: 'ResearchDetail', params: { id: 1 } }">
          <el-button>Read More</el-button>
        </router-link>
      </div>
    </div>


    <!-- 分割线 -->
    <div class="divider"></div>


    <!-- 研究方向2 -->
    <div class="research-section">
      <h1>研究方向2：星地融合信息网络</h1>

      <!-- 简短介绍和图片 -->
      <div class="short-description">
        <p style="text-indent: 2em;">
          研究目标：通算一体、算控分离、智能内生的星地融合信息网络体系架构和柔性可重构关键技术。
        </p>
        <div class="image-section">
          <img src="../assets/images/Research2.1.png" alt="Research 2.1" />
        </div>
         <!-- 使用 router-link 进行跳转 -->
         <router-link :to="{ name: 'ResearchDetail', params: { id: 2 } }">
          <el-button>Read More</el-button>
        </router-link>
      </div>
    </div>


    <div class="divider"></div>
    <!-- 研究方向3 -->
    <div class="research-section">
      <h1>研究方向3：多模态融合数据分析</h1>

      <!-- 简短介绍和图片 -->
      <div class="short-description">
        <p style="text-indent: 2em;">
          提出了一个分布式Agent系统，通过移动设备和边缘服务器大模型之间的协作，在减少网络带宽消耗的同时，提高边缘侧大模型完成复杂任务的能力。
        </p>
        <div class="image-section">
          <img src="../assets/images/Research3.1.png" alt="Research 3.1" />
        </div><!-- 使用 router-link 进行跳转 -->
        <router-link :to="{ name: 'ResearchDetail', params: { id: 3 } }">
          <el-button>Read More</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

  
<script>
export default {
  name: "ResearchView",
  data() {
    return {
      activeDetail: null, // 控制详细内容显示
    };
  },
  methods: {
    toggleDetail(direction) {
      // 切换显示的详细内容
      this.activeDetail = this.activeDetail === direction ? null : direction;
    },
  },
};
</script>

<style scoped>

.divider {
  height: 1px;
  background-color: #ccc;
  margin: 20px 0;
}

.research-content {
  padding: 10px;
}

.short-description {
  position: relative;
  margin-bottom: 0px;
}


.el-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #570303ee; /* 更显眼的按钮颜色 */
  color: white; /* 白色字体 */
  font-size: 1.2rem; /* 增大字体 */
  padding: 10px 20px; /* 调整按钮大小 */
  border-radius: 8px; /* 圆角按钮 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* 阴影效果 */
  transition: background-color 0.3s ease; /* 平滑的背景色变化 */
}

.el-button:hover {
  background-color: #8a0b0b; /* 鼠标悬停时颜色变化 */
}

.research-content h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1px;
  /* background: linear-gradient(to right, white, #570303ee, white); */
  color: rgb(0, 0, 0);
  padding: 20px 20px;
  border-radius: 10px;
  margin-top:10px;
  text-align: center;
}

.research-content p {
  font-size: 1.4rem;
  line-height: 1.5;
  margin-bottom: 15px;
}

.image-section {
  text-align: center;
  margin: 20px 0;
}

.image-section img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.video-section {
  text-align: center;
  margin: 20px 0;
}

.video-section video {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
</style>
