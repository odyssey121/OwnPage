const menuBtn = document.querySelector('.menu-area');
const bars = document.querySelectorAll('.bar');
const navBar = document.querySelector('#nav-bar');


function addAnime(){
    bars.forEach(bar =>
        bar.classList.add('anime'));
}

function removeAnime(){
    bars.forEach(bar =>
        bar.classList.remove('anime'));
}

function showNav(){
    navBar.classList.remove('over-left');
    console.log('test');
}
menuBtn.addEventListener('mouseover',addAnime);
menuBtn.addEventListener('mouseout',removeAnime);

menuBtn.addEventListener('click', showNav);
