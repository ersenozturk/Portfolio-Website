//background color on navbar on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY >= 50) {
        nav.classList.add('black');
    }
    else {
        nav.classList.remove('black');
    }
})



//on site load, logo shouldn't be seen
function myFunction() {
    document.getElementById("sig-log").style.opacity = 0;
}

//logo should appear on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY >= 220) {
        document.getElementById("sig-log").style.opacity = 1;
        document.getElementById("sig-log").style.transition = "all .5s ease-in-out";
    }
    else {
        document.getElementById("sig-log").style.opacity = 0;
    }
})




//nav link highlight on scroll
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .links li');
const lg = document.querySelector('logo');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })

    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active')
        }
    })

})




//top page button
mybutton = document.getElementById("my-btn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 175 || document.documentElement.scrollTop > 175) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




//menu collapse on menu item click
const menulinks = document.getElementById("menu-link");
const input = document.getElementById("check");

menulinks.addEventListener("click", menu);

function menu(event) {
    if (event.target instanceof HTMLAnchorElement) {
        check.checked = false;
    }
}



//image slider function
$(document).ready(function () {
    $("#lightSlider").lightSlider({
        item: 3,
        autoWidth: true,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,

        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////

        speed: 400, //ms'
        auto: false,
        loop: true,
        slideEndAnimation: true,
        pause: 2000,

        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',

        rtl: false,
        adaptiveHeight: false,

        vertical: false,
        verticalHeight: 500,
        vThumbWidth: 100,

        thumbItem: 10,
        pager: true,
        gallery: false,
        galleryMargin: 5,
        thumbMargin: 5,
        currentPagerPosition: 'middle',

        enableTouch: true,
        enableDrag: true,
        freeMove: true,
        swipeThreshold: 40,

        responsive: [],

        onBeforeStart: function (el) { },
        onSliderLoad: function (el) { },
        onBeforeSlide: function (el) { },
        onAfterSlide: function (el) { },
        onBeforeNextSlide: function (el) { },
        onBeforePrevSlide: function (el) { }
    });
});





