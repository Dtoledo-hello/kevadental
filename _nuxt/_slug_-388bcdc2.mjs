import{_ as v}from"./Parrafo-81f403cd.mjs";import{_ as k}from"./MiniaturaBlog-a750f1af.mjs";import{_ as M,u as H,E as f,F as L,G as b,x as o,C as l,H as t,I as c,J as _,D as y,M as i,N as r}from"./entry-4aaed9eb.mjs";import{q as w}from"./query-55066223.mjs";import"./json-340f5c5c.mjs";import"./utils-e87a46aa.mjs";import"./utils-af5f0187.mjs";const C={__name:"[slug]",async setup(T,{expose:g}){g();let a,s;const d=H(),p=([a,s]=f(()=>w("/blogs").where({url:d.params.slug}).findOne()),a=await a,s(),a),u=([a,s]=f(()=>w("/blogs").without(["body","seo"]).where({_path:{$not:p._path}}).limit(4).find()),a=await a,s(),a);L(()=>{setTimeout(()=>{b.init({useClassNames:!0,initClassName:!1,animatedClassName:"animate__animated"})},500)});const n={route:d,article:p,blogs:u,AOS:b};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},N={id:"detalle-blog"},B={class:"container mx-auto pt-150px"},O={class:"flex flex-wrap"},S={class:"content w-full lg:w-8/12"},V={class:"flex flex-wrap"},z={class:"w-full"},A=["innerHTML"],q={class:"w-full"},E=["src"],F={class:"w-full"},G=["innerHTML"],I=["innerHTML"],P={key:2,class:"list"},R=["innerHTML"],j={key:3,class:"list"},D=["innerHTML"],J=["src"],K={class:"w-full lg:w-3/12 lg:ml-1/12 hidden lg:block"},Q={class:"flex flex-wrap"},U={class:"w-full"},W={class:"list-disc mt-20px bg-gris-100 py-20px px-30px"},X={class:"pb-15px ml-30px"},Y={class:"pb-15px ml-30px"},Z={class:"pb-15px ml-30px"},$={class:"pb-15px ml-30px"},tt={class:"pb-15px ml-30px"},et=t("div",{class:"w-full py-60px"},[t("p",{class:"libre text-35px"},"Te puede interesar estos art\xEDculos:")],-1),st={key:0,class:"w-full pb-60px"},ot=t("p",{class:"libre text-16px"},"No hay mas resultados que mostrar...",-1),lt=[ot];function at(T,g,a,s,d,p){const u=v,n=k;return o(),l("div",N,[t("div",B,[t("div",O,[t("div",S,[t("div",V,[t("div",z,[t("p",{class:"text-35px font-bold text-gris-400",innerHTML:s.article.title},null,8,A)]),t("div",q,[t("img",{src:s.article.image,class:"w-full my-40px"},null,8,E)]),t("div",F,[(o(!0),l(c,null,_(s.article.body,(e,x)=>(o(),l("div",{key:"text-"+x},[e.type==="title"?(o(),l("div",{key:0,class:"title",innerHTML:e.content},null,8,G)):r("",!0),e.type==="p"?(o(),l("div",{key:1,class:"parrafo",innerHTML:e.content},null,8,I)):r("",!0),e.type==="list"?(o(),l("div",P,[t("ul",null,[(o(!0),l(c,null,_(e.content,(m,h)=>(o(),l("li",{key:"li"+h,innerHTML:m},null,8,R))),128))])])):r("",!0),e.type==="enumerate"?(o(),l("div",j,[t("ol",null,[(o(!0),l(c,null,_(e.content,(m,h)=>(o(),l("li",{key:"li"+h,innerHTML:m},null,8,D))),128))])])):r("",!0),e.type==="image"?(o(),l("img",{key:4,src:e.content,class:"w-full mx-auto my-40px"},null,8,J)):r("",!0)]))),128))])])]),t("div",K,[t("div",Q,[t("div",U,[y(u,{text:"CATEGOR\xCDAS",class:"font-bold text-18px"}),t("ul",W,[t("li",X,[t("a",{href:"/blogs/category/salud",class:i(["font-bold tex-16px libre text-gris-400 hover:text-rosado-100",{"!text-rosado-100":s.article.category=="Salud"}])}," Salud ",2)]),t("li",Y,[t("a",{href:"/blogs/category/odontologia",class:i(["font-bold tex-16px libre text-gris-400 hover:text-rosado-100",{"!text-rosado-100":s.article.category=="Odontolog\xEDa"}])}," Odontolog\xEDa ",2)]),t("li",Z,[t("a",{href:"/blogs/category/belleza",class:i(["font-bold tex-16px libre text-gris-400 hover:text-rosado-100",{"!text-rosado-100":s.article.category=="Belleza"}])}," Belleza ",2)]),t("li",$,[t("a",{href:"/blogs/category/tips",class:i(["font-bold tex-16px libre text-gris-400 hover:text-rosado-100",{"!text-rosado-100":s.article.category=="Tips"}])}," Tips ",2)]),t("li",tt,[t("a",{href:"/blogs/category/video",class:i(["font-bold tex-16px libre text-gris-400 hover:text-rosado-100",{"!text-rosado-100":s.article.category=="Video"}])}," Video ",2)])])])])]),et,(o(!0),l(c,null,_(s.blogs,(e,x)=>(o(),l("div",{class:"w-full md:w-6/12 xl:w-3/12 mb-80px",key:"blog-"+x},[y(n,{img:e.imagemin,url:e.url,title:e.title,fecha:e.date,autor:e.autor,"data-aos":"animate__fadeIn","data-aos-anchor-placement":"top-bottom"},null,8,["img","url","title","fecha","autor"])]))),128)),s.blogs.length==0?(o(),l("div",st,lt)):r("",!0)])])])}var ut=M(C,[["render",at]]);export{ut as default};
