(this["webpackJsonpfanatag-app"]=this["webpackJsonpfanatag-app"]||[]).push([[0],{46:function(e,t,a){e.exports=a(62)},51:function(e,t,a){},52:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),r=a.n(c),i=(a(51),a(18)),s=(a(52),a(106)),o=a(103),m=a(105),p=a(104),u=a(108);function f(e){var t=e.spanList,a=e.setSpan;return l.a.createElement("form",null,l.a.createElement("ul",{class:"select"},l.a.createElement("li",null,l.a.createElement("input",{className:"select_close",type:"radio",name:"awesomeness",id:"awesomeness-close",value:""}),l.a.createElement("span",{className:"select_label select_label-placeholder"},"\u30af\u30ed\u30fc\u30eb\u9593\u9694")),l.a.createElement("li",{className:"select_items"},l.a.createElement("input",{className:"select_expand",type:"radio",name:"awesomeness",id:"awesomeness-opener"}),l.a.createElement("label",{className:"select_closeLabel",for:"awesomeness-close"}),l.a.createElement("ul",{className:"select_options"},t.map((function(e){return l.a.createElement("li",{className:"select_option"},l.a.createElement("input",{className:"select_input",type:"radio",name:"awesomeness",id:"awesomeness-".concat(e),onClick:function(){return a(1e3*e)}}),l.a.createElement("label",{className:"select_label",for:"awesomeness-".concat(e)},e,"\u79d2"))}))),l.a.createElement("label",{className:"select_expandLabel",for:"awesomeness-opener"}))))}function d(e){var t=e.searchText,a=e.setTimer,n=e.watch;return l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{className:"btn-social-long-twitter",onClick:function(){t&&a(1)}},l.a.createElement("i",{className:"fa fa-twitter"})," ",l.a.createElement("span",null,"\u30c4\u30a4\u30fc\u30c8\u53d6\u5f97"))),l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement("button",{className:"btn-social-long-twitter",onClick:function(){a(0),clearInterval(n)}},l.a.createElement("span",null,"\u53d6\u5f97\u30ad\u30e3\u30f3\u30bb\u30eb"))))))}var E=a(38),b=a.n(E);function g(e,t){var a={Authorization:"Basic ".concat(b()(t))};return fetch("".concat("https://asia-northeast1-fanatag-cdc8c.cloudfunctions.net/api/","search?text=").concat(encodeURIComponent(e)),{headers:a}).then((function(e){return e.json()}))}function x(e){return l.a.createElement(s.a,Object.assign({elevation:6,variant:"filled"},e))}var h=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),E=s[0],b=s[1],h=Object(n.useState)(""),y=Object(i.a)(h,2),v=y[0],w=y[1],S=Object(n.useState)(""),N=Object(i.a)(S,2),j=N[0],C=N[1],O=Object(n.useState)(0),_=Object(i.a)(O,2),k=_[0],L=_[1],z=Object(n.useState)(""),H=Object(i.a)(z,2),I=H[0],W=H[1],A=Object(n.useState)(6e3),T=Object(i.a)(A,2),R=T[0],B=T[1];Object(n.useEffect)((function(){E&&k>0&&(g(E,v).then((function(e){if(e.error)return C("\u8a8d\u8a3c\u30a8\u30e9\u30fc\u3067\u3059\u3002\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002");c([e[0]])})),W(setInterval((function(){g(E,v).then((function(e){if(e.error)return C("\u8a8d\u8a3c\u30a8\u30e9\u30fc\u3067\u3059\u3002\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002");c([e[0]])}))}),R)))}),[k]);var D=function(e,t){"clickaway"!==t&&(C(""),L(0),clearInterval(I))};return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},a.length>0?l.a.createElement("div",{style:{backgroundColor:"#1da1f3",height:"85px",width:"500px"}},l.a.createElement(o.a,{container:!0,style:{padding:"2px"}},l.a.createElement(o.a,{style:{minHeight:"25px",maxHeight:"25px",position:"relative"},container:!0,item:!0,xs:12},l.a.createElement(o.a,{item:!0,xs:1,style:{textAlign:"center"}},l.a.createElement("i",{className:"fa fa-twitter"})),l.a.createElement(o.a,{item:!0,xs:5},l.a.createElement(p.a,{noWrap:!0,style:{fontWeight:"bold",fontSize:"100%"}},E))),l.a.createElement(o.a,{style:{minHeight:"60px",maxHeight:"60px",position:"relative",backgroundColor:"#ffffff",paddingLeft:"2px"},item:!0,xs:12,spacing:3},l.a.createElement("img",{src:a[0].image_url,style:{height:"15px",borderRadius:"50%"}}),l.a.createElement(p.a,{component:"span",style:{paddingLeft:"5px",fontWeight:"bold",fontSize:"100%",color:"#000000"}},a[0].name),l.a.createElement(p.a,{component:"span",style:{paddingLeft:"5px",fontSize:"70%",color:"#888888"}},a[0].id),l.a.createElement(p.a,{style:{fontSize:"80%",color:"#000000",margin:"4px",width:"".concat(2*a[0].text.length,"px"),paddingLeft:"500px",whiteSpace:"nowrap",animationName:"marquee",animationDuration:"".concat(R/1e3,"s"),animationTimingFunction:"linear",animationIterationCount:"infinite"}},a[0].text)))):"",l.a.createElement("br",null),l.a.createElement("br",null),a.length>0?l.a.createElement("div",{style:{backgroundColor:"#1da1f3",height:"130px",width:"500px"}},l.a.createElement(o.a,{container:!0,style:{padding:"2px"}},l.a.createElement(o.a,{style:{minHeight:"25px",maxHeight:"25px",position:"relative"},container:!0,item:!0,xs:12},l.a.createElement(o.a,{item:!0,xs:1,style:{textAlign:"center"}},l.a.createElement("i",{className:"fa fa-twitter"})),l.a.createElement(o.a,{item:!0,xs:5},l.a.createElement(p.a,{noWrap:!0,style:{fontWeight:"bold",fontSize:"100%"}},E))),l.a.createElement(o.a,{style:{minHeight:"105px",maxHeight:"105px",position:"relative",backgroundColor:"#ffffff",paddingLeft:"2px"},item:!0,xs:12,spacing:3},l.a.createElement("img",{src:a[0].image_url,style:{height:"15px",borderRadius:"50%"}}),l.a.createElement(p.a,{component:"span",style:{paddingLeft:"5px",fontWeight:"bold",fontSize:"100%",color:"#000000"}},a[0].name),l.a.createElement(p.a,{component:"span",style:{paddingLeft:"5px",fontSize:"70%",color:"#888888"}},a[0].id),l.a.createElement(p.a,{style:{fontSize:"80%",color:"#000000",margin:"4px"}},a[0].text)))):"",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d,{searchText:E+v,setTimer:L,watch:I}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(m.a,{id:"filled-basic",component:"span",style:{backgroundColor:"#ffffff"},label:"\u30af\u30ed\u30fc\u30eb\u3057\u305f\u3044\u6587\u5b57\u5217",variant:"filled",value:E,disabled:k>0,onChange:function(e){return b(e.target.value)}}),l.a.createElement("br",null),l.a.createElement(m.a,{id:"filled-password-input",style:{backgroundColor:"#ffffff"},label:"Password",type:"password",autoComplete:"current-password",variant:"filled",value:v,disabled:k>0,onChange:function(e){return w(e.target.value)}}),l.a.createElement("br",null),k>0?"":l.a.createElement(f,{spanList:[6,10,15,30],setSpan:B})),l.a.createElement(u.a,{open:!!j,autoHideDuration:3e3,onClose:D},l.a.createElement(x,{onClose:D,severity:"error"},j)))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.e9c9e6ff.chunk.js.map