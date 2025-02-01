<template>
  <footer class="footer">
    <hr />
    <p>
      Contact website administrator
      <a href="mailto:hszhang@bupt.edu.cn">hszhang@bupt.edu.cn</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
/* 设置根字体大小为基准，通常 1rem = 16px */
.footer {
  background-color: white;
  margin-top: 2.5rem; /* 40px -> 2.5rem */
  padding-top: 0.625rem; /* 10px -> 0.625rem */
  border-top: 0.125rem solid #140a66; /* 2px -> 0.125rem */
  text-align: left;
}

.footer p {
  font-size: 0.9rem; /* 字体大小不变，因为已经是 rem 单位 */
  color: #666;
}

.footer a {
  color: #140a66;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.footer .wordpress-icon {
  width: 1.25rem; /* 20px -> 1.25rem */
  vertical-align: middle;
  margin-right: 0.3125rem; /* 5px -> 0.3125rem */
}
</style>
