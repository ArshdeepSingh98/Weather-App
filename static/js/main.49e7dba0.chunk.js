(this.webpackJsonpweather_app=this.webpackJsonpweather_app||[]).push([[0],{27:function(t,e,n){t.exports=n(51)},51:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(22),i=n.n(c),o=(n(32),n(1)),u=n(2);function l(){var t=Object(o.a)(["\n\theight: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 0 10px;\n\tmargin: auto;\n"]);return l=function(){return t},t}var d=u.a.div(l()),s=function(t){return r.a.createElement(d,null,t.children)},f=n(9),p=n.n(f),b=n(26),m=n(6),v=n(5),h=n(4),g=n(10),x=n.n(g),j=Object(a.createContext)();function O(){var t=Object(o.a)(["\n\tcolor: gray;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\t\n\t&:focus {\n\t\tbackground: pink;\n\t}\n"]);return O=function(){return t},t}function w(){var t=Object(o.a)(["\n\tdisplay: inline-block;\n\ttext-align: center;\n\tborder: none;\n\tbackground-color: rgba(0, 0, 0, 0.05);\n\tfont-size: 1.5rem;\n\theight: auto;\n\twidth: 30px;\n\tposition: relative;\n    border-top-right-radius: 100%;\n    border-bottom-right-radius: 100%;\n}\n"]);return w=function(){return t},t}function y(){var t=Object(o.a)(["\n\tdisplay: inline-block;\n\twidth: 100%;\n\tborder: none;\n\tbackground: rgba(0, 0, 0, 0.05);\n\tpadding: 0.5rem 2rem;\n\tborder-radius: 2px;\n\t\n\t&:focus {\n\t\toutline: none;\n\t\tbox-shadow: -2px 0 0 gray;\n\t}\n"]);return y=function(){return t},t}function E(){var t=Object(o.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\tmargin: 2em 0;\n"]);return E=function(){return t},t}var k=u.a.form(E()),S=u.a.input(y()),C=u.a.button(w()),D=u.a.div(O()),_=function(){var t=Object(a.useContext)(j).api_call;return r.a.createElement(k,{onSubmit:t},r.a.createElement(S,{placeholder:"Enter the name of the city to get started",name:"location",autoComplete:"off",type:"text"}),r.a.createElement(C,null,r.a.createElement(D,null,"\u2192")))};function M(){var t=Object(o.a)(["\n\tbackground: rgba(255, 255, 255, 0.75);\n\twidth: 100%;\n\theight: 100%;\n\tpadding: 2em 2.5em;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n"]);return M=function(){return t},t}var z=u.a.div(M()),P=function(t){return r.a.createElement(z,null,t.children)};function F(){var t=Object(o.a)(["\n\tfont-size: 16px;\n\tcolor: rgba(0,0,0,.7);\n"]);return F=function(){return t},t}function T(){var t=Object(o.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\twidth: 100%;\n"]);return T=function(){return t},t}var q=u.a.div(T()),A=u.a.div(F()),J=function(){var t=Object(a.useContext)(j),e=t.city,n=t.date,c=n?new Date(n):new Date,i=String(c.getDate()).padStart(2,"0"),o=String(c.getMonth()+1).padStart(2,"0"),u=c.getFullYear(),l="".concat(i,".").concat(o,".").concat(u);return r.a.createElement(q,null,r.a.createElement(A,null,e),r.a.createElement(A,null,l))};function Y(){var t=Object(o.a)(["\n\twidth: 33.34%;\n\tbackground: rgba(0, 0, 0, 0.3);\n\theight: 100%;\n\tpadding: 2em 2.5em;\n"]);return Y=function(){return t},t}var B=u.a.div(Y()),H=function(t){return r.a.createElement(B,null,t.children)};function I(){var t=Object(o.a)(["\n\tfont-size: ",";\n\tfont-wight: ",";\t\n"]);return I=function(){return t},t}function W(){var t=Object(o.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n"]);return W=function(){return t},t}function G(){var t=Object(o.a)(["\n\tposition: absolute;\n\ttop: -135px;\n\tright: -100px;\n\tfilter: drop-shadow(5px 7px 3px rgba(0,0,0,0.4));    \n"]);return G=function(){return t},t}function K(){var t=Object(o.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tposition: relative;\n\tmargin: 0 5em;\n"]);return K=function(){return t},t}function L(){var t=Object(o.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\t\n\talign-items: center;\n\tjustify-content: center;\n\tflex-grow: 3;\n\tpadding: 0 2em;\n"]);return L=function(){return t},t}var N=u.a.div(L()),Q=u.a.div(K()),R=u.a.img(G()),U=u.a.div(W()),V=u.a.div(I(),(function(t){var e;return null!==(e=t.fontSize)&&void 0!==e?e:"16px"}),(function(t){var e;return null!==(e=t.bold)&&void 0!==e?e:"normal"})),X=function(){var t=Object(a.useContext)(j),e=t.weather,n=t.date,c=t.time,i="http://openweathermap.org/img/wn/".concat(e&&e.icon,"@4x.png"),o=e&&e.temp,u=e&&e.main,l=new Date(n).getDay();return r.a.createElement(N,null,r.a.createElement(Q,null,r.a.createElement(R,{src:i,alt:""}),r.a.createElement(V,{fontSize:"72px",bold:!0},o,"\xb0C")),r.a.createElement(U,null,c&&r.a.createElement(V,null,function(t){return"".concat(t.slice(0,2)%12||12).concat(t.slice(2,5)," ").concat(t.slice(0,2)>=12?"PM":"AM")}(c)),r.a.createElement(V,{fontSize:"36px",bold:!0},["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][l]),r.a.createElement(V,null,u)))},Z=function(t){var e=t.error;return r.a.createElement("div",null,e)};function $(){var t=Object(o.a)(["\n\tfont-size: 14px;\n\tfont-weight: bold;\n"]);return $=function(){return t},t}function tt(){var t=Object(o.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 40px;\n\twidth: 48px;\n\tpadding: 22px 8px;\n\tborder-radius: 30px;\n\tborder: ",";\n\theight: 100px;\n\talign-items: center;\n\tjustify-content: space-between;\n\tmargin: 0 30px;\n"]);return tt=function(){return t},t}function et(){var t=Object(o.a)(["\n\tdisplay: flex;\n\tpadding: 1em 0 0.4em 0;\n\talign-items: center;\n\tjustify-content: center;\n"]);return et=function(){return t},t}var nt=u.a.div(et()),at=u.a.div(tt(),(function(t){return t.selected?"1px solid gray;":"none"})),rt=u.a.div($()),ct=function(t){var e=t.handleDayChange,n=Object(a.useContext)(j),c=Object(a.useState)(Object.keys(n.forecast)[0]),i=Object(h.a)(c,2),o=i[0],u=i[1],l=Object(a.useCallback)((function(t){u(t),e(t)}),[u,e]),d=Object(a.useMemo)((function(){return function(t,e,n){var a=[],c=function(c){var i=new Map,o=t.forecast[c],u=0;for(var l in o){var d,s=o[l];if(s&&s.weather_data)i.set(c,(((null!==(d=i.get(c))&&void 0!==d?d:0)*u+s.weather_data.temp)/(u+1)).toFixed(0)),u++}a.push(r.a.createElement(at,{id:c,key:c,onClick:function(){return n(c)},selected:c===e},new Date(c).toDateString().slice(0,3),r.a.createElement(rt,null,i.get(c),"\xb0C")))};for(var i in t.forecast)c(i);return a}(n,o,l)}),[n,o,l]);return r.a.createElement(nt,null,d)};function it(){var t=Object(o.a)(["\n\tfont-size: 14px;\n\tfont-weight: bold;\n"]);return it=function(){return t},t}function ot(){var t=Object(o.a)(["\n\tdisplay: flex;\n\tborder: ",";\n\talign-items: center;\n\tjustify-content: space-between;\n\tmargin: 15px 0;\n\twidth: 75%;\n\tpadding: 8px 22px;\n\tborder-radius: 30px;\n\tcolor: white;\n"]);return ot=function(){return t},t}function ut(){var t=Object(o.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-end;\n\tjustify-content: center;\n\theight: 100%;\n\twidth: 100%;\n"]);return ut=function(){return t},t}var lt=u.a.div(ut()),dt=u.a.div(ot(),(function(t){return t.selected?"1px solid white":"none"})),st=u.a.div(it()),ft=function(t){var e=t.handleTimeChange,n=Object(a.useContext)(j),c=n.forecast,i=n.date,o=n.time,u=Object(a.useState)(o),l=Object(h.a)(u,2),d=l[0],s=l[1],f=Object(a.useCallback)((function(t){s(t),e(t)}),[s,e]),p=Object(a.useMemo)((function(){return function(t,e,n){var a=[],c=function(c){var i=t[c],o=function(t){return"".concat(t.slice(0,2)%12||12).concat(t.slice(2,5)," ").concat(t.slice(0,2)>=12?"PM":"AM")}(c);a.push(r.a.createElement(dt,{id:c,key:c,onClick:function(){return n(c)},selected:c===e},o,r.a.createElement(st,null,i.weather_data.temp.toFixed(0),"\xb0C")))};for(var i in t)c(i);return a}(c[i],d,f)}),[c,i,d,f]);return r.a.createElement(lt,null,p)};function pt(){var t=Object(o.a)(["\n\tflex-grow: 1;\n"]);return pt=function(){return t},t}function bt(){var t=Object(o.a)(["\n\theight: 80vh;\n\tbox-shadow: 0px 13px 40px -13px rgba(0,0,0,0.75);\n\twidth: 85%;\n\tmargin: 0 auto;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tborder-radius: 3px;\n\toverflow: hidden;\n\tdisplay: flex;\n"]);return bt=function(){return t},t}var mt=u.a.div(bt()),vt=u.a.div(pt()),ht=function(){var t=Object(a.useState)(),e=Object(h.a)(t,2),n=e[0],c=e[1],i=Object(a.useState)(),o=Object(h.a)(i,2),u=o[0],l=o[1],d=Object(a.useState)(),s=Object(h.a)(d,2),f=s[0],g=s[1],O=Object(a.useState)(),w=Object(h.a)(O,2),y=w[0],E=w[1],k=Object(a.useState)(),S=Object(h.a)(k,2),C=S[0],D=S[1],M=Object(a.useState)(),z=Object(h.a)(M,2),F=z[0],T=z[1],q=function(t){var e={},n=!1;for(var a in t){var r=t[a],c=Object(v.a)(Object(v.a)({},r.main),r.weather[0]),i=r.dt_txt.slice(0,10),o=r.dt_txt.slice(11);n||(T(o),n=!0),e=Object(v.a)(Object(v.a)({},e),{},Object(m.a)({},i,Object(v.a)(Object(v.a)({},e[i]),{},Object(m.a)({},o,{weather_data:c}))))}return e},A=function(t){var e=String(t.getDate()).padStart(2,"0"),n=String(t.getMonth()+1).padStart(2,"0"),a=t.getFullYear();return"".concat(a,"-").concat(n,"-").concat(e)},Y=function(){var t=Object(b.a)(p.a.mark((function t(e){var n,a,r,i,o,u,d,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),n=e.target.elements.location.value){t.next=7;break}return E("Please enter the name of the city."),c(null),g(null),t.abrupt("return");case 7:return a="b924be4d69eac0e8eef619e2bd530262",r="https://api.openweathermap.org/data/2.5/weather?units=metric&q=".concat(n,"&appid=").concat(a),i="https://api.openweathermap.org/data/2.5/forecast?units=metric&q=".concat(n,"&appid=").concat(a),o=x.a.get(i),u=x.a.get(r),t.prev=12,t.next=15,u;case 15:d=t.sent,c(Object(v.a)(Object(v.a)({},d.data.weather[0]),d.data.main)),g(d.data.name),D(A(new Date)),E(null),t.next=27;break;case 22:t.prev=22,t.t0=t.catch(12),E("Please enter valid city name."),c(null),g(null);case 27:return t.prev=27,t.next=30,o;case 30:s=t.sent,l(q(s.data.list)),E(null),t.next=42;break;case 35:t.prev=35,t.t1=t.catch(27),E("Enter valid city name."),console.log(t.t1),c(null),g(null),l(null);case 42:case"end":return t.stop()}}),t,null,[[12,22],[27,35]])})));return function(e){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){if(document.body){var t=(new Date).getHours();document.body.background=7<=t&&t<20?"https://source.unsplash.com/1600x900/?sun":"https://source.unsplash.com/1600x900/?moon"}}),[]);return r.a.createElement(mt,null,r.a.createElement(P,null,r.a.createElement(j.Provider,{value:{api_call:Y,weather:n,city:f,forecast:u,date:C,time:F}},r.a.createElement(vt,null,r.a.createElement(J,null),r.a.createElement(_,null)),n&&r.a.createElement(X,null),u&&r.a.createElement(ct,{handleDayChange:function(t){var e=u[t][Object.keys(u[t])[0]].weather_data;D(t),T(Object.keys(u[t])[0]),c(e)}}),y&&r.a.createElement(Z,{error:y}))),r.a.createElement(H,null,r.a.createElement(j.Provider,{value:{forecast:u,date:C,time:F}},u&&r.a.createElement(ft,{handleTimeChange:function(t){var e=u[C][t].weather_data;T(t),c(e)}}))))},gt=function(){return r.a.createElement(s,null,r.a.createElement(ht,null))};i.a.render(r.a.createElement(r.a.StrictMode,null," ",r.a.createElement(gt,null)," "),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.49e7dba0.chunk.js.map