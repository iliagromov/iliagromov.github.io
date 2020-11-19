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

            console.log(e);
            el.classList.toggle('page_hidden');
            body.classList.toggle('modal-open');

        } else if (e.key === 'Escape' && el.classList.contains('modal-open')) {
            console.log('el');
            console.log(e);
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