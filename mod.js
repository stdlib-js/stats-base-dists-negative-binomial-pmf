// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),r.alternate&&(t=l.call(t,y,"$1."),t=l.call(t,g,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var A=String.fromCharCode,N=isNaN,_=Array.isArray;function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,n,t,a,o,f,c,s,l,p,v,y,g;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if(t=r[s],"string"==typeof t)f+=t;else{if(e=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,N(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,N(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!N(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=N(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,y=t.padRight,g=void 0,(g=v-p.length)<0?p:p=y?p+m(g):m(g)+p)),f+=t.arg||"",c+=1}return f}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,n,t,i;for(n=[],i=0,t=I.exec(r);t;)(e=r.slice(i,I.lastIndex-t[0].length)).length&&n.push(e),n.push(S(t)),i=I.lastIndex,t=I.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function k(r){var e,n;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return U.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&O&&O.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(r){return r!=r}var C=Math.floor;function L(r){return C(r)===r&&r>=0}function P(r){var e,n;return 0===r?1/0:((r<0?-r:r)<=1?(e=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),n=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(e=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),n=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),e/n)}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var M=Object.prototype.toString;var Z=Object.prototype.hasOwnProperty;var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var q=R&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return M.call(r);n=r[Y],a=Y,e=null!=(i=r)&&Z.call(i,a);try{r[Y]=void 0}catch(e){return M.call(r)}return t=M.call(r),e?r[Y]=n:delete r[Y],t}:function(r){return M.call(r)},z="function"==typeof Uint32Array;var B="function"==typeof Uint32Array?Uint32Array:null;var D,J="function"==typeof Uint32Array?Uint32Array:void 0;D=function(){var r,e,n;if("function"!=typeof B)return!1;try{e=new B(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(z&&n instanceof Uint32Array||"[object Uint32Array]"===q(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K=D,Q="function"==typeof Float64Array;var rr="function"==typeof Float64Array?Float64Array:null;var er,nr="function"==typeof Float64Array?Float64Array:void 0;er=function(){var r,e,n;if("function"!=typeof rr)return!1;try{e=new rr([1,3.14,-3.14,NaN]),n=e,r=(Q&&n instanceof Float64Array||"[object Float64Array]"===q(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var tr=er,ir="function"==typeof Uint8Array;var ar="function"==typeof Uint8Array?Uint8Array:null;var or,ur="function"==typeof Uint8Array?Uint8Array:void 0;or=function(){var r,e,n;if("function"!=typeof ar)return!1;try{e=new ar(e=[1,3.14,-3.14,256,257]),n=e,r=(ir&&n instanceof Uint8Array||"[object Uint8Array]"===q(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr=or,cr="function"==typeof Uint16Array;var sr="function"==typeof Uint16Array?Uint16Array:null;var lr,pr="function"==typeof Uint16Array?Uint16Array:void 0;lr=function(){var r,e,n;if("function"!=typeof sr)return!1;try{e=new sr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(cr&&n instanceof Uint16Array||"[object Uint16Array]"===q(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var vr,yr={uint16:lr,uint8:fr};(vr=new yr.uint16(1))[0]=4660;var gr=52===new yr.uint8(vr.buffer)[0],dr=!0===gr?1:0,hr=new tr(1),wr=new K(hr.buffer);function br(r){return hr[0]=r,wr[dr]}var mr,Ar,Nr=!0===gr?1:0,_r=new tr(1),Er=new K(_r.buffer);function Ur(r,e){return _r[0]=r,Er[Nr]=e>>>0,_r[0]}!0===gr?(mr=1,Ar=0):(mr=0,Ar=1);var Ir={HIGH:mr,LOW:Ar},Sr=new tr(1),xr=new K(Sr.buffer),kr=Ir.HIGH,Fr=Ir.LOW;function jr(r,e){return xr[kr]=r,xr[Fr]=e,Sr[0]}var Tr=Number.POSITIVE_INFINITY,Or=Number.NEGATIVE_INFINITY,Vr=1023,$r=.34657359027997264;var Gr=709.782712893384,Hr=.6931471803691238,Wr=1.9082149292705877e-10,Cr=1.4426950408889634,Lr=38.816242111356935,Pr=1.0397207708399179;function Rr(r){var e,n,t,i,a,o,u,f,c,s,l,p,v;if(r===Tr||W(r))return r;if(r===Or)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=Lr){if(t)return-1;if(f>=Gr)return Tr}if(o=0|br(f),f>$r)f<Pr?t?(i=r+Hr,a=-Wr,v=-1):(i=r-Hr,a=Wr,v=1):(v=t?Cr*r-.5:Cr*r+.5,i=r-(l=v|=0)*Hr,a=l*Wr),s=i-(r=i-a)-a;else{if(o<1016070144)return r;v=0}return u=1+(c=r*(e=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),p=c*((u-(l=3-u*e))/(6-r*l)),0===v?r-(r*p-c):(n=jr(Vr+v<<20,0),p=r*(p-s)-s,p-=c,-1===v?.5*(r-p)-.5:1===v?r<-.25?-2*(p-(r+.5)):1+2*(r-p):v<=-2||v>56?(f=1-(p-r),1024===v?f=Ur(f,i=br(f)+(v<<20)|0):f*=n,f-1):(l=1,v<20?f=(l=Ur(l,i=1072693248-(2097152>>v)|0))-(p-r):(f=r-(p+(l=Ur(l,i=Vr-v<<20|0))),f+=1),f*=n))}var Mr=.6931471803691238,Zr=1.9082149292705877e-10,Xr=.41421356237309503,Yr=-.2928932188134525,qr=1.862645149230957e-9,zr=5551115123125783e-32,Br=9007199254740992,Dr=.6666666666666666;function Jr(r){var e,n,t,i,a,o,u,f,c,s;if(r<-1||W(r))return NaN;if(-1===r)return Or;if(r===Tr)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<Xr){if(t<qr)return t<zr?r:r-r*r*.5;r>Yr&&(s=0,i=r,n=1)}return 0!==s&&(t<Br?(a=(s=((n=br(c=1+r))>>20)-Vr)>0?1-(c-r):r-(c-1),a/=c):(s=((n=br(c=r))>>20)-Vr,a=0),(n&=1048575)<434334?c=Ur(c,1072693248|n):(s+=1,c=Ur(c,1071644672|n),n=1048576-n>>2),i=c-1),e=.5*i*i,0===n?0===i?s*Mr+(a+=s*Zr):s*Mr-((f=e*(1-Dr*i))-(s*Zr+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(e-o*(e+f)):s*Mr-(e-(o*(e+f)+(s*Zr+a))-i))}var Kr=Math.sqrt;function Qr(r){return Math.abs(r)}var re=Math.ceil;function ee(r){return r<0?re(r):C(r)}var ne=1023,te=-1023,ie=-1074;function ae(r){return r===Tr||r===Or}var oe,ue,fe=2147483648,ce=2147483647;!0===gr?(oe=1,ue=0):(oe=0,ue=1);var se={HIGH:oe,LOW:ue},le=new tr(1),pe=new K(le.buffer),ve=se.HIGH,ye=se.LOW;function ge(r,e,n,t){return le[0]=r,e[t]=pe[ve],e[t+n]=pe[ye],e}function de(r){return ge(r,[0,0],1,0)}H(de,"assign",ge);var he=[0,0];function we(r,e){var n,t;return de.assign(r,he,1,0),n=he[0],n&=ce,t=br(e),jr(n|=t&=fe,he[1])}var be=22250738585072014e-324,me=4503599627370496;function Ae(r,e,n,t){return W(r)||ae(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Qr(r)<be?(e[t]=r*me,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return Ae(r,[0,0],1,0)}),"assign",Ae);var Ne=2146435072;var _e=2220446049250313e-31,Ee=2148532223,Ue=[0,0],Ie=[0,0];function Se(r,e){var n,t;return 0===e||0===r||W(r)||ae(r)?r:(Ae(r,Ue,1,0),r=Ue[0],e+=Ue[1],e+=function(r){var e=br(r);return(e=(e&Ne)>>>20)-Vr|0}(r),e<ie?we(0,r):e>ne?r<0?Or:Tr:(e<=te?(e+=52,t=_e):t=1,de.assign(r,Ie,1,0),n=Ie[0],n&=Ee,t*jr(n|=e+Vr<<20,Ie[1])))}var xe=.6931471803691238,ke=1.9082149292705877e-10,Fe=1.4426950408889634,je=709.782712893384,Te=-745.1332191019411,Oe=1/(1<<28),Ve=-Oe;function $e(r){var e;return W(r)||r===Tr?r:r===Or?0:r>je?Tr:r<Te?0:r>Ve&&r<Oe?1+r:function(r,e,n){var t,i,a,o;return Se(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(e=ee(r<0?Fe*r-.5:Fe*r+.5))*xe,e*ke,e)}function Ge(r){return C(r)===r}function He(r){return Ge(r/2)}function We(r){return He(r>0?r-1:r+1)}var Ce=!0===gr?0:1,Le=new tr(1),Pe=new K(Le.buffer);function Re(r,e){return Le[0]=r,Pe[Ce]=e>>>0,Le[0]}function Me(r){return 0|r}var Ze=1072693247,Xe=1e300,Ye=1e-300;var qe=1048575,ze=1048576,Be=1072693248,De=536870912,Je=524288,Ke=20,Qe=9007199254740992,rn=.9617966939259756,en=.9617967009544373,nn=-7.028461650952758e-9,tn=[1,1.5],an=[0,.5849624872207642],on=[0,1.350039202129749e-8];var un=1.4426950408889634,fn=1.4426950216293335,cn=1.9259629911266175e-8;var sn=.6931471805599453,ln=1048575;var pn=1048576,vn=1071644672,yn=20,gn=.6931471824645996,dn=-1.904654299957768e-9;var hn=1072693247,wn=1105199104,bn=1139802112,mn=1083179008,An=1072693248,Nn=1083231232,_n=3230714880,En=31,Un=1e300,In=1e-300,Sn=8008566259537294e-32,xn=[0,0],kn=[0,0];function Fn(r,e){var n,t,i,a,o,u,f,c,s,l,p,v,y,g;if(W(r)||W(e))return NaN;if(de.assign(e,xn,1,0),o=xn[0],0===xn[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Kr(r);if(-.5===e)return 1/Kr(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(ae(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Qr(r)<1==(e===Tr)?0:Tr}(r,e)}if(de.assign(r,xn,1,0),a=xn[0],0===xn[1]){if(0===a)return function(r,e){return e===Or?Tr:e===Tr?0:e>0?We(e)?r:0:We(e)?we(Tr,r):Tr}(r,e);if(1===r)return 1;if(-1===r&&We(e))return-1;if(ae(r))return r===Or?Fn(-0,-e):e<0?0:Tr}if(r<0&&!1===Ge(e))return(r-r)/(r-r);if(i=Qr(r),n=a&ce|0,t=o&ce|0,f=o>>>En|0,u=(u=a>>>En|0)&&We(e)?-1:1,t>wn){if(t>bn)return function(r,e){return(br(r)&ce)<=Ze?e<0?Xe*Xe:Ye*Ye:e>0?Xe*Xe:Ye*Ye}(r,e);if(n<hn)return 1===f?u*Un*Un:u*In*In;if(n>An)return 0===f?u*Un*Un:u*In*In;p=function(r,e){var n,t,i,a,o,u,f;return a=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*cn-a*un)-((t=Re(t=(o=fn*i)+u,0))-o),r[0]=t,r[1]=n,r}(kn,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,v,y,g,d,h,w,b,m,A,N,_;return m=0,n<ze&&(m-=53,n=br(e*=Qe)),m+=(n>>Ke)-Vr|0,n=(A=n&qe|0)|Be|0,A<=235662?N=0:A<767610?N=1:(N=0,m+=1,n-=ze),o=Re(i=(w=(e=Ur(e,n))-(c=tn[N]))*(b=1/(e+c)),0),t=(n>>1|De)+Je,f=Ur(0,t+=N<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Re(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),l=Re(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0),p=en*l,g=(v=nn*l+(b-(l-w))*rn+on[N])-((y=Re(y=p+v+(s=an[N])+(d=m),0))-d-s-p),r[0]=y,r[1]=g,r}(kn,i,n);if(v=(l=(e-(c=Re(e,0)))*p[0]+e*p[1])+(s=c*p[0]),de.assign(v,xn,1,0),y=Me(xn[0]),g=Me(xn[1]),y>=mn){if(0!=(y-mn|g))return u*Un*Un;if(l+Sn>v-s)return u*Un*Un}else if((y&ce)>=Nn){if(0!=(y-_n|g))return u*In*In;if(l<=v-s)return u*In*In}return v=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&ce|0)>>yn)-Vr|0,c=0,s>vn&&(i=Ur(0,((c=r+(pn>>l+1)>>>0)&~(ln>>(l=((c&ce)>>yn)-Vr|0)))>>>0),c=(c&ln|pn)>>yn-l>>>0,r<0&&(c=-c),e-=i),r=Me(r=br(f=1-((f=(a=(i=Re(i=n+e,0))*gn)+(o=(n-(i-e))*sn+i*dn))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<yn>>>0)>>yn<=0?Se(f,c):Ur(f,r)}(y,s,l),u*v}function jn(r,e){return W(r)||W(e)?NaN:r===Tr||e===Tr?Tr:r===e&&0===r?function(r){return 0===r&&1/r===Tr}(r)?r:e:r>e?r:e}function Tn(r,e){return W(r)||W(e)?NaN:r===Or||e===Or?Or:r===e&&0===r?function(r){return 0===r&&1/r===Or}(r)?r:e:r<e?r:e}var On=.6931471803691238,Vn=1.9082149292705877e-10,$n=0x40000000000000,Gn=.3333333333333333,Hn=1048575,Wn=2146435072,Cn=1048576,Ln=1072693248;function Pn(r){var e,n,t,i,a,o,u,f,c,s,l,p;return 0===r?Or:W(r)||r<0?NaN:(a=0,(n=br(r))<Cn&&(a-=54,n=br(r*=$n)),n>=Wn?r+r:(a+=(n>>20)-Vr|0,a+=(f=(n&=Hn)+614244&1048576|0)>>20|0,u=(r=Ur(r,n|f^Ln))-1,(Hn&2+n)<3?0===u?0===a?0:a*On+a*Vn:(o=u*u*(.5-Gn*u),0===a?u-o:a*On-(o-a*Vn-u)):(f=n-398458|0,c=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(f|=c)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*On-(e-(s*(e+o)+a*Vn)-u)):0===a?u-s*(u-o):a*On-(s*(u-o)-a*Vn-u))))}var Rn=709.782712893384,Mn=-708.3964185322641,Zn=10.900511,Xn=2.718281828459045;function Yn(r,e,n){var t;return 1===r?0:(t=function(r,e,n,t,i){var a,o,u,f,c,s,l,p,v,y,g,d,h,w;if(!i)return Fn(n,r)*Fn(t,e);if(f=r+Zn-.5,c=e+Zn-.5,s=(h=r+e)+Zn-.5,a=P(h),a/=P(r)*P(e),a*=Kr(c/Xn),a*=Kr(f/s),p=(t*r-n*c)/c,Tn(Qr(l=(n*e-t*f)/f),Qr(p))<.2)if(l*p>0||Tn(r,e)<1)Qr(l)<.1?a*=$e(r*Jr(l)):a*=Fn(n*s/f,r),Qr(p)<.1?a*=$e(e*Jr(p)):a*=Fn(t*s/c,e);else if(jn(Qr(l),Qr(p))<.5)u=e/r,(o=r<e)&&u*p<.1||!o&&l/u>.1?(v=Rr(u*Jr(p)),a*=$e(v=r*Jr(v=l+v+v*l))):(v=Rr(Jr(l)/u),a*=$e(v=e*Jr(v=p+v+v*p)));else if(Qr(l)<Qr(p))if((w=r*Jr(l)+e*Pn(t*s/c))<=Mn||w>=Rn){if((w+=Pn(a))>=Rn)return NaN;a=$e(w)}else a*=$e(w);else if((w=e*Jr(p)+r*Pn(n*s/f))<=Mn||w>=Rn){if((w+=Pn(a))>=Rn)return NaN;a=$e(w)}else a*=$e(w);else if(d=t*s/c,l=r*Pn(g=n*s/f),p=e*Pn(d),l>=Rn||l<=Mn||p>=Rn||p<=Mn)if(r<e)if(y=Fn(d,e/r),(v=r*(Pn(g)+Pn(y)))<Rn&&v>Mn)a*=Fn(y*g,r);else{if((p+=l+Pn(a))>=Rn)return NaN;a=$e(p)}else if((v=(Pn(y=Fn(g,r/e))+Pn(d))*e)<Rn&&v>Mn)a*=Fn(y*d,e);else{if((p+=l+Pn(a))>=Rn)return NaN;a=$e(p)}else a*=Fn(g,r)*Fn(d,e);return a}(e,n,r,1-r,!0),t/=(1-r)*r)}function qn(r,e,n){return W(r)||W(e)||W(n)||e<=0||n<=0||n>1?NaN:L(r)&&0!==n?n/(e+r)*Yn(n,e,r+1):0}function zn(r,e){return W(r)||W(e)||r<=0||e<=0||e>1?(n=NaN,function(){return n}):function(n){if(W(n))return NaN;if(!L(n))return 0;return e/(r+n)*Yn(e,r,n+1)};var n}H(qn,"factory",zn);export{qn as default,zn as factory};
//# sourceMappingURL=mod.js.map
