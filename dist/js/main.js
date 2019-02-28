const menuBtn = document.querySelector('.menu-area');
const bars = document.querySelectorAll('.bar');
const navBar = document.querySelector('.nav-toggle');
const wrapper = document.querySelector('.wrapper');
const body = document.querySelector('#bg-image');
const boxSearch = document.querySelector('.box-search');
const searchShowBtn = document.querySelector('.search-btn');
const searchCloseBtn = document.querySelector('.search-close');


function addAnime(){
    bars.forEach(bar =>
        bar.classList.add('anime'));
}

function removeAnime(){
    bars.forEach(bar =>
        bar.classList.remove('anime'));
}

function hideNav(e){
    if(e.target === wrapper && 
        body.classList.length){
        body.classList.remove('nav-sidebar-open');   
    }
}

function showSearch(){
    boxSearch.classList.add('show');
}

function hideSearch(){
    boxSearch.classList.remove('show');
}

searchCloseBtn.addEventListener('click',hideSearch);
searchShowBtn.addEventListener('click', showSearch);
menuBtn.addEventListener('mouseover',addAnime);
menuBtn.addEventListener('mouseout',removeAnime);
document.addEventListener('click',hideNav);


// jquery===jquery===jquery===jquery===jquery===

$('.menu-area').on('click',function(){
    $('body').toggleClass('nav-sidebar-open');
})
$('.btn-close').on('click',function(){
    $('body').toggleClass('nav-sidebar-open');
    
})

