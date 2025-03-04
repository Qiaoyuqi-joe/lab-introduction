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
          description: "为了实现协作边缘计算网络中高效的任务调度，提出了基于算力网络图的任务调度方案",
          categories: ["Notifications", "Visitings"],
        },
        {
          title: "实验室成员参加2024GLOBECOM会议并进行口头汇报",
          date: "December 8, 2024",
          author: "zxlab",
          description:
            "北京邮电大学泛网无线教育部重点实验室的李泱博士前往南非开普敦参加2024年全球通信会议",
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
