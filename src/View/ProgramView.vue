<template>
  <div class="main-content">
    <div class="project-list">
      <div 
        class="project-card"
        v-for="(project, index) in projects" 
        :key="index"
      >
        <div class="project-header">
          <span class="icon icon-purple"></span>
          <strong>{{ project.title }}</strong>
        </div>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      projects: [
        { title: "北京市重点项目", description: "北京沙河高教园开放网络创新平台" },
        { title: "国防173重点项目", description: "复杂异构XXX优化研究" },
        { title: "中国电信-北邮联合创新中心", description: "6G算网融合技术研究" },
        { title: "国家自然科学基金项目", description: "基于业务和用户认知的蜂窝无线网络能效优化与资源配置技术研究" },
        { title: "国家自然科学基金项目", description: "基于用户行为的无线边缘网络资源高效利用理论与方法" },
        { title: "国家自然科学基金重点项目", description: "基于大数据的复杂异构网络智能无线接入理论与技术研究" },
        { title: "国家自然科学基金重点项目", description: "认知无线网络中系统行为模型及基于认知行为的资源配置技术研究" },
        { title: "国家重点研发项目", description: "业务与环境感知的智能接入管控与按需服务" },
        { title: "国家重点研发项目", description: "融合组网仿真评估测试与试验平台研发" },
        { title: "国家973项目", description: "用户群体行为建模与高能效服务方法" }
      ]
    };
  }
};
</script>

<style scoped>
.main-content {
  padding: 2rem;
  background-color: #f9f9f9;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  color: #4a3f98;
  margin-bottom: 2rem;
}

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background-color: #fff;
  border-left: 5px solid #4a3f98;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.project-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.project-header strong {
  font-size: 1.2rem;
  color: #4a3f98;
}

.project-card p {
  color: #000000;
}

.icon-purple {
  font-size: 1.5rem;
  margin-right: 0.5rem;
  color: #4a3f98;
}
</style>
