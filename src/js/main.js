const body = document.querySelector('body');
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


