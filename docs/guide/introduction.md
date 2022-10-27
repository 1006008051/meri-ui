# 开发指南

## 介绍

Meri UI 是一个Vue3 的组件库，提供开箱即用的高质量 Vue 组件。它提炼自企业级中后台产品的交互语言和视觉风格，开发和服务于企业级后台产品。

要了解如何安装，参见[安装]()。

## 特性

- 🚀 性能极佳，组件平均体积小于 1KB（min+gzip）
- 🚀 70+ 个高质量组件，覆盖移动端主流场景
- 💪 使用 TypeScript 编写，提供完整的类型定义
- 💪 单元测试覆盖率超过 90%，提供稳定性保障
- 📖 提供丰富的中英文文档和组件示例
- 📖 提供 Sketch 和 Axure 设计资源
- 🍭 支持 Vue 2、Vue 3 和微信小程序
- 🍭 支持主题定制，内置 700+ 个主题变量
- 🍭 支持按需引入和 Tree Shaking
- 🍭 支持无障碍访问（持续改进中）
- 🍭 支持深色模式（从 Vant 4 开始支持）
- 🍭 支持服务器端渲染
- 🌍 支持国际化，内置 20+ 种语言包

## 快速上手
请阅读[快速上手]()章节，通过该章节你可以了解到 Vant 的安装方法和基本使用姿势。

## 支持环境

由于 Vue 3 不再支持 IE11，Meri UI 也不再支持 IE 浏览器。

<table>
    <thead>
        <tr>
            <th>
                <img
                    src="https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png"/>
            </th>
            <th>
                <img
                    src="https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png"/>
            </th>
            <th>
                <img
                    src="https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png"/>
            </th>
            <th>
                <img
                    src="https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png"/>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Edge ≥ 79</td>
            <td>Firefox ≥ 78 </td>
            <td>Chrome ≥ 64 </td>
            <td>Safari ≥ 12</td>
        </tr>
    </tbody>
</table>

## 社区生态
由社区维护的项目如下，欢迎补充：
<table>
    <thead>
        <tr>
            <th>
                项目
            </th>
            <th>
                描述
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="">vitepress-demoblock</a></td>
            <td>vitepress组件库编写示例插件 </td>
        </tr>
         <tr>
            <td><a href="">vitepress-demoblock</a></td>
            <td>vitepress组件库编写示例插件 </td>
        </tr>
    </tbody>
</table>

## 核心团队
<VPTeamMembers size="small" :members="members" />

## 贡献者们
感谢以下小伙伴们为 Meri UI 发展做出的贡献：


## 贡献指南
贡献代码请阅读我们的[贡献指南]()。

使用过程中发现任何问题都可以提 [Issue]()给我们，当然，我们也非常欢迎你给我们发 [PR]()。

## 开源协议
项目基于 [MIT](https://opensource.org/licenses/MIT) 协议，请自由地享受和参与开源


<!-- 引入团队成员 -->
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/yyx990803.png',
    name: 'Wang Yongcun',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' }
    ]
  },
   {
    avatar: 'https://github.com/yyx990803.png',
    name: 'Wang Yongcun',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' }
    ]
  }
]
</script>