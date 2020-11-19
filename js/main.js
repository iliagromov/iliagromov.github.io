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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbmNvbnN0IHByb2plY3RQYWdlID0gJy9wcm9qZWN0LXBhZ2UvcHJvamVjdC1wYWdlLmh0bWwnO1xyXG5jb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dCcpO1xyXG5cclxuaWYoZmFsc2Upe1xyXG4gICAgbGV0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzbGlkZXMgLnNsaWRlJyk7XHJcbiAgICBsZXQgY3VycmVudFNsaWRlID0gMDtcclxuICAgIGxldCBzbGlkZUludGVydmFsID0gc2V0SW50ZXJ2YWwobmV4dFNsaWRlLDQwMDApO1xyXG4gICAgZnVuY3Rpb24gbmV4dFNsaWRlKCl7XHJcbiAgICAgICAgc2xpZGVzW2N1cnJlbnRTbGlkZV0uY2xhc3NOYW1lID0gJ3NsaWRlJztcclxuICAgICAgICBjdXJyZW50U2xpZGUgPSAoY3VycmVudFNsaWRlKzEpJXNsaWRlcy5sZW5ndGg7XHJcbiAgICAgICAgc2xpZGVzW2N1cnJlbnRTbGlkZV0uY2xhc3NOYW1lID0gJ3NsaWRlIHNob3dpbmcnO1xyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgIFxyXG59XHJcblxyXG5cclxuY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuaWYgKHByb2plY3RzKSB7XHJcbiAgICBwcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgbGV0IGVsID0gZS50YXJnZXQ7XHJcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhcInBhZ2VfX2J0blwiKSkge1xyXG4gICAgICAgICAgICBsZXQgY29kZSA9IGVsLnBhcmVudEVsZW1lbnQuZGF0YXNldC5jb2RlO1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbihgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7cHJvamVjdFBhZ2V9IyR7Y29kZX1gLCAnX3NlbGYnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XHJcbiAgICAgICAgbGV0IGVsID0gZS50YXJnZXQ7XHJcbiAgICAgICAgaWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdlX19idG4nKSl7XHJcbiAgICAgICAgICAgIGVsLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwYWdlX19maWd1cmVfaG92ZXInKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSk9PntcclxuICAgICAgICBsZXQgZWwgPSBlLnRhcmdldDtcclxuICAgICAgICBpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2VfX2J0bicpKXtcclxuICAgICAgICAgICAgZWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2VfX2ZpZ3VyZV9ob3ZlcicpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9
