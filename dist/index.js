"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=u(function(y,i){
var s=require('@stdlib/assert-is-collection/dist'),o=require('@stdlib/array-dtypes/dist'),v=require('@stdlib/array-dtype/dist'),d=require('@stdlib/array-base-assert-contains/dist'),l=require('@stdlib/array-base-join/dist'),g=require('@stdlib/stats-strided-range/dist').ndarray,a=require('@stdlib/error-tools-fmtprodmsg/dist'),t=o("real_and_generic"),c="generic";function m(e){var r;if(!s(e))throw new TypeError(a('2Jh2O',e));if(r=v(e)||c,!d(t,r))throw new TypeError(a('2JhHZ',l(t,'", "'),r));return g(e.length,e,1,0)}i.exports=m
});var p=n();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
