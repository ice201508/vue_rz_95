module.exports = {
  title: "95-YYDS",
  // 本地开发 图片 403问题
  head: [
    ["meta", { name: "referrer", content: "no-referrer" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }],
  ],
  // github 部署的地址是 /   对应 history 模式看看
  // gitee  部署的地址是 /rz_doc_95/ 或者./ 都可以 -----   app.js 文件 采用history模式，刷新不报错
  // /rz_doc_95/
  base: "/rz_doc_95/", // 开发不用，打包时候放开  目标地址是：https://openhacking.github.io/vuepress-template/，所以需要配置base地址后缀
  // base: '/',
  plugins: [
    "@vuepress/back-to-top",
    [
      // https://github.com/xuekai-china/vuepress-plugin-right-anchor/blob/0.5.4/zh-README.md
      "vuepress-plugin-right-anchor",
      {
        showDepth: 1,
        expand: {
          trigger: "click", // hover click
          clickModeDefaultOpen: false,
        },
      },
    ],
  ],
  smoothScroll: true,
  // devServer: {
  //   // https: true
  // },
  themeConfig: {
    displayAllHeaders: true,
    logo: "/doraameng.jpg",
    serviceWorker: {
      updatePopup: true, // 刷新内容的弹窗
    },
    nav: [
      { text: "vue基础", link: "/vue/" },
      { text: "人资笔记", link: "/rz/" },
      // { text: "小程序", link: "/xcx/" },
      // { text: "Vue3+TS", link: "/vue3ts/" },
      {
        text: "vue资源网站",
        items: [
          {
            text: "人资相关网站",
            items: [
              {
                text: "人资接口文档",
                link: "https://www.apifox.cn/apidoc/shared-e2644216-aad4-4529-a630-78f0631ab076/api-49562537",
              },
              {
                text: "老师上课码云地址",
                link: "https://gitee.com/errlei/rz_92",
              },
              {
                text: "人资预览网站",
                link: "https://heimahr.itheima.net/login",
                // link: "http://ihrm.itheima.net/hrsaas/login",
              },
              // {
              //   text: "人资预览备用网站",
              //   link: "https://heimahr-t.itheima.net/",
              // },
              {
                text: "检查大家每日收获网站",
                link: "https://www.zhixi.com/share/305d8208",
              },
              {
                text: "element项目预览网站",
                link: "https://panjiachen.gitee.io/vue-element-admin/#/login",
              },
            ],
          },
          {
            text: "vue全家桶官网",
            items: [
              { text: "Vue2", link: "https://v2.cn.vuejs.org/" },
              { text: "Vue Router", link: "https://v3.router.vuejs.org/zh/" },
              { text: "VueX", link: "https://v3.vuex.vuejs.org/zh/" },
              { text: "Axios官网", link: "https://axios-http.com/zh/" },
              { text: "Axios备用网站", link: "http://chengqige.com/axios/#/" },
              { text: "Element UI", link: "https://element.eleme.cn/#/zh-CN" },
            ],
          },
          {
            text: "工具网站",
            items: [
              { text: "谷歌插件", link: "https://crxdl.com/" },
              { text: "产品原型网", link: "https://www.axureshop.com/" },
            ],
          },
        ],
      },
      // {
      //   text: "小程序资源网站",
      //   items: [
      //     {
      //       text: "原生小程序",
      //       items: [
      //         { text: "微信公众平台-登录", link: "https://mp.weixin.qq.com/" },
      //         {
      //           text: "小程序开发文档",
      //           link: "https://developers.weixin.qq.com/miniprogram/dev/framework/",
      //         },
      //         {
      //           text: "小程序接口文档",
      //           link: "https://apifox.com/apidoc/shared-8d66c345-7a9a-4844-9a5a-1201852f6faa/doc-1492243",
      //         },
      //         {
      //           text: "Vant Weapp",
      //           link: "https://vant-contrib.gitee.io/vant-weapp/#/home",
      //         },
      //         {
      //           text: "在线思维导图",
      //           link: "https://www.zhixi.com/share/305d8208",
      //         },
      //         {
      //           text: "支付宝小程序开发文档",
      //           link: "https://opendocs.alipay.com/mini/introduce",
      //         },
      //         {
      //           text: "抖音小程序开发文档",
      //           link: "https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/develop/guide/introduction",
      //         },
      //       ],
      //     },
      //     {
      //       text: "uni-app小程序",
      //       items: [
      //         {
      //           text: "接口文档",
      //           link: "https://www.showdoc.com.cn/128719739414963/2513235043485226",
      //         },
      //         { text: "uni-app小程序", link: "https://uniapp.dcloud.net.cn/" },
      //         { text: "uView", link: "https://www.uviewui.com/" },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   text: "vue3周边网站",
      //   items: [
      //     { text: "Vue 3官网", link: "https://cn.vuejs.org/" },
      //     { text: "Vite 脚手架官网", link: "https://cn.vitejs.dev/" },
      //     { text: "Vue Router 4.x 路由", link: "https://router.vuejs.org/zh/" },
      //     { text: "Vuex 4.x状态管理", link: "https://vuex.vuejs.org/zh/" },
      //     { text: "pinia 新状态管理", link: "https://pinia.vuejs.org/zh/" },
      //     {
      //       text: "Element Plus UI库",
      //       link: "https://element-plus.org/zh-CN/",
      //     },
      //     {
      //       text: "Vant 4 H5 UI库",
      //       link: "https://vant-contrib.gitee.io/vant/#/zh-CN",
      //     },
      //     {
      //       text: "TS演练场",
      //       link: "https://www.typescriptlang.org/zh/play",
      //     },
      //     {
      //       text: "TS自学网站",
      //       link: "https://ts.xcatliu.com/",
      //     },
      //   ],
      // },
      { text: "必会面试题", link: "/interview/" },
    ],
    // sidebar: 'auto',
    collapsable: true,
    // sidebar: {
    //   '/rz/': [
    //     '01',
    //     '02',
    //     '03',
    //     '04',
    //     '05',
    //   ]
    // }
    sidebar: {
      "/vue/": [
        {
          title: "1-vue基本概念",
          path: "/vue/01", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true,
          displayAllHeaders: true,
          sidebarDepth: 2,
          children: ["01"],
        },
        {
          title: "2-vue指令",
          path: "/vue/02",
          collapsable: true,
          sidebarDepth: 2,
          children: ["02"],
        },
        {
          title: "3-day03-组件基础+组件通讯",
          path: "/vue/day03-组件基础+组件通讯",
          collapsable: true,
          sidebarDepth: 2,
          children: ["day03-组件基础+组件通讯"],
        },
        {
          title: "4-day04-组件进阶",
          path: "/vue/day04-组件进阶",
          collapsable: true,
          sidebarDepth: 2,
          children: ["day04-组件进阶"],
        },
        {
          title: "5-day05-生命周期+路由+组件缓存",
          path: "/vue/day05-生命周期+路由+组件缓存",
          collapsable: true,
          sidebarDepth: 2,
          children: ["day05-生命周期+路由+组件缓存"],
        },
        {
          title: "6-day06-面经H5端-Vant（上）",
          path: "/vue/day06-面经H5端-Vant（上）",
          collapsable: true,
          sidebarDepth: 2,
          children: ["day06-面经H5端-Vant（上）"],
        },
        {
          title: "7-day07-面经H5端-Vant（下）",
          path: "/vue/day07-面经H5端-Vant（下）",
          collapsable: true,
          sidebarDepth: 2,
          children: ["day07-面经H5端-Vant（下）"],
        },
        {
          title: "9-day09-面经PC端-element（上）",
          path: "/vue/day09-面经PC端-element（上）",
          collapsable: true,
          sidebarDepth: 2,
          children: ["day09-面经PC端-element（上）"],
        },
        {
          title: "10-day10-面经PC端-element（下）",
          path: "/vue/day10-面经PC端-element（下）",
          collapsable: true,
          sidebarDepth: 2,
          children: ["day10-面经PC端-element（下）"],
        },
      ],
      "/rz/": [
        {
          title: "Day01-项目介绍及初始化-登录页面",
          path: "/rz/01", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true,
          displayAllHeaders: true,
          sidebarDepth: 2,
          children: ["01"],
        },
        {
          title: "Day02-登录模块-主页鉴权",
          path: "/rz/02",
          collapsable: true,
          sidebarDepth: 2,
          children: ["02"],
        },
        {
          title: "Day03-主页模块-修改密码",
          path: "/rz/03",
          collapsable: true,
          sidebarDepth: 2,
          children: ["03"],
        },
        {
          title: "Day04-组织架构",
          path: "/rz/04",
          collapsable: true,
          sidebarDepth: 2,
          children: ["04"],
        },
        {
          title: "Day05-组织架构-角色管理",
          path: "/rz/05",
          collapsable: true,
          sidebarDepth: 2,
          children: ["05"],
        },
        {
          title: "Day06-角色管理-员工管理",
          path: "/rz/06",
          collapsable: true,
          sidebarDepth: 2,
          children: ["06"],
        },
        {
          title: "Day07-员工管理-上传下载",
          path: "/rz/07",
          collapsable: true,
          sidebarDepth: 2,
          children: ["07"],
        },
        {
          title: "Day08-Cos上传和权限数据 ",
          path: "/rz/08",
          collapsable: true,
          sidebarDepth: 2,
          children: ["08"],
        },
        {
          title: "Day09-权限应用-首页",
          path: "/rz/09",
          collapsable: true,
          sidebarDepth: 2,
          children: ["09"],
        },
        {
          title: "Day10-首页图表-Nginx上线",
          path: "/rz/10",
          collapsable: true,
          sidebarDepth: 2,
          children: ["10"],
        },
      ],
      // "/xcx/": [
      //   {
      //     title: "1-小程序基础",
      //     path: "/xcx/01", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      //     collapsable: true,
      //     displayAllHeaders: true,
      //     sidebarDepth: 2,
      //     children: ["01"],
      //   },
      //   {
      //     title: "2-小程序基础",
      //     path: "/xcx/02",
      //     collapsable: true,
      //     sidebarDepth: 2,
      //     children: ["02"],
      //   },
      //   {
      //     title: "3-小程序基础",
      //     path: "/xcx/03",
      //     collapsable: true,
      //     sidebarDepth: 2,
      //     children: ["03"],
      //   },
      //   {
      //     title: "4-享+本地生活",
      //     path: "/xcx/04",
      //     collapsable: true,
      //     sidebarDepth: 2,
      //     children: ["04"],
      //   },
      //   {
      //     title: "5-享+本地生活",
      //     path: "/xcx/05",
      //     collapsable: true,
      //     sidebarDepth: 2,
      //     children: ["05"],
      //   },
      //   {
      //     title: "6-享+本地生活",
      //     path: "/xcx/06",
      //     collapsable: true,
      //     sidebarDepth: 2,
      //     children: ["06"],
      //   },
      //   {
      //     title: "7-享+本地生活",
      //     path: "/xcx/07",
      //     collapsable: true,
      //     sidebarDepth: 2,
      //     children: ["07"],
      //   },
      //   {
      //     title: "8-uni-app项目",
      //     path: "/xcx/08",
      //     collapsable: true,
      //     sidebarDepth: 2,
      //     children: ["08"],
      //   },
      //   {
      //     title: "9-uni-app项目",
      //     path: "/xcx/09",
      //     collapsable: true,
      //     sidebarDepth: 2,
      //     children: ["09"],
      //   },
      //   {
      //     title: "10-uni-app项目",
      //     path: "/xcx/10",
      //     collapsable: true,
      //     sidebarDepth: 2,
      //     children: ["10"],
      //   },
      // ],
      // "/vue3ts/": [
      //   {
      //     title: "01-Vue3入门",
      //     path: "/vue3ts/1",
      //     collapsable: true,
      //     sidebarDepth: 2,
      //     children: ["1"],
      //   },
      //   {
      //     title: "02-TypeScript核心",
      //     path: "/vue3ts/2",
      //     collapsable: true,
      //     sidebarDepth: 2,
      //     children: ["2"],
      //   },
      //   {
      //     title: "03-Vue3 + TypeScript",
      //     path: "/vue3ts/03-Vue3-TypeScript",
      //     collapsable: true,
      //     sidebarDepth: 2,
      //     children: ["03-Vue3-TypeScript"],
      //   },
      //   {
      //     title: "04-Pinia入门",
      //     path: "/vue3ts/04-Pinia入门",
      //     collapsable: true,
      //     sidebarDepth: 2,
      //     children: ["04-Pinia入门"],
      //   },
      // ],
      // "/interview/": [
      //   {
      //     title: "vue3常见面试题",
      //     path: "/interview/",
      //     collapsable: true,
      //     // displayAllHeaders: true,
      //     sidebarDepth: 2,
      //     children: ["vue3"],
      //   },
      // ],
    },
  },
  markdown: {
    // 图片中文路径的问题   npm i markdown-it-disable-url-encode
    extendMarkdown: (md) => {
      md.use(require("markdown-it-disable-url-encode"));
    },
  },
};
