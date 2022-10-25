import DefaultTheme from 'vitepress/theme'; //引入默认主题
import demo from 'vitepress-demoblock/demo.vue'
import meri from '../../../packages';// 组件库组件
// 导出vitepress配置
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('demo', demo);
        app.use(meri);
    }
}