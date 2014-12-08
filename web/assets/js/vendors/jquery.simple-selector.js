/*
 * =============================================================
 * ElaoStrap
 *
 * (c) 2014 Jeremy FAGIS <jeremy@fagis.fr>
 * =============================================================
 */

!function t(e,n,i){function r(a,o){if(!n[a]){if(!e[a]){var p="function"==typeof require&&require;if(!o&&p)return p(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+a+"'")}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){var n=e[a][1][t];return r(n?n:t)},u,u.exports,t,e,n,i)}return n[a].exports}for(var s="function"==typeof require&&require,a=0;a<i.length;a++)r(i[a]);return r}({1:[function(){!function(t){function e(e,r){this.element=e,this.settings=t.extend({},i,r),this._defaults=i,this._name=n,this.init()}var n="simpleSelector",i={wrapperClass:"selector-wrapper",caretClass:"icon-arrow"},r=!1;e.prototype={init:function(){if(!r){var e=t(this.element),n=e.data("default-text")||"---",i=e.find("option:selected").text()||n;e.wrap('<div class="'+this.settings.wrapperClass+'" />'),t("<span/>").text(i).prependTo(e.parent()),t('<i class="'+this.settings.caretClass+'"></i>').appendTo(e.parent()),e.on("change",function(){var e=t(this).find("option:selected").text();e=e?e:n,t(this).prev("span").text(e)})}}},t.fn[n]=function(i){return this.each(function(){t.data(this,"plugin_"+n)||t.data(this,"plugin_"+n,new e(this,i))}),this}}(jQuery,window,document)},{}]},{},[1]);