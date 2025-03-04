<template>
    <div class="main-content">
      <h1>科研项目界面</h1>
      <p style="text-indent: 2em;">
        <strong>
          项目一。。。
        </strong>
      </p>
      <p style="text-indent: 2em;">
        <strong>
          项目二。。。
        </strong>
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
    padding: 1.25rem; /* 20px -> 1.25rem */
  }
  
  .main-content h1 {
    font-size: 2.5rem; /* 字号不变，因为已经是 rem 单位 */
    font-weight: bold;
    margin-bottom: 0.9375rem; /* 15px -> 0.9375rem */
  }
  
  .main-content p {
    font-size: 1.3rem; /* 字号使用 rem 单位 */
    line-height: 1.5;
    margin-bottom: 0.9375rem; /* 15px -> 0.9375rem */
  }
  
  .main-content a {
    color: #140a66; /* 紫色链接 */
    text-decoration: none;
  }
  
  .main-content a:hover {
    text-decoration: underline;
  }
  
  .lab-photo {
    text-align: center;
    margin: 1.25rem 0; /* 20px -> 1.25rem */
  }
  
  .lab-photo img {
    max-width: 100%;
    height: 25rem; /* 400px -> 25rem */
    border-radius: 0.5rem; /* 8px -> 0.5rem */
  }
  
  .main-content h2 {
    font-size: 1.7rem; /* 字号使用 rem 单位 */
    font-weight: bold;
    margin-top: 1.875rem; /* 30px -> 1.875rem */
    margin-bottom: 0.625rem; /* 10px -> 0.625rem */
  }
  </style>
  