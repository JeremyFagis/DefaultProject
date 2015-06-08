var $              = require('jquery'),
    FastClick      = require('fastclick'),
    tab            = require('bootstrap.tab'),
    collapse       = require('bootstrap.collapse'),
    tooltip        = require('bootstrap.tooltip'),
    popover        = require('bootstrap.popover'),
    dropdown       = require('bootstrap.dropdown'),
    dropify        = require('dropify'),
    simpleSelector = require('./vendors/jquery.simple-selector'),
    fancybox       = require('./vendors/jquery.fancybox.pack'),
    easing         = require('./vendors/jquery.easing'),
    mobileNav      = require('./vendors/mobile-nav'),
    datepicker     = require('./vendors/datepicker'),
    scrollTop      = require('./vendors/scrollTop'),
    select2        = require('select2');

require('select2.fr');

FastClick(document.body);

$(document).ready(function(){

    $(".selector").simpleSelector();

    $('input[type="file"]').dropify();

    $('.nav-tabs li:not(.disabled) a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    $('.collapse').collapse();

    $('.has-tooltip, [data-toggle="tooltip"]').tooltip({ container: 'body' });
    $('.has-popover, [data-toggle="popover"]').popover({ trigger: 'hover' });

    $('.dropdown-toggle, [data-toggle="dropdown"]').dropdown();

    $(".fancybox").fancybox({
        padding: 0,
        nextEffect: 'fade',
        prevEffect: 'fade',
        tpl: {
            closeBtn: '<a title="Fermer" class="fancybox-item fancybox-close" href="javascript:;">&times;</a>',
            prev: '<a title="Précédent" class="fancybox-nav fancybox-prev" href="javascript:;"><span>&larr;</span></a>',
            next: '<a title="Suivant" class="fancybox-nav fancybox-next" href="javascript:;"><span>&rarr;</span></a>'
        },
        helpers: {
            title: { type: 'over' }
        }
    });

    new scrollTop();

    $('#main-nav').mobileNav();

    $('[datepicker]').datepicker({
        language: "fr",
        todayHighlight: true
    });

    $(".select2").select2();
});

$(window).load(function(){
    if($('#loading').length > 0) {
        $('#loading').delay(200).fadeOut(400);
        $('body').removeClass('loading');
    }
});


/**
 * DOC
 */

$(document).ready(function(){
    $('pre code').each(function(){
        $(this).html(htmlencode($(this).html()));
    });

    $('.code-button').on('click', function(e) {
        e.preventDefault();
    })
});

function htmlencode(str) {
    return str.replace(/[&<>"']/g, function($0) {
        return "&" + {"&":"amp", "<":"lt", ">":"gt", '"':"quot", "'":"#39"}[$0] + ";";
    });
}
