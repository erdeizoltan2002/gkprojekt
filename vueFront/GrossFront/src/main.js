import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./axios"
import "bootstrap/dist/js/bootstrap.js"
import "@popperjs/core"


const app = createApp(App)

app.use(router)

app.mount('#app')
