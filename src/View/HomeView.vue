<template>
  <div class="main-content">
    <h1>Welcome</h1>
    <p>
      The rapid development of wireless communication technologies has changed
      people’s lives in many ways. However, to further enhance the network
      capacity and operation efficiency, the future wireless networks, e.g., 5G
      networks, still face a lot of technical challenges, which leave many open
      problems for the researchers.
    </p>
    <p>
      The Network Integration for Ubiquitous Linkage And Broadband lab (NIULAB)
      is dedicated to the research in a broad field of wireless communications
      and networks, including network traffic control and performance analysis,
      resource allocation and cross-layer design, cooperative communications,
      green communications and networks, and future network infrastructure
      design.
    </p>
    <p>
      <strong
        >For the students who are interested in joining the lab, please refer to
        <a href="#">Q&A</a> for more information.</strong
      >
    </p>
    <div class="lab-photo">
      <img src="../assets/images/GroupPhoto.jpg" alt="Lab Group Photo" />
    </div>
    <h2>Contact Info</h2>
    <p>FIT Building 3-326~3-329 & Rohm Building 8-205</p>
    <p>Tsinghua University, Beijing, 100084, China</p>
    <p>Secretary: Xu Ping</p>
    <p>Phone No.: +86-10-62773634</p>
    <p>
      Email:
      <a href="mailto:xuping811@tsinghua.edu.cn">xuping811@tsinghua.edu.cn</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.main-content {
  padding: 20px;
}

.main-content h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.main-content p {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 15px;
}

.main-content a {
  color: #03157de2; /* 紫色链接 */
  text-decoration: none;
}

.main-content a:hover {
  text-decoration: underline;
}

.lab-photo {
  text-align: center;
  margin: 20px 0;
}

.lab-photo img {
  max-width: 100%;
  height: 400px;
  border-radius: 8px; /* 让图片有一点圆角 */
}

.main-content h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 10px;
}
</style>
