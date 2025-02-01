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
    margin-right: 0.625rem;
    
  }
  
  .main-content {
    flex: 1;
    margin-right: 0.625rem; /* 10px -> 0.625rem */
    padding: 1.25rem; /* 20px -> 1.25rem */
  }
  </style>
  