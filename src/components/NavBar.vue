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
  margin: 0;
  padding: 0;
}

.navbar-row {
  display: flex;
  height: 7.5rem; /* 120px -> 7.5rem */
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
  height: 100%;
  width: 85%;
  margin-left: auto;
  padding: 0;
  margin-right: 0.625rem; /* 10px -> 0.625rem */
}

.logo-container {
  width: 20%;
  display: flex;
  justify-content: flex-start;
  height: 100%;
  padding: 0;
}

.logo {
  height: 100%;
  width: 100%;
  object-fit: cover;
  margin: 0;
  margin-left: 0.625rem; /* 10px -> 0.625rem */
  padding: 0;
}

.university-logo {
  height: 4.6875rem; /* 75px -> 4.6875rem */
  margin-left: 0.625rem; /* 10px -> 0.625rem */
  margin-right: 0.9375rem; /* 15px -> 0.9375rem */
}

.title {
  flex: 1;
  font-size: 2.2rem; /* 字号不变，因为已经是 rem 单位 */
  font-weight: bold;
  text-align: center;
  margin: 0;
  font-family: "Heiti SC";
}

.navbar-bottom {
  display: flex;
  height: 3.125rem; /* 50px -> 3.125rem */
  align-items: center;
  justify-content: left;
  background-color: #cdcaca;
  padding: 0;
  padding-top: 0;
  padding-bottom: 0.625rem; /* 10px -> 0.625rem */
}

.navbar-bottom ul {
  width: 95%;
  list-style: none;
  display: flex;
  gap: 2.04375rem; /* 18.3px -> 1.14375rem */
  margin-left: 0.4rem;
  margin-right: 0.625rem; /* 10px -> 0.625rem */
  padding: 0;
  color: #140a66;
}

.navbar-bottom li {
  display: inline;
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
  font-weight: bold;
  text-shadow: 0.0625rem 0.0625rem 0.125rem rgba(0, 0, 0, 0.2); /* 1px -> 0.0625rem, 2px -> 0.125rem */
}

.navbar-bottom a {
  color: #140a66;
  text-decoration: none;
  background-color: white;
  border-radius: 0.3125rem; /* 5px -> 0.3125rem */
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1); /* 2px -> 0.125rem, 4px -> 0.25rem */
  padding: 0.625rem 4.6875rem; /* 10px -> 0.625rem, 75px -> 4.6875rem */
}

.navbar-bottom a:hover {
  text-decoration: underline;
}

.search-container {
  display: flex;
  width: 20%; /* 20% 宽度 */
  align-items: center;
  margin: 0;
  padding: 0;
  margin-left: 0.625rem;
  margin-right: 0.9375rem;
}

.search-bar {
  width: 100%; /* 设置宽度为100%，让它适应父容器 */
  padding: 0.4rem; /* 保持原有的内边距 */
  margin-right: 0.4375rem; /* 保持原有的右边距 */
  border: 1px solid #ccc;
  border-radius: 0.3125rem;
}

.search-button {
  padding: 0.4rem 0.625rem;
  border: none;
  background-color: #140a66;
  color: white;
  cursor: pointer;
  border-radius: 0.25rem;
}


/* 媒体查询 - 小屏幕调整 */
@media (max-width: 600px) {
  .search-container {
    display: none; /* 隐藏搜索栏 */
  }
  .navbar-row {
  display: flex;
  height: 8rem; /* 120px -> 7.5rem */
  align-items: center;
  background-color: #cdcaca;
  justify-content: space-between;
  padding: 0;
}
  .logo-container {
  width: 21%;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100%;
  padding: 0;
  background-color: #ffffff;
}

.logo {
  height: 60%;
  width: 90%;
  object-fit: cover;
  margin: 0;
  margin-left: 0.625rem; /* 10px -> 0.625rem */
  padding: 0;
}

.navbar-bottom ul {
  width: 95%;
  list-style: none;
  display: flex;
  gap: 0.8375rem; /* 18.3px -> 1.14375rem */
  margin: 0;
  margin-left: 3rem; /* 10px -> 0.625rem */
  padding: 0;
  color: #140a66;
}

.navbar-bottom li {
  display: inline;
  font-size: 1.2rem;
  margin: 0;
  padding: 0;
  font-weight: bold;
  text-shadow: 0.0625rem 0.0625rem 0.125rem rgba(0, 0, 0, 0.2); /* 1px -> 0.0625rem, 2px -> 0.125rem */
}

.navbar-bottom a {
  color: #140a66;
  text-decoration: none;
  background-color: white;
  border-radius: 0.3125rem; /* 5px -> 0.3125rem */
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1); /* 2px -> 0.125rem, 4px -> 0.25rem */
  padding: 0.35rem 1.6875rem; /* 10px -> 0.625rem, 75px -> 4.6875rem */
}

.navbar-top {
  display: flex;
  background-color: #140a66;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 78%;
  margin-left: auto;
  padding: 0;
  margin-right: 0.625rem; /* 10px -> 0.625rem */
}
  .navbar-top .title {
    font-size: 1.5rem; /* 调整标题字体大小 */
  }

  .university-logo {
    height: 3.125rem; /* 调整大学logo大小 */
  }

}
</style>
