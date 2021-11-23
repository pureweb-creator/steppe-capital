$(document).ready(function(){
    $('.lazy').Lazy();

    $('#phone').phonecode({
        preferCo: 'il'
    });

    if($('#phone').is("[readonly]")){
        $('.country-phone-options').remove();
    }

    $('.input-group__edit').on('click', function(){
        $(this).parent().find("input:not(#nickname),input:not(#email)").removeAttr("readonly").focus();
    });

    $('#phone').mask("(999) 999-99-99",{autoclear: false});

    $('.input-group__eye').on('click', function(){
        $(this).parent().find('.input-group__input').attr('type', function(index, attr){
            return attr == 'text' ? 'password' : 'text';
        });

        $(this).toggleClass('input-group__eye-show');
    });

    $('#copyLinkBtn').on('click',function(){
        var element = "#referalLink";
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();

        $(this).text("Copied!");
    });
});