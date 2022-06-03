import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './views/Home'
import Usuario from './views/Usuario'
import Detalhes from './views/Detalhes'

const routes = [
  { path: '/', component: Home},
  { path: '/usuario', name: 'usuario', component: Usuario},
  { path: '/detalhes', name: 'detalhes', component: Detalhes},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
    .use(router)
    .mount('#app')
