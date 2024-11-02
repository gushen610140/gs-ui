import type {App, Plugin} from "vue";

type SFCWithInstall<T> = T & Plugin;

// 将 SFC 注册为组件 准备 install 方法提供给插件进行安装
export const withInstall = <T>(component: T) => {
    (component as SFCWithInstall<T>).install = (app :App) => {
        const name = (component as any)?.name || "UnnamedComponent";
        app.component(name, component as SFCWithInstall<T>);
    }
    return component as SFCWithInstall<T>;
}

// 将组件列表注册为插件 一次性注入所有组件
export const makeInstaller = (components: Plugin[]) => {
    return (app: App) => components.forEach(comp => app.use(comp))
}

