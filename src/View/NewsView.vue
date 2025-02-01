<template>
  <div class="news-content">
    <h1>Latest News</h1>

    <div class="news-item" v-for="(news, index) in newsList" :key="index">
      <router-link :to="{ name: 'NewsDetail', params: { id: index } }">
        <h2>{{ news.title }}</h2>
      </router-link>
      <p class="news-meta">Posted on {{ news.date }} by {{ news.author }}</p>
      <p>{{ news.description }}</p>
      <p v-if="news.details">
        时间: {{ news.details.time }} 地点: {{ news.details.location }}
      </p>
      <div class="news-footer">
        <span>Posted in {{ news.categories.join(", ") }}</span>
        <a href="#" class="comment-link">Leave a comment</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsView",
  data() {
    return {
      newsList: [
        {
          title: "协作边缘计算网络中基于算力网络图的任务调度系统Demo",
          date: "December 9, 2024",
          author: "zxlab",
          description: "",
          categories: ["Notifications", "Visitings"],
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
          description: "",
          details: {
            time: "2021.04.15",
            location: "成都",
          },
          categories: ["Notifications", "Visitings"],
        },
        {
          title: "Niulab成员参加第六届牛顿论坛",
          date: "December 26, 2020",
          author: "niulab",
          description: "时间: 2020.12.25-26 地点: 清华大学罗姆电子工程馆...",
          categories: ["Notifications", "Visitings"],
        },
      ],
    };
  },
};
</script>
<style scoped>
.news-content {
  padding: 1.25rem; /* 20px -> 1.25rem */
}

a {
  text-decoration: none;
}

.news-item {
  margin-bottom: 1.875rem; /* 30px -> 1.875rem */
  border-bottom: 1px solid #ddd;
  padding-bottom: 1.25rem; /* 20px -> 1.25rem */
}

.news-item h2 {
  font-size: 1.5rem; /* 字号使用 rem 单位 */
  margin-bottom: 0.3125rem; /* 5px -> 0.3125rem */
}

.news-meta {
  font-size: 0.9rem; /* 字号使用 rem 单位 */
  color: #555;
  margin-bottom: 0.625rem; /* 10px -> 0.625rem */
}

.news-footer {
  font-size: 0.85rem; /* 字号使用 rem 单位 */
  color: #777;
}

.comment-link {
  margin-left: 0.625rem; /* 10px -> 0.625rem */
  color: #140a66; /* 紫色 */
  text-decoration: none;
}

.comment-link:hover {
  text-decoration: underline;
}
</style>
