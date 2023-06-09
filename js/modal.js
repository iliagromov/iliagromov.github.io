function animationToggle(element, open, classAnimatedContainer = '.modal-container', classOpen = 'zoomIn', classClose = 'zoomOut') {
    if (open) {
        element.querySelector(classAnimatedContainer).classList.remove(classClose);
        element.querySelector(classAnimatedContainer).classList.add(classOpen);
    } else {
        element.querySelector(classAnimatedContainer).classList.add(classClose);
        element.querySelector(classAnimatedContainer).classList.remove(classOpen);
    }
}

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
                animationToggle(modalId, true);
                modalId.classList.toggle('page_hidden');
                body.classList.toggle('modal-open');
            } else {
                animationToggle(modalId, false);
                setTimeout(() => {
                    modalId.classList.toggle('page_hidden');
                    body.classList.toggle('modal-open');
                }, 100);

            }
        } else if (el.classList.contains('modal') && !el.classList.contains('page_hidden')) {

            el.classList.toggle('page_hidden');
            body.classList.toggle('modal-open');

        } else if (e.key === 'Escape' && el.classList.contains('modal-open')) {
          
            let modals = document.querySelectorAll('.modal');
            modals.forEach((e) => {
                if (!e.classList.contains('page_hidden')) {
                    e.classList.toggle('page_hidden');
                    body.classList.toggle('modal-open');
                }
            });
        }

    }

}

window.addEventListener('click', modalToggle, false);
window.addEventListener('keyup', modalToggle, false);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2RhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhbmltYXRpb25Ub2dnbGUoZWxlbWVudCwgb3BlbiwgY2xhc3NBbmltYXRlZENvbnRhaW5lciA9ICcubW9kYWwtY29udGFpbmVyJywgY2xhc3NPcGVuID0gJ3pvb21JbicsIGNsYXNzQ2xvc2UgPSAnem9vbU91dCcpIHtcclxuICAgIGlmIChvcGVuKSB7XHJcbiAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzQW5pbWF0ZWRDb250YWluZXIpLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NDbG9zZSk7XHJcbiAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzQW5pbWF0ZWRDb250YWluZXIpLmNsYXNzTGlzdC5hZGQoY2xhc3NPcGVuKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzQW5pbWF0ZWRDb250YWluZXIpLmNsYXNzTGlzdC5hZGQoY2xhc3NDbG9zZSk7XHJcbiAgICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKGNsYXNzQW5pbWF0ZWRDb250YWluZXIpLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NPcGVuKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW9kYWxUb2dnbGUoZSkge1xyXG4gICAgbGV0IGVsID0gZS50YXJnZXQ7XHJcbiAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuLW1vZGFsJykgfHxcclxuICAgICAgICBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb3NlLW1vZGFsJykgfHxcclxuICAgICAgICBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsJykgfHxcclxuICAgICAgICBlLmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IG1vZGFsRGF0YUlkID0gZWwuZGF0YXNldC5tb2RhbDtcclxuICAgICAgICBsZXQgbW9kYWxJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1vZGFsRGF0YUlkKTtcclxuICAgICAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBpZiAobW9kYWxJZCkge1xyXG4gICAgICAgICAgICBpZiAobW9kYWxJZC5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2VfaGlkZGVuJykpIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvblRvZ2dsZShtb2RhbElkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIG1vZGFsSWQuY2xhc3NMaXN0LnRvZ2dsZSgncGFnZV9oaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnbW9kYWwtb3BlbicpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uVG9nZ2xlKG1vZGFsSWQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsSWQuY2xhc3NMaXN0LnRvZ2dsZSgncGFnZV9oaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ21vZGFsLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsJykgJiYgIWVsLmNsYXNzTGlzdC5jb250YWlucygncGFnZV9oaWRkZW4nKSkge1xyXG5cclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgncGFnZV9oaWRkZW4nKTtcclxuICAgICAgICAgICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdtb2RhbC1vcGVuJyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdFc2NhcGUnICYmIGVsLmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtb3BlbicpKSB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpO1xyXG4gICAgICAgICAgICBtb2RhbHMuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlLmNsYXNzTGlzdC5jb250YWlucygncGFnZV9oaWRkZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuY2xhc3NMaXN0LnRvZ2dsZSgncGFnZV9oaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoJ21vZGFsLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vZGFsVG9nZ2xlLCBmYWxzZSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIG1vZGFsVG9nZ2xlLCBmYWxzZSk7Il0sImZpbGUiOiJtb2RhbC5qcyJ9
