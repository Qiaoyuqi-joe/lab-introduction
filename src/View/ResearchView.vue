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
  height: 0.0625rem; /* 1px -> 0.0625rem */
  background-color: #ccc;
  margin: 1.25rem 0; /* 20px -> 1.25rem */
}

.research-content {
  padding: 0.625rem; /* 10px -> 0.625rem */
}

.short-description {
  position: relative;
  margin-bottom: 0px;
}

.el-button {
  position: absolute;
  bottom: 0.625rem; /* 10px -> 0.625rem */
  right: 0.625rem; /* 10px -> 0.625rem */
  background-color: #570303ee;
  color: white;
  font-size: 1.2rem;
  padding: 0.625rem 1.25rem; /* 10px 20px -> 0.625rem 1.25rem */
  border-radius: 0.5rem; /* 8px -> 0.5rem */
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.2); /* 4px 10px -> 0.25rem 0.625rem */
  transition: background-color 0.3s ease;
}

.el-button:hover {
  background-color: #8a0b0b;
}

.research-content h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.0625rem; /* 1px -> 0.0625rem */
  color: rgb(0, 0, 0);
  padding: 1.25rem 1.25rem; /* 20px 20px -> 1.25rem 1.25rem */
  border-radius: 0.625rem; /* 10px -> 0.625rem */
  margin-top: 0.625rem; /* 10px -> 0.625rem */
  text-align: center;
}

.research-content p {
  font-size: 1.4rem;
  line-height: 1.5;
  margin-bottom: 0.9375rem; /* 15px -> 0.9375rem */
}

.image-section {
  text-align: center;
  margin: 1.25rem 0; /* 20px -> 1.25rem */
}

.image-section img {
  max-width: 90%;
  height: auto;
  border-radius: 0.5rem; /* 8px -> 0.5rem */
}

.video-section {
  text-align: center;
  margin: 1.25rem 0; /* 20px -> 1.25rem */
}

.video-section video {
  max-width: 90%;
  height: auto;
  border-radius: 0.5rem; /* 8px -> 0.5rem */
  box-shadow: 0 0.625rem 1.875rem rgba(0, 0, 0, 0.1); /* 10px 30px -> 0.625rem 1.875rem */
}
</style>
