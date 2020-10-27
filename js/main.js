function $(element) {
    if (element) {
        document.querySelector(element);
    } else {
        return false;
    }

}

const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const btnCreate = document.querySelector('.js__create-modal');
const btnClose = document.querySelector('.page__btn_close');
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
function toggleModal() {
    modal.classList.toggle('page_hidden');
    body.classList.toggle('page_overflow-hidden');
}
if (btnCreate) {
    btnCreate.addEventListener("click", () => {
        toggleModal();
    });
}
if (btnClose) {
    btnClose.addEventListener("click", () => {
        toggleModal();
    });
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




//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uICQoZWxlbWVudCkge1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG5jb25zdCBidG5DcmVhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanNfX2NyZWF0ZS1tb2RhbCcpO1xyXG5jb25zdCBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX19idG5fY2xvc2UnKTtcclxuY29uc3QgcHJvamVjdFBhZ2UgPSAnL3Byb2plY3QtcGFnZS9wcm9qZWN0LXBhZ2UuaHRtbCc7XHJcbmNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0Jyk7XHJcblxyXG5pZihmYWxzZSl7XHJcbiAgICBsZXQgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NsaWRlcyAuc2xpZGUnKTtcclxuICAgIGxldCBjdXJyZW50U2xpZGUgPSAwO1xyXG4gICAgbGV0IHNsaWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChuZXh0U2xpZGUsNDAwMCk7XHJcbiAgICBmdW5jdGlvbiBuZXh0U2xpZGUoKXtcclxuICAgICAgICBzbGlkZXNbY3VycmVudFNsaWRlXS5jbGFzc05hbWUgPSAnc2xpZGUnO1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IChjdXJyZW50U2xpZGUrMSklc2xpZGVzLmxlbmd0aDtcclxuICAgICAgICBzbGlkZXNbY3VycmVudFNsaWRlXS5jbGFzc05hbWUgPSAnc2xpZGUgc2hvd2luZyc7XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgXHJcbn1cclxuZnVuY3Rpb24gdG9nZ2xlTW9kYWwoKSB7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdwYWdlX2hpZGRlbicpO1xyXG4gICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdwYWdlX292ZXJmbG93LWhpZGRlbicpO1xyXG59XHJcbmlmIChidG5DcmVhdGUpIHtcclxuICAgIGJ0bkNyZWF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHRvZ2dsZU1vZGFsKCk7XHJcbiAgICB9KTtcclxufVxyXG5pZiAoYnRuQ2xvc2UpIHtcclxuICAgIGJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgdG9nZ2xlTW9kYWwoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpO1xyXG5pZiAocHJvamVjdHMpIHtcclxuICAgIHByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBsZXQgZWwgPSBlLnRhcmdldDtcclxuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGFnZV9fYnRuXCIpKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2RlID0gZWwucGFyZW50RWxlbWVudC5kYXRhc2V0LmNvZGU7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHtwcm9qZWN0UGFnZX0jJHtjb2RlfWAsICdfc2VsZicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcclxuICAgICAgICBsZXQgZWwgPSBlLnRhcmdldDtcclxuICAgICAgICBpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2VfX2J0bicpKXtcclxuICAgICAgICAgICAgZWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BhZ2VfX2ZpZ3VyZV9ob3ZlcicpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBwcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKT0+e1xyXG4gICAgICAgIGxldCBlbCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygncGFnZV9fYnRuJykpe1xyXG4gICAgICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncGFnZV9fZmlndXJlX2hvdmVyJylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbi8vIHNjcm9sbCB1cFxyXG5sZXQgYXJyb3dUb3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXNjcm9sbFRvcCcpO1xyXG5cclxubGV0IHQgPSAwO1xyXG5mdW5jdGlvbiBzY3JvbGxVcCgpIHtcclxuICAgIGxldCB0b3AgPSBNYXRoLm1heChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCk7XHJcbiAgICBpZiAodG9wID4gMCkge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAoKHRvcCArIDEwMCkgLyAtMTApKTtcclxuICAgICAgICB0ID0gc2V0VGltZW91dCgnc2Nyb2xsVXAoKScsIDIwKTtcclxuICAgIH0gZWxzZSBjbGVhclRpbWVvdXQodCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmFycm93VG9wLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBzY3JvbGxVcCgpO1xyXG4gICAgXHJcbn07XHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGFycm93VG9wLmhpZGRlbiA9IChwYWdlWU9mZnNldCA8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xyXG5cclxuICAgIGlmIChwYWdlWU9mZnNldCA8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIHtcclxuICAgICAgICBhcnJvd1RvcC5zdHlsZS5vcGFjaXR5ID0gMFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhcnJvd1RvcC5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9
