<template>
  <header class="navbar">
    <div class="navbar-top">
      <router-link to="/">
        <img src="../assets/images/Lablogo.jpg" alt="Lab Logo" class="logo" />
      </router-link>
      
      <h1 class="title">Network Integration for Ubiquitous Linkage and Broadband</h1>
      <img src="../assets/images/BUPTlogo.png" alt="BUPT Logo" class="university-logo" />
    </div>
    <nav class="navbar-bottom">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/research">Research</router-link></li>
        <li><router-link to="/people">People</router-link></li>
        <li><router-link to="/publication">Publication</router-link></li>
        <li><router-link to="/news">News</router-link></li>
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
  background-color: #03157de2; /* 紫色背景 */
  color: white;
  text-align: center;
}

.navbar-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.logo {
  height: 75px;
  margin-left: 10px;
}

.university-logo {
  height: 75px;
  margin-right: 10px;
}

.title {
  flex: 1;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
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
  font-size:1rem;
  padding: 0;
  color: #03157de2; /* 紫色字体 */
}

.navbar-bottom li {
  display: inline;
  margin: 0 10px;
  font-weight: bold; /* 加粗字体 */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
}

.navbar-bottom a {
  color: #03157de2; /* 紫色字体 */
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
  background-color: #03157de2;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

.search-button:hover {
  background-color: #03157de2;
}
</style>
