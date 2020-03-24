const path = require('path')

module.exports = {
    title: 'TaroX UI',
    tagline: '我们重新(zào)发(lún)明(zi)了 Taro UI',
    url: 'https://tarojsx.github.io',
    baseUrl: '/ui/',
    favicon: 'img/favicon.ico',
    organizationName: 'tarojsx', // Usually your GitHub org/user name.
    projectName: 'ui', // Usually your repo name.
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: '',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // editUrl: 'https://github.com/tarojsx/ui/edit/master/website/',
                },
                theme: {
                    // customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
    plugins: ['docusaurus-plugin-sass', path.resolve(__dirname, 'docusaurus-plugin-tarojsx')],
    themes: ['@docusaurus/theme-live-codeblock'],
    themeConfig: {
        navbar: {
            title: 'TaroX UI',
            logo: {
                alt: 'Site Logo',
                src: 'img/logo.svg',
            },
            links: [
                {
                    to: 'components',
                    // activeBasePath: 'docs',
                    label: '组件',
                    position: 'left',
                },
                {
                    to: 'globals',
                    // activeBasePath: 'docs',
                    label: 'API',
                    position: 'left',
                },
                // { to: 'blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/tarojsx/ui',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            // links: [
            //     {
            //         title: 'Docs',
            //         items: [
            //             {
            //                 label: 'Style Guide',
            //                 to: 'docs/doc1',
            //             },
            //             {
            //                 label: 'Second Doc',
            //                 to: 'docs/doc2',
            //             },
            //         ],
            //     },
            //     {
            //         title: 'Community',
            //         items: [
            //             {
            //                 label: 'Stack Overflow',
            //                 href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //             },
            //             {
            //                 label: 'Discord',
            //                 href: 'https://discordapp.com/invite/docusaurus',
            //             },
            //         ],
            //     },
            //     {
            //         title: 'Social',
            //         items: [
            //             {
            //                 label: 'Blog',
            //                 to: 'blog',
            //             },
            //             {
            //                 label: 'GitHub',
            //                 href: 'https://github.com/tarojsx/ui',
            //             },
            //         ],
            //     },
            // ],
            copyright: `Copyright © 2020-${new Date().getFullYear()} TaroX. Built with Docusaurus.`,
        },
    },
}
