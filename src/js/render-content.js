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
