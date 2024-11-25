<template>
  <div class="people-content">
    <h1>Faculty</h1>
    <ul>
      <li><a href="#">牛志升 (Niu, ZhiSheng)</a></li>
      <li><a href="#">周盛 (Zhou, Sheng)</a></li>
    </ul>

    <h2>Post Doc.</h2>
    <ul>
      <li><a href="#">孙宇骞 (Sun, Yuxuan)</a></li>
      <li><a href="#">南兆君 (Nan, Zhaojun)</a></li>
    </ul>

    <h2>Students</h2>
    <ul>
      <li>
        <a href="#">孙经舟 (Sun, Jingzhou)</a>, Ph.D. student, joined the group
        in 2018
      </li>
      <li>
        <a href="#">黄秀峰 (Huang, Xiufeng)</a>, Ph.D. student, joined the group
        in 2018
      </li>
      <li>
        <a href="#">曾启程 (Zeng, Qicheng)</a>, Ph.D. student, joined the group
        in 2019
      </li>
      <li>
        <a href="#">王乐涵 (Wang, Lehan)</a>, Ph.D. student, joined the group in
        2019
      </li>
      <li>
        <a href="#">毛瑞浩 (Mao, Ruiqing)</a>, Ph.D. student, joined the group
        in 2020
      </li>
      <li>
        <a href="#">张博航 (Zhang, Bohang)</a>, M.S. student, joined the group
        in 2020
      </li>
      <li>
        <a href="#">贾宇宽 (Jia, Yukuan)</a>, Ph.D. student, joined the group in
        2020
      </li>
      <li>
        <a href="#">吴泓伯 (Wu, Hongbo)</a>, M.S. student, joined the group in
        2020
      </li>
      <li>
        <a href="#">谌潭 (Chen, Tan)</a>, Ph.D. student, joined the group in
        2021
      </li>
      <li>
        <a href="#">大卫明 (Minh Thao Chan)</a>, Ph.D. student, joined the group
        in 2021
      </li>
      <li>
        <a href="#">陈思唯 (Chen, Siwei)</a>, M.S. student, joined the group in
        2021
      </li>
      <li>
        <a href="#">叙耀丹 (Xu, Yaodan)</a>, Ph.D. student, joined the group in
        2021
      </li>
      <li>
        <a href="#">谢博文 (Xie, Bowen)</a>, Ph.D. student, joined the group in
        2022
      </li>
      <li>
        <a href="#">范保康 (Fan, Baokang)</a>, Ph.D. student, joined the group
        in 2022
      </li>
      <li>
        <a href="#">严劲涛 (Yan, Jintao)</a>, Ph.D. student, joined the group in
        2022
      </li>
      <li>
        <a href="#">曾任校 (Zeng, Renxiao)</a>, M.S. student, joined the group
        in 2022
      </li>
    </ul>

    <h2>Undergraduate Students</h2>
    <p><a href="#">参与与毕业设计人员</a></p>
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
  color: #03157de2; /* 紫色字体 */
  text-decoration: none;
}

.people-content a:hover {
  text-decoration: underline;
}
</style>
