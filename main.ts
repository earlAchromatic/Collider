import ClusterNav from "./src/components/ClusterNav.ce.vue";
import { defineCustomElement } from "vue";
//import "./src/styles/style.css";

const myElement = defineCustomElement(ClusterNav);

customElements.define("my-element", myElement);
