import{h as q}from"./json-340f5c5c.mjs";import{d as g,t as S,c as b,a as C,h as k}from"./entry-4aaed9eb.mjs";import{u as N}from"./asyncData-284536c0.mjs";import{q as m}from"./query-55066223.mjs";import"./utils-e87a46aa.mjs";import"./utils-af5f0187.mjs";var x=g({props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(a){const{path:t,only:r,without:n,where:i,sort:o,limit:l,skip:f,locale:s,find:d}=S(a),p=b(()=>t.value.includes("/_")),{data:h,refresh:v}=await N(`content-query-${q(a)}`,()=>{let e;return t.value?e=m(t.value):e=m(),r.value&&(e=e.only(r.value)),n.value&&(e=e.without(n.value)),i.value&&(e=e.where(i.value)),o.value&&(e=e.sort(o.value)),l.value&&(e=e.limit(l.value)),f.value&&(e=e.skip(f.value)),s.value&&(e=e.where({_locale:s.value})),d.value==="one"?e.findOne():d.value==="surround"?t.value?e.findSurround(t):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find()):e.find()});return{isPartial:p,data:h,refresh:v}},render(a){var y;const t=C(),{data:r,refresh:n,isPartial:i,path:o,only:l,without:f,where:s,sort:d,limit:p,skip:h,locale:v,find:e}=a,u={path:o,only:l,without:f,where:s,sort:d,limit:p,skip:h,locale:v,find:e};if(u.find==="one"){if(!r&&(t==null?void 0:t["not-found"]))return t["not-found"]({props:u,...this.$attrs});if(r._type&&r._type==="markdown"&&!((y=r==null?void 0:r.body)!=null&&y.children.length))return t.empty({props:u,...this.$attrs})}else if((!r||!r.length)&&t!=null&&t["not-found"])return t["not-found"]({props:u,...this.$attrs});return t!=null&&t.default?t.default({data:r,refresh:n,isPartial:i,props:u,...this.$attrs}):((c,w)=>k("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:c,data:w},null,2)))("default",{data:r,props:u,isPartial:i})}});export{x as default};