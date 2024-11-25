<template>
  <div class="publication-content">
    <h1>Publications</h1>
    <!-- 搜索栏 -->
    <div class="search-bar">
      <input
        type="text"
        placeholder="Search..."
        v-model="searchQuery"
        class="search-input"
      />
      <select v-model="selectedCategory" class="filter-select">
        <option value="all">All Categories</option>
        <option value="journal">Journal</option>
        <option value="conference">Conference</option>
      </select>
      <select v-model="selectedGroup" class="filter-select">
        <option value="all">All Groups</option>
        <option value="research">Research</option>
        <option value="review">Review</option>
      </select>
      <input
        type="date"
        v-model="fromDate"
        class="date-input"
        placeholder="From"
      />
      <input type="date" v-model="toDate" class="date-input" placeholder="To" />
      <button @click="filterPublications" class="search-button">Search</button>
    </div>

    <div
      class="publication-item"
      v-for="(pub, index) in publications"
      :key="index"
    >
      <h2>
        <a :href="pub.link" target="_blank">{{ pub.title }}</a>
      </h2>
      <p class="authors">{{ pub.authors }}</p>
      <p class="journal">{{ pub.journal }}</p>
      <p class="meta">
        Posted on {{ pub.date }} | Tagged {{ pub.tag }} |
        <a href="#" class="comment-link">Leave a comment</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicationView",
  data() {
    return {
      publications: [
        {
          title:
            "Resource Allocation for Channel Estimation in Reconfigurable Intelligent Surface-Aided Multi-Cell Networks",
          authors: "Y. Xu and S. Zhou",
          journal:
            "Journal of Communications and Information Networks, 2024, 9(1):64-79",
          date: "November 6, 2024",
          tag: "Journal",
          link: "#", // 将 # 替换为实际链接
        },
        {
          title:
            "Learning-assisted User Scheduling and Beamforming for mmWave Vehicular Networks",
          authors: "B. Xie, S. Chen, S. Zhou, Z. Niu, B. Galkin, I. Dusparic",
          journal:
            "IEEE Trans. Veh. Technol., VOL. 73, NO. 8, 11262-11275, AUGUST 2024",
          date: "November 6, 2024",
          tag: "Journal",
          link: "#", // 将 # 替换为实际链接
        },
        {
          title:
            "Sensing and Communication Co-Design for Status Update in Multiaccess Wireless Networks",
          authors:
            "Fei Peng, Zhiyuan Jiang, Sheng Zhou, Zhisheng Niu, Shunqing Zhang",
          journal: "IEEE Trans. Mobile Computing, 22(3): 1779-1792, 2023",
          date: "September 6, 2023",
          tag: "Journal",
          link: "#", // 将 # 替换为实际链接
        },
        {
          title:
            "A Predictive Frame Transmission Scheme for Cloud Gaming in Mobile Edge Cloudlet Systems",
          authors: "Tianchu Zhao, Sheng Zhou, Yuxuan Sun, Zhisheng Niu",
          journal: "IEEE Trans. Mobile Computing, 22(7):3774-3789, 2023",
          date: "August 20, 2023",
          tag: "Journal",
          link: "#", // 将 # 替换为实际链接
        },
        {
          title:
            "Multiuser Co-inference with Batch Processing Capable Edge Server",
          authors: "W. Shi, S. Zhou, Z. Niu, M. Jiang, L. Geng",
          journal: "IEEE Trans. Wireless Commun., 2023, 22(1):286-300",
          date: "April 6, 2023",
          tag: "Journal",
          link: "#", // 将 # 替换为实际链接
        },
      ],
    };
  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
}

.search-input {
  padding: 5px;
  flex: 2;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.filter-select,
.date-input {
  padding: 5px;
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-button {
  padding: 5px 10px;
  background-color: #03157de2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #3a2161;
}
.publication-content {
  padding: 20px;
}

.publication-item {
  margin-bottom: 30px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
}

.publication-item h2 {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.publication-item h2 a {
  color: #03157de2; /* 紫色 */
  text-decoration: none;
}

.publication-item h2 a:hover {
  text-decoration: underline;
}

.authors {
  font-size: 0.9rem;
  color: #555;
}

.journal {
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.meta {
  font-size: 0.85rem;
  color: #777;
}

.comment-link {
  color: #03157de2;
  text-decoration: none;
}

.comment-link:hover {
  text-decoration: underline;
}
</style>
