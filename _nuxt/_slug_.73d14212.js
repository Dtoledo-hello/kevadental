import L from"./Parrafo.9f0e7ba7.js";import v from"./MiniaturaBlog.76d4ae60.js";import C from"./Footer.044c7cf9.js";import{a as N,Q as g,p as B,D as V,o as s,E as l,F as t,u as o,W as c,X as m,V as f,Z as d,$ as r}from"./entry.cbb1488f.js";import{u as $}from"./composables.07a52bc1.js";import{q as y}from"./query.c3f3e94f.js";import{u as z}from"./useGlobal.bcddf2da.js";import{a as O}from"./aos.esm.4e24cfc1.js";import"./asyncData.4a7504c3.js";import"./utils.09d7a344.js";import"./_commonjsHelpers.726de751.js";const S={id:"detalle-blog"},q={class:"container mx-auto pt-150px"},A={class:"flex flex-wrap"},E={class:"content w-full lg:w-8/12"},F={class:"flex flex-wrap"},G={class:"w-full"},R=["innerHTML"],D={class:"w-full"},I=["src","alt","title"],P={class:"w-full"},Q=["innerHTML"],W=["innerHTML"],X={key:2,class:"list"},Z=["innerHTML"],j={key:3,class:"list"},J=["innerHTML"],K=["src","alt","title"],U={class:"w-full lg:w-3/12 lg:ml-1/12 hidden lg:block"},Y={class:"flex flex-wrap"},tt={class:"w-full"},et={class:"list-disc mt-20px bg-gris-100 py-20px px-30px"},ot={class:"pb-15px ml-30px"},st={class:"pb-15px ml-30px"},lt={class:"pb-15px ml-30px"},at={class:"pb-15px ml-30px"},it={class:"pb-15px ml-30px"},nt=t("div",{class:"w-full py-60px"},[t("p",{class:"libre text-35px"},"Te puede interesar estos art\xEDculos:")],-1),rt={key:0,class:"w-full pb-60px"},ct=t("p",{class:"libre text-16px"},"No hay mas resultados que mostrar...",-1),dt=[ct],kt={__name:"[slug]",async setup(_t){let i,n;const w=N(),a=([i,n]=g(()=>y("/blogs").where({url:w.params.slug}).findOne()),i=await i,n(),i),h=([i,n]=g(()=>y("/blogs").without(["body","seo"]).where({_path:{$not:a._path}}).limit(4).find()),i=await i,n(),i);$({title:a.seo.title,meta:[{name:"description",content:a.seo.description}]});const T=B(!1),{shared:_}=([i,n]=g(()=>z()),i=await i,n(),i);return V(()=>{setTimeout(()=>{O.init({useClassNames:!0,initClassName:!1,animatedClassName:"animate__animated"})},500)}),(mt,b)=>{const M=L,k=v,H=C;return s(),l(c,null,[t("div",S,[t("div",q,[t("div",A,[t("div",E,[t("div",F,[t("div",G,[t("p",{class:"text-35px font-bold text-gris-400",innerHTML:o(a).title},null,8,R)]),t("div",D,[t("img",{src:o(a).image,alt:o(a).altimage,title:o(a).titleimage,class:"w-full my-40px"},null,8,I)]),t("div",P,[(s(!0),l(c,null,m(o(a).body,(e,p)=>(s(),l("div",{key:"text-"+p},[e.type==="title"?(s(),l("div",{key:0,class:"title",innerHTML:e.content},null,8,Q)):r("",!0),e.type==="p"?(s(),l("div",{key:1,class:"parrafo",innerHTML:e.content},null,8,W)):r("",!0),e.type==="list"?(s(),l("div",X,[t("ul",null,[(s(!0),l(c,null,m(e.content,(u,x)=>(s(),l("li",{key:"li"+x,innerHTML:u},null,8,Z))),128))])])):r("",!0),e.type==="enumerate"?(s(),l("div",j,[t("ol",null,[(s(!0),l(c,null,m(e.content,(u,x)=>(s(),l("li",{key:"li"+x,innerHTML:u},null,8,J))),128))])])):r("",!0),e.type==="image"?(s(),l("img",{key:4,src:e.content,alt:e.alt,title:e.title,class:"w-full mx-auto my-40px"},null,8,K)):r("",!0)]))),128))])])]),t("div",U,[t("div",Y,[t("div",tt,[f(M,{text:"CATEGOR\xCDAS",class:"font-bold text-18px"}),t("ul",et,[t("li",ot,[t("a",{href:"/blogs/category/salud",class:d(["font-bold tex-16px libre text-gris-400 hover:text-rosado-100",{"!text-rosado-100":o(a).category=="Salud"}])}," Salud ",2)]),t("li",st,[t("a",{href:"/blogs/category/odontologia",class:d(["font-bold tex-16px libre text-gris-400 hover:text-rosado-100",{"!text-rosado-100":o(a).category=="Odontolog\xEDa"}])}," Odontolog\xEDa ",2)]),t("li",lt,[t("a",{href:"/blogs/category/belleza",class:d(["font-bold tex-16px libre text-gris-400 hover:text-rosado-100",{"!text-rosado-100":o(a).category=="Belleza"}])}," Belleza ",2)]),t("li",at,[t("a",{href:"/blogs/category/tips",class:d(["font-bold tex-16px libre text-gris-400 hover:text-rosado-100",{"!text-rosado-100":o(a).category=="Tips"}])}," Tips ",2)]),t("li",it,[t("a",{href:"/blogs/category/video",class:d(["font-bold tex-16px libre text-gris-400 hover:text-rosado-100",{"!text-rosado-100":o(a).category=="Video"}])}," Video ",2)])])])])]),nt,(s(!0),l(c,null,m(o(h),(e,p)=>(s(),l("div",{class:"w-full md:w-6/12 xl:w-3/12 mb-80px",key:"blog-"+p},[f(k,{clasess:"h-full",img:e.imagemin,altimagemin:e.altimagemin,titleimagemin:e.titleimage,url:e.url,title:e.title,fecha:e.date,autor:e.autor,"data-aos":"animate__fadeIn","data-aos-anchor-placement":"top-bottom"},null,8,["img","altimagemin","titleimagemin","url","title","fecha","autor"])]))),128)),o(h).length==0?(s(),l("div",rt,dt)):r("",!0)])])]),f(H,{items:o(_).footer.items,logo:o(_).general.logo,copy:o(_).footer.copy,desarrollo:o(_).footer.desarrollo,onModalShow:b[0]||(b[0]=e=>T.value=!0)},null,8,["items","logo","copy","desarrollo"])],64)}}};export{kt as default};