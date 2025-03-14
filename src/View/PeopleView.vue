<template>
  <div class="people-content">
    <h1>导师</h1>
    <div class="faculty-list">
      <router-link
        v-for="faculty in facultyList"
        :key="faculty.id"
        :to="{ name: 'PersonDetail', params: { id: faculty.id } }"
        class="list-item"
      >
        {{ faculty.name }}
      </router-link>
    </div>

    <h2>博士后</h2>
    <h2>在读学生-博士生</h2>
    <div class="timeline">
      <div class="timeline-item" v-for="phd in phdStudents" :key="phd.id">
        <div class="timeline-item-date">{{ phd.year }}</div>
        <router-link :to="{ name: 'PersonDetail', params: { id: phd.id } }">
          {{ phd.name }}
        </router-link>
      </div>
    </div>

    <h2>在读学生-硕士生</h2>
    <div class="timeline">
      <div class="year-group" v-for="(group, year) in groupedMasterStudents" :key="year">
        <div class="timeline-item-date">{{ year }}</div>
        <div class="student-list">
          <router-link
            v-for="student in group"
            :key="student.id"
            :to="{ name: 'PersonDetail', params: { id: student.id } }"
            class="list-item"
          >
            {{ student.name }}
          </router-link>
        </div>
      </div>
    </div>

    <h2>毕业学生-博士生</h2>
    <h2>毕业学生-硕士生</h2>
  </div>
</template>

<script>
export default {
  name: "PeopleView",
  data() {
    return {
      facultyList: [
        { id: "zhangxing", name: "张兴 (Zhang, Xing)" },
        { id: "wangwenbo", name: "王文博 (Wang, WenBo)" },
        { id: "zhangjiaxin", name: "张佳鑫 (Zhang, Jiaxin)" },
        { id: "quanqingyi", name: "全庆一 (Quan, Qingyi)" },
      ],
      phdStudents: [{ id: "liyang", name: "李泱 (Li, Yang)" }],
      masterStudents: [
        { id: "gexinlei", name: "葛新蕾 (Ge, Xinlei)", year: 2023 },
        { id: "zhaoyunji", name: "赵云霁 (Zhao, Yunji)", year: 2023 },
        { id: "chengzetao", name: "成泽涛 (Cheng, Zetao)", year: 2024 },
        { id: "sunboquan", name: "孙博泉 (Sun, Boquan)", year: 2024 },
        { id: "zhangheling", name: "张赫灵 (Zhang, Heling)", year: 2024 },
        { id: "yuzitong", name: "于子童 (Yu, Zitong)", year: 2024 },
        { id: "qiaoyuqi", name: "乔煜琪 (Qiao, Yuqi)", year: 2025 },
      ],
    };
  },
  computed: {
    groupedMasterStudents() {
      return this.masterStudents.reduce((acc, student) => {
        const year = student.year || "未知年份";
        if (!acc[year]) acc[year] = [];
        acc[year].push(student);
        return acc;
      }, {});
    },
  },
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
  margin-top: 2.25rem;
  padding-bottom: 0.3rem;
  display: inline-block;
  
}

.faculty-list
 {
  margin-bottom: 2rem;
  padding-left:1.5rem;
}

.list-item {
  display: block;
  margin: 1rem 0;
}

.timeline {
  position: relative;
  width: 100%;
  padding-left: 1.5rem;
}

.year-group {
  margin: 1.5rem 0;
  position: relative;
}

.student-list {
  display: block;
}

.timeline-item {
  margin: 1rem 0;
  position: relative;
}

.timeline-item-date {
  font-size: 0.875rem;
  color: #4a3f98;
  position: absolute;
  top: -12px;
  left: -2rem;
  background-color: #fff;
  padding: 3 5px;
  border-radius: 5px;
}

.people-content a {
  color: #000000;
  text-decoration: none;
}

.people-content a:hover {
  text-decoration: underline;
}
</style>