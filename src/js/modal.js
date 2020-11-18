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