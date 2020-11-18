function modalToggle(e) {
    let el = e.target;
    if (el.classList.contains('open-modal') ||
        el.classList.contains('close-modal') ||
        el.classList.contains('modal') ||
        e.key === 'Escape') {
        e.preventDefault();
        let modalDataId = el.dataset.modal;
        let modalId = document.getElementById(modalDataId);
        let body = document.querySelector('body');
        if (modalId) {
            if (modalId.classList.contains('page_hidden')) {
                modalId.classList.toggle('page_hidden');
                body.classList.toggle('modal-open');
            } else {
                modalId.classList.toggle('page_hidden');
                body.classList.toggle('modal-open');
            }
        } else if (el.classList.contains('modal') && !el.classList.contains('page_hidden')) {
           
            console.log(e);
            el.classList.toggle('page_hidden');
            body.classList.toggle('modal-open');

        } else if (e.key === 'Escape' && el.classList.contains('modal-open')) {
            console.log('el');
            console.log(e);
            let modals = document.querySelectorAll('.modal');
            modals.forEach((e)=>{
                if(!e.classList.contains('page_hidden')){
                    e.classList.toggle('page_hidden');
                    body.classList.toggle('modal-open');
                }
            });
        }

    }

}

window.addEventListener('click', modalToggle, false);
window.addEventListener('keyup', modalToggle, false);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2RhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtb2RhbFRvZ2dsZShlKSB7XHJcbiAgICBsZXQgZWwgPSBlLnRhcmdldDtcclxuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4tbW9kYWwnKSB8fFxyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5jb250YWlucygnY2xvc2UtbW9kYWwnKSB8fFxyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwnKSB8fFxyXG4gICAgICAgIGUua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgbW9kYWxEYXRhSWQgPSBlbC5kYXRhc2V0Lm1vZGFsO1xyXG4gICAgICAgIGxldCBtb2RhbElkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobW9kYWxEYXRhSWQpO1xyXG4gICAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIGlmIChtb2RhbElkKSB7XHJcbiAgICAgICAgICAgIGlmIChtb2RhbElkLmNsYXNzTGlzdC5jb250YWlucygncGFnZV9oaWRkZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgbW9kYWxJZC5jbGFzc0xpc3QudG9nZ2xlKCdwYWdlX2hpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdtb2RhbC1vcGVuJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbElkLmNsYXNzTGlzdC50b2dnbGUoJ3BhZ2VfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ21vZGFsLW9wZW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbCcpICYmICFlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2VfaGlkZGVuJykpIHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ3BhZ2VfaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbW9kYWwtb3BlbicpO1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnRXNjYXBlJyAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLW9wZW4nKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWwnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIGxldCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwnKTtcclxuICAgICAgICAgICAgbW9kYWxzLmZvckVhY2goKGUpPT57XHJcbiAgICAgICAgICAgICAgICBpZighZS5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2VfaGlkZGVuJykpe1xyXG4gICAgICAgICAgICAgICAgICAgIGUuY2xhc3NMaXN0LnRvZ2dsZSgncGFnZV9oaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ21vZGFsLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vZGFsVG9nZ2xlLCBmYWxzZSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIG1vZGFsVG9nZ2xlLCBmYWxzZSk7Il0sImZpbGUiOiJtb2RhbC5qcyJ9
