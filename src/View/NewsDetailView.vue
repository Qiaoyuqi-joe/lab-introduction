<template>
  <div class="news-detail">
    <h1>{{ news.title }}</h1>
    <p class="news-meta">Posted on {{ news.date }} by {{ news.author }}</p>
    <h3>简介：</h3>
    <p>{{ news.description }}</p>
    <p v-if="news.details">
      时间: {{ news.details.time }} 地点: {{ news.details.location }}
    </p>

    <!-- 显示图片 -->
    <div v-if="news.image">
      <h3>相关图片：</h3>
      <img :src="news.image" alt="新闻图片" />
    </div>

    <!-- 显示视频 -->
    <div v-if="news.video">
      <h3>相关视频：</h3>
      <video controls>
        <source :src="news.video" type="video/mp4" />
        您的浏览器不支持视频播放。
      </video>
    </div>

    <div class="news-footer">
      <span>Posted in {{ news.categories.join(", ") }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsDetailView",
  props: ['id'], // 接收路由传来的 id 参数
  data() {
    return {
      newsList: [
        {
          title: "协作边缘计算网络中基于算力网络图的任务调度系统Demo",
          date: "December 9, 2024",
          author: "zxlab",
          description: "边缘节点分布式部署在不同的空间位置，孤立提供服务会导致算力孤岛的出现，边缘之间的协作已经是必然趋势。而不同边缘节点下的用户请求具有时空非均匀性，促使边缘节点之间的协作需要同时考虑用户请求空间特性。为了实现协作边缘计算网络中高效的任务调度，提出了基于算力网络图的任务调度方案，并基于k8s和istio搭建原型测试平台，验证了所提算法能够有效降低实际业务处理的响应延迟，实现分布式边缘节点的高效协作。",
          categories: ["Notifications", "Visitings"],
          image: require('@/assets/images/测试方案.jpg'),  
          video: require('@/assets/video/测试视频.mp4'),
        },
        {
          title: "Dolphins Dataset",
          date: "June 7, 2022",
          author: "niulab",
          description:
            "DOLPHINS, Dataset for cOLlaborative Perception enabled Harmonious and INterconnected Self-driving...",
          categories: ["Notifications", "Visitings"],
        },
        {
          title: "Niulab成员参加第一届6G通信感知一体化学术研讨会",
          date: "May 5, 2021",
          author: "niulab",
          description: "关于6G通信感知一体化学术研讨会的描述...",
          details: {
            time: "2021.04.15",
            location: "成都",
          },
          categories: ["Notifications", "Visitings"],
        },
        // 更多新闻项...
      ],
      news: {} // 当前新闻详情
    };
  },
  created() {
    // 根据传入的 id 查找对应的新闻项
    const newsIndex = this.id; // 从路由参数中获取的 id
    this.news = this.newsList[newsIndex]; // 使用该 id 获取新闻
  }
};
</script>

<style scoped>
.news-detail {
  padding: 1.25rem; /* 20px -> 1.25rem */
}

.news-meta {
  font-size: 1rem; /* 字号使用 rem 单位 */
  color: #666;
}

.news-footer {
  margin-top: 1.25rem; /* 20px -> 1.25rem */
  font-size: 0.9rem; /* 字号使用 rem 单位 */
  color: #888;
}

.news-detail img {
  max-width: 100%; /* 保证图片宽度自适应 */
  height: auto; /* 自动调整高度，保持比例 */
}

.news-detail video {
  max-width: 100%; /* 保证视频宽度自适应 */
  height: auto; /* 自动调整高度，保持比例 */
}
</style>
