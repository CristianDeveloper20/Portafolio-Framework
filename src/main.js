import { createApp } from 'vue';
import App from './App.vue';
import router from './route'; // Asegúrate de que el archivo y la ruta existen
import './style.css';

// Configuración de Font Awesome (si se usa en el proyecto)
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
