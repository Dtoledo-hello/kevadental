import{k as C,p,q as b,s as B,v as k,w as M,u as A,x as E}from"./entry.cbb1488f.js";const H=()=>null;function N(...s){var _,v,D,g,P,x,w;const l=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(l);let[t,f,a={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof f!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");a.server=(_=a.server)!=null?_:!0,a.default=(v=a.default)!=null?v:H,a.lazy=(D=a.lazy)!=null?D:!1,a.immediate=(g=a.immediate)!=null?g:!0;const e=C(),d=()=>e.isHydrating?e.payload.data[t]:e.static.data[t],y=()=>d()!==void 0;e._asyncData[t]||(e._asyncData[t]={data:p((w=(x=d())!=null?x:(P=a.default)==null?void 0:P.call(a))!=null?w:null),pending:p(!y()),error:p(e.payload._errors[t]?b(e.payload._errors[t]):null)});const n={...e._asyncData[t]};n.refresh=n.execute=(o={})=>{if(e._asyncDataPromises[t]){if(o.dedupe===!1)return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if(o._initial&&y())return d();n.pending.value=!0;const i=new Promise((r,c)=>{try{r(f(e))}catch(u){c(u)}}).then(r=>{if(i.cancelled)return e._asyncDataPromises[t];a.transform&&(r=a.transform(r)),a.pick&&(r=z(r,a.pick)),n.data.value=r,n.error.value=null}).catch(r=>{var c,u;if(i.cancelled)return e._asyncDataPromises[t];n.error.value=r,n.data.value=A((u=(c=a.default)==null?void 0:c.call(a))!=null?u:null)}).finally(()=>{i.cancelled||(n.pending.value=!1,e.payload.data[t]=n.data.value,n.error.value&&(e.payload._errors[t]=b(n.error.value)),delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=i,e._asyncDataPromises[t]};const h=()=>n.refresh({_initial:!0}),O=a.server!==!1&&e.payload.serverRendered;{const o=E();if(o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const r=o._nuxtOnBeforeMountCbs;o&&(B(()=>{r.forEach(c=>{c()}),r.splice(0,r.length)}),k(()=>r.splice(0,r.length)))}O&&e.isHydrating&&y()?n.pending.value=!1:o&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?o._nuxtOnBeforeMountCbs.push(h):a.immediate&&h(),a.watch&&M(a.watch,()=>n.refresh());const i=e.hook("app:data:refresh",r=>{if(!r||r.includes(t))return n.refresh()});o&&k(i)}const m=Promise.resolve(e._asyncDataPromises[t]).then(()=>n);return Object.assign(m,n),m}async function R(s){const l=s?Array.isArray(s)?s:[s]:void 0;await C().hooks.callHookParallel("app:data:refresh",l)}function z(s,l){const t={};for(const f of l)t[f]=s[f];return t}export{R as r,N as u};
