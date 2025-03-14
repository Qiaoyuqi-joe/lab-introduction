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
          title: "实验室成员李泱博士参加2023 ACM MOBICOM会议并进行现场演示",
          date: "October 10, 2023",
          author: "zxlab",
          description: "北京邮电大学泛网无线教育部重点实验室的李泱博士前往西班牙马德里参加2023年国际移动计算与网络大会",
          categories: ["Notifications", "Visitings"],
        },
        {
          title: "实验室成员李泱博士参加2024GLOBECOM会议并进行口头汇报",
          date: "December 8, 2024",
          author: "zxlab",
          description:
            "北京邮电大学泛网无线教育部重点实验室的李泱博士前往南非开普敦参加2024年全球通信会议",
          categories: ["Notifications", "Visitings"],
        },
        {
          title: "实验室团队参加2024年中国北京国际科技产业博览会并进行展演",
          date: "July 13, 2024",
          author: "zxlab",
          description:
            "北京邮电大学信息与通信工程学院 WSPN 实验室的张兴率团队首次公开展示 “轻量化通算一体边缘智能关键技术及应用”",
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
