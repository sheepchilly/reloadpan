
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//引入elementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//图标 在assets文件夹中
import '@/assets/icon/iconfont.css'
import '@/assets/base.scss'
//引入cookies
import  VueCookies  from 'vue-cookies'

const app = createApp(App)

app.use(router)
//别忘记element引入后需要use
app.use(ElementPlus)

app.mount('#app')
