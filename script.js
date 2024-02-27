window.onload = function  (){
    window.addEventListener('scroll',function (e){
        if(window.pageYOffset > 100){
            document.querySelector("div").classList.add('is-scrolling');
        }else{
            document.querySelector("div").classList.remove('is-scrolling');
        }
    })

    const menu_btn = document.querySelector('.humbergar');
    const mobile_menu = document.querySelector('.hamburger-click-container');
    const mobile_cont = document.querySelector('#click-cont');

    menu_btn.addEventListener('click',function(){ // iss-active wohi per  hi hoga jahaper click event hoga matlab hamburger and content ki container
        menu_btn.classList.toggle('iss-active');
        mobile_menu.classList.toggle('iss-active');
        mobile_cont.classList.toggle('iss-active');
    })
}