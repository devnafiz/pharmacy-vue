import { createApp } from 'vue'
import mitt from 'mitt'
import './style.css'
//import './assets/css/pharmacy.css'
import 'ayoflex/dist/ayoflex.min.css';
import './assets/css/example.css'
import App from './App.vue'

let eventBus =mitt();

 const app = createApp(App)
 app.config.globalProperties.$eventBus = eventBus;
app.mount('#app')
