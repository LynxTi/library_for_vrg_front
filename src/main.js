import { createApp } from 'vue'
import App from './App.vue'
import i18n from "@/118n.bootstrap";
import router from "@/router";
import store from "@/store";
import 'vue-select/dist/vue-select.css';
import EventBus from "@/plugins/eventBus";



const app = createApp(App)

app.use(i18n)
app.use(store)
app.use(EventBus);
app.use(router)
app.mount('#app')
