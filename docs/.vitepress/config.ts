import setDocs from '../utils/setDocs';
import demoblock from 'vitepress-demoblock';
export default {
    srcDir: "../",
    lang: 'zh-CN',
    title: 'VitePress',    // 标题
    description: 'Just playing around.',    // 描述
    head: [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
    ],
    lastUpdated: true, // 上次更新时间
    markdown: { // markdown 标题层级， 参考 https://markdown-it.docschina.org/
        headers: {
            level: [0, 0]
        },
        config: (md) => {
            md.use(demoblock)
        }
    },
    vite: {
        // @ts-ignore
    },
    themeConfig: {
        // 顶部导航
        nav: setDocs.setNav(),
        // 侧边导航
        sidebar: setDocs.setSidebar(),
        // 编辑链接
        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        // 社交信息栏
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ],
        // 底部信息栏
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
        },
        // 搜索栏
        algolia: {
            appId: '8J64VVRP8K',
            apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
            indexName: 'vitepress'
        },
        // 广告栏
        carbonAds: {
            code: 'CEBDT27Y',
            placement: 'vuejsorg'
        }
    }
}