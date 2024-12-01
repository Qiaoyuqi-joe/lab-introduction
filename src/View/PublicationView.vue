<template>
  <div class="publication-content">
    <h1>Publications</h1>

    <!-- 搜索栏 -->
    <div class="search-bar">
      <!-- 所有输入框和选择框都在这一行 -->
      <div class="filter-row">
        <!-- 搜索框 -->
        <input
          type="text"
          placeholder="Search..."
          v-model="searchQuery"
          class="search-input"
        />

        <!-- 下拉选择框 -->
        <select v-model="selectedCategory" class="filter-select">
          <option value="all">All Categories</option>
          <option value="Journal">Journal</option>
          <option value="Conference">Conference</option>
          <option value="Review">Review</option>
          <option value="Book">Book</option>
        </select>

        <select v-model="selectedGroup" class="filter-select">
          <option value="all">All Groups</option>
          <option value="Computing_Power_Network">Computing_Power_Network</option>
          <option value="Star_earth_fusion">Star_earth_fusion</option>
          <option value="Federated_learning">Federated_learning</option>
          <option value="Large_scale_model">Large_scale_model</option>
          <option value="Digital_Twin">Digital_Twin</option>
        </select>

        <!-- 年份选择框 -->
        <select v-model="selectedYear" class="filter-select">
          <option value="all">All Years</option>
          <option v-for="year in uniqueYears" :key="year" :value="year">
            {{ year }}
          </option>
        </select>
      </div>
    </div>

    <!-- 展示筛选后的出版物 -->
    <div
      class="publication-item"
      v-for="(pub, index) in filteredPublications"
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
      searchQuery: "", // 搜索查询
      selectedCategory: "all", // 选择的分类
      selectedGroup: "all", // 选择的组别
      selectedYear: "all", // 选择的年份
      publications: [
        // 数据来源
        // Star_earth_fusion
        {
          title:
            "Traffic-Aware Resource Management of Beam Hopping in Satellite-Enabled Internet of Things",
          authors: "Author 1, Author 2",
          journal: "Journal Name, Year",
          date: "Date",
          year: 2024,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:L7CI7m0gUJcC",
        },
        {
          title:
            "Joint beam scheduling and power optimization for beam hopping LEO satellite systems",
          authors: "Author 1, Author 2",
          journal: "Journal Name, Year",
          date: "Date",
          year: 2024,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:ipzZ9siozwsC",
        },
        {
          title: "巨型星座路由技术综述",
          authors: "Author 1, Author 2",
          journal: "Journal Name, Year",
          date: "Date",
          year: 2024,
          tag: "Review",
          group: "Star_earth_fusion",
          link: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:BwyfMAYsbu0C",
        },
        {
          title:
            "MaCro: Mega-Constellations Routing Systems with Multi-Edge Cross-Domain Features",
          authors: "Author 1, Author 2",
          journal: "Journal Name, Year",
          date: "Date",
          year: 2024,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:epqYDVWIO7EC",
        },
        {
          title:
            "An Intelligent Area-segmentation Enabled Hybrid Routing Method in Mega-constellations",
          authors: "Author 1, Author 2",
          journal: "Journal Name, Year",
          date: "Date",
          year: 2024,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:AvfA0Oy_GE0C",
        },
        {
          title:
            "SatEdge: Platform of Edge Cloud at Satellite and Scheduling Mechanism for Microservice Modules",
          authors: "Author 1, Author 2",
          journal: "Journal Name, Year",
          date: "Date",
          year: 2024,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:nrtMV_XWKgEC",
        },
        {
          title:
            "Down-Link Slot Assignment in Beam Hopping Communication System Based on Genetic",
          authors: "Author 1, Author 2",
          journal: "Journal Name, Year",
          date: "Date",
          year: 2024,
          tag: "Conference",
          group: "Star_earth_fusion",
          link: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:ML0RJ9NH7IQC",
        },
        {
          title:
            "A Muti-beam Placement Optimization Scheme in LEO Beam Hopping Satellite Systems",
          authors: "Author 1, Author 2",
          journal: "Journal Name, Year",
          date: "Date",
          year: 2024,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:Z5m8FVwuT1cC",
        },
        {
          title:
            "Channel and Power Allocation for Uplink Multibeam LEO Satellite System with IoT Services",
          authors: "Author 1, Author 2",
          journal: "Journal Name, Year",
          date: "Date",
          year: 2024,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:uc_IGeMz5qoC",
        },
        {
          title:
            "LEO Mega-Constellations Routing Algorithm Based on Area Segmentation",
          authors: "Author 1, Author 2",
          journal: "Journal Name, Year",
          date: "Date",
          year: 2024,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:HE397vMXCloC",
        },
        {
          title: "卫星地面融合信息网络（北京邮电大学出版社）",
          authors: "Author 1, Author 2",
          journal: "Beijing University of Posts and Telecommunications Press",
          date: "Date",
          year: 2024,
          tag: "Book",
          group: "Star_earth_fusion",
          link: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:zLWjf1WUPmwC",
        },
        {
          title:
            "Analysis and optimization on partition-based caching and delivery in satellite-terrestrial edge computing networks",
          authors: "Author 1, Author 2",
          journal: "Journal Name, Year",
          date: "Date",
          year: 2024,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:XiVPGOgt02cC",
        },
        {
          title:
            "ComEdge: Cloud-Native Platform for Integrated Computing and Communication in Satellite–Terrestrial Network",
          authors: "Author 1, Author 2",
          journal: "Journal Name, Year",
          date: "Date",
          year: 2024,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "(https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:VLnqNzywnoUC",
        },
        {
          title:
            "低轨卫星通信网络路由技术综述",
          authors: "Author 1, Author 2",
          journal: "Journal Name, Year",
          date: "Date",
          year: 2024,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "(https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:WA5NYHcadZ8C",
        },
        {
          title:
            "Microservice Scheduling for Satellite-Terrestrial Hybrid Network with Edge Computing",
          authors: "Author 1, Author 2",
          journal: "Journal Name, Year",
          date: "Date",
          year: 2024,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "(https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:2KloaMYe4IUC",
        },
        {
          "title": "空天地一体化网络基于服务功能链的资源分配",
          "authors": "Author 1, Author 2",
          "journal": "Journal Name, Year",
          "date": "Date",
          "year": 2024,
          "tag": "Journal",
          "group": "Star_earth_fusion",
          "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:fEOibwPWpKIC"
        },
        {
          "title": "低轨卫星智能多接入边缘计算网络: 需求, 架构, 机遇与挑战",
          "authors": "Author 1, Author 2",
          "journal": "Journal Name, Year",
          "date": "Date",
          "year": 2024,
          "tag": "Journal",
          "group": "Star_earth_fusion",
          "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:dQ2og3OwTAUC"
        },
        {
          "title": "Double-edge intelligent integrated satellite terrestrial networks",
          "authors": "Author 1, Author 2",
          "journal": "Journal Name, Year",
          "date": "Date",
          "year": 2024,
          "tag": "Journal",
          "group": "Star_earth_fusion",
          "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:R3hNpaxXUhUC"
        },
        {
          "title": "Collaborative transmission in hybrid satellite-terrestrial networks: Design and implementation",
          "authors": "Author 1, Author 2",
          "journal": "Journal Name, Year",
          "date": "Date",
          "year": 2024,
          "tag": "Journal",
          "group": "Star_earth_fusion",
          "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:4fKUyHm3Qg0C"
        },
        {
          "title": "Convergence of satellite and terrestrial networks: A comprehensive survey",
          "authors": "Author 1, Author 2",
          "journal": "Journal Name, Year",
          "date": "Date",
          "year": 2024,
          "tag": "Journal",
          "group": "Star_earth_fusion",
          "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:8k81kl-MbHgC"
        },
        {
          "title": "Reinforcement learning based congestion control in satellite Internet of things",
          "authors": "Author 1, Author 2",
          "journal": "Journal Name, Year",
          "date": "Date",
          "year": 2024,
          "tag": "Journal",
          "group": "Star_earth_fusion",
          "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:L8Ckcad2t8MC"
        },
        {
          "title": "Performance analysis of task offloading in double-edge satellite-terrestrial networks",
          "authors": "Author 1, Author 2",
          "journal": "Journal Name, Year",
          "date": "Date",
          "year": 2024,
          "tag": "Journal",
          "group": "Star_earth_fusion",
          "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:j3f4tGmQtD8C"
        },
        // 数字孪生组 (Digital_Twin)
        {
          "title": "Adaptive Multi-Layer Deployment for A Digital Twin Empowered Satellite-Terrestrial Integrated Network",
          "authors": "Author 1, Author 2",
          "journal": "Journal Name, Year",
          "date": "Date",
          "year": 2024,
          "tag": "Journal",
          "group": "Digital_Twin",
          "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:g3aElNc5_aQC"
        },
        {
          "title": "Layered Model Aggregation based Federated Learning in Mobile Edge Networks",
          "authors": "Author 1, Author 2",
          "journal": "Journal Name, Year",
          "date": "Date",
          "year": 2024,
          "tag": "Journal",
          "group": "Digital_Twin",
          "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:ns9cj8rnVeAC"
        },
        // 联邦学习组 (Federated_learning)
        {
          "title": "Communication efficiency optimization of federated learning for computing and network convergence of 6G networks",
          "authors": "Author 1, Author 2",
          "journal": "Journal Name, Year",
          "date": "Date",
          "year": 2024,
          "tag": "Journal",
          "group": "Federated_learning",
          "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:0KyAp5RtaNEC"
        },
        {
          "title": "FedACT: an adaptive chained training approach for federated learning in computing power networks",
          "authors": "Author 1, Author 2",
          "journal": "Journal Name, Year",
          "date": "Date",
          "year": 2024,
          "tag": "Journal",
          "group": "Federated_learning",
          "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:URolC5Kub84C"
        },
        {
          "title": "Multi-task Federated Learning based on Client Scheduling in Mobile Edge Computing",
          "authors": "Author 1, Author 2",
          "journal": "Journal Name, Year",
          "date": "Date",
          "year": 2024,
          "tag": "Journal",
          "group": "Federated_learning",
          "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:olpn-zPbct0C"
        },
        // 大模型组 (Large_scale_model)
        {
          "title": "CourseGPT-zh: an Educational Large Language Model Based on Knowledge Distillation Incorporating Prompt Optimization",
          "authors": "Author 1, Author 2",
          "journal": "Journal Name, Year",
          "date": "Date",
          "year": 2024,
          "tag": "Journal",
          "group": "Large_scale_model",
          "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:p__nRnzSRKYC"
        },
        {
    "title": "Delay-Minimization and Load-Balancing Task Offloading in Mobile Edge Computing",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:TIZ-Mc8IlK0C"
  },
  {
    "title": "Joint D2D and Base Station Collaboration with Hierarchical Task Offloading in MEC Networks",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:tYavs44e6CUC"
  },
  {
    "title": "Priority and Stackelberg Game-Based Incentive Task Allocation for Device-Assisted MEC Networks",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:hMsQuOkrut0C"
  },
  {
    "title": "端侧算力网络: 架构与关键技术",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:vbGhcppDl1QC"
  },
  {
    "title": "Platform Profit Maximization for Space-Air-Ground Integrated Computing Power Network Supplied by Green Energy",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:TIZ-Mc8IlK0C"
  },
  {
    "title": "Community and Priority-Based Microservice Placement in Collaborative Vehicular Edge Computing Networks",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:EYYDruWGBe4C"
  },
  {
    "title": "Computing power network: A survey",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:wbdj-CoPYUoC"
  },
  {
    "title": "Computation Rate Maximization for Wireless Powered Edge Computing With Multi-User Cooperation",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:BUYA1_V_uYcC"
  },
  {
    "title": "Joint Task Partitioning and Parallel Scheduling in Device-Assisted Mobile Edge Networks",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:EkHepimYqZsC"
  },
  {
    "title": "Task Offloading with Multi-cluster Collaboration for Computing and Network Convergence",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:hWpxVfXrSUsC"
  },
  {
    "title": "Multipath Information Announcement Algorithm for Computing Power Network based on Self-Organizing Map Network",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:t7zJ5fGR-2UC"
  },
  {
    "title": "The Architecture of Computing Power Network Towards Federated Learning: Paradigms and Perspectives",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:uWiczbcajpAC"
  },
  {
    "title": "A2C Learning for Tasks Segmentation with Cooperative Computing in Edge Computing Networks",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:5ugPr518TE4C"
  },
  {
    "title": "Joint Offloading and Resource Allocation with Partial Information for Multi-user Edge Computing",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:J-pR_7NvFogC"
  },
  {
    "title": "Computing power network: A testbed and applications with edge intelligence",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:wbdj-CoPYUoC"
  },
  {
    "title": "Multipath Information Announcement Algorithm for Computing Power Network based on Self-Organizing Map Network",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:t7zJ5fGR-2UC"
  },
  {
    "title": "The Architecture of Computing Power Network Towards Federated Learning: Paradigms and Perspectives",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:uWiczbcajpAC"
  },
  {
    "title": "A2C Learning for Tasks Segmentation with Cooperative Computing in Edge Computing Networks",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:5ugPr518TE4C"
  },
  {
    "title": "Joint Offloading and Resource Allocation with Partial Information for Multi-user Edge Computing",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:J-pR_7NvFogC"
  },
  {
    "title": "Computing power network: A testbed and applications with edge intelligence",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:Oh2d4PZ1IFwC"
  },
  {
    "title": "Mobility and Traffic Prediction-Based Resource Allocation With Edge Intelligence in Wireless Network",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:u_35RYKgDlwC"
  },
  {
    "title": "Energy-Efficient Computation Offloading for Mobile Edge Networks: A Graph Theory Approach",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:OU6Ihb5iCvQC"
  },
  {
    "title": "Social-aware proactive content caching and sharing in multi-access edge networks",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:tOudhMTPpwUC"
  },
  {
    "title": "Intelligent Universal Acceleration Framework and Verification for Edge Cloud Applications",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:tzM49s52ZIMC"
  },
  {
    "title": "Multi-UAV Deployment for MEC Enhanced IoT Networks",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:3gGvS2X1-V8C"
  },
  {
    "title": "Edge-assisted adaptive video streaming with deep learning in mobile edge networks",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:70eg2SAEIzsC"
  },
  {
    "title": "Energy-efficient collaborative task offloading in D2D-assisted mobile edge computing networks",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:hC7cP41nSMkC"
  },
  {
    "title": "Context-aware caching with social behavior in MEC-enabled wireless cellular networks",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:r0BpntZqJG4C"
  },
  {
    "title": "Joint resource allocation and user association for heterogeneous services in multi-access edge computing networks",
    "authors": "Author 1, Author 2",
    "journal": "Journal Name, Year",
    "date": "Date",
    "year": 2024,
    "tag": "Journal",
    "group": "Computing_Power_Network",
    "link": "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:ZHo1McVdvXMC"
  }

      ],
    };
  },

  computed: {
    // 提取唯一的年份
    uniqueYears() {
      const years = this.publications.map((pub) => pub.year);
      return [...new Set(years)]; // 去重
    },
    filteredPublications() {
      return this.publications.filter((pub) => {
        const matchesSearch = pub.title
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
        const matchesCategory =
          this.selectedCategory === "all" ||
          pub.tag.toLowerCase() === this.selectedCategory.toLowerCase();

        // 修正：直接比较 selectedGroup 和 pub.group
        const matchesGroup =
          this.selectedGroup === "all" || pub.group === this.selectedGroup;

        const matchesYear =
          this.selectedYear === "all" ||
          pub.year.toString() === this.selectedYear;

        return matchesSearch && matchesCategory && matchesGroup && matchesYear;
      });
    },
  },
};
</script>

<style scoped>
/* 样式根据需要进行调整 */
.publication-content {
  padding: 20px;
}

.search-bar {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 20px;
}

.search-row {
  margin-bottom: 10px;
}

.filter-row {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 10px;
}

.search-button {
  padding: 10px 15px;
  font-size: 1rem;
  background-color: #140a66;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.filter-select-container,
.filter-date-container {
  display: flex;
  gap: 10px;
}

.filter-select,
.date-input {
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-input {
  padding: 8px;
  font-size: 1rem;
  width: 100%;
  max-width: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-button:hover {
  background-color: #0056b3;
}

.publication-item {
  margin-bottom: 15px;
}

.publication-item h2 {
  font-size: 1.2rem;
}

.publication-item .meta {
  font-size: 0.9rem;
  color: #777;
}
</style>
