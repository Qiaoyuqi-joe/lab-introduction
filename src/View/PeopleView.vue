<template>
  <div class="people-content">
    <h1>导师</h1>
    <ul class="faculty-list">
      <li><router-link :to="{ name: 'PersonDetail', params: { id: 'wangwenbo' } }">王文博 (Wang, WenBo)</router-link></li>
      <li><router-link :to="{ name: 'PersonDetail', params: { id: 'zhangxing' } }">张兴 (Zhang, Xing)</router-link></li>
      <li><router-link :to="{ name: 'PersonDetail', params: { id: 'zhangjiaxin' } }">张佳鑫 (Zhang, Jiaxin)</router-link></li>
      <li><router-link :to="{ name: 'PersonDetail', params: { id: 'quanqingyi' } }">全庆一 (Quan, Qingyi)</router-link></li>
    </ul>

    <h2>博士生</h2>
    <ul class="phd-student-list">
      <li><router-link :to="{ name: 'PersonDetail', params: { id: 'liyang' } }">李泱 (Li, Yang)</router-link></li>
    </ul>

    <h2>硕士生</h2>
    <ul class="master-student-list">
      <li><router-link :to="{ name: 'PersonDetail', params: { id: 'gexinlei' } }">葛新蕾 (Ge, Xinlei)</router-link></li>
      <li><router-link :to="{ name: 'PersonDetail', params: { id: 'zhaoyunji' } }">赵云霁 (Zhao, Yunji)</router-link></li>
      <li><router-link :to="{ name: 'PersonDetail', params: { id: 'chengzetao' } }">成泽涛 (Cheng, Zetao)</router-link></li>
      <li><router-link :to="{ name: 'PersonDetail', params: { id: 'sunboquan' } }">孙博泉 (Sun, Boquan)</router-link></li>
      <li><router-link :to="{ name: 'PersonDetail', params: { id: 'zhangheling' } }">张赫灵 (Zhang, Heling)</router-link></li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "PeopleView",
};
</script>

<style scoped>
.people-content {
  padding: 20px;
}

.people-content h1,
.people-content h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 20px;
}

.people-content ul {
  list-style-type: none;
  padding-left: 0;
}

.people-content li {
  margin-bottom: 10px;
  font-size: 1rem;
}

.people-content a {
  color: #140a66; /* 紫色字体 */
  text-decoration: none;
}

.people-content a:hover {
  text-decoration: underline;
}
</style>
