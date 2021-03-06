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

    if($('.sticky').length){
        $(window).scroll(function(){
            if( $(window).scrollTop()+$(window).height() <= $('.sticky').offset().top + 70 ){
                $('#sidebarMobile').addClass('isSticky');
            } else {
                $('#sidebarMobile').removeClass('isSticky');
            }
        });
    }

    $('#cartOpen,.add-to-cart-btn').on('click', function(event){
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
        $('body').css('overflow','unset');
    });

    $('.overlay').children().click(function(e){
        e.stopPropagation();
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

    $('#tree').simpleTreeTable({
        iconPosition:':second',
        iconTemplate:'<div />'
    });

    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 30
      });


      $("#datepickerFrom").datepicker({
        nextText: '>',
        prevText: '<',
        showOtherMonths: true,
        selectOtherMonths: true,
        dayNamesMin: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
        firstDay: 1,
        dateFormat: "dd.mm.yy"
      });

      $("#datepickerTo").datepicker({
        nextText: '>',
        prevText: '<',
        showOtherMonths: true,
        selectOtherMonths: true,
        dayNamesMin: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
        firstDay: 1,
        dateFormat: "dd.mm.yy"
      });

      $("#datepickerFrom").datepicker({
        beforeShow: function(input, inst) {
            setTimeout(function () {
                inst.dpDiv.css({
                    top: 100,
                    left: offsets.left,
                });
            });
        }
    });


    let slidesCount = $('.referals-slider__slide').length
    let slider = $('.referals-slider')

    if($(window).innerWidth > 500){
        if(slidesCount > 8){
            slider.slick({
                slidesToShow: 6,
                slidesToScroll: 1,    
                centerMode: true,
                autoplay: true,
                autoplaySpeed: 2000,
                infinite: true,
                nextArrow: `<a class="slick-button slick-next" href="#"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.90477 8L0 2.05987L2.04761 0L10 8L2.04761 16L0 13.9401L5.90477 8Z" fill="#151515"/>
                    </svg></a>`,
                prevArrow: `<a class="slick-button slick-prev" href="#"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.09523 8L10 2.05987L7.95239 0L0 8L7.95239 16L10 13.9401L4.09523 8Z" fill="#151515"/>
                    </svg></a>`,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2
                        }  
                    }
                ]
            })
        } 
    }  else {
        if(slidesCount > 3){
            slider.slick({
                slidesToShow: 6,
                slidesToScroll: 1,    
                centerMode: true,
                autoplay: true,
                autoplaySpeed: 2000,
                infinite: true,
                nextArrow: `<a class="slick-button slick-next" href="#"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.90477 8L0 2.05987L2.04761 0L10 8L2.04761 16L0 13.9401L5.90477 8Z" fill="#151515"/>
                    </svg></a>`,
                prevArrow: `<a class="slick-button slick-prev" href="#"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.09523 8L10 2.05987L7.95239 0L0 8L7.95239 16L10 13.9401L4.09523 8Z" fill="#151515"/>
                    </svg></a>`,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2
                        }  
                    }
                ]
            })  
        }
    }         
});