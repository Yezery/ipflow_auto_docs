import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IPFLOW Automation",
  description: "IPFLOW 日活自动化使用说明",
  base:"/ipflow_auto_docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/icon.svg",

    nav: [
      { text: "主页", link: "/" },
      { text: "快速开始", link: "/get-start" },
      { text: "Q&A", link: "/QA" },
    ],

    sidebar: [
      {
        text: "使用说明",
        collapsed: true,
        items: [
          { text: "快速开始", link: "/get-start" },
          { text: "Q&A", link: "/QA" },
        ],
      },
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
    lastUpdated: true,
    lastUpdatedText: "最后更新",

    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
  },
});
