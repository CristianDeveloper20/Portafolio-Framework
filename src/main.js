// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';

// Configuración de Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Importar fa-envelope

// Agregar íconos a la biblioteca
library.add(fab, faEnvelope);

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
