import _ from"./PointThree.2ff1d5a6.js";import{p as S,D as x,o as v,E as h,F as a,W as I,X as q,V as E,Z as X,u as F,Y as H}from"./entry.8a1eaa5a.js";const L={class:"flex justify-center items-center"},A={class:"w-full"},W={class:"flex justify-end overflow-x-hidden relative"},b={id:"slider"},C={id:"slider-holder",class:"flex justify-start"},j={class:"foto1"},D=H('<div class="arrowSliding"><div class="arrow"></div></div><div class="arrowSliding delay1"><div class="arrow"></div></div><div class="arrowSliding delay2"><div class="arrow"></div></div><div class="arrowSliding delay3"><div class="arrow"></div></div>',4),V=[D],B={__name:"OptionsKeva",props:{items:Array},setup(g){const w=g,u=S(!1),t={individualItem:".foto1",carouselWidth:3*190,carouselId:"#slider",carouselHolderId:"#slider-holder"};return x(()=>{screen.width<1024&&Object.assign(t,{individualItem:".foto1",carouselWidth:1*190,carouselId:"#slider",carouselHolderId:"#slider-holder"});const d=document.querySelector(t.individualItem),i=parseFloat(window.getComputedStyle(d).width)+parseFloat(window.getComputedStyle(d).marginLeft)+parseFloat(window.getComputedStyle(d).marginRight);let c=!1,l=0,n,m=0;document.querySelectorAll(t.carouselId).forEach(function(e){e.style.width=`${t.carouselWidth}px`}),document.querySelectorAll(t.carouselId).forEach(function(e){e.addEventListener("pointerdown",function(o){c=!0,n=e,l=o.pageX,m=parseFloat(e.querySelector(t.carouselHolderId).style.transform.split("translateX(")[1])||0})});const y=function(e,o,s){let f=Math.floor(t.carouselWidth/i),r=o+e,p=s.querySelectorAll(t.individualItem).length-f;r<=0&&r>=-i*p?(u.value=!1,s.querySelector(t.carouselHolderId).style.transform=`translateX(${r}px)`):r<=-i*p?(u.value=!0,s.querySelector(t.carouselHolderId).style.transform=`translateX(${-i*p}px)`):r>=0&&(s.querySelector(t.carouselHolderId).style.transform="translateX(0px)")};document.body.addEventListener("pointermove",function(e){if(console.log(e),console.log(-l),console.log(-e.pageX),console.log(-(l-300)),c==!0&&typeof n<"u"){let o=-(l-e.pageX);y(o,m,document.body)}}),["pointerup","mouseleave"].forEach(function(e){document.body.addEventListener(e,function(o){n=void 0})}),document.querySelectorAll(t.carouselId).forEach(function(e){let o=0;e.addEventListener("wheel",function(s){if(o!==1)++o;else{let f=s.deltaX*-3,r=parseFloat(e.querySelector(t.carouselHolderId).style.transform.split("translateX(")[1])||0;y(f,r,e),o=0}return!1})})}),(d,i)=>{const c=_;return v(),h("div",L,[a("section",A,[a("div",W,[a("div",b,[a("div",C,[(v(!0),h(I,null,q(w.items,(l,n)=>(v(),h("div",{class:"w-180px",key:"it"+n},[a("article",j,[E(c,{title:l.title,text:l.txt},null,8,["title","text"])])]))),128))])]),a("div",{id:"arrowAnim",class:X(["!top-55px",{"option-2":F(u)}])},V,2)])])])}}};export{B as default};
