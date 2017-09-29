$(document).ready(function(){ 
        var $menu = $("#navbar-id");
         $(window).scroll(function(){
            if ( $(this).scrollTop() > 70 && $menu.hasClass("hide-class") ){
                $menu.removeClass("hide-class").addClass("show-class");
            } else if($(this).scrollTop() <= 70 && $menu.hasClass("show-class")) {
                $menu.removeClass("show-class").addClass("hide-class");
            }
        });//scroll
    });
