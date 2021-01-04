import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/index.css'
// import VueTMap from 'vue-tmap'

// import echarts from 'echarts'

const app = createApp(App)

// app.config.globalProperties.$echarts = echarts
app.use(store).use(router).mount('#app')
