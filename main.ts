//Navbars
import NavbarFrame from "./src/components/Molecules/Navbars/NavbarFrame.ce.vue";
import ClusterNav from "./src/components/Molecules/Navbars/ClusterNav.ce.vue";

//Sections
import FullPage from "./src/components/Molecules/Sections/FullPage.ce.vue";

import { defineCustomElement } from "vue";

const cluster_nav = defineCustomElement(ClusterNav);
const navbar_frame = defineCustomElement(NavbarFrame);
const full_page = defineCustomElement(FullPage);

export { cluster_nav, full_page, navbar_frame };

export function register() {
  customElements.define("navbar-frame", navbar_frame);
  customElements.define("cluster-nav", cluster_nav);
  customElements.define("full-page", full_page);
}
