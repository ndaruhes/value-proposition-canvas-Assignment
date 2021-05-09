// AOS
AOS.init({
    delay: 250,
});

// NAVBAR
let nav = document.querySelector('.navbar');
window.onscroll = function() {
    var scrollPoint = window.scrollY;
    if(scrollPoint > 500){
    }else if(scrollPoint > 150){
        nav.classList.add('navbar-white');
    }else{
        nav.classList.remove('navbar-white');
    }
}

// TYPED JS
const typed = new Typed('#jobify-info', {
    strings: ['solusi tepat cari pekerjaan', 'mudah & cepat', 'fitur lengkap & kekinian'],
    smartBackspace: true,
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    startDelay: 1000,

});