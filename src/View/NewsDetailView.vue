<template>
  <div class="news-detail">
    <h1>{{ news.title }}</h1>
    <p class="news-meta">Posted on {{ news.date }} by {{ news.author }}</p>
    <h3>简介：</h3>
    <p v-html="news.description"></p>
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
          title: "实验室成员参加2024GLOBECOM会议并进行口头汇报",
          date: "December 8, 2024",
          author: "zxlab",
          description:
            "<p>2024年12月8日至12月12日，北京邮电大学泛网无线教育部重点实验室的李泱博士前往南非开普敦参加2024年全球通信会议(IEEE Global Communications Conference (GLOBECOM))。IEEE GLOBECOM 是 IEEE 通信学会的两个旗舰会议之一，致力于推动通信几乎每个方面的创新。每年，3000 多名科研人员及其管理者提交提案，以在年度会议上举行的项目会议。经过广泛的同行评审，最佳提案被选中纳入会议议程，包括技术论文、教程、研讨会和行业会议，旨在推动持续重塑世界的技术、系统和基础设施，并为所有用户提供前所未有的高速、无缝和经济的全球电信服务。</p> <p> 北京时间12月10日10:30，李泱博士口头汇报了题目为“Priority and Stackelberg Game-Based Incentive Task Allocation for Device-Assisted MEC Networks”的相关工作。移动边缘计算（MEC）是一种前景广阔的计算范式，可为用户的各种应用提供近距离即时计算服务，它已成为物联网（IoT）的重要组成部分。然而，随着计算密集型服务的不断涌现和物联网设备数量的激增，MEC 服务器面临着资源限制。因此，文章探索了设备辅助边缘计算的任务卸载框架，它允许 MEC 服务器将某些任务分配给辅助物联网设备（AD）进行处理。然而，任务物联网设备(TD)、MEC服务器和ADs之间存在复杂的合作与竞争关系，在缺乏激励机制的情况下，TDs将没有动力卸载任务数据、ADs也将没有动力协助MEC服务器处理任务。因此，针对上述问题，研究了终端辅助边缘计算框架下激励驱动的任务分配方案，研究的目标是通过设计激励驱动的任务分配策略，提高 MEC 服务器的效用，并且保障 TDs 和 ADs 的利益，实现三赢局面。</p> <p> 在充分展示自己的成果之余，李泱博士还参加了多个研讨会与论坛，听取了大会主旨报告，包括中国移动研究院首席科学家Chih-Lin I教授所做的“新时代通信范式的转变”报告，纽约大学Theodore S. Rappaport教授所做的“通信系统能耗的潮汐效应：如何增强信息通信技术行业德能量效率？”报告和俄亥俄州立大学Aylin Yener教授所做的“基于目的的连接：下一代无线通信革命”报告等； 参会期间与多位本领域小同行就共同感兴趣的研究方向进行了交流。</p>",
          categories: ["Notifications", "Visitings"],
          image: require('@/assets/images/南非开会.jpg'), 
        },
       
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
