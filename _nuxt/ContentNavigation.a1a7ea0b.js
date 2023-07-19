import{l as M,_ as r,e as m,p as P,k as L,C as F,D,E as j,F as V,i as v,G as q,j as p,H as O,I as H,d as i,t as U,J as Q,f as G,K}from"./entry.8a1eaa5a.js";import{u as W}from"./asyncData.c0da358c.js";import{h as I,e as J,j as Y}from"./query.7eb16152.js";import{w as z,s as X,u as Z,a as ee}from"./utils.24dbc074.js";/* empty css                      */import"./aos.esm.4e24cfc1.js";import"./ContentDoc.acf45e44.js";import"./ContentList.ae8821b8.js";import"./ContentQuery.ca4524c9.js";import"./ContentRenderer.91fc5e49.js";import"./ContentRendererMarkdown.96ad1909.js";import"./ContentSlot.1b20cce5.js";import"./DocumentDrivenEmpty.f8ea1571.js";import"./DocumentDrivenNotFound.ff133885.js";import"./Markdown.1039db45.js";import"./ProseCode.697ff380.js";import{u as R}from"./composables.aac410e4.js";import"./Icon.vue.dd0cfc26.js";import"./_commonjsHelpers.726de751.js";import"./index.68c44503.js";const te=async e=>{var a,s;const{content:t}=M().public,o=typeof(e==null?void 0:e.params)=="function"?e.params():e||{};t.locales.length&&((s=(a=o.where)==null?void 0:a.find(l=>l._locale))!=null&&s._locale||(o.where=o.where||[],o.where.push({_locale:t.defaultLocale})));const n=t.experimental.stripQueryParameters?z(`/navigation/${`${I(o)}.${t.integrity}`}/${J(o)}.json`):z(`/navigation/${I(o)}.${t.integrity}.json`);if(X())return(await r(()=>import("./client-db.fa1a73c1.js"),["./client-db.fa1a73c1.js","./entry.8a1eaa5a.js","./entry.14efcb69.css","./utils.24dbc074.js","./query.7eb16152.js","./index.68c44503.js","./_commonjsHelpers.726de751.js"],import.meta.url).then(l=>l.generateNavigation))(o);const u=await $fetch(n,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:Y(o),previewToken:Z("previewToken").value}});if(typeof u=="string"&&u.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return u};const re=m({emits:{error(e){return!0}},setup(e,{slots:t,emit:o}){const n=P(null),u=L();return F(a=>{if(!u.isHydrating)return o("error",a),n.value=a,!1}),()=>{var a,s;return n.value?(a=t.error)==null?void 0:a.call(t,{error:n}):(s=t.default)==null?void 0:s.call(t)}}}),ie=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"})),oe=m({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t,attrs:o}){const n=P(!1);return D(()=>{n.value=!0}),u=>{var l;if(n.value)return(l=t.default)==null?void 0:l.call(t);const a=t.fallback||t.placeholder;if(a)return a();const s=u.fallback||u.placeholder||"",d=u.fallbackTag||u.placeholderTag||"span";return j(d,o,s)}}}),A=new WeakMap;function ae(e){if(A.has(e))return A.get(e);const t={...e};return t.render?t.render=(o,...n)=>{var u;if(o.mounted$){const a=e.render(o,...n);return a.children===null||typeof a.children=="string"?V(a.type,a.props,a.children,a.patchFlag,a.dynamicProps,a.shapeFlag):v(a)}else return v("div",(u=o.$attrs)!=null?u:o._.attrs)}:t.template&&(t.template=`
      <template v-if="mounted$">${e.template}</template>
      <template v-else><div></div></template>
    `),t.setup=(o,n)=>{var a;const u=P(!1);return D(()=>{u.value=!0}),Promise.resolve(((a=e.setup)==null?void 0:a.call(e,o,n))||{}).then(s=>typeof s!="function"?{...s,mounted$:u}:(...d)=>{if(u.value){const l=s(...d);return l.children===null||typeof l.children=="string"?V(l.type,l.props,l.children,l.patchFlag,l.dynamicProps,l.shapeFlag):v(l)}else return v("div",n.attrs)})},A.set(e,t),t}const ne=Object.freeze(Object.defineProperty({__proto__:null,default:oe,createClientOnly:ae},Symbol.toStringTag,{value:"Module"})),ue=m({name:"DevOnly",setup(e,t){return()=>null}}),le=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"})),se=m({name:"ServerPlaceholder",render(){return j("div")}}),_e=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"})),de=m({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(e,{slots:t}){const o=me({duration:e.duration,throttle:e.throttle}),n=L();return n.hook("page:start",o.start),n.hook("page:finish",o.finish),q(()=>o.clear),()=>v("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${o.progress.value}%`,height:`${e.height}px`,opacity:o.isLoading.value?1:0,background:e.color,backgroundSize:`${100/o.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},t)}});function me(e){const t=P(0),o=P(!1),n=p(()=>1e4/e.duration);let u=null,a=null;function s(){l(),t.value=0,o.value=!0,e.throttle?a=setTimeout(_,e.throttle):_()}function d(){t.value=100,y()}function l(){clearInterval(u),clearTimeout(a),u=null,a=null}function c(g){t.value=Math.min(100,t.value+g)}function y(){l(),setTimeout(()=>{o.value=!1,setTimeout(()=>{t.value=0},400)},500)}function _(){u=setInterval(()=>{c(n.value)},100)}return{progress:t,isLoading:o,start:s,finish:d,clear:l}}const pe=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"})),k=()=>L().$img,b={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},w=e=>{const t=p(()=>({provider:e.provider,preset:e.preset})),o=p(()=>({width:O(e.width),height:O(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),n=p(()=>({...e.modifiers,width:O(e.width),height:O(e.height),format:e.format,quality:e.quality,background:e.background,fit:e.fit}));return{options:t,attrs:o,modifiers:n}},N={...b,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},fe=m({name:"NuxtImg",props:N,setup:(e,t)=>{const o=k(),n=w(e),u=P(!1),a=p(()=>o.getSizes(e.src,{...n.options.value,sizes:e.sizes,modifiers:{...n.modifiers.value,width:O(e.width),height:O(e.height)}})),s=p(()=>{const _=n.attrs.value;return e.sizes&&(_.sizes=a.value.sizes,_.srcset=a.value.srcset),_}),d=p(()=>{let _=e.placeholder;if(_===""&&(_=!0),!_||u.value)return!1;if(typeof _=="string")return _;const g=Array.isArray(_)?_:typeof _=="number"?[_,_]:[10,10];return o(e.src,{...n.modifiers.value,width:g[0],height:g[1],quality:g[2]||50},n.options.value)}),l=p(()=>e.sizes?a.value.src:o(e.src,n.modifiers.value,n.options.value)),c=p(()=>d.value?d.value:l.value);if(e.preload){const _=Object.values(a.value).every(g=>g);R({link:[{rel:"preload",as:"image",..._?{href:a.value.src,imagesizes:a.value.sizes,imagesrcset:a.value.srcset}:{href:c.value}}]})}const y=P(null);return D(()=>{if(d.value){const _=new Image;_.src=l.value,_.onload=()=>{y.value.src=l.value,u.value=!0}}}),()=>v("img",{ref:y,key:c.value,src:c.value,...s.value,...t.attrs})}}),ve=Object.freeze(Object.defineProperty({__proto__:null,imgProps:N,default:fe},Symbol.toStringTag,{value:"Module"})),$={...b,legacyFormat:{type:String,default:null},imgAttrs:{type:Object,default:null}},ge=m({name:"NuxtPicture",props:$,setup:(e,t)=>{var y,_,g;const o=k(),n=w(e),u=p(()=>["png","webp","gif"].includes(a.value)),a=p(()=>H(e.src)),s=p(()=>e.format||a.value==="svg"?"svg":"webp"),d=p(()=>e.legacyFormat?e.legacyFormat:{webp:u.value?"png":"jpeg",svg:"png"}[s.value]||a.value),l=p(()=>s.value==="svg"?[{srcset:e.src}]:(d.value!==s.value?[d.value,s.value]:[s.value]).map(T=>{const{srcset:B,sizes:x,src:C}=o.getSizes(e.src,{...n.options.value,sizes:e.sizes||o.options.screens,modifiers:{...n.modifiers.value,format:T}});return{src:C,type:`image/${T}`,sizes:x,srcset:B}}));if(e.preload){const f=(y=l.value)!=null&&y[1]?1:0,T={rel:"preload",as:"image",imagesrcset:l.value[f].srcset};(g=(_=l.value)==null?void 0:_[f])!=null&&g.sizes&&(T.imagesizes=l.value[f].sizes),R({link:[T]})}const c={...e.imgAttrs};for(const f in t.attrs)f in b&&!(f in c)&&(c[f]=t.attrs[f]);return()=>{var f;return v("picture",{key:l.value[0].src},[...(f=l.value)!=null&&f[1]?[v("source",{type:l.value[1].type,sizes:l.value[1].sizes,srcset:l.value[1].srcset})]:[],v("img",{...n.attrs.value,...c,src:l.value[0].src,sizes:l.value[0].sizes,srcset:l.value[0].srcset})])}}}),ce=Object.freeze(Object.defineProperty({__proto__:null,pictureProps:$,default:ge},Symbol.toStringTag,{value:"Module"})),he=e=>Object.fromEntries(Object.entries(e).filter(([,t])=>t!==void 0)),E=(e,t)=>(o,n)=>(R(()=>e({...he(o),...n.attrs},n)),()=>{var u,a;return t?(a=(u=n.slots).default)==null?void 0:a.call(u):null}),S={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},Ee=m({name:"NoScript",inheritAttrs:!1,props:{...S,title:String,body:Boolean,renderPriority:[String,Number]},setup:E((e,{slots:t})=>{var u;const o={...e},n=(((u=t.default)==null?void 0:u.call(t))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return n&&(o.children=n),{noscript:[o]}})}),ye=m({name:"Link",inheritAttrs:!1,props:{...S,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:E(e=>({link:[e]}))}),Pe=m({name:"Base",inheritAttrs:!1,props:{...S,href:String,target:String},setup:E(e=>({base:e}))}),Se=m({name:"Title",inheritAttrs:!1,setup:E((e,{slots:t})=>{var n,u,a;return{title:((a=(u=(n=t.default)==null?void 0:n.call(t))==null?void 0:u[0])==null?void 0:a.children)||null}})}),Oe=m({name:"Meta",inheritAttrs:!1,props:{...S,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:E(e=>{const t={...e};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})}),Te=m({name:"Style",inheritAttrs:!1,props:{...S,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:E((e,{slots:t})=>{var u,a,s;const o={...e},n=(s=(a=(u=t.default)==null?void 0:u.call(t))==null?void 0:a[0])==null?void 0:s.children;return n&&(o.children=n),{style:[o]}})}),Ae=m({name:"Head",inheritAttrs:!1,setup:(e,t)=>()=>{var o,n;return(n=(o=t.slots).default)==null?void 0:n.call(o)}}),Ie=m({name:"Html",inheritAttrs:!1,props:{...S,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:E(e=>({htmlAttrs:e}),!0)}),Le=m({name:"Body",inheritAttrs:!1,props:{...S,renderPriority:[String,Number]},setup:E(e=>({bodyAttrs:e}),!0)}),h=Object.freeze(Object.defineProperty({__proto__:null,NoScript:Ee,Link:ye,Base:Pe,Title:Se,Meta:Oe,Style:Te,Head:Ae,Html:Ie,Body:Le},Symbol.toStringTag,{value:"Module"}));i(()=>r(()=>import("./Btn.d1f49484.js"),["./Btn.d1f49484.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./CardModal.e9155e69.js"),["./CardModal.e9155e69.js","./query.7eb16152.js","./entry.8a1eaa5a.js","./entry.14efcb69.css","./utils.24dbc074.js","./useGlobal.f405c013.js","./asyncData.c0da358c.js","./CardModal.07504e55.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ChangeFoto.e293a434.js"),["./ChangeFoto.e293a434.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./Contacto.666ad7e6.js"),["./Contacto.666ad7e6.js","./Parrafo.c8cb3ca4.js","./entry.8a1eaa5a.js","./entry.14efcb69.css","./Btn.d1f49484.js"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./Footer.16cb1ca6.js"),["./Footer.16cb1ca6.js","./useGlobal.f405c013.js","./entry.8a1eaa5a.js","./entry.14efcb69.css","./asyncData.c0da358c.js"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./Foto.ef3e4f3a.js"),["./Foto.ef3e4f3a.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./Header.b70d3052.js"),["./Header.b70d3052.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./Load.5c8e5628.js"),["./Load.5c8e5628.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./Metodologia.f5244b96.js"),["./Metodologia.f5244b96.js","./Titular.5c9e11c9.js","./entry.8a1eaa5a.js","./entry.14efcb69.css","./Parrafo.c8cb3ca4.js","./Btn.d1f49484.js"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./MiniaturaBlog.6835410c.js"),["./MiniaturaBlog.6835410c.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ModularGlobo.da81f987.js"),["./ModularGlobo.da81f987.js","./Titular.5c9e11c9.js","./entry.8a1eaa5a.js","./entry.14efcb69.css","./TextAnimated.2945fbf7.js"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ModularInfo.b029f840.js"),["./ModularInfo.b029f840.js","./Parrafo.c8cb3ca4.js","./entry.8a1eaa5a.js","./entry.14efcb69.css","./aos.esm.4e24cfc1.js","./_commonjsHelpers.726de751.js"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./OptionsKeva.97fa56a2.js"),["./OptionsKeva.97fa56a2.js","./PointThree.2ff1d5a6.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./OptionsSmile.2c274d96.js"),["./OptionsSmile.2c274d96.js","./PointThree.2ff1d5a6.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./Parrafo.c8cb3ca4.js"),["./Parrafo.c8cb3ca4.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./PointOne.d610422b.js"),["./PointOne.d610422b.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./PointThree.2ff1d5a6.js"),["./PointThree.2ff1d5a6.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./PointTwo.ed3397d1.js"),["./PointTwo.ed3397d1.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./TextAnimated.2945fbf7.js"),["./TextAnimated.2945fbf7.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./Titular.5c9e11c9.js"),["./Titular.5c9e11c9.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ContentDoc.acf45e44.js"),["./ContentDoc.acf45e44.js","./entry.8a1eaa5a.js","./entry.14efcb69.css","./composables.aac410e4.js","./ContentRenderer.91fc5e49.js","./ContentRendererMarkdown.96ad1909.js","./index.68c44503.js","./_commonjsHelpers.726de751.js","./ContentQuery.ca4524c9.js","./asyncData.c0da358c.js","./query.7eb16152.js","./utils.24dbc074.js"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ContentList.ae8821b8.js"),["./ContentList.ae8821b8.js","./ContentQuery.ca4524c9.js","./entry.8a1eaa5a.js","./entry.14efcb69.css","./asyncData.c0da358c.js","./query.7eb16152.js","./utils.24dbc074.js"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>Promise.resolve().then(()=>Re),void 0,import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ContentQuery.ca4524c9.js"),["./ContentQuery.ca4524c9.js","./entry.8a1eaa5a.js","./entry.14efcb69.css","./asyncData.c0da358c.js","./query.7eb16152.js","./utils.24dbc074.js"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ContentRenderer.91fc5e49.js"),["./ContentRenderer.91fc5e49.js","./ContentRendererMarkdown.96ad1909.js","./entry.8a1eaa5a.js","./entry.14efcb69.css","./index.68c44503.js","./_commonjsHelpers.726de751.js"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ContentRendererMarkdown.96ad1909.js"),["./ContentRendererMarkdown.96ad1909.js","./entry.8a1eaa5a.js","./entry.14efcb69.css","./index.68c44503.js","./_commonjsHelpers.726de751.js"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ContentSlot.1b20cce5.js"),["./ContentSlot.1b20cce5.js","./utils.24dbc074.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./DocumentDrivenEmpty.f8ea1571.js"),["./DocumentDrivenEmpty.f8ea1571.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./DocumentDrivenNotFound.ff133885.js"),["./DocumentDrivenNotFound.ff133885.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./Markdown.1039db45.js"),["./Markdown.1039db45.js","./ContentSlot.1b20cce5.js","./utils.24dbc074.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseA.c2756144.js"),["./ProseA.c2756144.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseBlockquote.6f140708.js"),["./ProseBlockquote.6f140708.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseCode.697ff380.js"),["./ProseCode.697ff380.js","./entry.8a1eaa5a.js","./entry.14efcb69.css","./ProseCode.e63e49c6.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseCodeInline.4402c7f4.js"),["./ProseCodeInline.4402c7f4.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseEm.e6ee671e.js"),["./ProseEm.e6ee671e.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseH1.348343cd.js"),["./ProseH1.348343cd.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseH2.cd14dc9c.js"),["./ProseH2.cd14dc9c.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseH3.3860a3c8.js"),["./ProseH3.3860a3c8.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseH4.e269acc3.js"),["./ProseH4.e269acc3.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseH5.6c764372.js"),["./ProseH5.6c764372.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseH6.56ebd319.js"),["./ProseH6.56ebd319.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseHr.5390e2ee.js"),["./ProseHr.5390e2ee.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseImg.13f8d419.js"),["./ProseImg.13f8d419.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseLi.0be55670.js"),["./ProseLi.0be55670.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseOl.f29b0d47.js"),["./ProseOl.f29b0d47.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseP.e70d33db.js"),["./ProseP.e70d33db.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseStrong.2acf0df3.js"),["./ProseStrong.2acf0df3.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseTable.2d2e8efb.js"),["./ProseTable.2d2e8efb.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseTbody.2be47ace.js"),["./ProseTbody.2be47ace.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseTd.5441fed9.js"),["./ProseTd.5441fed9.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseTh.7c42e492.js"),["./ProseTh.7c42e492.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseThead.fb357831.js"),["./ProseThead.fb357831.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseTr.d42fa80b.js"),["./ProseTr.d42fa80b.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./ProseUl.cf06f899.js"),["./ProseUl.cf06f899.js","./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./welcome.c4cd1e25.js"),["./welcome.c4cd1e25.js","./composables.aac410e4.js","./entry.8a1eaa5a.js","./entry.14efcb69.css","./asyncData.c0da358c.js","./query.7eb16152.js","./utils.24dbc074.js","./aos.esm.4e24cfc1.js","./_commonjsHelpers.726de751.js","./ContentDoc.acf45e44.js","./ContentRenderer.91fc5e49.js","./ContentRendererMarkdown.96ad1909.js","./index.68c44503.js","./ContentQuery.ca4524c9.js","./ContentList.ae8821b8.js","./ContentSlot.1b20cce5.js","./DocumentDrivenEmpty.f8ea1571.js","./DocumentDrivenNotFound.ff133885.js","./Markdown.1039db45.js","./ProseCode.697ff380.js","./ProseCode.e63e49c6.css","./Icon.vue.dd0cfc26.js","./Icon.294af607.css","./CardModal.07504e55.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./entry.8a1eaa5a.js").then(e=>e.aa),["./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>Promise.resolve().then(()=>ie),void 0,import.meta.url).then(e=>e.default||e));i(()=>r(()=>Promise.resolve().then(()=>ne),void 0,import.meta.url).then(e=>e.default||e));i(()=>r(()=>Promise.resolve().then(()=>le),void 0,import.meta.url).then(e=>e.default||e));i(()=>r(()=>Promise.resolve().then(()=>_e),void 0,import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./entry.8a1eaa5a.js").then(e=>e.a8),["./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>Promise.resolve().then(()=>pe),void 0,import.meta.url).then(e=>e.default||e));i(()=>r(()=>Promise.resolve().then(()=>ve),void 0,import.meta.url).then(e=>e.default||e));i(()=>r(()=>Promise.resolve().then(()=>ce),void 0,import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./Icon.c2a07251.js"),["./Icon.c2a07251.js","./entry.8a1eaa5a.js","./entry.14efcb69.css","./Icon.vue.dd0cfc26.js","./Icon.294af607.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>import("./entry.8a1eaa5a.js").then(e=>e.a9),["./entry.8a1eaa5a.js","./entry.14efcb69.css"],import.meta.url).then(e=>e.default||e));i(()=>r(()=>Promise.resolve().then(()=>h),void 0,import.meta.url).then(e=>e.NoScript));i(()=>r(()=>Promise.resolve().then(()=>h),void 0,import.meta.url).then(e=>e.Link));i(()=>r(()=>Promise.resolve().then(()=>h),void 0,import.meta.url).then(e=>e.Base));i(()=>r(()=>Promise.resolve().then(()=>h),void 0,import.meta.url).then(e=>e.Title));i(()=>r(()=>Promise.resolve().then(()=>h),void 0,import.meta.url).then(e=>e.Meta));i(()=>r(()=>Promise.resolve().then(()=>h),void 0,import.meta.url).then(e=>e.Style));i(()=>r(()=>Promise.resolve().then(()=>h),void 0,import.meta.url).then(e=>e.Head));i(()=>r(()=>Promise.resolve().then(()=>h),void 0,import.meta.url).then(e=>e.Html));i(()=>r(()=>Promise.resolve().then(()=>h),void 0,import.meta.url).then(e=>e.Body));const De=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=U(e),o=p(()=>{var u;return typeof((u=t.value)==null?void 0:u.params)=="function"?t.value.params():t.value});if(!o.value&&Q("dd-navigation").value){const{navigation:u}=ee();return{navigation:u}}const{data:n}=await W(`content-navigation-${I(o.value)}`,()=>te(o.value));return{navigation:n}},render(e){const t=G(),{navigation:o}=e,n=s=>v(K,{to:s._path},()=>s.title),u=(s,d)=>v("ul",d?{"data-level":d}:null,s.map(l=>l.children?v("li",null,[n(l),u(l.children,d+1)]):v("li",null,n(l)))),a=s=>u(s,0);return t!=null&&t.default?t.default({navigation:o,...this.$attrs}):a(o)}}),Re=Object.freeze(Object.defineProperty({__proto__:null,default:De},Symbol.toStringTag,{value:"Module"}));export{De as default};
