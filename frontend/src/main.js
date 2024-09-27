import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Navbar from '@/components/Navbar.vue'
import BlogPost from '@/components/BlogPost.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('Navbar', Navbar)
app.component('blog-post', BlogPost)

app.mount('#app')
