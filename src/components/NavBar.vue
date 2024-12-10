<template>
  <header class="navbar">
    <div class="navbar-row">
      <div class="logo-container">
        <router-link to="/">
          <img src="../assets/images/Lablogo2.png" alt="Lab Logo" class="logo" />
        </router-link>
      </div>
      <div class="navbar-top">
        <h1 class="title">无线信号处理与网络（WSPN）实验室</h1>
        <img src="../assets/images/BUPTlogo.png" alt="BUPT Logo" class="university-logo" />
      </div>
    </div>
    <nav class="navbar-bottom">
      <div class="search-container">
        <input type="text" placeholder="Search" class="search-bar" />
        <button class="search-button">Search</button>
      </div>
      <ul>
        <li><router-link to="/">主页</router-link></li>
        <li><router-link to="/research">研究内容</router-link></li>
        <li><router-link to="/people">人员构成</router-link></li>
        <li><router-link to="/publication">论文发表</router-link></li>
        <li><router-link to="/news">新闻资讯</router-link></li>
      </ul>
     
    </nav>
  </header>
</template>

<style scoped>
/* 整体导航栏样式 */
.navbar {
  color: white;
  text-align: center;
  margin: 0; /* 清除整体页面的默认 margin */
  padding: 0; /* 清除默认 padding */
}

.navbar-row {
  display: flex;
  height: 120px;
  align-items: center;
  background-color: #cdcaca;
  justify-content: space-between;
  padding: 0;
}

.navbar-top {
  display: flex;
  background-color: #140a66;
  align-items: center;
  justify-content: space-between;
  height:100%;
  width: 85%;
  margin-left: auto;
  padding:0;
  margin-right:10px;
}

.logo-container {
  width:20%;
  display: flex;
  justify-content: flex-start; /* 确保logo靠左对齐 */
  height:100%;
  padding:0;
}

.logo {
  height: 100%; /* 控制lablogo的大小 */
  width:100%;
  object-fit:cover;
  margin:0px;
  margin-left:10px;
  padding:0px;
}

.university-logo {
  height: 75px;
  margin-left: 10px; /* 与标题之间的距离 */
  margin-right:15px;
}

.title {
  flex: 1;
  font-size: 2.2rem;
  font-weight: bold;
  text-align: center;
  margin:0;
  font-family:  "Heiti SC";
}
.navbar-bottom {
  display: flex;
  height:50px;
  align-items: center;
  justify-content: left;
  background-color: #cdcaca; /* 灰色背景 */
  padding: 0; /* 增加顶部和底部的间距，使导航栏与标题平齐 */
  padding-top: 0px;
  padding-bottom: 10px;
}

.navbar-bottom ul {
  width:95%;
  list-style: none;
  display: flex;
  gap:18.3px;
  margin:0;
  margin-right:10px;
  padding:0;
  color: #140a66; /* 紫色字体 */
}

.navbar-bottom li {
  display: inline;
  font-size:1.2rem;
  margin: 0;
  padding:0;
  font-weight: bold; /* 加粗字体 */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
}

.navbar-bottom a {
  color: #140a66; /* 紫色字体 */
  text-decoration: none;
  background-color: white; /* 添加白色背景 */
  border-radius: 5px; /* 圆角效果 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  padding: 10px 75px; /* 给链接增加内边距 */

}

.navbar-bottom a:hover {
  text-decoration: underline;
}

.search-container {
  display: flex;
  width:20%;
  align-items: center;
  margin:0;
  padding:0;
  margin-left:10px;
  margin-right: 15px;
}

.search-bar {
  padding: 11px;
  margin-right: 7px;
  border: 1px solid #ccc;
  border-radius: 5px;
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