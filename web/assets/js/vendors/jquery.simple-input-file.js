/*
 * =============================================================
 * ElaoStrap
 *
 * (c) 2014 Jeremy FAGIS <jeremy@fagis.fr>
 * =============================================================
 */

!function t(e,n,i){function r(a,o){if(!n[a]){if(!e[a]){var u="function"==typeof require&&require;if(!o&&u)return u(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+a+"'")}var p=n[a]={exports:{}};e[a][0].call(p.exports,function(t){var n=e[a][1][t];return r(n?n:t)},p,p.exports,t,e,n,i)}return n[a].exports}for(var s="function"==typeof require&&require,a=0;a<i.length;a++)r(i[a]);return r}({1:[function(){!function(t,e){function n(e,n){this.element=e,this.settings=t.extend({},r,n),this._defaults=r,this._name=i,this.init()}var i="simpleInputFile",r={wrapperClass:"input-file-wrapper",defaultText:"Envoyer un ficher",iconHtml:'<i class="icon-upload-cloud" />'},s=!!e.ActiveXObject;n.prototype={init:function(){if(!s){var e=t(this.element),n=e.data("default-text")||this.settings.defaultText,i=e.val()||n;e.wrap('<div class="'+this.settings.wrapperClass+'"/>'),t('<span class="filename"/>').text(i).prependTo(e.parent()),t(this.settings.iconHtml).prependTo(e.parent()),e.on("change",function(){var e=t(this).val().split("\\").pop();t(this).siblings("span").html(e)})}}},t.fn[i]=function(e){return this.each(function(){t.data(this,"plugin_"+i)||t.data(this,"plugin_"+i,new n(this,e))}),this}}(jQuery,window,document)},{}]},{},[1]);