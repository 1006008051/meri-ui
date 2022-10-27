import * as fs from "fs";
import { join } from "path";
import matter from "gray-matter";

class setDocs {
    nav = [
        { text: '指南', link: '/docs/guide/introduction', activeMatch: '^/docs/guide' },
        { text: '组件', link: '/packages/avatar/index', activeMatch: '^/packages/' },
        {
            text: '相关链接',
            items: [
                {
                    text: 'Changelog',
                    link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
                },
                {
                    text: 'Contributing',
                    link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
                }
            ]
        }
    ];
    sidebar: Object = {
        '/docs/guide/': [
            {
                text: '开发',
                collapsible: true,
                items: [
                    { text: '开发指南', link: '/docs/guide/introduction' },
                    { text: '快速上手', link: '/docs/guide/quickstart' },
                    { text: '主题定制', link: '/docs/guide/customTheme' },
                    { text: '内置过度动画', link: '/docs/guide/transitions' },
                    { text: '风格指南', link: '/docs/guide/codeStyle' },
                ]
            },
            {
                text: '设计',
                collapsible: true,
                items: [
                    { text: '设计指南', link: '/docs/guide/designGuide' },
                    { text: '设计资源', link: '/docs/guide/designResources' }
                ]
            },
            {
                text: '贡献',
                collapsible: true,
                items: [
                    { text: '贡献指南', link: '/docs/guide/contributionGuide' },
                    { text: '核心团队', link: '/docs/guide/team' }
                ]
            },
            {
                text: '版本',
                collapsible: true,
                items: [
                    { text: '更新指南', link: '/docs/guide/updateGuide' },
                    { text: '更新日志', link: '/docs/guide/updateLog' },
                ]
            }
        ],
        '/packages/': [
            {
                text: '通用',
                collapsible: true,
                items: [
                    { text: '按钮 Button', link: '/packages/avatar/index' },
                ]
            },
            {
                text: '布局',
                collapsible: true,
                items: []
            },
            {
                text: '导航',
                collapsible: true,
                items: []
            },
            {
                text: '数据录入',
                collapsible: true,
                items: []
            },
            {
                text: '数据展示',
                collapsible: true,
                items: []
            },
            {
                text: '反馈',
                collapsible: true,
                items: []
            }
        ]
    };

    constructor() {
        // this.setSidebarGuide();
        // this.setSidebarPackages();
    }
    // 设置顶部导航
    setNav() {
        return this.nav
    }
    //设置侧边导航
    setSidebar() {
        return this.sidebar
    }

    // 设置guide导航
    setSidebarGuide() {
        const path = join(__dirname, '../guide');
        const info = fs.readdirSync(path);
        // 获取所有的guide文档
        info.forEach(item => {
            const { slideIndex, slideChildrenIndex, text } = matter.read(join(path, item)).data;
            this.sidebar['/docs/guide/'][slideIndex].items[slideChildrenIndex] = {
                text,
                link: `/docs/guide/${item.replace(/.md/, '')}`
            };
        });
    }
    // 设置packages导航
    setSidebarPackages() {
        const path = join(__dirname, '../../packages');
        const info = fs.readdirSync(path);
        info.forEach(item => {
            const pakPath = join(path, item, 'index.md');
            // 设置文档slideBar
            if (fs.existsSync(pakPath)) {
                const { index, text } = matter.read(pakPath).data;
                this.sidebar['/packages/'][index].items.push({
                    text,
                    link: `/packages/${item}/index`
                });
                // 导出所有的组件
                // components += `export * from './${docs}/index.js'\n`
            }
        });
        this.nav[1].link = this.sidebar['/packages/'][0].items[0].link;
    }
}

export default new setDocs();