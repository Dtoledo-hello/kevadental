import C from"./PointTwo.ed3397d1.js";import V from"./Parrafo.c8cb3ca4.js";import T from"./Titular.5c9e11c9.js";import D from"./Footer.16cb1ca6.js";import{u as A}from"./composables.aac410e4.js";import{p as f,O as b,Q as k,D as U,o as v,E as h,F as e,V as o,a0 as E,u as a,Z as N,$ as M,a1 as d,a2 as m,W as O,a3 as p}from"./entry.8a1eaa5a.js";import{u as z}from"./useGlobal.f405c013.js";import{a as L}from"./aos.esm.4e24cfc1.js";import"./asyncData.c0da358c.js";import"./_commonjsHelpers.726de751.js";const H=""+globalThis.__publicAssetsURL("images/contacto/KEVA-Dental-Center-Direcci\xF3n.jpg"),I={id:"page-contacto"},S={class:"container mx-auto pt-200px"},B={class:"flex flex-wrap px-2/12"},K={class:"w-full lg:w-8/12"},$={class:"flex flex-wrap"},Q={class:"w-full md:w-6/12 mb-50px inicial","data-aos":"animate__fadeInUp"},P={class:"w-full md:w-6/12 mb-80px inicial","data-aos":"animate__fadeInUp"},R={class:"w-full md:w-6/12 mb-80px inicial","data-aos":"animate__fadeInUp"},W={class:"w-full md:w-6/12 mb-80px inicial","data-aos":"animate__fadeInUp"},F={class:"w-full lg:w-4/12 text-center","data-aos":"animate__fadeInUp"},q=e("section",{class:"pt-50px"},[e("a",{href:"https://www.google.com/maps/dir//keva+dental+center/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x91d59a7144648389:0x2687421c67598d11?sa=X&ved=2ahUKEwjwrsOh6pT5AhU-TjABHcxlAWcQ9Rd6BAhOEAU",target:"_blank"},[e("img",{src:H,alt:"Direcci\xF3n KEVA Dental Center Cl\xEDnica Dental",title:"Direcci\xF3n KEVA Dental Center Cl\xEDnica Dental en Quito",class:"w-full"})])],-1),G={class:"container mx-auto"},J={class:"flex flex-wrap items-center justify-center py-100px"},X=e("div",{class:"w-full lg:w-4/12 text-center lg:text-left"},[e("p",{class:"libre text-49px text-gris-400 inicial","data-aos":"animate__fadeInLeft"},[e("span",{class:"text-rosado-100"},"L\xEDderes"),p(" en "),e("br"),p("innovaci\xF3n "),e("br"),p("odontol\xF3gica")])],-1),Z={class:"w-full lg:w-4/12 pt-50px lg:pt-0"},Y=["onSubmit"],ee={key:0,class:"w-full mb-30px"},te={class:"flex"},ae=e("div",{class:"py-1"},[e("svg",{class:"fill-current h-6 w-6 mr-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"})])],-1),se=["innerHTML"],oe={class:"w-full px-10px text-center"},ne={class:"w-6/12 px-10px"},le={class:"w-6/12 px-10px"},ie={class:"w-6/12 px-10px"},ce=e("div",{class:"w-6/12 px-10px"},[e("input",{class:"input",placeholder:"Whatsapp"})],-1),re={class:"w-full px-10px"},de=e("button",{type:"submit"},[e("div",{class:"btn"},[e("div",{class:"h-full flex items-center justify-center"},"Enviar")])],-1),je={__name:"contacto",async setup(me){let c,_;A({title:"Cont\xE1ctanos | KEVA Dental Dental Concept",meta:[{name:"description",content:"Cont\xE1ctate con nuestra Cl\xEDnica Dental en Quito de KEVA Dental Concept. Tratamientos dentales est\xE9ticamente naturales."}]}),f(null);const t=b({nombre:"",tlf:"",email:"",mensaje:""}),i=b({activar:!1,mensaje:"",clase:""}),w=()=>{if(t.nombre!=""&&t.tlf!=""&&t.email!=""&&t.mensaje!=""){const u={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nombre:t.nombre,tlf:t.tlf,email:t.email,mensaje:t.mensaje})};fetch("/php/send.php",u).then(l=>{l.ok?Object.assign(i,{activar:!0,mensaje:"Solicitud enviada pronto estaremos en contacto contigo.",clase:"bg-teal-100 border-teal-500 text-teal-900"}):Object.assign(i,{activar:!0,mensaje:"Lo sentimos, hubo un error al enviar tu mensaje. Vuelve a intentarlo.",clase:"bg-yellow-100 border-yellow-500 text-yellow-900"})})}else Object.assign(i,{activar:!0,mensaje:"Los campos son obligatorios.",clase:"bg-yellow-100 border-yellow-500 text-yellow-900"})},g=f(!1),{shared:r}=([c,_]=k(()=>z()),c=await c,_(),c);return U(()=>{setTimeout(()=>{L.init({useClassNames:!0,initClassName:!1,animatedClassName:"animate__animated"})},500)}),(u,s)=>{const l=C,x=V,j=T,y=D;return v(),h(O,null,[e("div",I,[e("div",S,[e("div",B,[e("div",K,[e("div",$,[e("div",Q,[o(l,{icon:"akar-icons:whatsapp-fill",text:"098 383 2575"})]),e("div",P,[o(l,{icon:"majesticons:map-marker-line",sizeText:"text-60px",text:"Quito: Paul Rivet <br /> N30-166 y Whimper"})]),e("div",R,[o(l,{icon:"akar-icons:instagram-fill",sizeText:"text-60px",text:"@kevadentalconcept"})]),e("div",W,[o(l,{icon:"eva:facebook-outline",sizeText:"text-60px",text:"@kevadentalcenter"})])])]),e("div",F,[o(l,{icon:"fa6-solid:clock-rotate-left",text:"Horarios"}),o(x,{class:"pt-20px",text:"<b>Lunes a jueves:</b> <br /> 8:00 - 13:00 <br /> 14:00 - 17:00 <br /> <b>Viernes:</b> <br /> 8:00 - 13:00 <br /> <b>S\xE1bado y Domingo:</b> <br /> Cerrado"})])])]),q,e("section",null,[e("div",G,[e("div",J,[X,e("div",Z,[e("form",{class:"flex flex-wrap justify-end inicial","data-aos":"animate__fadeInRight",onSubmit:E(w,["prevent"])},[a(i).activar?(v(),h("div",ee,[e("div",{class:N(["border-t-4 rounded-b px-4 py-3 shadow-md",a(i).clase]),role:"alert"},[e("div",te,[ae,e("div",null,[e("p",{class:"font-bold",innerHTML:a(i).mensaje},null,8,se)])])],2)])):M("",!0),e("div",oe,[o(j,{title:"\xA1D\xE9janos tus datos!",class:"!text-35px text-rosado-100 !pb-0"}),o(x,{text:"un especialista te contactar\xE1",class:"!text-24px pb-50px"})]),e("div",ne,[d(e("input",{class:"input","onUpdate:modelValue":s[0]||(s[0]=n=>a(t).nombre=n),placeholder:"Nombre y Apellido"},null,512),[[m,a(t).nombre]])]),e("div",le,[d(e("input",{class:"input","onUpdate:modelValue":s[1]||(s[1]=n=>a(t).tlf=n),placeholder:"Tel\xE9fono"},null,512),[[m,a(t).tlf]])]),e("div",ie,[d(e("input",{class:"input","onUpdate:modelValue":s[2]||(s[2]=n=>a(t).email=n),placeholder:"correo@mail.com"},null,512),[[m,a(t).email]])]),ce,e("div",re,[d(e("textarea",{class:"textarea","onUpdate:modelValue":s[3]||(s[3]=n=>a(t).mensaje=n),placeholder:"Escribe aqu\xED tu mensaje\u2026"},null,512),[[m,a(t).mensaje]])]),de],40,Y)])])])])]),o(y,{items:a(r).footer.items,logo:a(r).general.logo,copy:a(r).footer.copy,desarrollo:a(r).footer.desarrollo,onModalShow:s[4]||(s[4]=n=>g.value=!0)},null,8,["items","logo","copy","desarrollo"])],64)}}};export{je as default};