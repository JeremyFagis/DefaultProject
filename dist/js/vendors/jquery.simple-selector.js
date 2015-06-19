/*
 * =============================================================
 * elaostrap
 *
 * (c) 2015 Jeremy FAGIS <jeremy@fagis.fr>
 * =============================================================
 */

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Volumes/Elao/workspace/JeremyFagis/ElaoStrap/assets/js/vendors/jquery.simple-selector.js":[function(require,module,exports){
/*
 * SimpleSelector 1.0
 * Skinning select type
 * Copyright (c) 2014 Jeremy FAGIS (http://fagis.fr)
 */

;(function ( $, window, document, undefined ) {

    var pluginName = "simpleSelector",
        defaults = {
            wrapperClass: "selector-wrapper",
            caretClass: 'elaostrap-font-arrow'
        },
        isIE = '\v'=='v';

    function Plugin ( element, options ) {
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function () {
            if (!isIE) {
                var element = $(this.element);
                var defaultText = element.data('default-text') || '---';
                var value = element.find('option:selected').text() || defaultText;
                element.removeClass('selector');
                element.wrap('<div class="' + this.settings.wrapperClass + ' ' + element.attr('class') +'" />');
                element.removeAttr('class');
                $('<span/>').text(value).prependTo(element.parent());
                $('<i class="' + this.settings.caretClass + '"></i>').appendTo(element.parent());
                element.on('change', function() {
                    var value = $(this).find('option:selected').text();
                    value = (value)? value : defaultText ;
                    $(this).prev('span').text(value);
                });
            }
        }
    };

    $.fn[ pluginName ] = function ( options ) {
        this.each(function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            }
        });

        return this;
    };

})( jQuery, window, document );

},{}]},{},["/Volumes/Elao/workspace/JeremyFagis/ElaoStrap/assets/js/vendors/jquery.simple-selector.js"])