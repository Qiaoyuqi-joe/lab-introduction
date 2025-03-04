<template>
  <div class="people-content">
    <h1>导师</h1>
    <ul class="faculty-list">
      <li><router-link :to="{ name: 'PersonDetail', params: { id: 'zhangxing' } }">张兴 (Zhang, Xing)</router-link></li>
      <li><router-link :to="{ name: 'PersonDetail', params: { id: 'wangwenbo' } }">王文博 (Wang, WenBo)</router-link></li>
      <li><router-link :to="{ name: 'PersonDetail', params: { id: 'zhangjiaxin' } }">张佳鑫 (Zhang, Jiaxin)</router-link></li>
      <li><router-link :to="{ name: 'PersonDetail', params: { id: 'quanqingyi' } }">全庆一 (Quan, Qingyi)</router-link></li>
    </ul>
    <h2>博士后</h2>
    <h2>在读学生-博士生</h2>
    <ul class="phd-student-list">
      <li><router-link :to="{ name: 'PersonDetail', params: { id: 'liyang' } }">李泱 (Li, Yang)</router-link></li>
    </ul>

    <h2>在读学生-硕士生</h2>
    <ul class="master-student-list">
      <li><router-link :to="{ name: 'PersonDetail', params: { id: 'gexinlei' } }">葛新蕾 (Ge, Xinlei) 入学年份-2023</router-link></li>
      <li><router-link :to="{ name: 'PersonDetail', params: { id: 'zhaoyunji' } }">赵云霁 (Zhao, Yunji) 入学年份-2023</router-link></li>
      <li><router-link :to="{ name: 'PersonDetail', params: { id: 'chengzetao' } }">成泽涛 (Cheng, Zetao) 入学年份-2024</router-link></li>
      <li><router-link :to="{ name: 'PersonDetail', params: { id: 'sunboquan' } }">孙博泉 (Sun, Boquan) 入学年份-2024</router-link></li>
      <li><router-link :to="{ name: 'PersonDetail', params: { id: 'zhangheling' } }">张赫灵 (Zhang, Heling) 入学年份-2024</router-link></li>
      <li><router-link :to="{ name: 'PersonDetail', params: { id: 'yuzitong' } }">于子童 (Yu, Zitong) 入学年份-2024</router-link></li>
      <li><router-link :to="{ name: 'PersonDetail', params: { id: 'qiaoyuqi' } }">乔煜琪 (Qiao, Yuqi) 入学年份-2025</router-link></li>
    </ul>

    <h2>毕业学生-博士生</h2>
    <h2>毕业学生-硕士生</h2>
  </div>
</template>



<script>
export default {
  name: "PeopleView",
};
</script>
<style scoped>
.people-content {
  padding: 1.25rem;
}

.people-content h1,
.people-content h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1.25rem;
}

.people-content ul {
  list-style-type: none;
  padding-left: 0;
}

.people-content li {
  margin-bottom: 0.625rem;
  font-size: 1rem;
}

.people-content a {
  color: #140a66;
  text-decoration: none;
}

.people-content a:hover {
  text-decoration: underline;
}
</style>
