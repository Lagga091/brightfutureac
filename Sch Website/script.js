var menuBtn = document.querySelector('.navbar .menu-btn');
var menuList = document.querySelector('.navbar .nav-list')

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('active');
})