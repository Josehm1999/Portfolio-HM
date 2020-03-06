$(document).ready(function () {
    // Variables
    var change_theme = $(".change_theme");
    const menuBTn= $('.menu-btn');
    const hamburger=$('.menu-btn_burger');
    const nav=$('.nav');
    const Menu_nav=$('.menu-nav');
    const Menu_item=$('li.menu-nav_item');
    let showMenu=false;
   

    // Boton_Menú
    menuBTn.click(function(){
        if(!showMenu){
            hamburger.addClass('open');
            nav.addClass('open');
            Menu_nav.addClass('open');
            Menu_item.addClass('open');
            showMenu=true;
        }else{
            hamburger.removeClass('open');
            nav.removeClass('open');
            Menu_nav.removeClass('open');
            Menu_item.removeClass('open');
            showMenu=false;
        }
    });

    // Cambiar Theme
    change_theme.click(function () {
        if (change_theme.val() == "Dark") {
            $('.home').addClass("light");
            change_theme.val("Light");
        } else {
            $('.home').removeClass("light");
            change_theme.val("Dark");
        };
    });
});