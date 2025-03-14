<template>
  <div class="research-detail">
    <!-- 返回按钮 -->
    <button @click="goBack">返回</button>
    <!-- Research ID 1 -->
    <div v-if="researchId === 1">
      <div class="research-detail">
        <h1>研究方向1：无线算力网络与边缘智能</h1>
        <div style="height: 20px"></div>
        <p style="text-indent: 2em">
          “计算、网络、边缘、智能”深度融合的网络形态，满足网络和计算融合演进的需求，进行算力的灵活调度。
        </p>
        <div class="image-section">
          <img
            src="../assets/images/Research1.png"
            alt="6G Smart Society Diagram"
          />
        </div>
        <p style="text-indent: 2em">
          端侧算力网络着眼于泛在终端的算力利用率和计算效率的提升，基于蜂窝网络、无线、卫星等网络基础设施...
        </p>
        <ul>
          <li>算力网络服务迁移与任务规划</li>
          <li>端侧算力网络及其算力操作系统</li>
          <li>轻量化弹性算力网络</li>
        </ul>
        <div class="image-section">
          <img src="../assets/images/Research1.2.png" alt="Research 1.2" />
        </div>
        <div class="image-section">
          <img src="../assets/images/Research1.3.png" alt="Research 1.3" />
        </div>
        <p style="text-indent: 2em">
          <strong
            >助推算力网络实现“网络无所不达，算力无所不在，智能无所不及”的愿景</strong
          >
        </p>
        <div class="image-section">
          <img src="../assets/images/Research1.4.png" alt="Research 1.4" />
        </div>
        <p style="text-indent: 2em">
          <strong>落地实践：北京沙河高教园算力网络科教共享平台</strong>
        </p>
        <div class="video-section">
          <video controls>
            <source
              src="../assets/video/北京沙河高教园视频.mp4"
              type="video/mp4"
            />
            您的浏览器不支持视频播放。
          </video>
        </div>
        <p style="text-indent: 2em">
          研究成果应用于北京沙河高教园算力网络科教共享平台，助力通算一体网络技术服务于科研资源共享和产教融合应用。
        </p>
      </div>
    </div>

    <div v-if="researchId === 2">
      <!-- 详细内容 -->
      <div class="research-detail">
        <div style="height: 20px"></div>
        <h1>研究方向2：星地融合信息网络</h1>

        <p style="text-indent: 2em">
          研究目标：通算一体、算控分离、智能内生的星地融合信息网络体系架构和柔性可重构关键技术。
        </p>
        <div class="image-section">
          <img src="../assets/images/Research2.1.png" alt="Research 2.1" />
        </div>
        <p style="text-indent: 2em">
          “星地融合边缘端侧算力网络”将用于处理各种与卫星、边缘计算和端侧计算相关的任务和数据，同时保证数据的安全性和实时性。
        </p>
        <div class="image-section">
          <img src="../assets/images/Research2.2.png" alt="Research 2.2" />
        </div>
        <p style="text-indent: 2em">
          <strong
            >在许多领域，如地球观测、物联网、自动化控制等方面都有广泛的应用潜力。</strong
          >
        </p>
        <div class="image-section">
          <img src="../assets/images/Research2.3.png" alt="Research 2.3" />
        </div>
        <div class="video-section">
          <video controls>
            <source
              src="../assets/video/卫星融合平台介绍.mp4"
              type="video/mp4"
            />
            您的浏览器不支持视频播放。
          </video>
        </div>
      </div>
    </div>

    <div v-if="researchId === 3">
      <!-- 详细内容 -->
      <div class="research-detail">
        <h1>研究方向3：多模态融合数据分析</h1>
        <p style="text-indent: 2em">
          提出了一个分布式Agent系统，通过移动设备和边缘服务器大模型之间的协作，在减少网络带宽消耗的同时，提高边缘侧大模型完成复杂任务的能力。
        </p>
        <div class="image-section">
          <img src="../assets/images/Research3.1.png" alt="Research 3.1" />
        </div>
        <div class="image-section">
          <img src="../assets/images/Research3.2.png" alt="Research 3.2" />
        </div>
        <ul>
          <li><strong>云侧：</strong>星火/通义等大模型</li>
          <li><strong>端侧：</strong>基于大模型微调，结合提示词优化技术。</li>
          <li><strong>边侧：</strong>“智道”—信通学科专属问答GPT。</li>
        </ul>
        <div class="image-section">
          <img src="../assets/images/Research3.3.png" alt="Research 3.3" />
        </div>
        <p style="text-indent: 2em">
          <strong
            >目前，“智道”系统已被成功部署于北京沙河高教园区的开放网络创新平台，并已进入测试使用阶段。</strong
          >
        </p>
        <div class="video-section">
          <video controls>
            <source src="../assets/video/智道平台介绍.mp4" type="video/mp4" />
            您的浏览器不支持视频播放。
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResearchDetail",
  props: ["id"], // 通过props接收路由参数
  data() {
    return {
      activeDetail: null, // 用于控制显示内容
    };
  },
  methods: {
    // 返回上一页的函数
    goBack() {
      this.$router.go(-1); // 使用 router.go(-1) 返回上一页
    },
  },
  computed: {
    researchId() {
      // 确保props接收到的id能够正确返回
      return Number(this.id); // 转为数字，确保与模板中的判断一致
    },
  },
};
</script>
<style scoped>
button {
  padding: 0.5rem 1.25rem; /* 8px 20px -> 0.5rem 1.25rem */
  background-color: #8a0b0b;
  color: white;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 3.125rem; /* 50px -> 3.125rem */
}

button:hover {
  background-color: #0056b3;
}

.research-detail {
  padding: 1.25rem; /* 20px -> 1.25rem */
}

.research-detail h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.0625rem; /* 1px -> 0.0625rem */
  color: rgb(0, 0, 0);
  padding: 1.25rem; /* 20px -> 1.25rem */
  border-radius: 0.625rem; /* 10px -> 0.625rem */
  margin-top: 0.625rem; /* 10px -> 0.625rem */
  text-align: center;
}

.image-section {
  text-align: center;
  margin: 1.25rem 0; /* 20px -> 1.25rem */
}

.image-section img {
  max-width: 80%;
  height: auto;
  border-radius: 0.5rem; /* 图片圆角 */
  box-shadow:  0 0.625rem 1.875rem rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}

.video-section {
  text-align: center;
  margin: 1.25rem 0; /* 20px -> 1.25rem */
}

.video-section video {
  max-width: 80%;
  height: auto;
  border-radius: 0.5rem; /* 8px -> 0.5rem */
  box-shadow: 0 0.625rem 1.875rem rgba(0, 0, 0, 0.1); /* 10px 30px -> 0.625rem 1.875rem */
}
</style>
