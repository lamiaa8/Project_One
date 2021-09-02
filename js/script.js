$(document).ready(function (){


    //for action on nav bar when scrolling
        
    $(window).scroll(function(){
        var scrolling=$(window).scrollTop();
        var scrollIntro=$("#header .intro p").offset().top;
        if(scrolling<=scrollIntro)
        {
            $("#header .site_nav").css("background","#7f999800");
            $("#header .site_nav .logo a").removeClass("logoScroll");
            $("#header .site_nav .nav a").removeClass("linkScroll");
            
        }
        else
        {
        $("#header .site_nav").css("background","#212529");
            $("#header .site_nav .logo a").addClass("logoScroll");
            $("#header .site_nav .nav a").addClass("linkScroll");
        
        }
    });   

   

$("#header #bar_res .btn").click(function(){

    $("#header .menu_bar").slideToggle(1000);
});

    ////////////////mohamed////////////////
//contact
    $('#contact form input').blur(function (){
        if($(this).val().length == 0){
            $(this).parent().find('.alert').show();
        }
        else{
            $(this).parent().find('.alert').hide();
        }

    });
    $('#contact form textarea').blur(function (){
        if($(this).val().length == 0){
            $(this).parent().find('.alert').show();
        }
        else{
            $(this).parent().find('.alert').hide();
        }
    });


});
