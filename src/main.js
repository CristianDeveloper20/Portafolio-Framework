import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css'


// Importa Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core' /* import the fontawesome core */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' /* import font awesome icon component */
import { fab } from '@fortawesome/free-brands-svg-icons'


// Añade los iconos a la librería
library.add(fab)


const app = createApp(App);


// Registra el componente font-awesome-icon
app.component('font-awesome-icon', FontAwesomeIcon);


app.use(router);


app.mount('#app');