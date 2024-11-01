import { createRouter, createWebHistory } from 'vue-router';
import PortfolioView from '../views/PortfolioView.vue';
import AboutView from '../views/AboutView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'portfolio',
    component: PortfolioView,
    meta: {
      allowsPublicAccess: true,
      requiresAuth: false,
    },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      allowsPublicAccess: true,
      requiresAuth: false,
    },
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
    meta: {
      allowsPublicAccess: true,
      requiresAuth: false,
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      allowsPublicAccess: true,
      requiresAuth: false,
    },
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;