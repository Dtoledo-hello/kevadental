import{_ as r,x as i,C as l,H as s}from"./entry-4aaed9eb.mjs";const c={__name:"MiniaturaBlog",props:{img:String,title:String,autor:String,fecha:String,url:String},setup(e,{expose:o}){o();const t={props:e};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}},_={class:"h-370px w-260px mx-auto"},a={class:"flex flex-wrap"},p={class:"w-full h-190px"},d=["src"],h={class:"w-full h-140px p-20px bg-gris-100"},x=["href"],f=["innerHTML"],u={class:"w-full bg-rosado-100 h-40px"},m={class:"h-full flex items-center"},g={class:"h-full w-6/12"},w={class:"h-full libre text-white text-10px pl-10px flex items-center justify-start"},b=s("span",{class:"iconify mr-10px","data-icon":"bx:world"},null,-1),v=["innerHTML"],H={class:"w-6/12"},M={class:"h-full libre text-white text-10px pr-10px flex items-center justify-end"},S=s("span",{class:"iconify mr-10px","data-icon":"akar-icons:clock"},null,-1),L=["innerHTML"];function T(e,o,n,t,y,k){return i(),l("article",_,[s("div",a,[s("div",p,[s("img",{src:t.props.img,class:"w-full h-190px"},null,8,d)]),s("div",h,[s("a",{href:"/blogs/"+t.props.url},[s("p",{class:"libre text-gris-400 text-18px font-bold hover:text-rosado-100",innerHTML:t.props.title},null,8,f)],8,x)]),s("div",u,[s("div",m,[s("div",g,[s("p",w,[b,s("span",{innerHTML:t.props.autor},null,8,v)])]),s("div",H,[s("p",M,[S,s("span",{innerHTML:t.props.fecha},null,8,L)])])])])])])}var j=r(c,[["render",T]]);export{j as _};
