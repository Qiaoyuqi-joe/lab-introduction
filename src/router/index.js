import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../View/HomeView.vue';
import ResearchView from '../View/ResearchView.vue';
import ResearchDetail from '../View/ResearchDetail.vue';
import PeopleView from '../View/PeopleView.vue';
import PeopleDetailView from '../View/PeopleDetailView.vue';  // 这个页面显示个人简历
import PublicationView from '../View/PublicationView.vue';
import NewsView from '../View/NewsView.vue';
import NewsDetailView from '../View/NewsDetailView.vue';
import ProgramView from '../View/ProgramView.vue';
const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/research', name: 'Research', component: ResearchView },
  { path: '/research/:id',name: 'ResearchDetail', component:ResearchDetail,props: true},
  { path: '/people', name: 'People', component: PeopleView },
  { path: '/person/:id',name: 'PersonDetail', component: PeopleDetailView,props: true},
  { path: '/publication', name: 'Publication', component: PublicationView },
  { path: '/news', name: 'News', component: NewsView },
  { path: '/news/:id', name: 'NewsDetail', component: NewsDetailView, props: true },  // 动态路由
  { path: '/program', name: 'Program', component: ProgramView },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
