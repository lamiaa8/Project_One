
////////////////mohamed////////////////
//contact
$(document).ready(function (){
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
