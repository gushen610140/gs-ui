import { createApp } from "vue";
import App from "./App.vue";
import GsUI from "gs-ui";

const app = createApp(App);
app.use(GsUI);
app.mount("#app");
