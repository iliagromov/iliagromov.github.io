function $(element) {
    if (element) {
        document.querySelectorAll(element);
    } else {
        return false;
    }

}

const body = document.querySelector('body');
// const modal = document.querySelector('.modal');
// const btnCreate = document.querySelector('.js__create-modal');
// const btnClose = document.querySelector('.page__btn_close');
const projectPage = '/project-page/project-page.html';
const about = document.querySelector('.about');

if(false){
    let slides = document.querySelectorAll('#slides .slide');
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide,4000);
    function nextSlide(){
        slides[currentSlide].className = 'slide';
        currentSlide = (currentSlide+1)%slides.length;
        slides[currentSlide].className = 'slide showing';
       
    }
   
}

// function toggleModal() {
//     modal.classList.toggle('page_hidden');
//     body.classList.toggle('page_overflow-hidden');
// }
// if (btnCreate) {
//     btnCreate.addEventListener("click", () => {
//         toggleModal();
//     });
// }
// if (btnClose) {
//     btnClose.addEventListener("click", () => {
//         toggleModal();
//     });
// }

const projects = document.querySelector('.projects');
if (projects) {
    projects.addEventListener('click', (e) => {
        let el = e.target;
        if (el.classList.contains("page__btn")) {
            let code = el.parentElement.dataset.code;
            window.open(`${window.location.origin}${projectPage}#${code}`, '_self');
        }
    });
    projects.addEventListener('mouseover', (e) => {
        let el = e.target;
        if(el.classList.contains('page__btn')){
            el.parentElement.parentElement.classList.add('page__figure_hover')
        }
    });
    projects.addEventListener('mouseout', (e)=>{
        let el = e.target;
        if(el.classList.contains('page__btn')){
            el.parentElement.parentElement.classList.remove('page__figure_hover')
        }
    })
}
// scroll up
let arrowTop = document.querySelector('.btn-scrollTop');

let t = 0;
function scrollUp() {
    let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, ((top + 100) / -10));
        t = setTimeout('scrollUp()', 20);
    } else clearTimeout(t);
    return false;
}

arrowTop.onclick = function () {
    scrollUp();
    
};


window.addEventListener('scroll', function () {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);

    if (pageYOffset < document.documentElement.clientHeight) {
        arrowTop.style.opacity = 0
    } else {
        arrowTop.style.opacity = 1;
    }
});

