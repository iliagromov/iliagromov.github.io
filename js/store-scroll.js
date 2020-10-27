// header fixed
const debounce = (fn) => {
    let frame;
    return (...params) => {

        if (frame) {
            cancelAnimationFrame(frame);
        }

        frame = requestAnimationFrame(() => {
            fn(...params);
        });
    }
};

const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
}

document.addEventListener('scroll', debounce(storeScroll), { passive: true });

storeScroll();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzdG9yZS1zY3JvbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaGVhZGVyIGZpeGVkXHJcbmNvbnN0IGRlYm91bmNlID0gKGZuKSA9PiB7XHJcbiAgICBsZXQgZnJhbWU7XHJcbiAgICByZXR1cm4gKC4uLnBhcmFtcykgPT4ge1xyXG5cclxuICAgICAgICBpZiAoZnJhbWUpIHtcclxuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgICBmbiguLi5wYXJhbXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3Qgc3RvcmVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZGF0YXNldC5zY3JvbGwgPSB3aW5kb3cuc2Nyb2xsWTtcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2Uoc3RvcmVTY3JvbGwpLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcblxyXG5zdG9yZVNjcm9sbCgpOyJdLCJmaWxlIjoic3RvcmUtc2Nyb2xsLmpzIn0=
