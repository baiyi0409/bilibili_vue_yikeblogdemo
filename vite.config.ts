import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//组件库
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { YikeResolver } from '@yike-design/resolver'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({ resolvers: [YikeResolver] }),
    Components({ resolvers: [YikeResolver] }),
  ],
  css:{
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import '@yike-design/ui/es/index.less';`
      }
    }
  }
})
