import { _ as _export_sfc, a as __nuxt_component_0$2, b as __nuxt_component_1, c as __nuxt_component_2, d as __nuxt_component_3, e as __nuxt_component_4 } from '../server.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'defu';
import '@vue/shared';
import '../../nitro/aws-lambda.mjs';
import 'node-fetch-native/polyfill';
import 'destr';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'node:url';
import 'ipx';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeroBig = __nuxt_component_0$2;
  const _component_ReferenceGrid = __nuxt_component_1;
  const _component_BtnSecondary = __nuxt_component_2;
  const _component_SluzbyBlock = __nuxt_component_3;
  const _component_NuxtPicture = __nuxt_component_4;
  _push(`<main${ssrRenderAttrs(_attrs)} data-v-05626348>`);
  _push(ssrRenderComponent(_component_HeroBig, null, null, _parent));
  _push(`<section id="scroll" class="reference" data-v-05626348><div class="container" data-v-05626348><h2 class="text-center" data-v-05626348>Na co jsme hrd\xED</h2><div class="text-center container narrow" data-v-05626348><p data-v-05626348> Tvo\u0159\xEDme ziskov\xE9 e-shopy a weby pro ty, kte\u0159\xED po\u017Eaduj\xED jen to nejlep\u0161\xED. Spravujeme v\xFDkonnostn\xED kampan\u011B a p\u0159in\xE1\u0161\xEDme dosah soci\xE1ln\xEDm s\xEDt\xEDm. Stoj\xEDme za vznikem nov\xFDch zna\u010Dek a produkt\u016F, kter\xE9 h\xFDbou trhem. </p></div>`);
  _push(ssrRenderComponent(_component_ReferenceGrid, null, null, _parent));
  _push(`<div class="buttons-center" data-v-05626348>`);
  _push(ssrRenderComponent(_component_BtnSecondary, {
    url: "/reference",
    text: "Objevit dal\u0161\xED projekty"
  }, null, _parent));
  _push(`</div></div></section><section class="sluzby" data-v-05626348><div class="container" data-v-05626348><h2 class="text-center" data-v-05626348>Miranda je ta prav\xE1</h2><div class="text-center container narrow" data-v-05626348><p data-v-05626348> Uva\u0159it po\u0159\xE1dn\u011B hutnej a dlouhodobej v\xFDkon v digit\xE1lu nen\xED jen tak, ale kdy\u017E se spoj\xED dobr\xFD n\xE1pad s vytrvalost\xED a z\xE1palem a k tomu p\u0159id\xE1te p\xE1r nad\u0161en\xFDch prof\xEDk\u016F, m\u016F\u017Ee z toho vzniknout n\u011Bco, na co budete pr\xE1vem py\u0161n\xED! </p></div>`);
  _push(ssrRenderComponent(_component_SluzbyBlock, null, null, _parent));
  _push(`<div class="buttons-center" data-v-05626348>`);
  _push(ssrRenderComponent(_component_BtnSecondary, {
    url: "/kontakty#kontakt",
    text: "Poptat slu\u017Ebu"
  }, null, _parent));
  _push(`</div></div></section><section class="proc-miranda" data-v-05626348><div class="container" data-v-05626348><div class="columns col-4-6 align-center" data-v-05626348><div class="column" data-v-05626348><h2 data-v-05626348>Pro\u010D si za\u010D\xEDt s Mirandou?</h2><p data-v-05626348> Proto\u017Ee tahle agenturn\xED d\xE1ma um\xED b\xFDt v\u011Brn\xE1 a spolehliv\xE1 ka\u017Ed\xFDm coulem. Pro sv\xE9ho z\xE1kazn\xEDka ud\u011Bl\xE1, co mu na o\u010D\xEDch vid\xED a nikdy nenech\xE1 le\u017Eet kdejakou po\u0159\xE1dnou v\xFDzvu bokem. </p>`);
  _push(ssrRenderComponent(_component_BtnSecondary, {
    url: "/o-nas",
    text: "V\xEDce o n\xE1s"
  }, null, _parent));
  _push(`</div><div class="column" data-v-05626348>`);
  _push(ssrRenderComponent(_component_NuxtPicture, {
    src: "/img/proc-miranda-grid.webp",
    imgAttrs: { style: "width: 100%; height: 100%; object-fit: cover; display: block;" }
  }, null, _parent));
  _push(`</div></div></div></section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-05626348"]]);

export { index as default };
//# sourceMappingURL=index.131906f1.mjs.map
