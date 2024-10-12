import type {App, Plugin} from "vue";

type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T>(component: T) => {
    (component as SFCWithInstall<T>).install = (app :App) => {
        const name = (component as any)?.name || "UnnamedComponent";
        app.component(name, component as SFCWithInstall<T>);
    }
    return component as SFCWithInstall<T>;
}

export const makeInstaller = (components: Plugin[]) => {
    return (app: App) => {
        for (const comp of components) {
            app.use(comp);
        }
    }
}

