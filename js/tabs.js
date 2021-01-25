// Start tabs.js
function tab () {

    'use strict';

    /**
     * tabs
     *
     * @description The Tabs component.
     * @param {Object} options The options hash
     */
    var tabs = function (options) {

        var el = document.querySelector(options.el);
        if(el) {
            var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
            var tabContentContainers = el.querySelectorAll(options.tabContentContainers);
            var activeIndex = 0;
            var initCalled = false;
       
        /**
         * init
         *
         * @description Initializes the component by removing the no-js class from
         *   the component, and attaching event listeners to each of the nav items.
         *   Returns nothing.
         */
        var init = function () {
            if (!initCalled) {
                initCalled = true;
                el.classList.remove('no-js');

                for (var i = 0; i < tabNavigationLinks.length; i++) {
                    var link = tabNavigationLinks[i];
                    handleClick(link, i);
                }
            }
        };

        /**
         * handleClick
         *
         * @description Handles click event listeners on each of the links in the
         *   tab navigation. Returns nothing.
         * @param {HTMLElement} link The link to listen for events on
         * @param {Number} index The index of that link
         */
        var handleClick = function (link, index) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                goToTab(index);
            });
        };

        /**
         * goToTab
         *
         * @description Goes to a specific tab based on index. Returns nothing.
         * @param {Number} index The index of the tab to go to
         */
        var goToTab = function (index) {
            if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
                tabNavigationLinks[activeIndex].classList.remove('is-active');
                tabNavigationLinks[index].classList.add('is-active');
                tabContentContainers[activeIndex] ? tabContentContainers[activeIndex].classList.remove('is-active') : undefined;
                tabContentContainers[index] ? tabContentContainers[index].classList.add('is-active') : undefined;
                activeIndex = index;
            }
        };

        /**
         * Returns init and goToTab
         */
        return {
            init: init,
            goToTab: goToTab
        };
    }
    };

    /**
     * Attach to global namespace
     */
    window.tabs = tabs;

};
// End tabs.js


// Initialise at bottom of HTML in a <script> tag or within your main js bundle somewhere.

// Set 1 


// Set 2
// var myTabs2 = tabs({
//     el: '#tabs2',
//     tabNavigationLinks: '.tab-link',
//     tabContentContainers: '.tab-content'
// });

// Initialise Set 1
window.addEventListener('load',()=>{
    tab();
    var myTabs = tabs({
        el: '#tabs',
        tabNavigationLinks: '.tab-link',
        tabContentContainers: '.tab-content'
    });
    if(myTabs){
        myTabs.init();
        //hotFix
        const tabLinks = document.querySelectorAll('.tab-link');
        if(tabLinks){
            tabLinks[1].click();
        }
      
    }
});

// // Initialise Set 2 
// myTabs2.init();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0YWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFN0YXJ0IHRhYnMuanNcclxuZnVuY3Rpb24gdGFiICgpIHtcclxuXHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB0YWJzXHJcbiAgICAgKlxyXG4gICAgICogQGRlc2NyaXB0aW9uIFRoZSBUYWJzIGNvbXBvbmVudC5cclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBvcHRpb25zIGhhc2hcclxuICAgICAqL1xyXG4gICAgdmFyIHRhYnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cclxuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuZWwpO1xyXG4gICAgICAgIGlmKGVsKSB7XHJcbiAgICAgICAgICAgIHZhciB0YWJOYXZpZ2F0aW9uTGlua3MgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbnMudGFiTmF2aWdhdGlvbkxpbmtzKTtcclxuICAgICAgICAgICAgdmFyIHRhYkNvbnRlbnRDb250YWluZXJzID0gZWwucXVlcnlTZWxlY3RvckFsbChvcHRpb25zLnRhYkNvbnRlbnRDb250YWluZXJzKTtcclxuICAgICAgICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gMDtcclxuICAgICAgICAgICAgdmFyIGluaXRDYWxsZWQgPSBmYWxzZTtcclxuICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGluaXRcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBkZXNjcmlwdGlvbiBJbml0aWFsaXplcyB0aGUgY29tcG9uZW50IGJ5IHJlbW92aW5nIHRoZSBuby1qcyBjbGFzcyBmcm9tXHJcbiAgICAgICAgICogICB0aGUgY29tcG9uZW50LCBhbmQgYXR0YWNoaW5nIGV2ZW50IGxpc3RlbmVycyB0byBlYWNoIG9mIHRoZSBuYXYgaXRlbXMuXHJcbiAgICAgICAgICogICBSZXR1cm5zIG5vdGhpbmcuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghaW5pdENhbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgaW5pdENhbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCduby1qcycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFiTmF2aWdhdGlvbkxpbmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpbmsgPSB0YWJOYXZpZ2F0aW9uTGlua3NbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2sobGluaywgaSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBoYW5kbGVDbGlja1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQGRlc2NyaXB0aW9uIEhhbmRsZXMgY2xpY2sgZXZlbnQgbGlzdGVuZXJzIG9uIGVhY2ggb2YgdGhlIGxpbmtzIGluIHRoZVxyXG4gICAgICAgICAqICAgdGFiIG5hdmlnYXRpb24uIFJldHVybnMgbm90aGluZy5cclxuICAgICAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBsaW5rIFRoZSBsaW5rIHRvIGxpc3RlbiBmb3IgZXZlbnRzIG9uXHJcbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGF0IGxpbmtcclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAobGluaywgaW5kZXgpIHtcclxuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBnb1RvVGFiKGluZGV4KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogZ29Ub1RhYlxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQGRlc2NyaXB0aW9uIEdvZXMgdG8gYSBzcGVjaWZpYyB0YWIgYmFzZWQgb24gaW5kZXguIFJldHVybnMgbm90aGluZy5cclxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWIgdG8gZ28gdG9cclxuICAgICAgICAgKi9cclxuICAgICAgICB2YXIgZ29Ub1RhYiA9IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IGFjdGl2ZUluZGV4ICYmIGluZGV4ID49IDAgJiYgaW5kZXggPD0gdGFiTmF2aWdhdGlvbkxpbmtzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGFiTmF2aWdhdGlvbkxpbmtzW2FjdGl2ZUluZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIHRhYk5hdmlnYXRpb25MaW5rc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB0YWJDb250ZW50Q29udGFpbmVyc1thY3RpdmVJbmRleF0gPyB0YWJDb250ZW50Q29udGFpbmVyc1thY3RpdmVJbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJykgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB0YWJDb250ZW50Q29udGFpbmVyc1tpbmRleF0gPyB0YWJDb250ZW50Q29udGFpbmVyc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJykgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyBpbml0IGFuZCBnb1RvVGFiXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaW5pdDogaW5pdCxcclxuICAgICAgICAgICAgZ29Ub1RhYjogZ29Ub1RhYlxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXR0YWNoIHRvIGdsb2JhbCBuYW1lc3BhY2VcclxuICAgICAqL1xyXG4gICAgd2luZG93LnRhYnMgPSB0YWJzO1xyXG5cclxufTtcclxuLy8gRW5kIHRhYnMuanNcclxuXHJcblxyXG4vLyBJbml0aWFsaXNlIGF0IGJvdHRvbSBvZiBIVE1MIGluIGEgPHNjcmlwdD4gdGFnIG9yIHdpdGhpbiB5b3VyIG1haW4ganMgYnVuZGxlIHNvbWV3aGVyZS5cclxuXHJcbi8vIFNldCAxIFxyXG5cclxuXHJcbi8vIFNldCAyXHJcbi8vIHZhciBteVRhYnMyID0gdGFicyh7XHJcbi8vICAgICBlbDogJyN0YWJzMicsXHJcbi8vICAgICB0YWJOYXZpZ2F0aW9uTGlua3M6ICcudGFiLWxpbmsnLFxyXG4vLyAgICAgdGFiQ29udGVudENvbnRhaW5lcnM6ICcudGFiLWNvbnRlbnQnXHJcbi8vIH0pO1xyXG5cclxuLy8gSW5pdGlhbGlzZSBTZXQgMVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsKCk9PntcclxuICAgIHRhYigpO1xyXG4gICAgdmFyIG15VGFicyA9IHRhYnMoe1xyXG4gICAgICAgIGVsOiAnI3RhYnMnLFxyXG4gICAgICAgIHRhYk5hdmlnYXRpb25MaW5rczogJy50YWItbGluaycsXHJcbiAgICAgICAgdGFiQ29udGVudENvbnRhaW5lcnM6ICcudGFiLWNvbnRlbnQnXHJcbiAgICB9KTtcclxuICAgIGlmKG15VGFicyl7XHJcbiAgICAgICAgbXlUYWJzLmluaXQoKTtcclxuICAgICAgICAvL2hvdEZpeFxyXG4gICAgICAgIGNvbnN0IHRhYkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYi1saW5rJyk7XHJcbiAgICAgICAgaWYodGFiTGlua3Mpe1xyXG4gICAgICAgICAgICB0YWJMaW5rc1sxXS5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gLy8gSW5pdGlhbGlzZSBTZXQgMiBcclxuLy8gbXlUYWJzMi5pbml0KCk7Il0sImZpbGUiOiJ0YWJzLmpzIn0=
