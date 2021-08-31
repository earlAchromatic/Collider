//Layouts
import ColliderPage from "./src/components/Molecules/Layouts/ColliderPage.ce.vue";

//Navbars
import NavbarFrame from "./src/components/Molecules/Navbars/NavbarFrame.ce.vue";
import ClusterNav from "./src/components/Molecules/Navbars/ClusterNav.ce.vue";

//Footers

import FlatFooter from "./src/components/Molecules/Footers/FlatFooter.ce.vue";
import MegaFooter from "./src/components/Molecules/Footers/MegaFooter.ce.vue";

//Sections
import FullPage from "./src/components/Molecules/Sections/FullPage.ce.vue";

//Micro-Molecules
import FourColumn from "./src/components/Molecules/Micros/FourColumn.ce.vue";

import { defineCustomElement } from "vue";

const cluster_nav = defineCustomElement(ClusterNav);
const flat_footer = defineCustomElement(FlatFooter);
const mega_footer = defineCustomElement(MegaFooter);

const navbar_frame = defineCustomElement(NavbarFrame);
const full_page = defineCustomElement(FullPage);
const collider_page = defineCustomElement(ColliderPage);

const four_column = defineCustomElement(FourColumn);

export {
  cluster_nav,
  full_page,
  navbar_frame,
  collider_page,
  flat_footer,
  mega_footer,
  four_column,
};

export function register() {
  customElements.define("navbar-frame", navbar_frame);
  customElements.define("cluster-nav", cluster_nav);
  customElements.define("full-page", full_page);
  customElements.define("collider-page", collider_page);
  customElements.define("flat-footer", flat_footer);
  customElements.define("four-column", four_column);
  customElements.define("mega-footer", mega_footer);
}
