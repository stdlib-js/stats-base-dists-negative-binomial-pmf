// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,i=t.__defineGetter__,u=t.__defineSetter__,f=t.__lookupGetter__,o=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(f.call(r,n)||o.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,v="set"in a,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,n,a.get),v&&u&&u.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y=Math.floor;function v(r){return y(r)===r&&r>=0}function p(r){var n,t;return 0===r?1/0:((r<0?-r:r)<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(n=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),n/t)}var s,b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),w=Object.prototype.toString,N=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",A=b&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,i,u;if(null==r)return w.call(r);t=r[d],u=d,n=null!=(i=r)&&N.call(i,u);try{r[d]=void 0}catch(n){return w.call(r)}return e=w.call(r),n?r[d]=t:delete r[d],e}:function(r){return w.call(r)},_="function"==typeof Uint32Array,m="function"==typeof Uint32Array?Uint32Array:null,g="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var r,n,t;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(_&&t instanceof Uint32Array||"[object Uint32Array]"===A(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var h,U=s,j="function"==typeof Float64Array,I="function"==typeof Float64Array?Float64Array:null,O="function"==typeof Float64Array?Float64Array:void 0;h=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I([1,3.14,-3.14,NaN]),t=n,r=(j&&t instanceof Float64Array||"[object Float64Array]"===A(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var S,E=h,F="function"==typeof Uint8Array,T="function"==typeof Uint8Array?Uint8Array:null,H="function"==typeof Uint8Array?Uint8Array:void 0;S=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,256,257]),t=n,r=(F&&t instanceof Uint8Array||"[object Uint8Array]"===A(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var G,P=S,x="function"==typeof Uint16Array,L="function"==typeof Uint16Array?Uint16Array:null,M="function"==typeof Uint16Array?Uint16Array:void 0;G=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,65536,65537]),t=n,r=(x&&t instanceof Uint16Array||"[object Uint16Array]"===A(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var V,W={uint16:G,uint8:P};(V=new W.uint16(1))[0]=4660;var k=52===new W.uint8(V.buffer)[0],Y=!0===k?1:0,q=new E(1),C=new U(q.buffer);function z(r){return q[0]=r,C[Y]}var B=!0===k?1:0,D=new E(1),J=new U(D.buffer);function K(r,n){return D[0]=r,J[B]=n>>>0,D[0]}var Q=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY,X=1023,Z=.6931471803691238,$=1.9082149292705877e-10,rr=1.4426950408889634;function nr(r){var n,t,e,i,u,f,o,a,c,y,v,p;if(r===Q||l(r))return r;if(r===R)return-1;if(0===r)return r;if(r<0?(t=!0,o=-r):(t=!1,o=r),o>=38.816242111356935){if(t)return-1;if(o>=709.782712893384)return Q}if(u=0|z(o),o>.34657359027997264)o<1.0397207708399179?t?(e=r+Z,i=-$,p=-1):(e=r-Z,i=$,p=1):(p=t?rr*r-.5:rr*r+.5,e=r-(y=p|=0)*Z,i=y*$),c=e-(r=e-i)-i;else{if(u<1016070144)return r;p=0}return f=1+(a=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(a),v=a*((f-(y=3-f*n))/(6-r*y)),0===p?r-(r*v-a):(v=r*(v-c)-c,v-=a,-1===p?.5*(r-v)-.5:1===p?r<-.25?-2*(v-(r+.5)):1+2*(r-v):p<=-2||p>56?(o=K(o=1-(v-r),e=z(o)+(p<<20)|0))-1:(y=1,p<20?o=(y=K(y,e=1072693248-(2097152>>p)|0))-(v-r):(o=r-(v+(y=K(y,e=X-p<<20|0))),o+=1),K(o,e=z(o)+(p<<20)|0)))}var tr=.6931471803691238,er=1.9082149292705877e-10;function ir(r){var n,t,e,i,u,f,o,a,c,y;if(r<-1||l(r))return NaN;if(-1===r)return R;if(r===Q)return r;if(0===r)return r;if(y=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(y=0,i=r,t=1)}return 0!==y&&(e<9007199254740992?(u=(y=((t=z(c=1+r))>>20)-X)>0?1-(c-r):r-(c-1),u/=c):(y=((t=z(c=r))>>20)-X,u=0),(t&=1048575)<434334?c=K(c,1072693248|t):(y+=1,c=K(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?y*tr+(u+=y*er):y*tr-((a=n*(1-.6666666666666666*i))-(y*er+u)-i):(a=(o=(f=i/(2+i))*f)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===y?i-(n-f*(n+a)):y*tr-(n-(f*(n+a)+(y*er+u))-i))}var ur=Math.sqrt;function fr(r){return Math.abs(r)}var or=Math.ceil;function ar(r){return r<0?or(r):y(r)}function cr(r){return r===Q||r===R}var lr,yr,vr=2147483647;!0===k?(lr=1,yr=0):(lr=0,yr=1);var pr,sr,br={HIGH:lr,LOW:yr},wr=new E(1),Nr=new U(wr.buffer),dr=br.HIGH,Ar=br.LOW;function _r(r,n,t,e){return wr[0]=r,n[e]=Nr[dr],n[e+t]=Nr[Ar],n}function mr(r){return _r(r,[0,0],1,0)}c(mr,"assign",_r),!0===k?(pr=1,sr=0):(pr=0,sr=1);var gr={HIGH:pr,LOW:sr},hr=new E(1),Ur=new U(hr.buffer),jr=gr.HIGH,Ir=gr.LOW;function Or(r,n){return Ur[jr]=r,Ur[Ir]=n,hr[0]}var Sr=[0,0];function Er(r,n){var t,e;return mr.assign(r,Sr,1,0),t=Sr[0],t&=vr,e=z(n),Or(t|=e&=2147483648,Sr[1])}function Fr(r,n,t,e){return l(r)||cr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&fr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Fr(r,[0,0],1,0)}),"assign",Fr);var Tr=[0,0],Hr=[0,0];function Gr(r,n){var t,e;return 0===n||0===r||l(r)||cr(r)?r:(Fr(r,Tr,1,0),n+=Tr[1],n+=function(r){var n=z(r);return(n=(2146435072&n)>>>20)-X|0}(r=Tr[0]),n<-1074?Er(0,r):n>1023?r<0?R:Q:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,mr.assign(r,Hr,1,0),t=Hr[0],t&=2148532223,e*Or(t|=n+X<<20,Hr[1])))}var Pr=1.4426950408889634,xr=1/(1<<28);function Lr(r){var n;return l(r)||r===Q?r:r===R?0:r>709.782712893384?Q:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<xr?1+r:function(r,n,t){var e,i,u,f;return Gr(1-(n-(e=r-n)*(u=e-(i=e*e)*(0===(f=i)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),t)}(r-.6931471803691238*(n=ar(r<0?Pr*r-.5:Pr*r+.5)),1.9082149292705877e-10*n,n)}function Mr(r){return y(r)===r}function Vr(r){return Mr(r/2)}function Wr(r){return Vr(r>0?r-1:r+1)}var kr=!0===k?0:1,Yr=new E(1),qr=new U(Yr.buffer);function Cr(r,n){return Yr[0]=r,qr[kr]=n>>>0,Yr[0]}function zr(r){return 0|r}var Br=1048576,Dr=[1,1.5],Jr=[0,.5849624872207642],Kr=[0,1.350039202129749e-8],Qr=1048575,Rr=1048576,Xr=1083179008,Zr=1e300,$r=1e-300,rn=[0,0],nn=[0,0];function tn(r,n){var t,e,i,u,f,o,a,c,y,v,p,s,b,w;if(l(r)||l(n))return NaN;if(mr.assign(n,rn,1,0),f=rn[0],0===rn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return ur(r);if(-.5===n)return 1/ur(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(cr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:fr(r)<1==(n===Q)?0:Q}(r,n)}if(mr.assign(r,rn,1,0),u=rn[0],0===rn[1]){if(0===u)return function(r,n){return n===R?Q:n===Q?0:n>0?Wr(n)?r:0:Wr(n)?Er(Q,r):Q}(r,n);if(1===r)return 1;if(-1===r&&Wr(n))return-1;if(cr(r))return r===R?tn(-0,-n):n<0?0:Q}if(r<0&&!1===Mr(n))return(r-r)/(r-r);if(i=fr(r),t=u&vr|0,e=f&vr|0,a=f>>>31|0,o=(o=u>>>31|0)&&Wr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(z(r)&vr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?o*Zr*Zr:o*$r*$r;if(t>1072693248)return 0===a?o*Zr*Zr:o*$r*$r;p=function(r,n){var t,e,i,u,f,o;return t=(f=1.9259629911266175e-8*(i=n-1)-i*i*(0===(o=i)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=Cr(e=(u=1.4426950216293335*i)+f,0))-u),r[0]=e,r[1]=t,r}(nn,i)}else p=function(r,n,t){var e,i,u,f,o,a,c,l,y,v,p,s,b,w,N,d,A,_,m,g,h;return _=0,t<Br&&(_-=53,t=z(n*=9007199254740992)),_+=(t>>20)-X|0,t=1072693248|(m=1048575&t|0),m<=235662?g=0:m<767610?g=1:(g=0,_+=1,t-=Br),f=Cr(i=(d=(n=K(n,t))-(c=Dr[g]))*(A=1/(n+c)),0),e=524288+(t>>1|536870912),a=K(0,e+=g<<18),N=(u=i*i)*u*(0===(h=u)?.5999999999999946:.5999999999999946+h*(.4285714285785502+h*(.33333332981837743+h*(.272728123808534+h*(.23066074577556175+.20697501780033842*h))))),a=Cr(a=3+(u=f*f)+(N+=(o=A*(d-f*a-f*(n-(a-c))))*(f+i)),0),b=(p=-7.028461650952758e-9*(y=Cr(y=(d=f*a)+(A=o*a+(N-(a-3-u))*i),0))+.9617966939259756*(A-(y-d))+Kr[g])-((s=Cr(s=(v=.9617967009544373*y)+p+(l=Jr[g])+(w=_),0))-w-l-v),r[0]=s,r[1]=b,r}(nn,i,t);if(s=(v=(n-(c=Cr(n,0)))*p[0]+n*p[1])+(y=c*p[0]),mr.assign(s,rn,1,0),b=zr(rn[0]),w=zr(rn[1]),b>=Xr){if(0!=(b-Xr|w))return o*Zr*Zr;if(v+8008566259537294e-32>s-y)return o*Zr*Zr}else if((b&vr)>=1083231232){if(0!=(b-3230714880|w))return o*$r*$r;if(v<=s-y)return o*$r*$r}return s=function(r,n,t){var e,i,u,f,o,a,c,l,y,v;return y=((l=r&vr|0)>>20)-X|0,c=0,l>1071644672&&(i=K(0,((c=r+(Rr>>y+1)>>>0)&~(Qr>>(y=((c&vr)>>20)-X|0)))>>>0),c=(c&Qr|Rr)>>20-y>>>0,r<0&&(c=-c),n-=i),r=zr(r=z(a=1-((a=(u=.6931471824645996*(i=Cr(i=t+n,0)))+(f=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=a-(i=a*a)*(0===(v=i)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=f-(a-u))+a*o)-a))),(r+=c<<20>>>0)>>20<=0?Gr(a,c):K(a,r)}(b,y,v),o*s}function en(r){return 0===r&&1/r===Q}function un(r){return 0===r&&1/r===R}function fn(r,n){var t,e,i,u;if(2===(t=arguments.length))return l(r)||l(n)?NaN:r===R||n===R?R:r===n&&0===r?un(r)?r:n:r<n?r:n;for(e=Q,u=0;u<t;u++){if(l(i=arguments[u])||i===R)return i;(i<e||i===e&&0===i&&un(i))&&(e=i)}return e}var on=.6931471803691238,an=1.9082149292705877e-10,cn=1048575;function ln(r){var n,t,e,i,u,f,o,a,c,y,v,p;return 0===r?R:l(r)||r<0?NaN:(u=0,(t=z(r))<1048576&&(u-=54,t=z(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-X|0,u+=(a=614244+(t&=cn)&1048576|0)>>20|0,o=(r=K(r,t|1072693248^a))-1,(cn&2+t)<3?0===o?0===u?0:u*on+u*an:(f=o*o*(.5-.3333333333333333*o),0===u?o-f:u*on-(f-u*an-o)):(a=t-398458|0,c=440401-t|0,i=(v=(p=(y=o/(2+o))*y)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),f=e+i,(a|=c)>0?(n=.5*o*o,0===u?o-(n-y*(n+f)):u*on-(n-(y*(n+f)+u*an)-o)):0===u?o-y*(o-f):u*on-(y*(o-f)-u*an-o))))}var yn=709.782712893384,vn=-708.3964185322641,pn=10.900511;function sn(r,n,t,e,i){var u,f,o,a,c,y,v,s,b,w,N,d,A,_;if(!i)return tn(t,r)*tn(e,n);if(a=r+pn-.5,c=n+pn-.5,y=(A=r+n)+pn-.5,u=p(A),u/=p(r)*p(n),u*=ur(c/2.718281828459045),u*=ur(a/y),s=(e*r-t*c)/c,fn(fr(v=(t*n-e*a)/a),fr(s))<.2)if(v*s>0||fn(r,n)<1)fr(v)<.1?u*=Lr(r*ir(v)):u*=tn(t*y/a,r),fr(s)<.1?u*=Lr(n*ir(s)):u*=tn(e*y/c,n);else if(function(r,n){var t,e,i,u;if(2===(t=arguments.length))return l(r)||l(n)?NaN:r===Q||n===Q?Q:r===n&&0===r?en(r)?r:n:r>n?r:n;for(e=R,u=0;u<t;u++){if(l(i=arguments[u])||i===Q)return i;(i>e||i===e&&0===i&&en(i))&&(e=i)}return e}(fr(v),fr(s))<.5)o=n/r,(f=r<n)&&o*s<.1||!f&&v/o>.1?(b=nr(o*ir(s)),u*=Lr(b=r*ir(b=v+b+b*v))):(b=nr(ir(v)/o),u*=Lr(b=n*ir(b=s+b+b*s)));else if(fr(v)<fr(s))if((_=r*ir(v)+n*ln(e*y/c))<=vn||_>=yn){if((_+=ln(u))>=yn)return NaN;u=Lr(_)}else u*=Lr(_);else if((_=n*ir(s)+r*ln(t*y/a))<=vn||_>=yn){if((_+=ln(u))>=yn)return NaN;u=Lr(_)}else u*=Lr(_);else if(d=e*y/c,v=r*ln(N=t*y/a),s=n*ln(d),v>=yn||v<=vn||s>=yn||s<=vn)if(r<n)if(w=tn(d,n/r),(b=r*(ln(N)+ln(w)))<yn&&b>vn)u*=tn(w*N,r);else{if((s+=v+ln(u))>=yn)return NaN;u=Lr(s)}else if((b=(ln(w=tn(N,r/n))+ln(d))*n)<yn&&b>vn)u*=tn(w*d,n);else{if((s+=v+ln(u))>=yn)return NaN;u=Lr(s)}else u*=tn(N,r)*tn(d,n);return u}function bn(r,n,t){var e;return 1===r?0:(e=sn(n,t,r,1-r,!0),e/=(1-r)*r)}function wn(r,n,t){return l(r)||l(n)||l(t)||n<=0||t<=0||t>1?NaN:v(r)&&0!==t?t/(n+r)*bn(t,n,r+1):0}return c(wn,"factory",(function(r,n){return l(r)||l(n)||r<=0||n<=0||n>1?(t=NaN,function(){return t}):function(t){return l(t)?NaN:v(t)?n/(r+t)*bn(n,r,t+1):0};var t})),wn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).pmf=n();
//# sourceMappingURL=index.js.map
