// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://liwuming.ibiancheng.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'liwuming', // Usually your GitHub org/user name.
  projectName: 'liwuming.github.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  /* to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },*/
  stylesheets: [
    // 字符串格式。
    '/css/init.css',
  ],
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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
		title:"📚 liwuming's Wiki",
        items: [
          {
            type: 'doc',
            docId: 'linux/intro',
            position: 'left',
            label: 'linux',
          },
		  {
            type: 'doc',
            docId: 'mysql/intro',
            position: 'left',
            label: 'mysql-dba',
          },{
            type: 'doc',
            docId: 'nginx/intro',
            position: 'left',
            label: 'nginx',
          },
		  {
            position: "right",
            label: "💼 web前端",
            items: [
              {
                label: "php",
                to: "/mysql-dba",
              },
              {
                label: "python",
                to: "/redis",
              },
              {
                label: "python",
                to: "/redis",
              }
            ]
          },
		  {
            position: "right",
            label: "💼 编程语言",
            items: [
              {
                label: "php",
                to: "/mysql-dba",
              },
              {
                label: "python",
                to: "/redis",
              },
              {
                label: "python",
                to: "/redis",
              }
            ]
          },
		  {
            position: "right",
            label: "💼 数据库",
            items: [
              {
                label: "mysql",
                to: "/mysql-dba",
              },
              {
                label: "redis",
                to: "/redis",
              }
            ]
          },
		  {
            type: 'doc',
            docId: 'english/intro',
            position: 'left',
            label: '读书笔记',
          },
          { label: "👨‍💻 读书", position: "right", items: [
			{
                label: "被讨厌的勇气",
                to: "/mysql-dba",
              },
              {
                label: "redis",
                to: "/redis",
              }
		  ]},
          { to: "/life", label: "🚴🏻‍♀️ 生活", position: "right" },
		  {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
