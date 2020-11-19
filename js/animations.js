const visible = function (target, element) {
    const animated = "animated";
    // Все позиции элемента
    let targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней части окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней части окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой части окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        return element ? element.classList.add(animated) : target.classList.add(animated);
    } else {
        return element ? element.classList.remove(animated) : target.classList.remove(animated);
        // Если элемент не видно, то запускаем этот код
    };
};

function animation(nodeElements, nodeElement) {

    // Получаем нужный элемент
    const NodeElements = document.querySelectorAll(nodeElements);
    let NodeElement;
    if (NodeElements && nodeElement) {
        NodeElement = NodeElements.forEach((element) => {
            element.querySelector(nodeElement);
        });
    }

    if (NodeElements || NodeElement) {
        NodeElements.forEach((element) => {
            visible(element, NodeElement);
        });
    }
}

function animations() {
    // Получаем нужный элемент
    // animation('.class');
    // animation('.class', '.class-from');
    animation('.skills', '.skills-content');
    // find all data-animation
    animation('.isAnimate');
   
}

window.addEventListener('scroll', function () {
    animations();
});

animations();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhbmltYXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHZpc2libGUgPSBmdW5jdGlvbiAodGFyZ2V0LCBlbGVtZW50KSB7XHJcbiAgICBjb25zdCBhbmltYXRlZCA9IFwiYW5pbWF0ZWRcIjtcclxuICAgIC8vINCS0YHQtSDQv9C+0LfQuNGG0LjQuCDRjdC70LXQvNC10L3RgtCwXHJcbiAgICBsZXQgdGFyZ2V0UG9zaXRpb24gPSB7XHJcbiAgICAgICAgdG9wOiB3aW5kb3cucGFnZVlPZmZzZXQgKyB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxyXG4gICAgICAgIGxlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCArIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LFxyXG4gICAgICAgIHJpZ2h0OiB3aW5kb3cucGFnZVhPZmZzZXQgKyB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQsXHJcbiAgICAgICAgYm90dG9tOiB3aW5kb3cucGFnZVlPZmZzZXQgKyB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tXHJcbiAgICB9LFxyXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQsNC10Lwg0L/QvtC30LjRhtC40Lgg0L7QutC90LBcclxuICAgICAgICB3aW5kb3dQb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgdG9wOiB3aW5kb3cucGFnZVlPZmZzZXQsXHJcbiAgICAgICAgICAgIGxlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCxcclxuICAgICAgICAgICAgcmlnaHQ6IHdpbmRvdy5wYWdlWE9mZnNldCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcclxuICAgICAgICAgICAgYm90dG9tOiB3aW5kb3cucGFnZVlPZmZzZXQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICBpZiAodGFyZ2V0UG9zaXRpb24uYm90dG9tID4gd2luZG93UG9zaXRpb24udG9wICYmIC8vINCV0YHQu9C4INC/0L7Qt9C40YbQuNGPINC90LjQttC90LXQuSDRh9Cw0YHRgtC4INGN0LvQtdC80LXQvdGC0LAg0LHQvtC70YzRiNC1INC/0L7Qt9C40YbQuNC4INCy0LXRgNGF0L3QtdC5INGH0LDRgdGC0Lgg0L7QutC90LAsINGC0L4g0Y3Qu9C10LzQtdC90YIg0LLQuNC00LXQvSDRgdCy0LXRgNGF0YNcclxuICAgICAgICB0YXJnZXRQb3NpdGlvbi50b3AgPCB3aW5kb3dQb3NpdGlvbi5ib3R0b20gJiYgLy8g0JXRgdC70Lgg0L/QvtC30LjRhtC40Y8g0LLQtdGA0YXQvdC10Lkg0YfQsNGB0YLQuCDRjdC70LXQvNC10L3RgtCwINC80LXQvdGM0YjQtSDQv9C+0LfQuNGG0LjQuCDQvdC40LbQvdC10Lkg0YfQsNGB0YLQuCDQvtC60L3QsCwg0YLQviDRjdC70LXQvNC10L3RgiDQstC40LTQtdC9INGB0L3QuNC30YNcclxuICAgICAgICB0YXJnZXRQb3NpdGlvbi5yaWdodCA+IHdpbmRvd1Bvc2l0aW9uLmxlZnQgJiYgLy8g0JXRgdC70Lgg0L/QvtC30LjRhtC40Y8g0L/RgNCw0LLQvtC5INGB0YLQvtGA0L7QvdGLINGN0LvQtdC80LXQvdGC0LAg0LHQvtC70YzRiNC1INC/0L7Qt9C40YbQuNC4INC70LXQstC+0Lkg0YfQsNGB0YLQuCDQvtC60L3QsCwg0YLQviDRjdC70LXQvNC10L3RgiDQstC40LTQtdC9INGB0LvQtdCy0LBcclxuICAgICAgICB0YXJnZXRQb3NpdGlvbi5sZWZ0IDwgd2luZG93UG9zaXRpb24ucmlnaHQpIHsgLy8g0JXRgdC70Lgg0L/QvtC30LjRhtC40Y8g0LvQtdCy0L7QuSDRgdGC0L7RgNC+0L3RiyDRjdC70LXQvNC10L3RgtCwINC80LXQvdGM0YjQtSDQv9C+0LfQuNGG0LjQuCDQv9GA0LDQstC+0Lkg0YfQsNGB0YLQuCDQvtC60L3QsCwg0YLQviDRjdC70LXQvNC10L3RgiDQstC40LTQtdC9INGB0L/RgNCw0LLQsFxyXG4gICAgICAgIC8vINCV0YHQu9C4INGN0LvQtdC80LXQvdGCINC/0L7Qu9C90L7RgdGC0YzRjiDQstC40LTQvdC+LCDRgtC+INC30LDQv9GD0YHQutCw0LXQvCDRgdC70LXQtNGD0Y7RidC40Lkg0LrQvtC0XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYW5pbWF0ZWQpIDogdGFyZ2V0LmNsYXNzTGlzdC5hZGQoYW5pbWF0ZWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudCA/IGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShhbmltYXRlZCkgOiB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShhbmltYXRlZCk7XHJcbiAgICAgICAgLy8g0JXRgdC70Lgg0Y3Qu9C10LzQtdC90YIg0L3QtSDQstC40LTQvdC+LCDRgtC+INC30LDQv9GD0YHQutCw0LXQvCDRjdGC0L7RgiDQutC+0LRcclxuICAgIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBhbmltYXRpb24obm9kZUVsZW1lbnRzLCBub2RlRWxlbWVudCkge1xyXG5cclxuICAgIC8vINCf0L7Qu9GD0YfQsNC10Lwg0L3Rg9C20L3Ri9C5INGN0LvQtdC80LXQvdGCXHJcbiAgICBjb25zdCBOb2RlRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG5vZGVFbGVtZW50cyk7XHJcbiAgICBsZXQgTm9kZUVsZW1lbnQ7XHJcbiAgICBpZiAoTm9kZUVsZW1lbnRzICYmIG5vZGVFbGVtZW50KSB7XHJcbiAgICAgICAgTm9kZUVsZW1lbnQgPSBOb2RlRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3Iobm9kZUVsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChOb2RlRWxlbWVudHMgfHwgTm9kZUVsZW1lbnQpIHtcclxuICAgICAgICBOb2RlRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICB2aXNpYmxlKGVsZW1lbnQsIE5vZGVFbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYW5pbWF0aW9ucygpIHtcclxuICAgIC8vINCf0L7Qu9GD0YfQsNC10Lwg0L3Rg9C20L3Ri9C5INGN0LvQtdC80LXQvdGCXHJcbiAgICAvLyBhbmltYXRpb24oJy5jbGFzcycpO1xyXG4gICAgLy8gYW5pbWF0aW9uKCcuY2xhc3MnLCAnLmNsYXNzLWZyb20nKTtcclxuICAgIGFuaW1hdGlvbignLnNraWxscycsICcuc2tpbGxzLWNvbnRlbnQnKTtcclxuICAgIC8vIGZpbmQgYWxsIGRhdGEtYW5pbWF0aW9uXHJcbiAgICBhbmltYXRpb24oJy5pc0FuaW1hdGUnKTtcclxuICAgXHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBhbmltYXRpb25zKCk7XHJcbn0pO1xyXG5cclxuYW5pbWF0aW9ucygpO1xyXG4iXSwiZmlsZSI6ImFuaW1hdGlvbnMuanMifQ==
