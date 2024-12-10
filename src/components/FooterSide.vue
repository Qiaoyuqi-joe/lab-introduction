<template>
  <footer class="footer">
    <hr />
    <p>
      Contact website administrator
      <a href="mailto:Vichare@vichare.net">Vichare@vichare.net</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  background-color:white;
  margin-top: 40px;
  padding-top: 10px;
  border-top: 2px solid #140a66; /* 添加上方的分割线 */
  text-align: left;
}

.footer p {
  font-size: 0.9rem;
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
  width: 20px;
  vertical-align: middle; /* 图标和文字垂直对齐 */
  margin-right: 5px;
}
</style>
