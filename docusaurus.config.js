// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '简幻欢社区维基',
  tagline: 'Not Offical',
  url: 'https://sfe.zxpweb.link',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ZengXiaoPi', // Usually your GitHub org/user name.
  projectName: 'Simpfun_Wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ZengXiaoPi/Simpfun_Wiki/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ZengXiaoPi/Simpfun_Wiki/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Simpfun 维基',
        logo: {
          alt: 'Simpfun',
          src: 'img/Simpfun.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'main',
            position: 'left',
            label: '主页',
          },
          {to: '/blog', label: '逆天墙', position: 'left'},
          {
            href: 'https://github.com/ZengXiaoPi/Simpfun_Wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '进入维基',
                to: '/docs/main',
              },
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: '简幻欢',
                href: 'https://simpfun.cn',
              },
              {
                label: '简幻云',
                href: 'https://simpcloud.cn',
              },
              {
                label: 'BiliBili',
                href: 'https://space.bilibili.com/1493209225',
              },
			  {
                label: 'Github',
                href: 'https://github.com/ZengXiaoPi/Simpfun_Wiki',
              },
            ],
          },
          {
            title: '别的东西',
            items: [
              {
                label: '逆天墙',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ZengXiaoPi/Simpfun_Wiki',
              },
            ],
          },
        ],
        copyright: `Simpfun Wiki Team 版权所有 由 Docusaurus 构建。`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
