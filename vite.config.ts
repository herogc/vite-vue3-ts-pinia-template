import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';

// 自动导入vue中hook reactive ref等
import AutoImport from "unplugin-auto-import/vite"
//自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite';
//ant-design-vue
import {AntDesignVueResolver} from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    AutoImport({
      //安装两行后你会发现在组件中不用再导入ref，reactive等
      imports: ['vue', 'vue-router'],
      dts: "src/auto-import.d.ts",
      resolvers: [AntDesignVueResolver()]
    }),
    Components({
      //ant-design-vue   importStyle = false 样式就没了
        resolvers: [AntDesignVueResolver({importStyle: true, resolveIcons: true})],
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 8080, //启动端口
    hmr: {
        host: '127.0.0.1',
        port: 8080
    },
    // 设置 https 代理
    proxy: {
        '/api': {
            target: 'https://qylweb.bda.gov.cn',
            changeOrigin: true,
            rewrite: (path: string) => path.replace(/^\/api/, '')
        }
    }
  }
})
