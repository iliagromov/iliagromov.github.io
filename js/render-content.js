const requestURL = `${window.location.origin}/assets/data/data.json`;
const code =  window.location.href.split('#')[1];
let siteFormat = document.querySelector('.page__subtitle_big');
let mainTitle = document.querySelector('.page__title_main');
let descriptionCompany = document.querySelector('.tab-content .page__text');
let pageContent = document.querySelector('.project-page-content__description');
let tabNav = document.querySelector('.tab-nav');
let siteLink = document.querySelector(".page__link_site");
let task = document.querySelector(".project-info__task .page__text");
let technology = document.querySelector(".project-info__technology .page__list");

let days = document.querySelector(".project-info__days .page__text .page__number_days");
let date = document.querySelector(".project-info__date .page__text ");

function setContent(value, element){
    if(value){
        element.innerHTML =value
    } else {
        return false;
    }
}

function createContent(arr){
   for(let i of arr){
    let tabContent = document.createElement("div");
        tabContent.classList.add('tab-content');
    let pageImg = document.createElement("img");
        pageImg.classList.add('page__img');
        pageImg.src = i.images;
    tabContent.append(pageImg);
    pageContent.append(tabContent);

    let tabLink = document.createElement("div");
    tabLink.classList.add('tab-link');
    tabLink.innerText = i.page;
    tabNav.append(tabLink);
   }
   
}
function createTechnology(arr){
    technology.innerHTML = "";
    for(let i of arr){
        let listText = document.createElement("li");
            listText.classList.add('page__list_text');
            listText.innerText = i.name;
            let pageList = document.createElement("ul");
                pageList.classList.add('page__list');
            for(let icon of i.content){
                let listIcon = document.createElement("li");
                    listIcon.classList.add('page__list_icon');
                    pageList.append(listIcon);
                let pageImg = document.createElement("img");
                    pageImg.classList.add('page__img');
                    pageImg.src = icon.images;
                    listIcon.append(pageImg);
                listText.append(pageList);
            }
        technology.append(listText);
    }
}

function render(json) {
    for (let i of json.projects) {
        if (i.code === code) {
            // console.log(i.contetn[0].format);
            setContent(i.format, siteFormat);
            setContent(i.title, mainTitle);
            setContent(i.description, descriptionCompany);
            
            siteLink.setAttribute("href", i.site_link);
            i.site_short_link ? setContent(i.site_short_link, siteLink) : setContent(i.site_link, siteLink);
            i.pages ? createContent(i.pages) : undefined;
            
            setContent(i.task, task);
            i.technology ? createTechnology(i.technology) : undefined;
            setContent(i.days, days);
            setContent(i.date, date);
            console.log(i.format);
        }
    }
}


let xhr = new XMLHttpRequest();
xhr.open('GET', requestURL);
xhr.responseType = 'json';
xhr.send();
xhr.onload = function () {
    let responseObj = xhr.response;
    render(responseObj);
};



// fetch("assets/data/data.json")
//   .then(response => response.json())
//   .then(json => console.log(json))
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJyZW5kZXItY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXF1ZXN0VVJMID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vYXNzZXRzL2RhdGEvZGF0YS5qc29uYDtcclxuY29uc3QgY29kZSA9ICB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzFdO1xyXG5sZXQgc2l0ZUZvcm1hdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX19zdWJ0aXRsZV9iaWcnKTtcclxubGV0IG1haW5UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX190aXRsZV9tYWluJyk7XHJcbmxldCBkZXNjcmlwdGlvbkNvbXBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLWNvbnRlbnQgLnBhZ2VfX3RleHQnKTtcclxubGV0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtcGFnZS1jb250ZW50X19kZXNjcmlwdGlvbicpO1xyXG5sZXQgdGFiTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYi1uYXYnKTtcclxubGV0IHNpdGVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlX19saW5rX3NpdGVcIik7XHJcbmxldCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWluZm9fX3Rhc2sgLnBhZ2VfX3RleHRcIik7XHJcbmxldCB0ZWNobm9sb2d5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWluZm9fX3RlY2hub2xvZ3kgLnBhZ2VfX2xpc3RcIik7XHJcblxyXG5sZXQgZGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pbmZvX19kYXlzIC5wYWdlX190ZXh0IC5wYWdlX19udW1iZXJfZGF5c1wiKTtcclxubGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaW5mb19fZGF0ZSAucGFnZV9fdGV4dCBcIik7XHJcblxyXG5mdW5jdGlvbiBzZXRDb250ZW50KHZhbHVlLCBlbGVtZW50KXtcclxuICAgIGlmKHZhbHVlKXtcclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9dmFsdWVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KGFycil7XHJcbiAgIGZvcihsZXQgaSBvZiBhcnIpe1xyXG4gICAgbGV0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhYkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRlbnQnKTtcclxuICAgIGxldCBwYWdlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBwYWdlSW1nLmNsYXNzTGlzdC5hZGQoJ3BhZ2VfX2ltZycpO1xyXG4gICAgICAgIHBhZ2VJbWcuc3JjID0gaS5pbWFnZXM7XHJcbiAgICB0YWJDb250ZW50LmFwcGVuZChwYWdlSW1nKTtcclxuICAgIHBhZ2VDb250ZW50LmFwcGVuZCh0YWJDb250ZW50KTtcclxuXHJcbiAgICBsZXQgdGFiTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YWJMaW5rLmNsYXNzTGlzdC5hZGQoJ3RhYi1saW5rJyk7XHJcbiAgICB0YWJMaW5rLmlubmVyVGV4dCA9IGkucGFnZTtcclxuICAgIHRhYk5hdi5hcHBlbmQodGFiTGluayk7XHJcbiAgIH1cclxuICAgXHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlVGVjaG5vbG9neShhcnIpe1xyXG4gICAgdGVjaG5vbG9neS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yKGxldCBpIG9mIGFycil7XHJcbiAgICAgICAgbGV0IGxpc3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICBsaXN0VGV4dC5jbGFzc0xpc3QuYWRkKCdwYWdlX19saXN0X3RleHQnKTtcclxuICAgICAgICAgICAgbGlzdFRleHQuaW5uZXJUZXh0ID0gaS5uYW1lO1xyXG4gICAgICAgICAgICBsZXQgcGFnZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgICAgICAgICBwYWdlTGlzdC5jbGFzc0xpc3QuYWRkKCdwYWdlX19saXN0Jyk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaWNvbiBvZiBpLmNvbnRlbnQpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpc3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RJY29uLmNsYXNzTGlzdC5hZGQoJ3BhZ2VfX2xpc3RfaWNvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VMaXN0LmFwcGVuZChsaXN0SWNvbik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFnZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZUltZy5jbGFzc0xpc3QuYWRkKCdwYWdlX19pbWcnKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlSW1nLnNyYyA9IGljb24uaW1hZ2VzO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RJY29uLmFwcGVuZChwYWdlSW1nKTtcclxuICAgICAgICAgICAgICAgIGxpc3RUZXh0LmFwcGVuZChwYWdlTGlzdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB0ZWNobm9sb2d5LmFwcGVuZChsaXN0VGV4dCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlcihqc29uKSB7XHJcbiAgICBmb3IgKGxldCBpIG9mIGpzb24ucHJvamVjdHMpIHtcclxuICAgICAgICBpZiAoaS5jb2RlID09PSBjb2RlKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGkuY29udGV0blswXS5mb3JtYXQpO1xyXG4gICAgICAgICAgICBzZXRDb250ZW50KGkuZm9ybWF0LCBzaXRlRm9ybWF0KTtcclxuICAgICAgICAgICAgc2V0Q29udGVudChpLnRpdGxlLCBtYWluVGl0bGUpO1xyXG4gICAgICAgICAgICBzZXRDb250ZW50KGkuZGVzY3JpcHRpb24sIGRlc2NyaXB0aW9uQ29tcGFueSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzaXRlTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGkuc2l0ZV9saW5rKTtcclxuICAgICAgICAgICAgaS5zaXRlX3Nob3J0X2xpbmsgPyBzZXRDb250ZW50KGkuc2l0ZV9zaG9ydF9saW5rLCBzaXRlTGluaykgOiBzZXRDb250ZW50KGkuc2l0ZV9saW5rLCBzaXRlTGluayk7XHJcbiAgICAgICAgICAgIGkucGFnZXMgPyBjcmVhdGVDb250ZW50KGkucGFnZXMpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0Q29udGVudChpLnRhc2ssIHRhc2spO1xyXG4gICAgICAgICAgICBpLnRlY2hub2xvZ3kgPyBjcmVhdGVUZWNobm9sb2d5KGkudGVjaG5vbG9neSkgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHNldENvbnRlbnQoaS5kYXlzLCBkYXlzKTtcclxuICAgICAgICAgICAgc2V0Q29udGVudChpLmRhdGUsIGRhdGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpLmZvcm1hdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxubGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG54aHIub3BlbignR0VUJywgcmVxdWVzdFVSTCk7XHJcbnhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XHJcbnhoci5zZW5kKCk7XHJcbnhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgcmVzcG9uc2VPYmogPSB4aHIucmVzcG9uc2U7XHJcbiAgICByZW5kZXIocmVzcG9uc2VPYmopO1xyXG59O1xyXG5cclxuXHJcblxyXG4vLyBmZXRjaChcImFzc2V0cy9kYXRhL2RhdGEuanNvblwiKVxyXG4vLyAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuLy8gICAudGhlbihqc29uID0+IGNvbnNvbGUubG9nKGpzb24pKSJdLCJmaWxlIjoicmVuZGVyLWNvbnRlbnQuanMifQ==
