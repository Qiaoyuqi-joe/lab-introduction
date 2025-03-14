<template>
  <div class="news-detail">
    <h1>{{ news.title }}</h1>
    <p class="news-meta">Posted on {{ news.date }} by {{ news.author }}</p>
    <h3>简介：</h3>
    <p v-html="news.description"></p>
    <p v-if="news.details">
      时间: {{ news.details.time }} 地点: {{ news.details.location }}
    </p>
<!-- 显示单张图片 -->
<div v-if="news.image">
  <h3>相关图片：</h3>
  <img :src="news.image" alt="新闻图片" />
</div>

<!-- 显示多张图片 -->
<div v-if="news.images && news.images.length">
  <h3>相关图片：</h3>
  <div class="image-gallery">
    <img v-for="(img, index) in news.images" :key="index" :src="img" alt="新闻图片" />
  </div>
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
          title: "实验室成员李泱博士参加2023 ACM MOBICOM会议并进行现场演示",
          date: "October 1, 2023",
          author: "zxlab",
          description: 
          "<p>2023年10月1日至10月8日，北京邮电大学泛网无线教育部重点实验室的李泱博士前往西班牙马德里参加2023年国际移动计算与网络大会（ACM International Conference on Mobile Computing and Networking (MobiCom)）。ACM MobiCom 是移动计算与无线网络领域的顶级国际学术会议之一，由计算机协会（ACM）主办，致力于推动无线网络、移动系统、物联网等前沿技术的发展。会议涵盖理论研究、系统设计、实践应用等多个方面，每年吸引全球众多科研人员和行业专家参会。经过严格的同行评审，会议接收高质量论文，并设有研讨会、技术演示、海报展示等环节，以促进学术交流、推动技术创新，为移动计算和网络领域的研究人员和从业者提供重要的交流平台。动持续重塑世界的技术、系统和基础设施，并为所有用户提供前所未有的高速、无缝和经济的全球电信服务。</p> <p>北京时间10月2日16：00，李泱博士现场演示了题目为“Task offloading with multi-cluster collaboration for computing and network convergence”的相关工作。在演示过程中，李泱博士详细介绍了他们团队设计和实现的多集群协作任务卸载原型测试平台，并展示了其在计算与网络融合环境下的高效性能。在演示中，李泱博士展示了测试平台的关键功能，包括去中心化数据同步、分布式资源感知与通告、任务调度决策与执行以及多通道任务调度决策。这些功能使得集群能够在系统中及时发现并更新配置信息，共享计算能力和负载状态指标，并根据延迟预测和设计算法做出任务调度决策。为了评估测试平台的性能，使用了多种视频处理服务，包括虚拟现实直播、目标检测和人脸识别。这些服务以微服务的形式实现，确保了模块化部署和可扩展性。通过在不同集群之间分配这些服务请求，演示展示了测试平台在负载均衡方面的优势。在演示的最后阶段，观众通过现场的摄像头和客户端发送了各种服务请求，并通过客户端观察了结果。</p> <p>在充分展示自己的成果之余，李泱博士还参加了多个研讨会与论坛，听取了大会主旨报告，其中斯坦福大学的Ada Poon教授介绍了无线生物电子学的最新进展，提出了一种利用生物组织近场相互作用为体内微型设备无线供电的新方法，展示了其在医疗领域的巨大潜力，包括微型起搏器、神经调节平台以及可穿戴脑电图记录器等创新应用。</p>",
          categories: ["Notifications", "Visitings"],
          image: require('@/assets/images/西班牙开会.jpg'),  
          video: require('@/assets/video/测试视频.mp4'),
        },
        {
          title: "实验室成员李泱博士参加2024GLOBECOM会议并进行口头汇报",
          date: "December 8, 2024",
          author: "zxlab",
          description:
            "<p>2024年12月8日至12月12日，北京邮电大学泛网无线教育部重点实验室的李泱博士前往南非开普敦参加2024年全球通信会议(IEEE Global Communications Conference (GLOBECOM))。IEEE GLOBECOM 是 IEEE 通信学会的两个旗舰会议之一，致力于推动通信几乎每个方面的创新。每年，3000 多名科研人员及其管理者提交提案，以在年度会议上举行的项目会议。经过广泛的同行评审，最佳提案被选中纳入会议议程，包括技术论文、教程、研讨会和行业会议，旨在推动持续重塑世界的技术、系统和基础设施，并为所有用户提供前所未有的高速、无缝和经济的全球电信服务。</p> <p> 北京时间12月10日10:30，李泱博士口头汇报了题目为“Priority and Stackelberg Game-Based Incentive Task Allocation for Device-Assisted MEC Networks”的相关工作。移动边缘计算（MEC）是一种前景广阔的计算范式，可为用户的各种应用提供近距离即时计算服务，它已成为物联网（IoT）的重要组成部分。然而，随着计算密集型服务的不断涌现和物联网设备数量的激增，MEC 服务器面临着资源限制。因此，文章探索了设备辅助边缘计算的任务卸载框架，它允许 MEC 服务器将某些任务分配给辅助物联网设备（AD）进行处理。然而，任务物联网设备(TD)、MEC服务器和ADs之间存在复杂的合作与竞争关系，在缺乏激励机制的情况下，TDs将没有动力卸载任务数据、ADs也将没有动力协助MEC服务器处理任务。因此，针对上述问题，研究了终端辅助边缘计算框架下激励驱动的任务分配方案，研究的目标是通过设计激励驱动的任务分配策略，提高 MEC 服务器的效用，并且保障 TDs 和 ADs 的利益，实现三赢局面。</p> <p> 在充分展示自己的成果之余，李泱博士还参加了多个研讨会与论坛，听取了大会主旨报告，包括中国移动研究院首席科学家Chih-Lin I教授所做的“新时代通信范式的转变”报告，纽约大学Theodore S. Rappaport教授所做的“通信系统能耗的潮汐效应：如何增强信息通信技术行业德能量效率？”报告和俄亥俄州立大学Aylin Yener教授所做的“基于目的的连接：下一代无线通信革命”报告等； 参会期间与多位本领域小同行就共同感兴趣的研究方向进行了交流。</p>",
          categories: ["Notifications", "Visitings"],
          image: require('@/assets/images/南非开会.jpg'), 
        },
        {
          title: "实验室团队参加2024年中国北京国际科技产业博览会并进行展演",
          date: "July 13, 2024",
          author: "zxlab",
          description: 
          "<p>2024 年 7 月 13 日至 16 日，第二十六届中国北京国际科技产业博览会在北京亦创国际会展中心盛大举行。北京邮电大学信息与通信工程学院 WSPN 实验室的张兴率团队首次公开展示 “轻量化通算一体边缘智能关键技术及应用”，凭借自主研发的边缘原型样机及创新成果，吸引了行业内外的广泛关注。</p> <p>本次参展的通算一体边缘智能系统，突破了传统通信与计算分离的架构瓶颈，通过深度融合无线通信、边缘计算及人工智能技术，实现了低时延、高可靠的本地化数据处理能力。团队现场演示的工业级场景应用中，原型样机在 5G 网络环境下完成了毫秒级响应的设备状态监测与故障预警，展现了其在智能制造、智慧城市等领域的巨大潜力。</p> <p>市委教育工委副书记李军锋详细询问了技术研发路径与产业化进展，对WSPN团队 “从实验室到产业化” 的创新转化能力表示赞赏。他指出，通算一体技术是未来数字经济发展的重要底座，希望北邮继续发挥学科交叉优势，为首都建设全球数字经济标杆城市提供更多科技支撑。</p> <p>作为 WSPN 实验室的负责人，张兴长期致力于无线通信与智能计算的融合研究。其团队近年来在边缘计算资源调度、异构网络协同优化等方向取得多项突破性成果，相关技术已与中国电信开展合作应用.</p>",
          categories: ["Notifications", "Visitings"],
          images: [  // 修改为 images 数组
            require('@/assets/images/科博会1.jpg'),
            require('@/assets/images/科博会2.jpg'),
            require('@/assets/images/科博会3.jpg')
          ] 
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
  max-width: 80%; /* 保证图片宽度自适应 */
  height: auto; /* 自动调整高度，保持比例 */
  display: block; /* 将video改为块级元素 */
  margin: 0 auto; /* 水平居中 */
  border-radius: 0.5rem; /* 图片圆角 */
  box-shadow:  0 0.625rem 1.875rem rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}

.news-detail video {
  max-width: 80%; /* 保证视频宽度自适应 */
  height: auto; /* 自动调整高度，保持比例 */
  display: block; /* 将video改为块级元素 */
  margin: 0 auto; /* 水平居中 */
}
.image-gallery {
  display: flex;
  gap: 1rem; /* 图片间距 */
  flex-wrap: wrap; /* 超出部分换行 */
  justify-content: center; /* 图片居中 */
}

.image-gallery img {
  width: 30%; /* 每张图片占30%宽度 */
  height: auto;
  border-radius: 0.5rem; /* 图片圆角 */
  box-shadow:  0 0.625rem 1.875rem rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}

</style>
