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

        <select v-model="selectedGroup" class="filter-select">
          <option value="all">All Groups</option>
          <option value="Computing_Power_Network">
            Computing_Power_Network
          </option>
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
        Posted on {{ pub.date }}
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
        // Star_earth_fusion
        {
          title:
            "Traffic-Aware Resource Management of Beam Hopping in Satellite-Enabled Internet of Things",
          authors:
            "Shuang Zheng, Xing Zhang, Jaixin Zhang, Peng Wang, Wenbo Wang",
          journal: "IEEE Internet of Things Journal",
          date: "2024/7/26",
          year: 2024,
          group: "Star_earth_fusion",
          link: "https://ieeexplore.ieee.org/abstract/document/10612780",
        },
        {
          title:
            "Joint beam scheduling and power optimization for beam hopping LEO satellite systems",
          authors: "Zheng Shuang, Zhang Xing, Wang Peng, Wang Wenbo",
          journal: "China Communications",
          date: "2024/4/9",
          year: 2024,
          group: "Star_earth_fusion",
          link: "https://ieeexplore.ieee.org/abstract/document/10495871",
        },
        {
          title: "巨型星座路由技术综述",
          authors: "张佳鑫， 常朝阳， 张易隆， 李睿， 王凯巍， 张兴",
          journal: "Space-Integrated-Ground Information Networks",
          date: "2024/3/1",
          year: 2024,
          group: "Star_earth_fusion",
          link: "https://web.p.ebscohost.com/abstract?site=ehost&scope=site&jrnl=20968930&AN=177257484&h=C6uLyP14et7GACAESPZrnySpfGBxho%2fV%2bqFBTPdQHY5Qpg%2bLNHxnyPzMWcm6tc3zMFNyntW2mhIFPv5kAQbfqw%3d%3d&crl=c&resultLocal=ErrCrlNoResults&resultNs=Ehost&crlhashurl=login.aspx%3fdirect%3dtrue%26profile%3dehost%26scope%3dsite%26authtype%3dcrawler%26jrnl%3d20968930%26AN%3d177257484",
        },
        {
          title:
            "MaCro: Mega-Constellations Routing Systems with Multi-Edge Cross-Domain Features",
          authors:
            "Jiaxin Zhang, Kaiwei Wang, Rui Li, Zhaoyang Chang, Xing Zhang, Wenbo Wang",
          journal: "IEEE Wireless Communications",
          date: "2023/12/12",
          year: 2023,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://ieeexplore.ieee.org/abstract/document/10355103",
        },
        {
          title:
            "An Intelligent Area-segmentation Enabled Hybrid Routing Method in Mega-constellations",
          authors:
            "Kaiwei Wang, Jiaxin Zhang, Shuang Zheng, Peng Wang, Xing Zhang, Barry Evans",
          journal: "2023 IEEE Globecom Workshops (GC Wkshps)",
          date: "2023/12/4",
          year: 2023,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://ieeexplore.ieee.org/abstract/document/10465201/",
        },
        {
          title:
            "SatEdge: Platform of Edge Cloud at Satellite and Scheduling Mechanism for Microservice Modules",
          authors: "YanZhe Huang, Xing Zhang, ZeChang Xu",
          journal: "IEEE Access",
          date: "2023/11/6",
          year: 2023,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://ieeexplore.ieee.org/abstract/document/10309921",
        },
        {
          title:
            "Down-Link Slot Assignment in Beam Hopping Communication System Based on Genetic",
          authors:
            "Lukuan Zhang, Niwei Wang, Hong Yan, Xi Cheng, Jianfei Tong, Xing Zhang",
          journal:
            "2023 International Conference on Wireless Communications and Signal Processing (WCSP)",
          date: "2023/11/2",
          year: 2023,
          tag: "Conference",
          group: "Star_earth_fusion",
          link: "https://ieeexplore.ieee.org/abstract/document/10404923",
        },
        {
          title:
            "A Muti-beam Placement Optimization Scheme in LEO Beam Hopping Satellite Systems",
          authors:
            "Rumin Diao, Xing Zhang, Lukuan Zhang, Shuang Zheng, Qingyi Quan",
          journal:
            "2023 International Conference on Wireless Communications and Signal Processing (WCSP)",
          date: "2023/11/2",
          year: 2023,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://ieeexplore.ieee.org/abstract/document/10404861",
        },
        {
          title:
            "Channel and Power Allocation for Uplink Multibeam LEO Satellite System with IoT Services",
          authors: "Shuang Zheng, Xing Zhang, Peng Wang, Wenbo Wang",
          journal:
            "2023 IEEE International Conference on Communications Workshops (ICC Workshops)",
          date: "2023/5/28",
          year: 2023,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://ieeexplore.ieee.org/abstract/document/10283660",
        },
        {
          title:
            "LEO Mega-Constellations Routing Algorithm Based on Area Segmentation",
          authors:
            "Rui Li, Jiaxin Zhang, Shuang Zheng, Kaiwei Wang, Peng Wang, Xing Zhang",
          journal:
            "2023 IEEE Wireless Communications and Networking Conference (WCNC)",
          date: "2023/3/26",
          year: 2023,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://ieeexplore.ieee.org/abstract/document/10118676",
        },
        {
          title: "卫星地面融合信息网络（北京邮电大学出版社）",
          authors: "张兴",
          journal: "Beijing University of Posts and Telecommunications Press",
          date: "2023/3/1",
          year: 2023,
          tag: "Book",
          group: "Star_earth_fusion",
          link: "https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=uN0i4yEAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=uN0i4yEAAAAJ:zLWjf1WUPmwC",
        },
        {
          title:
            "Analysis and optimization on partition-based caching and delivery in satellite-terrestrial edge computing networks",
          authors:
            "Peng Wang, Xing Zhang, Jiaxin Zhang, Shuang Zheng, Wenhao Liu",
          journal: "China Communications",
          date: "2023/3",
          year: 2023,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://ieeexplore.ieee.org/abstract/document/10091934",
        },
        {
          title:
            "ComEdge: Cloud-Native Platform for Integrated Computing and Communication in Satellite–Terrestrial Network",
          authors:
            "Haoyang Shi, Xing Zhang, Peixuan Wu, Jingkai Chen, Yufei Zhang",
          journal: "Electronics",
          date: "2023/1",
          year: 2023,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://www.mdpi.com/2079-9292/12/20/4252",
        },
        {
          title: "低轨卫星通信网络路由技术综述",
          authors: "郑爽， 张兴， 王文博",
          journal: "天地一体化信息网络",
          date: "2022/9",
          year: 2022,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://www.infocomm-journal.com/sigin/EN/10.11959/j.issn.2096-8930.2022037",
        },
        // eslint-disable-next-line no-irregular-whitespace
        {
          title:
            "Microservice Scheduling for Satellite-Terrestrial Hybrid Network with Edge Computing",
          authors: "Yanzhe Huang, Xing Zhang",
          journal:
            "2022 IEEE/CIC International Conference on Communications in China (ICCC Workshops)",
          date: "2022/8/11",
          year: 2022,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://ieeexplore.ieee.org/abstract/document/9896704",
        },
        {
          title: "空天地一体化网络基于服务功能链的资源分配",
          authors: "王婷， 黄昊楠， 张兴， 王鹏， 张佳",
          journal: "Radio Communications Technology",
          date: "2021",
          year: 2021,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://www.researchgate.net/profile/Jiaxin-Zhang-42/publication/377159498_Resource_Allocation_Based_on_Servive_Function_Chain_in_Space-Air-Ground_Integrated_Networks/links/6597c3c40bb2c7472b338f13/Resource-Allocation-Based-on-Servive-Function-Chain-in-Space-Air-Ground-Integrated-Networks.pdf",
        },
        {
          title: "低轨卫星智能多接入边缘计算网络: 需求, 架构, 机遇与挑战",
          authors: "王鹏， 张佳鑫， 张兴， 王文博",
          journal: "移动通信",
          date: "2021",
          year: 2021,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://www.researchgate.net/profile/Jiaxin-Zhang-42/publication/377159372_Low_Earth_Orbit_Satellite_Intelligent_Multi-access_Edge_Computing_Networks_Requirements_Architecture_Opportunities_and_Challenges/links/6597c4513c472d2e8eb531a3/Low-Earth-Orbit-Satellite-Intelligent-Multi-access-Edge-Computing-Networks-Requirements-Architecture-Opportunities-and-Challenges.pdf",
        },
        {
          title:
            "Double-edge intelligent integrated satellite terrestrial networks",
          authors:
            "Jiaxin Zhang, Xing Zhang, Peng Wang, Liangjingrong Liu, Yuanjun Wang",
          journal: "China Communications",
          date: "2020/9/25",
          year: 2020,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://ieeexplore.ieee.org/abstract/document/9205983/",
        },
        {
          title:
            "Collaborative transmission in hybrid satellite-terrestrial networks: Design and implementation",
          authors:
            "Yinan Jia, Jiaxin Zhang, Peng Wang, Liangjingrong Liu, Xing Zhang, Wenbo Wang",
          journal:
            "2020 IEEE Wireless Communications and Networking Conference (WCNC)",
          date: "2020/5/25",
          year: 2020,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://ieeexplore.ieee.org/abstract/document/9120560/",
        },
        {
          title:
            "Convergence of satellite and terrestrial networks: A comprehensive survey",
          authors:
            "Peng Wang, Jiaxin Zhang, Xing Zhang, Zhi Yan, Barry G Evans, Wenbo Wang",
          journal: "IEEE access",
          date: "2019/12/31",
          year: 2019,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://ieeexplore.ieee.org/abstract/document/8946626/",
        },
        {
          title:
            "Reinforcement learning based congestion control in satellite Internet of things",
          authors: "Zhou Wang, Jiaxin Zhang, Xing Zhang, Wenbo Wang",
          journal: "IEEE",
          date: "2019/10/23",
          year: 2019,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://ieeexplore.ieee.org/abstract/document/8928132/",
        },
        {
          title:
            "Performance analysis of task offloading in double-edge satellite-terrestrial networks",
          authors: "Peng Wang, Xing Zhang, Jiaxin Zhang, Zhi Wang",
          journal:
            "Communications and Networking: 13th EAI International Conference, ChinaCom 2018, Chengdu, China, October 23-25, 2018, Proceedings 13",
          date: "2019",
          year: 2019,
          tag: "Journal",
          group: "Star_earth_fusion",
          link: "https://link.springer.com/chapter/10.1007/978-3-030-06161-6_52",
        }, // 数字孪生组 (Digital_Twin)
        {
          title:
            "Adaptive Multi-Layer Deployment for A Digital Twin Empowered Satellite-Terrestrial Integrated Network",
          authors: "Yihong Tao, Bo Lei, Haoyang Shi, Jingkai Chen, Xing Zhang",
          journal: "arXiv preprint arXiv:2409.05480",
          date: "2024/9/9",
          year: 2024,
          tag: "Journal",
          group: "Digital_Twin",
          link: "https://arxiv.org/abs/2409.05480",
        },
        {
          title:
            "Layered Model Aggregation based Federated Learning in Mobile Edge Networks",
          authors: "Qiming Cao, Xing Zhang, Yushun Zhang, Yongdong Zhu",
          journal:
            "2021 IEEE/CIC International Conference on Communications in China (ICCC)",
          date: "2021/7/28",
          year: 2021,
          tag: "Journal",
          group: "Digital_Twin",
          link: "https://ieeexplore.ieee.org/abstract/document/9580403/",
        }, // 联邦学习组 (Federated_learning)
        {
          title:
            "Communication efficiency optimization of federated learning for computing and network convergence of 6G networks",
          authors:
            "Yizhuo Cai, Bo Lei, Qianying Zhao, Jing Peng, Min Wei, Yushun Zhang, Xing Zhang",
          journal:
            "Frontiers of Information Technology & Electronic Engineering",
          date: "2024/5",
          year: 2024,
          tag: "Journal",
          group: "Federated_learning",
          link: "https://arxiv.org/pdf/2311.16540",
        },
        {
          title:
            "FedACT: an adaptive chained training approach for federated learning in computing power networks",
          authors:
            "Min Wei, Qianying Zhao, Bo Lei, Yizhuo Cai, Yushun Zhang, Xing Zhang, Wenbo Wang",
          journal: "Digital Communications and Networks",
          date: "2024/1/3",
          year: 2024,
          tag: "Journal",
          group: "Federated_learning",
          link: "https://www.sciencedirect.com/science/article/pii/S2352864823001839",
        },
        {
          title:
            "Multi-task Federated Learning based on Client Scheduling in Mobile Edge Computing",
          authors: "Yushun Zhang, Xing Zhang, Yizhuo Cai",
          journal:
            "2022 IEEE/CIC International Conference on Communications in China (ICCC)",
          date: "2022/8/11",
          year: 2022,
          tag: "Journal",
          group: "Federated_learning",
          link: "https://ieeexplore.ieee.org/abstract/document/9880688",
        }, // 大模型组 (Large_scale_model)
        {
          title:
            "CourseGPT-zh: an Educational Large Language Model Based on Knowledge Distillation Incorporating Prompt Optimization",
          authors: "Zheyan Qu, Lu Yin, Zitong Yu, Wenbo Wang",
          journal: "arXiv preprint arXiv:2405.04781",
          date: "2024/5/8",
          year: 2024,
          tag: "Journal",
          group: "Large_scale_model",
          link: "https://arxiv.org/abs/2405.04781",
        },
        {
          title:
            "Delay-Minimization and Load-Balancing Task Offloading in Mobile Edge Computing",
          authors: "Lianlian Yang, Xing Zhang, Junjie Li, Bo Lei",
          journal:
            "2024 IEEE/CIC International Conference on Communications in China (ICCC Workshops)",
          date: "2024/8/7",
          year: 2024,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: "https://ieeexplore.ieee.org/abstract/document/10693858/",
        },
        {
          title:
            "Joint D2D and Base Station Collaboration with Hierarchical Task Offloading in MEC Networks",
          authors: "Heling Zhang, Yang Li, Xing Zhang",
          journal:
            "2024 IEEE/CIC International Conference on Communications in China (ICCC)",
          date: "2024/8/7",
          year: 2024,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: "https://ieeexplore.ieee.org/abstract/document/10681930/",
        },
        {
          title:
            "Priority and Stackelberg Game-Based Incentive Task Allocation for Device-Assisted MEC Networks",
          authors: "Yang Li, Xing Zhang, Bo Lei, Zheyan Qu, Wenbo Wang",
          journal: "arXiv preprint arXiv:2407.21352",
          date: "2024/7/31",
          year: 2024,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: "https://arxiv.org/abs/2407.21352",
        },
        {
          title: "端侧算力网络: 架构与关键技术",
          authors: "张兴， 曲哲言， 孙钰坤， 张佳鑫， 王文博",
          journal: "北京邮电大学学报",
          date: "2024/6/30",
          year: 2024,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: "https://journal.bupt.edu.cn/CN/Y2024/V47/I3/1",
        },

        {
          title:
            "Platform Profit Maximization for Space-Air-Ground Integrated Computing Power Network Supplied by Green Energy",
          authors: " Lianlian Yang, Xing Zhang, Junjie Li, Bo Lei ",
          journal:
            " 2024 IEEE/CIC International Conference on Communications in China (ICCC Workshops) ",
          date: " 2024/8/7 ",
          year: 2024,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: " https://ieeexplore.ieee.org/abstract/document/10693858 ",
        },
        {
          title:
            "Community and Priority-Based Microservice Placement in Collaborative Vehicular Edge Computing Networks",
          authors: " Zheyan Qu, Xing Zhang, Haonan Huang, Yang Li, Wenbo Wang ",
          journal:
            " 2024 IEEE Wireless Communications and Networking Conference (WCNC) ",
          date: " 2024/4/21 ",
          year: 2024,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: " https://ieeexplore.ieee.org/abstract/document/10570859 ",
        },
        {
          title: "Computing power network: A survey",
          authors:
            " Sun Yukun, Lei Bo, Liu Juniin, Huang Haonan, Zhang Xing, Peng Jing, Wang Wenbo ",
          journal: " China Communications ",
          date: " 2024/4/9 ",
          year: 2024,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: " https://ieeexplore.ieee.org/abstract/document/10495806 ",
        },
        {
          title:
            "Computation Rate Maximization for Wireless Powered Edge Computing With Multi-User Cooperation",
          authors:
            " Yang Li, Xing Zhang, Bo Lei, Qianying Zhao, Min Wei, Zheyan Qu, Wenbo Wang ",
          journal: " IEEE Open Journal of the Communications Society ",
          date: " 2024/1/24 ",
          year: 2024,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: " https://ieeexplore.ieee.org/abstract/document/10413502 ",
        },
        {
          title:
            "Joint Task Partitioning and Parallel Scheduling in Device-Assisted Mobile Edge Networks",
          authors: " Yang Li, Xinlei Ge, Bo Lei, Xing Zhang, Wenbo Wang ",
          journal: " IEEE Internet of Things Journal ",
          date: " 2023/12/8 ",
          year: 2023,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: " https://ieeexplore.ieee.org/abstract/document/10349122 ",
        },

        {
          title:
            "Task Offloading with Multi-cluster Collaboration for Computing and Network Convergence",
          authors:
            " Yang Li, Bo Lei, Zhaojiang Li, Zheyan Qu, Xing Zhang, Wenbo Wang ",
          journal:
            " Proceedings of the 29th Annual International Conference on Mobile Computing andNetworking ",
          date: " 2023/10/2 ",
          year: 2023,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: " https://dl.acm.org/doi/abs/10.1145/3570361.3614064 ",
        },
        {
          title:
            "Multipath Information Announcement Algorithm for Computing Power Network based on Self-Organizing Map Network",
          authors: " Kaixiang Li, Xing Zhang, Wenbo Wang ",
          journal:
            " 2023 IEEE/CIC International Conference on Communications in China (ICCC) ",
          date: " 2023/8/10 ",
          year: 2023,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: " https://ieeexplore.ieee.org/abstract/document/10233367 ",
        },
        {
          title:
            "The Architecture of Computing Power Network Towards Federated Learning: Paradigms and Perspectives",
          authors:
            " Jie Mei, Min Wei, Yukun Sun, Jiacong Li, Gefan Zhou, Xing Zhang ",
          journal:
            " 2023 IEEE International Symposium on Broadband Multimedia Systems and Broadcasting (BMSB) ",
          date: " 2023/6/14 ",
          year: 2023,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: " https://ieeexplore.ieee.org/abstract/document/10211630 ",
        },
        {
          title:
            "A2C Learning for Tasks Segmentation with Cooperative Computing in Edge Computing Networks",
          authors: " Yukun Sun, Xing Zhang ",
          journal: " GLOBECOM 2022-2022 IEEE Global Communications Conference ",
          date: " 2022/12/4 ",
          year: 2022,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: " https://ieeexplore.ieee.org/abstract/document/10000948 ",
        },
        {
          title:
            "Multipath Information Announcement Algorithm for Computing Power Network based on Self-Organizing Map Network",
          authors: " Kaixiang Li, Xing Zhang, Wenbo Wang ",
          journal:
            " 2023 IEEE/CIC International Conference on Communications in China (ICCC) ",
          date: " 2023/8/10 ",
          year: 2023,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: " https://ieeexplore.ieee.org/abstract/document/10233367 ",
        },
        {
          title:
            "The Architecture of Computing Power Network Towards Federated Learning: Paradigms and Perspectives",
          authors:
            " Jie Mei, Min Wei, Yukun Sun, Jiacong Li, Gefan Zhou, Xing Zhang ",
          journal:
            " 2023 IEEE International Symposium on Broadband Multimedia Systems and Broadcasting (BMSB) ",
          date: " 2023/6/14 ",
          year: 2023,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: " https://ieeexplore.ieee.org/abstract/document/10211630 ",
        },
        {
          title:
            "A2C Learning for Tasks Segmentation with Cooperative Computing in Edge Computing Networks",
          authors: " Yukun Sun, Xing Zhang ",
          journal: " GLOBECOM 2022-2022 IEEE Global Communications Conference ",
          date: " 2022/12/4 ",
          year: 2022,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: " https://ieeexplore.ieee.org/abstract/document/10000948 ",
        },

        {
          title:
            "Joint Offloading and Resource Allocation with Partial Information for Multi-user Edge Computing",
          authors:
            "Yang Li, Xing Zhang, Yukun Sun, Junlin Liu, Bo Lei, Wenbo Wang",
          journal: "2022 IEEE Globecom Workshops (GC Wkshps)",
          date: "2022/12/4",
          year: 2022,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: "https://ieeexplore.ieee.org/abstract/document/10008674",
        },
        {
          title:
            "Computing power network: A testbed and applications with edge intelligence",
          authors: "Heling Zhang, Yang Li, Xing Zhang",
          journal:
            "2024 IEEE/CIC International Conference on Communications in China (ICCC)",
          date: "2024/8/7",
          year: 2024,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: "https://ieeexplore.ieee.org/abstract/document/9798112",
        },
        {
          title:
            "Mobility and Traffic Prediction-Based Resource Allocation With Edge Intelligence in Wireless Network",
          authors: "Yukun Sun, Xing Zhang, Yongdong Zhu",
          journal:
            "2021 13th International Conference on Wireless Communications and Signal Processing (WCSP)",
          date: "2021/10/20",
          year: 2021,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: "https://ieeexplore.ieee.org/abstract/document/9613219",
        },
        {
          title:
            "Energy-Efficient Computation Offloading for Mobile Edge Networks: A Graph Theory Approach",
          authors: "Junlin Liu, Xing Zhang, Xin Li, Yongdong Zhu",
          journal:
            "2021 IEEE/CIC International Conference on Communications in China (ICCC)",
          date: "2021/7/28",
          year: 2021,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: "https://ieeexplore.ieee.org/abstract/document/9580228",
        },
        {
          title:
            "Social-aware proactive content caching and sharing in multi-access edge networks",
          authors: "Jizhe Zhou, Xing Zhang, Wenbo Wang",
          journal:
            "IEEE Transactions on Cognitive Communications and Networking",
          date: "2020/9/1",
          year: 2020,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: "https://ieeexplore.ieee.org/abstract/document/9184018",
        },
        {
          title:
            "Intelligent Universal Acceleration Framework and Verification for Edge Cloud Applications",
          authors: "Jie Mei, Bo Lei, Xuliang Wang, Xing Zhang, Qianying Zhao",
          journal:
            "2020 IEEE/CIC International Conference on Communications in China (ICCC Workshops)",
          date: "2020/8/9",
          year: 2020,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: "https://ieeexplore.ieee.org/abstract/document/9209920",
        },
        {
          title: "Multi-UAV Deployment for MEC Enhanced IoT Networks",
          authors:
            "Lei Yang, Haipeng Yao, Xing Zhang, Jingjing Wang, Yunjie Liu",
          journal:
            "2020 IEEE/CIC International Conference on Communications in China (ICCC)",
          date: "2020/8/9",
          year: 2020,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: "https://ieeexplore.ieee.org/abstract/document/9238870",
        },
        {
          title:
            "Edge-assisted adaptive video streaming with deep learning in mobile edge networks",
          authors: "Zheng Chang, Xiang Zhou, Zhi Wang, Hanyang Li, Xing Zhang",
          journal:
            "2019 IEEE Wireless Communications and Networking Conference (WCNC)",
          date: "2019/4/15",
          year: 2019,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: "https://ieeexplore.ieee.org/abstract/document/8885803",
        },
        {
          title:
            "Energy-efficient collaborative task offloading in D2D-assisted mobile edge computing networks",
          authors: "Jizhe Zhou, Xing Zhang, Wenbo Wang, Yan Zhang",
          journal:
            "2019 IEEE Wireless Communications and Networking Conference (WCNC)",
          date: "2019/4/15",
          year: 2019,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: "https://ieeexplore.ieee.org/abstract/document/8885523",
        },
        {
          title:
            "Context-aware caching with social behavior in MEC-enabled wireless cellular networks",
          authors: "Xinwei Liu, Chuanhao Sun, Xing Zhang",
          journal:
            "2019 IEEE International Conference on Pervasive Computing and Communications Workshops (PerCom Workshops)",
          date: "2019/3/11",
          year: 2019,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: "https://ieeexplore.ieee.org/abstract/document/8730879",
        },
        {
          title:
            "Joint resource allocation and user association for heterogeneous services in multi-access edge computing networks",
          authors: "Jizhe Zhou, Xing Zhang, Wenbo Wang",
          journal: "IEEE Access",
          date: "2019/1/11",
          year: 2019,
          tag: "Journal",
          group: "Computing_Power_Network",
          link: "https://ieeexplore.ieee.org/abstract/document/8610162",
        },
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
      this.selectedYear === "all" || pub.year === Number(this.selectedYear); // 将 selectedYear 转为数字进行比较

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

a {
  text-decoration: none;
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
  gap: 5px;
}

.filter-select,
.date-input {
  padding: 10px;
  width:250px;
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
