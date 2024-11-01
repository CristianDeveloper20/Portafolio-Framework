import { createRouter, createWebHistory } from 'vue-router';
import PortfolioView from '../views/PortfolioView.vue';
import AboutView from '../views/AboutView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  {
    path: '/portafolio-framework/home',
    name: 'home',
    component: PortfolioView,
    meta: {
      allowsPublicAccess: true,
      requiresAuth: false,
    },
  },
  {
    path: '/portafolio-framework/about',
    name: 'about',
    component: AboutView,
    meta: {
      allowsPublicAccess: true,
      requiresAuth: false,
    },
  },
  {
    path: '/portafolio-framework/projects',
    name: 'projects',
    component: ProjectsView,
    meta: {
      allowsPublicAccess: true,
      requiresAuth: false,
    },
  },
  {
    path: '/portafolio-framework/contact',
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