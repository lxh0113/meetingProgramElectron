import{_ as c}from"./typeof-QjJsDpFa.js";function m(e,r){if(c(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,r||"default");if(c(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function l(e){var r=m(e,"string");return c(r)=="symbol"?r:r+""}function p(e,r,t){return(r=l(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r,t,n,a,f,o){try{var u=e[f](o),i=u.value}catch(v){return void t(v)}u.done?r(i):Promise.resolve(i).then(n,a)}function b(e){return function(){var r=this,t=arguments;return new Promise(function(n,a){var f=e.apply(r,t);function o(i){s(f,n,a,o,u,"next",i)}function u(i){s(f,n,a,o,u,"throw",i)}o(void 0)})}}export{p as _,b as a,l as t};
