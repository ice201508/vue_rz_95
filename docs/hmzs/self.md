# 从0到1搭建一个V3+TS项目

带领团队，使用最佳实践开发项目



## 1. 骨架创建

###  1. Vite

```
先去查看vite官网，使用vite脚手架，创建一个vue3+ts基础项目 https://cn.vitejs.dev/guide/
pnpm create vite
```



### 2. Ant Design Vue 3.X

安装UI组件库Ant Design Vue, 官网 https://antdv.com/docs/vue/getting-started-cn

```
pnpm i ant-design-vue -S

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

createApp(App).use(Antd).mount('#app');


图标库的使用
pnpm i @ant-design/icons-vue -S
svg的使用，以及可以使用阿里在线的地址
```



### 3. pinia

安装  官网https://pinia.vuejs.org/zh/

**1.安装**

`pnpm i pinia --save`

**2. main.js里面导入**

```
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)
```

**3.使用组合式API方式定义pinia， 新建store文件夹，新建index.ts**

```
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

在 Setup Store 中：
ref() 就是 state 属性
computed() 就是 getters
function() 就是 actions
```

**4.组件里面使用**

```
import { useCounterStore } from '@/stores/counter'
// 可以在组件中的任意位置访问 `store` 变量 ✨
const store = useCounterStore()

console.log(store.count)
store.increment()
```

**5. 安装持久化插件**

```
pnpm i pinia-plugin-persistedstate --save

import persist from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(persist)

export const useCounterStore = defineStore(
 'counter', 
 () => {},
 // 第三个参数，添加一个 持久化的属性配置
 {
   persist: true
 }
)
```



### 4. vue-router安装

官网 https://router.vuejs.org/zh/

**1. 安装**

`pnpm add vue-router@4`

**2.创建router文件夹**

```
创建index.ts 写入以下内容
const routes = [
  { path: '/', component: () => import('@/views/Home.vue') },
  { path: '/about', component: About },
  { 
  	path: '/abc', 
  	component: abc, 
  	// 带有子路由的情况
  	childrend: [
        { path: '/aaa', component: () => import('@/views/aaa.vue') },
  	] },
]
const router = VueRouter.createRouter({
  // 内部提供了 history 和 hash模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes: routes,
})
后续添加动态路由，路由守卫都是基于router这个实例
router.beforeEach()
router.afterEach()
```

**3.main.js导入**

`app.use(router)`



### 5. 项目支持sass，less等

```
# .scss and .sass
pnpm add -D sass
通过 <style lang="sass">（或其他预处理器）自动开启
通过 <style lang="scss">（或其他预处理器）自动开启

# .less
pnpm add -D less
通过 <style lang="less">（或其他预处理器）自动开启
```



### 6. 文件夹基本结构

![](https://s11.ax1x.com/2024/01/22/pFVWfat.jpg)

### 7. 布局组件

![](https://s11.ax1x.com/2024/01/22/pFVWoRS.jpg)

### 8. vite.config.ts相关配置

```
配置@等别名，绝对路径等概念
https://tie.pub/2019/07/nodejs-esm-impl/

resolve: {
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url))
  }
}

import.meta.url 当前文件的绝对路径
new URL('./src', import.meta.url)  将src文件夹所在的绝对路径--解析为文件url
fileURLToPath() 将文件URL解码为路径字符串


代理
server: {
    port: 3000,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'https://xxxxx/api/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  }
```



### 9. axios二次封装

