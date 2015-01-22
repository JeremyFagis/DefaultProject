var $ = require('jquery');

$(document).ready(function(){
    $('.sidebar nav').find('a').on('click', function(e){
        if ($(this).siblings('ul').length > 0) {
            e.preventDefault();
            $(this).parent().toggleClass('opened');
        }
    });

    $('.sidebar nav').find('li.active').parents('li').each(function(){
        $(this).addClass('opened');
    });

    $('.sidebar nav').find('li').each(function(){
        if ($(this).children('ul').length > 0) {
            $(this).children('a').append('<span class="submenu-icon"></span>');
        }
    });

    if($('.page-title').length > 0) {
        if ($('.page-title').find('.breadcrumb').length > 0) {
            $('.page-title').addClass('has-breadcrumb hover');
        }
        $('.page-title-mobile').html($('.page-title').html());
        $('.page-title-mobile').find('.breadcrumb').remove();
    }

    $('.mobile-nav-toggle').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('.sidebar').toggleClass('active');
        $('body').toggleClass('nav-opened');
    });

    if($('.navbar').find('.list-actions').length > 0 && $('.list-actions-mobile').length > 0) {
        $('.list-actions-mobile').html($('.navbar').find('.list-actions').html());
    }

});

$(window).load(function(){
    setTimeout(function() {
        $('.page-title').removeClass('hover');
    }, 1500);
});
