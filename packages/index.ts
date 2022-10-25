import { App } from 'vue'
export * from './components.js'
import * as components from './components.js'
import './_styles/index.css'

// 组件注册(支持全局注册，批量按需注册)
const initDemand: string[] = Object.keys(components);
const install = (app: App, demand?: string[], theme?: 'dark', prefix: string = 'M') => {
    if (typeof window !== 'undefined' && theme) {
        const htmlEl = window?.document.querySelector("html");
        htmlEl?.classList.add(`m-theme-${theme}`);
    }
    // 注册组件
    if (!demand || demand.length == 0) demand = initDemand;
    demand.forEach(component => {
        if (initDemand.includes(component)) app.component(prefix + component, components[component as keyof typeof components])
    });
};

export default install;