function divCreating(param) {
    var debugGrid = document.querySelector(param);
    let divCreate = document.createElement('div');
    debugGrid.appendChild(divCreate);

    let params = '.debugGrid div';
    let debugGridDivAll = document.querySelectorAll(params);
    if (debugGridDivAll.length <= 1) {
        divCreating(params);
    }

    if (debugGridDivAll.length >= 2 && debugGridDivAll.length <= 13) {
        let params = '.debugGrid div div';
        let debugGrid = document.querySelectorAll(params);
        if (debugGrid.length <= 12) {
            divCreating(params);
        }
    }
}

function debugGridCreate() {
    let debugGrid = document.querySelector('.debugGrid');
    let debugGridBtnCreate = document.querySelector('.debugGrid-btn__create');
    let debugGridBtnRemove = document.querySelector('.debugGrid-btn__remove');
    debugGridBtnCreate.classList.add("debugGrid-btn__hidden");
    debugGridBtnRemove.classList.remove("debugGrid-btn__hidden");
    debugGrid.classList.remove("debugGrid__z-index-negative");
    divCreating('.debugGrid');
}

function debugGridRemove() {
    let debugGrid = document.querySelector('.debugGrid');
    let debugGridBtnCreate = document.querySelector('.debugGrid-btn__create');
    let debugGridBtnRemove = document.querySelector('.debugGrid-btn__remove');
    debugGridBtnCreate.classList.remove("debugGrid-btn__hidden");
    debugGridBtnRemove.classList.add("debugGrid-btn__hidden");
    debugGrid.classList.add("debugGrid__z-index-negative");
    debugGrid.innerHTML = '';
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkZWJ1Zy1ncmlkLWNyZWF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBkaXZDcmVhdGluZyhwYXJhbSkge1xyXG4gICAgdmFyIGRlYnVnR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW0pO1xyXG4gICAgbGV0IGRpdkNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVidWdHcmlkLmFwcGVuZENoaWxkKGRpdkNyZWF0ZSk7XHJcblxyXG4gICAgbGV0IHBhcmFtcyA9ICcuZGVidWdHcmlkIGRpdic7XHJcbiAgICBsZXQgZGVidWdHcmlkRGl2QWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChwYXJhbXMpO1xyXG4gICAgaWYgKGRlYnVnR3JpZERpdkFsbC5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgIGRpdkNyZWF0aW5nKHBhcmFtcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRlYnVnR3JpZERpdkFsbC5sZW5ndGggPj0gMiAmJiBkZWJ1Z0dyaWREaXZBbGwubGVuZ3RoIDw9IDEzKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9ICcuZGVidWdHcmlkIGRpdiBkaXYnO1xyXG4gICAgICAgIGxldCBkZWJ1Z0dyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHBhcmFtcyk7XHJcbiAgICAgICAgaWYgKGRlYnVnR3JpZC5sZW5ndGggPD0gMTIpIHtcclxuICAgICAgICAgICAgZGl2Q3JlYXRpbmcocGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlYnVnR3JpZENyZWF0ZSgpIHtcclxuICAgIGxldCBkZWJ1Z0dyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVidWdHcmlkJyk7XHJcbiAgICBsZXQgZGVidWdHcmlkQnRuQ3JlYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlYnVnR3JpZC1idG5fX2NyZWF0ZScpO1xyXG4gICAgbGV0IGRlYnVnR3JpZEJ0blJlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWJ1Z0dyaWQtYnRuX19yZW1vdmUnKTtcclxuICAgIGRlYnVnR3JpZEJ0bkNyZWF0ZS5jbGFzc0xpc3QuYWRkKFwiZGVidWdHcmlkLWJ0bl9faGlkZGVuXCIpO1xyXG4gICAgZGVidWdHcmlkQnRuUmVtb3ZlLmNsYXNzTGlzdC5yZW1vdmUoXCJkZWJ1Z0dyaWQtYnRuX19oaWRkZW5cIik7XHJcbiAgICBkZWJ1Z0dyaWQuY2xhc3NMaXN0LnJlbW92ZShcImRlYnVnR3JpZF9fei1pbmRleC1uZWdhdGl2ZVwiKTtcclxuICAgIGRpdkNyZWF0aW5nKCcuZGVidWdHcmlkJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlYnVnR3JpZFJlbW92ZSgpIHtcclxuICAgIGxldCBkZWJ1Z0dyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVidWdHcmlkJyk7XHJcbiAgICBsZXQgZGVidWdHcmlkQnRuQ3JlYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlYnVnR3JpZC1idG5fX2NyZWF0ZScpO1xyXG4gICAgbGV0IGRlYnVnR3JpZEJ0blJlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWJ1Z0dyaWQtYnRuX19yZW1vdmUnKTtcclxuICAgIGRlYnVnR3JpZEJ0bkNyZWF0ZS5jbGFzc0xpc3QucmVtb3ZlKFwiZGVidWdHcmlkLWJ0bl9faGlkZGVuXCIpO1xyXG4gICAgZGVidWdHcmlkQnRuUmVtb3ZlLmNsYXNzTGlzdC5hZGQoXCJkZWJ1Z0dyaWQtYnRuX19oaWRkZW5cIik7XHJcbiAgICBkZWJ1Z0dyaWQuY2xhc3NMaXN0LmFkZChcImRlYnVnR3JpZF9fei1pbmRleC1uZWdhdGl2ZVwiKTtcclxuICAgIGRlYnVnR3JpZC5pbm5lckhUTUwgPSAnJztcclxufSJdLCJmaWxlIjoiZGVidWctZ3JpZC1jcmVhdGUuanMifQ==
