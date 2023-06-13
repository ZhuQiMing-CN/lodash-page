import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import sidebar from './sidebar'

export default defineUserConfig({
  port: 9087,
  lang: 'zh-CN',
  // base: process.env.NODE_ENV === 'development' ? '/' : '/lodash-page/',
  title: 'lodash 中文文档',
  description: 'Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  theme: defaultTheme({
    logo: '/images/lodash.png',
    repo: 'https://github.com/lodash/lodash',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '英文官网',
        link: 'https://lodash.com'
      }
    ],
    sidebar: sidebar,
    editLink: false,
    contributors: false
  }),
  plugins: [
    searchPlugin()
  ],
  markdown: {
    code: {
      lineNumbers: false
    }
  }
})