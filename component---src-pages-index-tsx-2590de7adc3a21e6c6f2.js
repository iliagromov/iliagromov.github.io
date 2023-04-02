"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[691],{8691:function(e,t,a){var l=a(7294),s=a(8032),c=a(1883);t.Z=e=>{const{wpPage:{blockAbout:t}}=(0,c.useStaticQuery)("3259657118");t&&t.about;return l.createElement("section",{className:"about isAnimate animated",id:"about"},l.createElement("div",{className:"page__title page_transform-uppercase page_text-center"},l.createElement("h2",{className:"page__subtitle_big"},"Обо мне"),l.createElement("h2",{className:"page__title_main page__title-h2 page_bold"},"Обо мне")),l.createElement("div",{className:"wrapper"},l.createElement("div",{className:"about-content"},l.createElement("div",{className:"page__img"},l.createElement(s.S,{width:600,height:700,src:"../../../assets/img/img-about-1.jpg",alt:"logo",__imageData:a(2033)})),l.createElement("div",{className:"page__content"},l.createElement("p",{className:"page__text page_padding-bottom-20"},"Frontend developer профессионально создаю сайты и веб-приложения, также имею навыки в интернет-маркетинге(понимание того что необходимо для сайта с точки зрения бизнеса)."),l.createElement("p",{className:"page__text page_padding-bottom-20"},"Считаю важным и правильным на этапе прототипирования, ",l.createElement("strong",{className:"page_bold"},"совещаться с разработчиком!")),l.createElement("p",{className:"page__text"}," ",l.createElement("strong",{className:"page_bold"},"On default: ")),l.createElement("ul",{className:"page__lists"},l.createElement("li",{className:"page__list page__list_text"},"Адаптивная верстка, даже если не имеете макеты сделаю адаптив по ",l.createElement("strong",{className:"page_bold"},"методологии responsive;")),l.createElement("li",{className:"page__list page__list_text"},"Внедрю микроразметку ",l.createElement("strong",{className:"page_bold"},"schema.org и Open Graph, "),"а также семантическую верстку;")),l.createElement("a",{className:"page__link page__link_active open-modal",href:"","data-modal":"modal-skills"},"Открыть полный список"),l.createElement("p",{className:"page__text"},"В моей команде есть web-дизайнер, верстальщик, seo-специалист, маркетолог."),l.createElement("p",{className:"page__text page_padding-bottom-20"},"В веб-разработке более 5-ти лет."),l.createElement("p",{className:"page__text page_padding-bottom-20"},"Если вы из Москвы, то при сотрудничестве буду рад встретиться лично для обсуждения тонкостей работы!"),l.createElement("button",{className:"page__btn js__create-modal open-modal","data-modal":"modal-callback"},"Связаться со мной")))))}},7161:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(7294),s=a(1562),c=a(1883),n=a(6610),r=a(4120);var i=e=>{const{blockProject:{title:t,days:a,technology:s,pages:i},projectLink:m}=e,o=m||"/projects",p=i&&[i||[]].map(((e,t)=>{var a,s;const c=e.pageLayouts?e.pageLayouts:null,r=c?null===(a=c[0].layout)||void 0===a?void 0:a.sourceUrl:"",i=c?null===(s=c[0].layout)||void 0===s?void 0:s.altText:"";return l.createElement(n.o5,{className:"swiperCardPage",key:"page"+(t+1)}," ",e.pagetitle," ",t+1,l.createElement("img",{src:r,alt:i}))})),d=s&&s.map(((e,t)=>l.createElement("span",{key:"technology"+t},e.name)));return l.createElement("article",{className:"card"},l.createElement(c.Link,{className:"card-link",to:o},l.createElement("div",{className:"card-header"},l.createElement("p",null,"Sep 11th 2020"),l.createElement("h2",null,t)),l.createElement("div",{className:"card-days"},l.createElement("div",{className:"card-days__count"},l.createElement("span",{className:"card-days__count-number"}," ",i.length," "),l.createElement("span",{className:"card-days__count-text"},"Страниц разработано")),l.createElement("div",{className:"card-days__svg"},l.createElement("svg",{className:"half-circle",viewBox:"0 0 106 57"},l.createElement("path",{d:"M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"})))),l.createElement("div",{className:"card-pages"},l.createElement(n.tq,{effect:"cards",grabCursor:!0,modules:[r.c4],className:"swiperCardPages"},p)),l.createElement("div",{className:"tags"},d)))};var m=e=>{const{allWpProject:{nodes:t}}=(0,c.useStaticQuery)("4010970001");function a(e,t){const a=[];for(let l=0;l<e.length;l+=t){const s=e.slice(l,l+t);a.push(s)}return a}const m=a(e.projectsArray,100),o=a(e.projectsArray,5),p="undefined"!=typeof window,d=p?window.innerWidth:0,g="/projects/"===(p?window.location.pathname:"/"),_=d>=768?o:m,u=e.projectsArray&&_.map(((e,t)=>{const a="groupDesktop"+t,s=e.map(((e,t)=>{const s=e.uri,c=a+"__project"+t;return l.createElement(i,{projectLink:s,blockProject:e.blockProject,key:c})}));return l.createElement("div",{className:"projects-content row",key:a},s)})),E=e.projectsArray&&_.map(((t,a)=>{const s="groupMobile"+a,c=e.projectsArray.length>=5?-100:0,m=t.map(((e,t)=>{const a=e.uri,c=s+"__project"+t;return l.createElement(n.o5,{key:c},l.createElement(i,{projectLink:a,blockProject:e.blockProject}))}));return l.createElement("div",{className:"projects-content row",key:s},l.createElement(n.tq,{scrollbar:{hide:!1},spaceBetween:c,modules:[r.LW],className:"projectsSwiper"},m))})),v=d>=768?u:E;return l.createElement("section",{className:"projects isAnimate animated"},l.createElement("div",{className:"page__title page_transform-uppercase page_text-center"},l.createElement("h2",{className:"page__subtitle_big"},"Проекты"),l.createElement("h2",{className:"page__title_main page__title-h2 page_bold"},"Проекты ",t.length,"+")),l.createElement("div",{className:"wrapper"},l.createElement("div",{className:"inner"},v)),!g&&l.createElement(s.rU,{className:"page__btn ",to:"/projects"},"Смотреть проекты"))}},5612:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var l=a(7294),s=a(5881),c=a(2825);const n=e=>{const t=(0,l.useRef)(null),a=l.useRef(null);let s={canvasWidth:1920,canvasHeight:1024};return(0,l.useEffect)((()=>{if(t.current){a.current=t.current.getContext("2d");const e=a.current,l=a.current,c=3,n=10;let r=400;const i=15,m=["#D03AFF","#9724ba","#560d6d"];let o=0;const p=17,d=7;let g,_;function u(){e.canvas.width=e.canvas.offsetParent.offsetWidth,e.canvas.height=window.innerHeight-2*document.querySelector(".header").offsetHeight;let t=e&&e.canvas?e.canvas.height:s.canvasHeight,a=e&&e.canvas?e.canvas.width:s.canvasWidth;r=t<=700||a<=768?200:t<=750?320:t<=1050||a<=768?350:380,g=e.canvas.width/2,_=e.canvas.height/2}function E(){for(let e=0;e<c;e++){let t=e*n+r,a=e*i*Math.PI/180;v(t,m[e],a)}o>=360?o=0:o++}function v(e,t,a){l.strokeStyle=t,l.lineWidth=11,l.beginPath();for(let s=-180;s<180;s++){let t=(s+o)*Math.PI/180,c=0,n=Math.abs(s);n>70&&(c=(n-70)/70),c>=1&&(c=1);let r=e+c*Math.sin((t+a)*d)*p,i=g+Math.cos(t)*r,m=_+Math.sin(t)*r;s>-180?l.lineTo(i,m):l.moveTo(i,m)}l.closePath(),l.stroke()}function b(){l.clearRect(0,0,s.canvasWidth,s.canvasHeight),E(),requestAnimationFrame(b)}u(),b(),window.addEventListener("resize",u)}}),[]),l.createElement("canvas",{ref:t})},r=()=>l.createElement("section",{className:"banner"},l.createElement("div",{className:"canvas"},l.createElement(n,null)),l.createElement("div",{className:"banner__logo"},l.createElement("div",{className:"page__subtitle"},"Ilia",l.createElement("span",{className:"page_bold"},"Gromov")),l.createElement("h1",{className:"page__title"},l.createElement("div",{className:"page__title_first"},"Full ",l.createElement("span",null,"developer")),l.createElement("div",null,"Stack"))));var i=a(1883);var m=()=>{const{wpPage:{blockSkills:e}}=(0,i.useStaticQuery)("1655830456"),t=e.skills.length,a=e.skills,s=a&&a.map(((e,t)=>{let a=e.image?e.image.sourceUrl:"";return l.createElement("div",{className:"skill",key:"skill"+t},l.createElement("div",{className:"pagehristina cosmhristina cosmeticsetics__img"},l.createElement("img",{src:a,alt:""})),l.createElement("div",{className:"page__subtitle"},e.title))}));return l.createElement("section",{className:"skills isAnimate animated"},l.createElement("div",{className:"page__title page_transform-uppercase page_text-center"},l.createElement("div",{className:"page__subtitle_big"},"Навыки"),l.createElement("h2",{className:"page__title_main page__title-h2 page_bold"},"Навыки ",t)),l.createElement("div",{className:"wrapper"},l.createElement("div",{className:"skills-content"},s)))};var o=e=>{const{wpPage:{blockServices:t}}=(0,i.useStaticQuery)("1010416918"),a=t.service,s=a&&a.map(((e,t)=>{let a=e.image?e.image.sourceUrl:"";return l.createElement("div",{className:"service",key:"service"+t},l.createElement("div",{className:"page__img"},l.createElement("img",{src:a,alt:e.title,title:e.title})),l.createElement("h4",{className:"page__subtitle"},e.title),l.createElement("div",{className:"page__description"},l.createElement("h4",{className:"page__subtitle page_text-center"},e.title),l.createElement("p",{className:"page__text"},e.description)))}));return l.createElement("div",null,l.createElement("section",{className:"services isAnimate animated"},l.createElement("div",{className:"page__title page_transform-uppercase page_text-center"},l.createElement("h2",{className:"page__subtitle_big"},"Услуги"),l.createElement("h2",{className:"page__title_main page__title-h2 page_bold"},"Услуги")),l.createElement("div",{className:"wrapper"},l.createElement("div",{className:"services-content"},s))))};var p=e=>{const{wpPage:{blockAdvantages:t}}=(0,i.useStaticQuery)("2693778854"),a=t.advantages,s=a&&a.map(((e,t)=>l.createElement("li",{className:"page__list-item",key:"skill"+t}," ",l.createElement("span",{className:"page__line_before"},e.title))));return l.createElement("section",{className:"advantages isAnimate animated"},l.createElement("div",{className:"page__title page_transform-uppercase page_text-center"},l.createElement("h2",{className:"page__subtitle_big"},"Преимущества"),l.createElement("h2",{className:"page__title_main page__title-h2 page_bold"},"Преимущества")),l.createElement("div",{className:"wrapper"},l.createElement("div",{className:"advantages-content"},l.createElement("ol",{className:"page__lists"},s))))},d=a(7161),g=a(8691);var _=e=>{const{projects:t}=e.wpPage.blockProjects;return l.createElement(l.Fragment,null,l.createElement(r,null),l.createElement(m,null),l.createElement(o,null),l.createElement(p,null),l.createElement(d.Z,{projectsArray:t}),l.createElement(g.Z,null))};var u=e=>{var t;const a=null===(t=e.data)||void 0===t?void 0:t.wpPage;return l.createElement(s.Z,null,l.createElement(c.Z,{title:"Iila Gromov"}),l.createElement(_,{wpPage:a}))}},2033:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/65faddd2b733221079791017dde20ea4/17d17/img-about-1.jpg","srcSet":"/static/65faddd2b733221079791017dde20ea4/4f38b/img-about-1.jpg 150w,\\n/static/65faddd2b733221079791017dde20ea4/7f19d/img-about-1.jpg 300w,\\n/static/65faddd2b733221079791017dde20ea4/17d17/img-about-1.jpg 600w,\\n/static/65faddd2b733221079791017dde20ea4/807b7/img-about-1.jpg 1200w","sizes":"(min-width: 600px) 600px, 100vw"},"sources":[{"srcSet":"/static/65faddd2b733221079791017dde20ea4/a0f50/img-about-1.webp 150w,\\n/static/65faddd2b733221079791017dde20ea4/84476/img-about-1.webp 300w,\\n/static/65faddd2b733221079791017dde20ea4/47435/img-about-1.webp 600w,\\n/static/65faddd2b733221079791017dde20ea4/21b2e/img-about-1.webp 1200w","type":"image/webp","sizes":"(min-width: 600px) 600px, 100vw"}]},"width":600,"height":700}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-2590de7adc3a21e6c6f2.js.map