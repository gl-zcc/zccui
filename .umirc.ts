import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'zccui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config

  base: '/zccui',
  publicPath: '/zccui/',

  navs: [
    {
      title: '组件',
      path: '/components',
    },
  ],

  menus: {
    '/components': [
      {
        title: '基本组件',
        path: '/components',
        children: [
          {
            title: '按钮',
            path: '/components/button',
          },
          {
            title: '页脚',
            path: '/components/foo',
          },
        ],
      },
    ],
  },
});
