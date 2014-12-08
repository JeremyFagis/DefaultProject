/*
 * SimpleSelector 1.0
 * Skinning select type
 * Copyright (c) 2014 Jeremy FAGIS (http://fagis.fr)
 */

;(function ( $, window, document, undefined ) {

    var pluginName = "simpleSelector",
        defaults = {
            wrapperClass: "selector-wrapper",
            caretClass: 'icon-arrow'
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
                element.wrap('<div class="' + this.settings.wrapperClass + '" />');
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
