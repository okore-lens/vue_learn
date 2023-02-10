import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Basics from "./components/Basics.vue";
import Form from "./components/Form.vue";
import ListRendered from "./components/ListRendered.vue";

const app = createApp({});

app
  .component("Basics", Basics)
  .component("Form", Form)
  .component("ListRendered", ListRendered);

createApp(App).mount("#app");
