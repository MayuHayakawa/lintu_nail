const menubtn = document.getElementById('hamburger');
const nav = document.getElementById('mobile_menu');

menubtn.addEventListener('click', () => {
    hamburger();
});

function hamburger() {
    document.getElementById('line1').classList.toggle('line_1');
    document.getElementById('line2').classList.toggle('line_2');
    document.getElementById('line3').classList.toggle('line_3');
    nav.classList.toggle('mobile_menu_in');
    //bodyScrollLock.disableBodyScroll(nav);
}

