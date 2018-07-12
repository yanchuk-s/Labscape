// HEADER MOB NAV

$('.trigger-nav').on('click', function () {
        $('.nav-header ul').slideToggle( "slow" );
})

// HEADER MOB NAV END

// SCROLL
$(document).ready(function(){
    $(".nav-header").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 100}, 1500);
        var _this = this;
        $(".nav-header li a").removeClass('active')
        $(this).addClass('active')
        if (window.innerWidth < 991) {
            $('.trigger-nav').click();
        }
    });
});

$('.tab-next').on('click', function(){
    if($('.home-tabs').hasClass('active')){
        $('.home-tabs').removeClass('show active')
        $('.advisory-tabs').addClass('show active');
        $('.home-tab-content').removeClass('show active')
        $('.advisory-tab-content').addClass('show active');
    } else{
        if($('.advisory-tabs').hasClass('active')){
            $('.advisory-tabs').removeClass('show active')
            $('.developers-tabs').addClass('show active');
            $('.advisory-tab-content').removeClass('show active')
            $('.developers-tab-content').addClass('show active');
        }
    }
})

$('.tab-prev').on('click', function(){

    if($('.developers-tabs').hasClass('active')){
        $('.advisory-tabs').addClass('show active')
        $('.developers-tabs').removeClass('show active');
        $('.advisory-tab-content').addClass('show active')
        $('.developers-tab-content').removeClass('show active');
    }else{
        if($('.advisory-tabs').hasClass('active')){
            $('.home-tabs').addClass('show active')
            $('.advisory-tabs').removeClass('show active');
            $('.home-tab-content').addClass('show active')
            $('.advisory-tab-content').removeClass('show active');
        }
    }
})


