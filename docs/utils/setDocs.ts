import * as fs from "fs";
import { join } from "path";
import matter from "gray-matter";

class setDocs {
    nav = [
        { text: '指引', link: '/docs/guide/what', activeMatch: '/guide/' },
        { text: '组件', link: '/packages/avatar/index', activeMatch: '/packages/' },
        {
            text: 'v1.0.0',
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
                text: '指引',
                collapsible: true,
                items: [
                    { text: '介绍', link: '/docs/guide/what' },
                    { text: '快速上手', link: '/docs/guide/asset-handling' },
                    { text: '指南', link: '/docs/guide/frontmatter' },
                    { text: '版本', link: '/docs/guide/using-vue' }
                ]
            }
        ],
        '/packages/': [
            {
                text: '通用组件',
                collapsible: true,
                items: [
                    { text: '介绍', link: '/packages/avatar/index' },
                ]
            },
            {
                text: '通用组件11',
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