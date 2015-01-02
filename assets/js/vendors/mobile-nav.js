(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var pluginName = "mobileNav",
        defaults = {
            target: '#mobile-nav',
            toggle: '.mobile-nav-toggle',
            toggleClass: 'push-toleft',
            elementsToSlide: 'body, .navbar'
        };

    function Plugin ( element, options ) {
        this.element = element;
        this.menu = $(this.element);
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {
        init: function () {
            var _this = this,
                target = $(this.settings.target);

            target.find('nav').append(this.menu.html());

            $(this.settings.toggle).on('click',function(e) {
                e.preventDefault();
                $(this).toggleClass('active');
                $(_this.settings.elementsToSlide).toggleClass(_this.settings.toggleClass);
                target.toggleClass('opened');
            });
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

}));
