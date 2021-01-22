const requestURL = `${window.location.origin}/assets/data/data.json`;
const code =  window.location.href.split('#')[1];

function setContent(value, element){
    if(value){
        document.querySelector(element).innerHTML =value;
    } else {
        return false;
    }
}

function createContent(arr){
    let pageContent = document.querySelector('.project-page-content__description');
    let tabNav = document.querySelector('.tab-nav');
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
    let technology = document.querySelector(".project-info__technology .page__list");
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
    let siteLink = document.querySelector(".page__link_site");
    for (let i of json.projects) {
        if (i.code === code) {
            // console.log(i.contetn[0].format);
            setContent(i.format, '.page__subtitle_big');
            setContent(i.title, '.page__title_main');
            setContent(i.description, '.tab-content .page__text');
            
            siteLink.setAttribute("href", i.site_link);
            i.site_short_link ? setContent(i.site_short_link, ".page__link_site") : setContent(i.site_link, ".page__link_site");
            i.pages ? createContent(i.pages) : undefined;
            
            setContent(i.task, ".project-info__task .page__text");
            i.technology ? createTechnology(i.technology) : undefined;
            setContent(i.days, ".project-info__days .page__number_days");
            if(i.days){
                let d = i.days;
                let d0 = d % 10;
                
                switch(true){
                    case d >= 5 && d <= 20:
                        setContent('дней', ".project-info__days .page__number_days_text");
                        break;
                    case d0 == 1:
                        setContent('день', ".project-info__days .page__number_days_text");
                        break;
                    case d0 >= 2 && d0 <= 4:
                        setContent('дня', ".project-info__days .page__number_days_text");
                        break;
                    default:
                        setContent('дней', ".project-info__days .page__number_days_text");
                }
                    
            }
            setContent(i.date, ".project-info__date .page__text");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJyZW5kZXItY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXF1ZXN0VVJMID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vYXNzZXRzL2RhdGEvZGF0YS5qc29uYDtcclxuY29uc3QgY29kZSA9ICB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzFdO1xyXG5cclxuZnVuY3Rpb24gc2V0Q29udGVudCh2YWx1ZSwgZWxlbWVudCl7XHJcbiAgICBpZih2YWx1ZSl7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KS5pbm5lckhUTUwgPXZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoYXJyKXtcclxuICAgIGxldCBwYWdlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXBhZ2UtY29udGVudF9fZGVzY3JpcHRpb24nKTtcclxuICAgIGxldCB0YWJOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLW5hdicpO1xyXG4gICAgZm9yKGxldCBpIG9mIGFycil7XHJcbiAgICAgICAgbGV0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICB0YWJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1jb250ZW50Jyk7XHJcbiAgICAgICAgbGV0IHBhZ2VJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICBwYWdlSW1nLmNsYXNzTGlzdC5hZGQoJ3BhZ2VfX2ltZycpO1xyXG4gICAgICAgICAgICBwYWdlSW1nLnNyYyA9IGkuaW1hZ2VzO1xyXG4gICAgICAgIHRhYkNvbnRlbnQuYXBwZW5kKHBhZ2VJbWcpO1xyXG4gICAgICAgIHBhZ2VDb250ZW50LmFwcGVuZCh0YWJDb250ZW50KTtcclxuXHJcbiAgICAgICAgbGV0IHRhYkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhYkxpbmsuY2xhc3NMaXN0LmFkZCgndGFiLWxpbmsnKTtcclxuICAgICAgICB0YWJMaW5rLmlubmVyVGV4dCA9IGkucGFnZTtcclxuICAgICAgICB0YWJOYXYuYXBwZW5kKHRhYkxpbmspO1xyXG4gICAgfVxyXG4gICBcclxufVxyXG5mdW5jdGlvbiBjcmVhdGVUZWNobm9sb2d5KGFycil7XHJcbiAgICBsZXQgdGVjaG5vbG9neSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pbmZvX190ZWNobm9sb2d5IC5wYWdlX19saXN0XCIpO1xyXG4gICAgdGVjaG5vbG9neS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgZm9yKGxldCBpIG9mIGFycil7XHJcbiAgICAgICAgbGV0IGxpc3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICBsaXN0VGV4dC5jbGFzc0xpc3QuYWRkKCdwYWdlX19saXN0X3RleHQnKTtcclxuICAgICAgICAgICAgbGlzdFRleHQuaW5uZXJUZXh0ID0gaS5uYW1lO1xyXG4gICAgICAgICAgICBsZXQgcGFnZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICAgICAgICAgICAgICBwYWdlTGlzdC5jbGFzc0xpc3QuYWRkKCdwYWdlX19saXN0Jyk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaWNvbiBvZiBpLmNvbnRlbnQpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpc3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RJY29uLmNsYXNzTGlzdC5hZGQoJ3BhZ2VfX2xpc3RfaWNvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VMaXN0LmFwcGVuZChsaXN0SWNvbik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFnZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZUltZy5jbGFzc0xpc3QuYWRkKCdwYWdlX19pbWcnKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlSW1nLnNyYyA9IGljb24uaW1hZ2VzO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RJY29uLmFwcGVuZChwYWdlSW1nKTtcclxuICAgICAgICAgICAgICAgIGxpc3RUZXh0LmFwcGVuZChwYWdlTGlzdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB0ZWNobm9sb2d5LmFwcGVuZChsaXN0VGV4dCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlcihqc29uKSB7XHJcbiAgICBsZXQgc2l0ZUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VfX2xpbmtfc2l0ZVwiKTtcclxuICAgIGZvciAobGV0IGkgb2YganNvbi5wcm9qZWN0cykge1xyXG4gICAgICAgIGlmIChpLmNvZGUgPT09IGNvZGUpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaS5jb250ZXRuWzBdLmZvcm1hdCk7XHJcbiAgICAgICAgICAgIHNldENvbnRlbnQoaS5mb3JtYXQsICcucGFnZV9fc3VidGl0bGVfYmlnJyk7XHJcbiAgICAgICAgICAgIHNldENvbnRlbnQoaS50aXRsZSwgJy5wYWdlX190aXRsZV9tYWluJyk7XHJcbiAgICAgICAgICAgIHNldENvbnRlbnQoaS5kZXNjcmlwdGlvbiwgJy50YWItY29udGVudCAucGFnZV9fdGV4dCcpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2l0ZUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBpLnNpdGVfbGluayk7XHJcbiAgICAgICAgICAgIGkuc2l0ZV9zaG9ydF9saW5rID8gc2V0Q29udGVudChpLnNpdGVfc2hvcnRfbGluaywgXCIucGFnZV9fbGlua19zaXRlXCIpIDogc2V0Q29udGVudChpLnNpdGVfbGluaywgXCIucGFnZV9fbGlua19zaXRlXCIpO1xyXG4gICAgICAgICAgICBpLnBhZ2VzID8gY3JlYXRlQ29udGVudChpLnBhZ2VzKSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldENvbnRlbnQoaS50YXNrLCBcIi5wcm9qZWN0LWluZm9fX3Rhc2sgLnBhZ2VfX3RleHRcIik7XHJcbiAgICAgICAgICAgIGkudGVjaG5vbG9neSA/IGNyZWF0ZVRlY2hub2xvZ3koaS50ZWNobm9sb2d5KSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgc2V0Q29udGVudChpLmRheXMsIFwiLnByb2plY3QtaW5mb19fZGF5cyAucGFnZV9fbnVtYmVyX2RheXNcIik7XHJcbiAgICAgICAgICAgIGlmKGkuZGF5cyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZCA9IGkuZGF5cztcclxuICAgICAgICAgICAgICAgIGxldCBkMCA9IGQgJSAxMDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKHRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgZCA+PSA1ICYmIGQgPD0gMjA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbnRlbnQoJ9C00L3QtdC5JywgXCIucHJvamVjdC1pbmZvX19kYXlzIC5wYWdlX19udW1iZXJfZGF5c190ZXh0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGQwID09IDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvbnRlbnQoJ9C00LXQvdGMJywgXCIucHJvamVjdC1pbmZvX19kYXlzIC5wYWdlX19udW1iZXJfZGF5c190ZXh0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGQwID49IDIgJiYgZDAgPD0gNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29udGVudCgn0LTQvdGPJywgXCIucHJvamVjdC1pbmZvX19kYXlzIC5wYWdlX19udW1iZXJfZGF5c190ZXh0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDb250ZW50KCfQtNC90LXQuScsIFwiLnByb2plY3QtaW5mb19fZGF5cyAucGFnZV9fbnVtYmVyX2RheXNfdGV4dFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRDb250ZW50KGkuZGF0ZSwgXCIucHJvamVjdC1pbmZvX19kYXRlIC5wYWdlX190ZXh0XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpLmZvcm1hdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxubGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG54aHIub3BlbignR0VUJywgcmVxdWVzdFVSTCk7XHJcbnhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XHJcbnhoci5zZW5kKCk7XHJcbnhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgcmVzcG9uc2VPYmogPSB4aHIucmVzcG9uc2U7XHJcbiAgICByZW5kZXIocmVzcG9uc2VPYmopO1xyXG59O1xyXG4iXSwiZmlsZSI6InJlbmRlci1jb250ZW50LmpzIn0=
