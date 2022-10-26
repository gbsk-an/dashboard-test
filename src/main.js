import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import components from "@/components/UI";
import "./styles/main.scss";

const app = createApp({
  render: () => h(App),
});

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router);
app.use(store);
app.mount("#app");
