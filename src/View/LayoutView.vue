<template>
    <div id="layout">
      <Navbar />
      <div class="container">
        <Sidebar />
        <div class="main-content">
          <slot></slot>
        </div>
      </div>
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import Navbar from '../components/NavBar.vue';
  import Sidebar from '../components/SideBar.vue';
  import FooterComponent from '../components/FooterSide.vue';
  
  export default {
    name: 'LayoutView',
    components: {
      Navbar,
      Sidebar,
      FooterComponent,
    },
  };
  </script>
  
  <style scoped>
  #layout {
    background-color: #cdcaca; 
    font-family: 'Arial', sans-serif;
  }
  
  .container {
    display: flex;
    background-color:white;
    margin-right:10px;
    
  }
  
  .main-content {
    flex: 1;
    margin-right:10px;
    padding: 20px; /* 为主要内容部分增加一些填充 */
  }
  </style>
  