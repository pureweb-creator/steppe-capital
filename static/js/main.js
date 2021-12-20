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
        $('.mobile-menu').parent().addClass('active');
        $('.mobile-menu').addClass('active');
        $('html,body').css("overflow","hidden");
    });


    $(window).scroll(function(){
        if( $(window).scrollTop()+$(window).height() <= $('.sticky').offset().top + 70 ){
            $('#sidebarMobile').addClass('isSticky');
        } else {
            $('#sidebarMobile').removeClass('isSticky');
        }
    });

    $('#cartOpen').on('click', function(event){
        event.preventDefault();
        $('.mini-cart').parent().addClass('active');
        $('.mini-cart').addClass('active');

        if ($(document).height() > $(window).height()) {

            $('html').css({
                'overflow': 'hidden',
                'padding-right': '19px'
            })
        }
        else{
            $('html').css({
                'overflow': 'hidden',
                'padding-right': '1px'
            })
        }
    });


    $('#closeMiniCart').on('click', function(event){
        event.stopPropagation();
        $(this).parent().parent().removeClass('active');
        $('.mini-cart').removeClass('active');

        $('html').css({
            "overflow":"auto",
            "padding-right": "0"
        });
    });

    $('.overlay').on('click', function(event){
        event.stopPropagation();
        $(this).removeClass('active');
        $('.mobile-menu,.mini-cart').removeClass('active');
        $('html').css({
            "overflow":"auto",
            "padding-right": "0"
        });
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

    $('.empty').parent().parent().parent().css({
        'flex-grow': '1',
        'display': 'flex',
        'align-items': 'center'
    });

   

    // $('.table__line:not(.table__line_non_active)').on('click', function(event){
    //     event.stopPropagation;
    //     $(this).parent().find('.expand').first().toggle('slow');
    //     $(this).find('.cell__expand-btn').first().toggleClass('active');
    // });

    

    // $('tbody tr[data-node-id]').each(function(index,item){
    //     if(!(index&1)){
    //         // item.style.backgroundColor = "#F8F8F8";
    //     }
    //     $.each(this.attributes, function(i,a){
    //         if(a.name=='data-node-id'){
    //             if(!(parseInt(a.value.toString().split('.').join('')) & 1)){

    //                 item.style.backgroundColor = "#F8F8F8";
                    
                    

    //             }
    //         }
            
    //     })


        
    // });

    $('#tree').simpleTreeTable({
        iconPosition:':second',
        iconTemplate:'<div />'
    });

    $('.grid').masonry({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid-item',
        // use element for option
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 30
      });
      $(function() {

        $(".quantity").append('<div class="inc button">+</div>');
        $(".quantity").prepend('<div class="dec button">-</div>');
      
        $(".button").on("click", function() {
      
          var $button = $(this);
          var oldValue = $button.parent().find("input").val();
      
          if ($button.text() == "+") {
              var newVal = parseFloat(oldValue) + 1;
            } else {
             // Don't allow decrementing below zero
            if (oldValue > 0) {
              var newVal = parseFloat(oldValue) - 1;
              } else {
              newVal = 0;
            }
            }
      
          $button.parent().find("input").val(newVal);
      
        });
      
      });
        
});