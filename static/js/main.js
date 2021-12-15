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

    $('#burger').on('click', function(event){
        event.preventDefault();
        $('.overlay').addClass('active');
        $('.mobile-menu').addClass('active');
        $('html,body').css("overflow","hidden");
    });

    $('.overlay').on('click', function(event){
        event.stopPropagation();
        $(this).removeClass('active');
        $('.mobile-menu').removeClass('active');
        $('html,body').css("overflow","auto");
    }).children().click(function(e){
        return false;
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

    // $('.table__line:not(.table__line_non_active)').on('click', function(event){
    //     event.stopPropagation;
    //     $(this).parent().find('.expand').first().toggle('slow');
    //     $(this).find('.cell__expand-btn').first().toggleClass('active');
    // });

    

    $('tbody tr[data-node-id]').each(function(index,item){
        if(!(index&1)){
            // item.style.backgroundColor = "#F8F8F8";
        }
        $.each(this.attributes, function(i,a){
            if(a.name=='data-node-id'){
                if(!(parseInt(a.value.toString().split('.').join('')) & 1)){

                    item.style.backgroundColor = "#F8F8F8";
                    
                    

                }
            }
            
        })


        
    });

    $('#tree').simpleTreeTable({
        iconPosition:':second',
        iconTemplate:'<div />'
    });
        
});