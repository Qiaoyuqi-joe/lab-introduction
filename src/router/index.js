import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../View/HomeView.vue';
import ResearchView from '../View/ResearchView.vue';
import PeopleView from '../View/PeopleView.vue';
import PublicationView from '../View/PublicationView.vue';
import NewsView from '../View/NewsView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/research', name: 'Research', component: ResearchView },
  { path: '/people', name: 'People', component: PeopleView },
  { path: '/publication', name: 'Publication', component: PublicationView },
  { path: '/news', name: 'News', component: NewsView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
