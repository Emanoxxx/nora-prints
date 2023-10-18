import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Icon from './components/lucide/Icon.vue'


const app = createApp(App)
app.component('Icon',Icon)
.mount('#app')
