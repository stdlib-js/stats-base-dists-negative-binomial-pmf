// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-lanczos-sum-expg-scaled@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-expm1@v0.2.3-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@v0.2.3-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.4-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.3.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@v0.3.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@v0.2.3-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.4-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-ln@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-min-ln@v0.2.2-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-gamma-lanczos-g@v0.2.2-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-e@v0.2.2-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";function g(s,e,t){var b;return 1===s?0:(b=function(s,e,t,b,g){var x,u,N,y,z,q,w,k,A,B,C,D,E,F;if(!g)return a(t,s)*a(b,e);if(y=s+c-.5,z=e+c-.5,q=(E=s+e)+c-.5,x=i(E),x/=i(s)*i(e),x*=r(z/v),x*=r(y/q),k=(b*s-t*z)/z,j(d(w=(t*e-b*y)/y),d(k))<.2)if(w*k>0||j(s,e)<1)d(w)<.1?x*=l(s*m(w)):x*=a(t*q/y,s),d(k)<.1?x*=l(e*m(k)):x*=a(b*q/z,e);else if(o(d(w),d(k))<.5)N=e/s,(u=s<e)&&N*k<.1||!u&&w/N>.1?(A=n(N*m(k)),A=s*m(A=w+A+A*w),x*=l(A)):(A=n(m(w)/N),A=e*m(A=k+A+A*k),x*=l(A));else if(d(w)<d(k))if((F=s*m(w)+e*p(b*q/z))<=h||F>=f){if((F+=p(x))>=f)return NaN;x=l(F)}else x*=l(F);else if((F=e*m(k)+s*p(t*q/y))<=h||F>=f){if((F+=p(x))>=f)return NaN;x=l(F)}else x*=l(F);else if(D=b*q/z,w=s*p(C=t*q/y),k=e*p(D),w>=f||w<=h||k>=f||k<=h)if(s<e)if(B=a(D,e/s),(A=s*(p(C)+p(B)))<f&&A>h)x*=a(B*C,s);else{if((k+=w+p(x))>=f)return NaN;x=l(k)}else if(B=a(C,s/e),(A=(p(B)+p(D))*e)<f&&A>h)x*=a(B*D,e);else{if((k+=w+p(x))>=f)return NaN;x=l(k)}else x*=a(C,s)*a(D,e);return x}(e,t,s,1-s,!0),b/=(1-s)*s)}function x(s,i,n){return e(s)||e(i)||e(n)||i<=0||n<=0||n>1?NaN:t(s)&&0!==n?n/(i+s)*g(n,i,s+1):0}function u(s,i){return e(s)||e(i)||s<=0||i<=0||i>1?b(NaN):function(n){if(e(n))return NaN;if(!t(n))return 0;return i/(s+n)*g(i,s,n+1)}}s(x,"factory",u);export{x as default,u as factory};
//# sourceMappingURL=index.mjs.map
