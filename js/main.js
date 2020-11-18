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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uICQoZWxlbWVudCkge1xyXG4gICAgaWYgKGVsZW1lbnQpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4vLyBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG4vLyBjb25zdCBidG5DcmVhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanNfX2NyZWF0ZS1tb2RhbCcpO1xyXG4vLyBjb25zdCBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlX19idG5fY2xvc2UnKTtcclxuY29uc3QgcHJvamVjdFBhZ2UgPSAnL3Byb2plY3QtcGFnZS9wcm9qZWN0LXBhZ2UuaHRtbCc7XHJcbmNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0Jyk7XHJcblxyXG5pZihmYWxzZSl7XHJcbiAgICBsZXQgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NsaWRlcyAuc2xpZGUnKTtcclxuICAgIGxldCBjdXJyZW50U2xpZGUgPSAwO1xyXG4gICAgbGV0IHNsaWRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChuZXh0U2xpZGUsNDAwMCk7XHJcbiAgICBmdW5jdGlvbiBuZXh0U2xpZGUoKXtcclxuICAgICAgICBzbGlkZXNbY3VycmVudFNsaWRlXS5jbGFzc05hbWUgPSAnc2xpZGUnO1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IChjdXJyZW50U2xpZGUrMSklc2xpZGVzLmxlbmd0aDtcclxuICAgICAgICBzbGlkZXNbY3VycmVudFNsaWRlXS5jbGFzc05hbWUgPSAnc2xpZGUgc2hvd2luZyc7XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgXHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIHRvZ2dsZU1vZGFsKCkge1xyXG4vLyAgICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgncGFnZV9oaWRkZW4nKTtcclxuLy8gICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgncGFnZV9vdmVyZmxvdy1oaWRkZW4nKTtcclxuLy8gfVxyXG4vLyBpZiAoYnRuQ3JlYXRlKSB7XHJcbi8vICAgICBidG5DcmVhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuLy8gICAgICAgICB0b2dnbGVNb2RhbCgpO1xyXG4vLyAgICAgfSk7XHJcbi8vIH1cclxuLy8gaWYgKGJ0bkNsb3NlKSB7XHJcbi8vICAgICBidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4vLyAgICAgICAgIHRvZ2dsZU1vZGFsKCk7XHJcbi8vICAgICB9KTtcclxuLy8gfVxyXG5cclxuY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuaWYgKHByb2plY3RzKSB7XHJcbiAgICBwcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgbGV0IGVsID0gZS50YXJnZXQ7XHJcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucyhcInBhZ2VfX2J0blwiKSkge1xyXG4gICAgICAgICAgICBsZXQgY29kZSA9IGVsLnBhcmVudEVsZW1lbnQuZGF0YXNldC5jb2RlO1xyXG4gICAgICAgICAgICB3aW5kb3cub3BlbihgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufSR7cHJvamVjdFBhZ2V9IyR7Y29kZX1gLCAnX3NlbGYnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XHJcbiAgICAgICAgbGV0IGVsID0gZS50YXJnZXQ7XHJcbiAgICAgICAgaWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdlX19idG4nKSl7XHJcbiAgICAgICAgICAgIGVsLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwYWdlX19maWd1cmVfaG92ZXInKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSk9PntcclxuICAgICAgICBsZXQgZWwgPSBlLnRhcmdldDtcclxuICAgICAgICBpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2VfX2J0bicpKXtcclxuICAgICAgICAgICAgZWwucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3BhZ2VfX2ZpZ3VyZV9ob3ZlcicpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG4vLyBzY3JvbGwgdXBcclxubGV0IGFycm93VG9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1zY3JvbGxUb3AnKTtcclxuXHJcbmxldCB0ID0gMDtcclxuZnVuY3Rpb24gc2Nyb2xsVXAoKSB7XHJcbiAgICBsZXQgdG9wID0gTWF0aC5tYXgoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApO1xyXG4gICAgaWYgKHRvcCA+IDApIHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgKCh0b3AgKyAxMDApIC8gLTEwKSk7XHJcbiAgICAgICAgdCA9IHNldFRpbWVvdXQoJ3Njcm9sbFVwKCknLCAyMCk7XHJcbiAgICB9IGVsc2UgY2xlYXJUaW1lb3V0KHQpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5hcnJvd1RvcC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgc2Nyb2xsVXAoKTtcclxuICAgIFxyXG59O1xyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBhcnJvd1RvcC5oaWRkZW4gPSAocGFnZVlPZmZzZXQgPCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcclxuXHJcbiAgICBpZiAocGFnZVlPZmZzZXQgPCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgYXJyb3dUb3Auc3R5bGUub3BhY2l0eSA9IDBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXJyb3dUb3Auc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuIl0sImZpbGUiOiJtYWluLmpzIn0=
