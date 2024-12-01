<template>
  <header class="navbar">
    <div class="navbar-top">
      <router-link to="/">
        <img src="../assets/images/Lablogo1.png" alt="Lab Logo" class="logo" />
      </router-link>
      
      <h1 class="title">无线信号处理与网络（WSPN）实验室</h1>
      <img src="../assets/images/BUPTlogo.png" alt="BUPT Logo" class="university-logo" />
    </div>
    <nav class="navbar-bottom">
      <ul>
        <li><router-link to="/">主页</router-link></li>
        <li><router-link to="/research">研究内容</router-link></li>
        <li><router-link to="/people">人员构成</router-link></li>
        <li><router-link to="/publication">期刊发表</router-link></li>
        <li><router-link to="/news">新闻资讯</router-link></li>
      </ul>
      <div class="search-container">
        <input type="text" placeholder="Search" class="search-bar" />
        <button class="search-button">Search</button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  background-color: #140a66; /* 紫色背景 */
  color: white;
  text-align: center;
}

.navbar-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
}

.logo {
  height: 130px;
  margin-left: 20px;
  margin-top: 10px;
}

.university-logo {
  height: 75px;
  margin-right: 10px;
}

.title {
  flex: 1;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  font-family: "Microsoft YaHei", STXihei, sans-serif;
}


.navbar-bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3; /* 灰色背景 */
  padding: 5px 10px; /* 增加顶部和底部的间距，使导航栏与标题平齐 */
}

.navbar-bottom ul {
  list-style: none;
  display: flex;
  gap: 160px;

  padding: 0;
  color: #140a66; /* 紫色字体 */
}

.navbar-bottom li {
  display: inline;
  font-size:1.2rem;
  margin: 0 10px;
  font-weight: bold; /* 加粗字体 */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
}

.navbar-bottom a {
  color: #140a66; /* 紫色字体 */
  text-decoration: none;
}

.navbar-bottom a:hover {
  text-decoration: underline;
}

.search-container {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;
}

.search-bar {
  padding: 5px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-button {
  padding: 5px 10px;
  border: none;
  background-color: #140a66;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

.search-button:hover {
  background-color: #140a66;
}
</style>
