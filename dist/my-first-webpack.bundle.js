!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Vue")):"function"==typeof define&&define.amd?define(["Vue"],t):"object"==typeof exports?exports.lib=t(require("Vue")):e.lib=t(e.Vue)}(self,(function(e){return(()=>{"use strict";var t={5:t=>{t.exports=e}},a={};function r(e){var n=a[e];if(void 0!==n)return n.exports;var o=a[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{r.r(n);var e=r(5);(0,e.pushScopeId)("data-v-55d0776a");const t={class:"cluster outer-cluster",ref:"navbar"},a=["src"],o={class:"cluster inner-cluster"},i=["href","textContent"];(0,e.popScopeId)();const s=(0,e.defineComponent)({name:"ClusterNav",props:{imagePath:String,linksArray:String},computed:{parseLinks:function(){if(this.linksArray){var e=this.linksArray.replace(/'/g,'"');return JSON.parse(e)}}},data:function(){return{imageUrl:this.imagePath,links:[]}},methods:{getNavHeight:function(){var e=this.$refs.navbar;if(console.log(e),e)return e.offsetHeight}}});s.styles=["[data-v-55d0776a]:root{--measure: 60ch;--ratio: 1.35;--s-5: calc(var(--s-4) / var(--ratio));--s-4: calc(var(--s-3) / var(--ratio));--s-3: calc(var(--s-2) / var(--ratio));--s-2: calc(var(--s-1) / var(--ratio));--s-1: calc(var(--s0) / var(--ratio));--s0: 1rem;--s1: calc(var(--s0) * var(--ratio));--s2: calc(var(--s1) * var(--ratio));--s3: calc(var(--s2) * var(--ratio));--s4: calc(var(--s3) * var(--ratio));--s5: calc(var(--s4) * var(--ratio));--space: var(--s-4);--shadow: 1px 1px 2px rgba(0, 0, 0, 0.5)}ul[data-v-55d0776a]{margin-top:0;margin-bottom:0;padding:0}li[data-v-55d0776a]{list-style:none}root[data-v-55d0776a]{--nav-height: 1rem}img[data-v-55d0776a]{width:4rem;padding:.5rem}nav[data-v-55d0776a]{position:fixed;width:100vw;z-index:200;top:0;box-shadow:var(--shadow)}ul[data-v-55d0776a]{height:100%}li[data-v-55d0776a]{color:inherit;height:100%;padding:0 1rem;display:flex;flex-direction:column;justify-content:center}li[data-v-55d0776a]:last-child{flex-grow:2;text-align:center;border:1px solid #000}.cluster[data-v-55d0776a]{display:flex;flex-wrap:wrap;gap:var(--space, 1rem);justify-content:flex-start;align-items:center}.outer-cluster[data-v-55d0776a]{justify-content:space-evenly;align-items:center}.inner-cluster[data-v-55d0776a]{justify-content:flex-start;align-items:center}"],s.render=function(r,n,s,l,c,d){return(0,e.openBlock)(),(0,e.createElementBlock)("nav",t,[(0,e.createElementVNode)("img",{src:r.imageUrl,alt:""},null,8,a),(0,e.createElementVNode)("ul",o,[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(r.parseLinks,(t=>((0,e.openBlock)(),(0,e.createElementBlock)("li",{key:t},[(0,e.createElementVNode)("a",{href:t.linkUrl,textContent:(0,e.toDisplayString)(t.name)},null,8,i)])))),128))])],512)},s.__scopeId="data-v-55d0776a";const l=s;var c=(0,e.defineCustomElement)(l);customElements.define("my-element",c)})(),n})()}));