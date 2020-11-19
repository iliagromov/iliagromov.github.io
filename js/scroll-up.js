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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JvbGwtdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc2Nyb2xsIHVwXHJcbmxldCBhcnJvd1RvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tc2Nyb2xsVG9wJyk7XHJcblxyXG5sZXQgdCA9IDA7XHJcbmZ1bmN0aW9uIHNjcm9sbFVwKCkge1xyXG4gICAgbGV0IHRvcCA9IE1hdGgubWF4KGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKTtcclxuICAgIGlmICh0b3AgPiAwKSB7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbEJ5KDAsICgodG9wICsgMTAwKSAvIC0xMCkpO1xyXG4gICAgICAgIHQgPSBzZXRUaW1lb3V0KCdzY3JvbGxVcCgpJywgMjApO1xyXG4gICAgfSBlbHNlIGNsZWFyVGltZW91dCh0KTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuYXJyb3dUb3Aub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHNjcm9sbFVwKCk7XHJcbiAgICBcclxufTtcclxuXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgYXJyb3dUb3AuaGlkZGVuID0gKHBhZ2VZT2Zmc2V0IDwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XHJcblxyXG4gICAgaWYgKHBhZ2VZT2Zmc2V0IDwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xyXG4gICAgICAgIGFycm93VG9wLnN0eWxlLm9wYWNpdHkgPSAwXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFycm93VG9wLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgfVxyXG59KTsiXSwiZmlsZSI6InNjcm9sbC11cC5qcyJ9
