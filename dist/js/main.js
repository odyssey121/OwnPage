const menuBtn = document.querySelector('.menu-area');
const bars = document.querySelectorAll('.bar');
const navBar = document.querySelector('.nav-toggle');


function addAnime(){
    bars.forEach(bar =>
        bar.classList.add('anime'));
}

function removeAnime(){
    bars.forEach(bar =>
        bar.classList.remove('anime'));
}

menuBtn.addEventListener('mouseover',addAnime);
menuBtn.addEventListener('mouseout',removeAnime);

// jquery===jquery===jquery===jquery===jquery===

$('.menu-area').on('click',function(){
    $('.nav-toggle').toggleClass('show-nav');
    $('header').toggleClass('content-toggle');
})
$('#close').on('click',function(){
    $('.nav-toggle').toggleClass('show-nav');
    $('header').toggleClass('content-toggle');
})

