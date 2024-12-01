<template>
   
   <div class="research-content">
    <!-- el-collapse 控制折叠的组件 -->
    <el-collapse v-model="activeNames">
      <!-- el-collapse-item 每一个折叠项 -->
      <el-collapse-item title="研究方向1：边缘智能与算力网络" name="1">
        <h1>研究方向1：边缘智能与算力网络 </h1>
        <div style="height: 20px;"></div>
    <p style="text-indent: 2em;">“计算、网络、边缘、智能”深度融合的网络形态，满足网络和计算融合演进的需求，实现泛在连接+算力架构中网络的全局优化，算力的灵活调度，业务的合理分布    
    </p>
    <ul>
      <li>算力网络服务迁移与任务规划</li>
      <li>端侧算力网络及其算力操作系统</li>
      <li>轻量化弹性算力网络</li>
    </ul>
    <div class="image-section">
      <img src="../assets/images/Research1.png" alt="6G Smart Society Diagram" />
    </div>
    <div class="image-section">
      <img src="../assets/images/Research1.2.png" alt="6G Smart Society Diagram" />
    </div>
    <p style="text-indent: 2em;">端侧算力网络着眼于泛在终端的算力利用率和计算效率的提升，基于蜂窝网络、无线、卫星等网络基础设施，解决在分散的、非一致性的设备上的分布式计算、隐私性存储等难题，为用户提供更加智能化的、个性化的应用服务体验</p>
    <p style="text-indent: 2em;"><strong>助推算力网络实现“网络无所不达，算力无所不在，智能无所不及”的愿景 </strong></p>
    <div class="image-section">
      <img src="../assets/images/Research1.3.png" alt="6G Smart Society Diagram" />
    </div>

    <div class="image-section">
      <img src="../assets/images/Research1.4.png" alt="6G Smart Society Diagram" />
    </div>
    <p style="text-indent: 2em;"><strong>面向通算一体的算力网络研究与验证平台 </strong></p>
    <div class="image-section">
      <img src="../assets/images/Research1.5.png" alt="6G Smart Society Diagram" />
    </div>
    <p style="text-indent: 2em;"><strong>落地实践：北京沙河高教园算力网络科教共享平台</strong></p>
    <div class="video-section">
  <video controls>
    <source src="../assets/video/北京沙河落地视频.mp4" type="video/mp4" />
    您的浏览器不支持视频播放。
  </video>
</div>
    <p  style="text-indent: 2em;">研究成果应用于北京沙河高教园算力网络科教共享平台，助力通算一体网络技术服务于科研资源共享和产教融合应用 
    </p>
  </el-collapse-item>
    
  <el-collapse-item title="研究方向2：星地融合信息网络研究" name="2">
    <div style="height: 40px;"></div>
    <h1>研究方向2：星地融合信息网络研究</h1>
    <div style="height: 20px;"></div>
    <p style="text-indent: 2em;">研究目标：通算一体、算控分离、智能内生的星地融合信息网络体系架构和柔性可重构关键技术
    </p>
    <ul>
      <li>星地融合信息网络多级边缘智能 </li>
      <li>密集波束管理与跳波束系统    </li>
      <li>低轨卫星互联网路由技术研究    </li>
    </ul>
    <div class="image-section">
      <img src="../assets/images/Research2.1.png" alt="6G Smart Society Diagram" />
    </div>
    <div style="height: 10px;"></div>
    <div class="image-section">
      <img src="../assets/images/Research2.2.png" alt="6G Smart Society Diagram" />
    </div>
    <p style="text-indent: 2em;">“星地融合边缘端侧算力网络” 将用于处理各种与卫星、边缘计算和端侧计算相关的任务和数据，同时保证数据的安全性和实时性</p>
    <p style="text-indent: 2em;"><strong>在许多领域，如地球观测、物联网、自动化控制等方面都有广泛的应用潜力。        </strong></p>
    <div class="image-section">
      <img src="../assets/images/Research2.3.png" alt="6G Smart Society Diagram" />
    </div>

    <p style="text-indent: 2em;"><strong>搭建了完善的空天地一体融合仿真平台，开展了链路级和系统级别的仿真技术验证，有效支撑了系统方案的优化和迭代
    </strong></p>
    <div class="video-section">
  <video controls>
    <source src="../assets/video/卫星融合平台介绍.mp4" type="video/mp4" />
    您的浏览器不支持视频播放。
  </video>
</div>
</el-collapse-item>

<el-collapse-item title="研究方向3：基于云边端架构打造垂直通信原理领域大模型" name="3">
    <div style="height: 40px;"></div>
    <h1>研究方向3：基于云边端架构打造垂直通信原理领域大模型        </h1>
    <div style="height: 20px;"></div>
    <p style="text-indent: 2em;">提出了一个分布式Agent系统，通过移动设备和边缘服务器大模型之间的协作，<strong>在减少网络带宽消耗的同时，提高边缘侧大模型完成复杂任务的能力。</strong> </p>
    <p style="text-indent: 2em;">引入了一种新颖的模型缓存算法，以提高大模型Agent在上下文中的利用率，减少协作中移动边缘LLM智能体的网络成本。</p>

    <div class="image-section">
      <img src="../assets/images/Research3.1.png" alt="6G Smart Society Diagram" />
    </div>
    <p style="text-indent: 2em;"><strong>智道GPT平台</strong></p>

    <div class="image-section">
      <img src="../assets/images/Research3.2.png" alt="6G Smart Society Diagram" />
    </div>

    <ul>
      <li><strong>云侧：</strong>星火/通义等大模型
      </li>
      <li><strong>端侧：</strong>基于大模型微调，结合提示词优化技术、基于知识图谱的信息检索技术，显著提高闭源大模型在信通学科领域的回复质量。
      </li>
      <li><strong>边侧：</strong>“智道”—信通学科专属问答GPT。提供实时问答、拓展阅读、角色扮演、模拟教学等。
      </li>
    </ul>
     <div class="image-section">
      <img src="../assets/images/Research3.3.png" alt="6G Smart Society Diagram" />
    </div>

    <p style="text-indent: 2em;"><strong>目前，“智道”系统已被成功部署于北京沙河高教园区的开放网络创新平台，并已进入测试使用阶段。
    </strong></p>
    
    <p style="text-indent: 2em;"><strong>“智道”以通信原理课堂作为试点，已为100余名本科生及30余名研究生提供了教学服务并获得了积极的反馈。
    </strong></p>
    <div class="video-section">
  <video controls>
    <source src="../assets/video/智道平台介绍.mp4" type="video/mp4" />
    您的浏览器不支持视频播放。
  </video>
</div>

</el-collapse-item>
</el-collapse>
  </div>

</template>

<script>


export default {
name: 'ResearchView',

};
</script>

<style scoped>
.research-content {
padding: 20px;
}

.research-content h1 {
font-size: 2rem;
font-weight: bold;
margin-bottom: 15px;
background: linear-gradient(to right,white, #570303ee, white); /* 从两边渐变到白色 */
color: white; /* 白色文字 */
padding: 10px 20px; /* 内边距 */
border-radius: 10px; /* 圆角 */
text-align: center; /* 文字居中 */
}


.research-content h2 {
font-size: 1.5rem;
font-weight: bold;
margin-top: 30px;
margin-bottom: 15px;
}

.research-content ul {
margin-bottom: 20px;
padding-left: 20px;
}

.research-content ul li {
color: #140a66;
font-size: 1.4rem;
line-height: 1.5;
margin-bottom: 10px;
}
.research-content p {
font-size: 1.4rem;
line-height: 1.5;
margin-bottom: 15px;
}

.image-section {
text-align: center;
margin: 20px 0;
}

.image-section img {
max-width: 100%;
height: auto;
border-radius: 8px;
}

.video-section {
text-align: center;
margin: 20px 0;
}


.video-section video {
max-width: 100%; /* 视频宽度自适应 */
height: auto;
border-radius: 8px; /* 添加圆角，可选 */
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 添加阴影，可选 */
}
</style>