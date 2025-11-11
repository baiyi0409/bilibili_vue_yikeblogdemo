//引入组件库(按照文档进行按需引入)
import '@yike-design/ui/es/index.less'
import { YkMessage, YkNotification } from '@yike-design/ui'
import Icon from '@yike-design/ui/es/components/svg-icon'


import { createApp } from 'vue'
import App from './App.vue'
import './style.less'

//引入路由
import { router } from './router';

const app = createApp(App);

//组件库设置
app.config.globalProperties.$notification = YkNotification
app.config.globalProperties.$message = YkMessage

//使用路由

app
.use(router)
.use(Icon)
.mount('#app')
