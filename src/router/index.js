import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CharacterDetailView from '../views/CharacterDetailView.vue';

const routes = [
  {
    path: '/',
    component: HomeView,
    meta: { keepAlive: true }, // Сохраняем состояние для главной страницы
  },
  {
    path: '/character/:id',
    component: CharacterDetailView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
