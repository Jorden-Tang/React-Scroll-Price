(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),r=l(7),c=l.n(r),o=(l(66),l(67),l(68),l(15)),i=l(35),s=l(51),u=l(34),m=l(49),d=(l(69),l(20)),E=l.n(d),f=function(e){var t=Object(a.useState)({scrolls:[]}),r=Object(o.a)(t,2),c=r[0],d=r[1];return Object(a.useEffect)((function(){E.a.get("http://localhost:8000/api/scroll",{},{withCredentials:!0}).then((function(e){d({scrolls:e.data.result})})).catch(console.log("WTF"))}),[]),0===c.scrolls.length?n.a.createElement("p",null,"Loading"):n.a.createElement("div",{className:"body"},n.a.createElement("div",{className:"header"},n.a.createElement("img",{className:"header_img",src:l(87)}),n.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around"}},n.a.createElement("h1",null,"Fruit's Scroll Side"),n.a.createElement("div",{id:"timeStampNote",style:{fontSize:"2vw",display:"flex",justifyContent:"space-around"}},n.a.createElement("span",null,n.a.createElement("span",{style:{color:"#ff0066"}},"Red"),"(OLD AF!)"),n.a.createElement("span",null),n.a.createElement("span",null,n.a.createElement("span",{style:{color:"#66ff00"}},"Green"),"(Fressshhh!)"))),n.a.createElement("img",{className:"header_img",src:l(88)})),n.a.createElement(m.a,{fluid:!0},n.a.createElement(s.a,null,[10,30,60,70,100].map((function(e){return[n.a.createElement(u.a,null,n.a.createElement(i.a,{size:"sm",striped:!0,hover:!0,variant:"dark"},n.a.createElement("thead",null,n.a.createElement("h1",null,e,"%"),n.a.createElement("tr",null,n.a.createElement("th",null,"Equip"),n.a.createElement("th",null,"Stat"),n.a.createElement("th",null,"Min"),n.a.createElement("th",null,"Mid"),n.a.createElement("th",null,"Max"))),n.a.createElement("tbody",null,c.scrolls.filter((function(t){return t.scrollSuccessRate===e&&"misc"!=t.scrollStat})).map((function(e,t){return[n.a.createElement("tr",{key:t,style:e.updatedAt<new Date(Date.now()-6048e5)?{color:"ff0066",fontSize:"1rem"}:{color:"#66ff00",fontSize:"1.2rem"}},n.a.createElement("td",null,e.scrollEquipment),n.a.createElement("td",null,e.scrollStat),e.scrollPrice[0]<1e6?n.a.createElement("td",null,(e.scrollPrice[0]/1e3).toFixed(1)+"K"):n.a.createElement("td",null,(e.scrollPrice[0]/1e6).toFixed(1)+"M"),e.scrollPrice[Math.floor((e.scrollPrice.length-1)/2)]<1e6?n.a.createElement("td",null,(e.scrollPrice[Math.floor((e.scrollPrice.length-1)/2)]/1e3).toFixed(1)+"K"):n.a.createElement("td",null,(e.scrollPrice[Math.floor((e.scrollPrice.length-1)/2)]/1e6).toFixed(1)+"M"),e.scrollPrice[e.scrollPrice.length-1]<1e6?n.a.createElement("td",null,(e.scrollPrice[e.scrollPrice.length-1]/1e3).toFixed(1)+"K"):n.a.createElement("td",null,(e.scrollPrice[e.scrollPrice.length-1]/1e6).toFixed(1)+"M"))]})))))]})),n.a.createElement(u.a,null,n.a.createElement(i.a,{size:"sm",striped:!0,hover:!0,variant:"dark"},n.a.createElement("thead",null,n.a.createElement("h1",null,"Misc"),n.a.createElement("tr",null,n.a.createElement("th",null,"Equip"),n.a.createElement("th",null,"Stat"),n.a.createElement("th",null,"Min"),n.a.createElement("th",null,"Mid"),n.a.createElement("th",null,"Max"))),n.a.createElement("tbody",null,c.scrolls.filter((function(e){return"misc"==e.scrollStat})).map((function(e,t){return[n.a.createElement("tr",{key:t,style:e.updatedAt<new Date(Date.now()-6048e5)?{color:"ff0066"}:{color:"#66ff00"}},n.a.createElement("td",null,e.scrollEquipment),n.a.createElement("td",null,e.scrollStat),e.scrollPrice[0]<1e6?n.a.createElement("td",null,(e.scrollPrice[0]/1e3).toFixed(1)+"K"):n.a.createElement("td",null,(e.scrollPrice[0]/1e6).toFixed(1)+"M"),e.scrollPrice[(e.scrollPrice.length-1)/2]<1e6?n.a.createElement("td",null,(e.scrollPrice[(e.scrollPrice.length-1)/2]/1e3).toFixed(1)+"K"):n.a.createElement("td",null,(e.scrollPrice[(e.scrollPrice.length-1)/2]/1e6).toFixed(1)+"M"),e.scrollPrice[e.scrollPrice.length-1]<1e6?n.a.createElement("td",null,(e.scrollPrice[e.scrollPrice.length-1]/1e3).toFixed(1)+"K"):n.a.createElement("td",null,(e.scrollPrice[e.scrollPrice.length-1]/1e6).toFixed(1)+"M"))]}))))))))},h=l(13),p=l(52),g=(l(48),l(89),l(29)),b=l(14),v=l(36),y=l.n(v),P=l(54),x=(l(97),l(129)),w=l(131),S=l(130),F=function(e){var t=Object(a.useState)({scrolls:[]}),l=Object(o.a)(t,2),r=l[0],c=l[1],i=function(e,t){e.preventDefault();var l=r.scrolls.slice();l[t][e.target.name]=e.target.value,c({scrolls:l})};function s(e){return E.a.post("http://localhost:8000/api/scroll",e,{withCredentials:!0})}return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Weclome Almighty Admin"),n.a.createElement("body",{style:{display:"flex"}},n.a.createElement(w.a,{class:"form-group",style:{width:"50%",height:"auto"}},r.scrolls.map((function(e,t){return[n.a.createElement("div",{key:t,style:{width:"100%",display:"flex",flexDirection:"row"}},n.a.createElement(x.a,{name:"scrollEquipment",label:"Equip",onChange:function(e){i(e,t)}}),n.a.createElement(x.a,{name:"scrollStat",label:"Stat",onChange:function(e){i(e,t)}}),n.a.createElement(x.a,{name:"scrollSuccessRate",label:"%",onChange:function(e){i(e,t)}}),n.a.createElement(x.a,{name:"scrollPrice",label:"Price",onChange:function(e){i(e,t)}}))]})),n.a.createElement(S.a,{variant:"contained",color:"primary",href:"#contained-buttons",onClick:function(e){e.preventDefault(),c({scrolls:[].concat(Object(b.a)(r.scrolls),[{scrollEquipment:"",scrollStat:"",scrollSuccessRate:"",scrollPrice:""}])})}},"+"),n.a.createElement(S.a,{onClick:function(e){e.preventDefault(),r.scrolls.forEach(function(){var e=Object(P.a)(y.a.mark((function e(t,l){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(t).then((function(){})).catch();case 2:case"end":return e.stop()}}),e)})));return function(t,l){return e.apply(this,arguments)}}()),c({scrolls:[]})},variant:"contained",color:"primary",href:"#contained-buttons"},"Submit"))))},j=function(e){var t=e.sendApiRequest,l=Object(a.useState)({email:"",password:"",errors:[]}),r=Object(o.a)(l,2),c=r[0],i=r[1],s=Object(a.useState)([]),u=Object(o.a)(s,2),m=u[0],d=u[1],E=Object(a.useState)(!1),f=Object(o.a)(E,2),b=f[0],v=f[1],y=function(e){var t=e.target,l=t.name,a=t.value;console.log(e.target.value),i(Object(p.a)({},c,Object(h.a)({},l,a)))};return n.a.createElement(n.a.Fragment,null,m.map((function(e){return n.a.createElement("p",{style:{color:"red"}},e)})),n.a.createElement("div",null,b?n.a.createElement(F,null):n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Admin Login"),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d([]),t(c).then((function(e){"err"in e.data&&d(e.data.err),console.log("admin auth is "+e.data.isAuth),"isAuth"in e.data&&(e.data.isAuth||Object(g.b)("/"),v(e.data.isAuth))})).catch((function(e){return console.log}))}},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{for:"exampleInputEmail1"},"Email address"),n.a.createElement("input",{onChange:y,type:"email",name:"email",class:"form-control",value:c.email,"aria-describedby":"emailHelp"}),n.a.createElement("small",{id:"emailHelp",class:"form-text text-muted"},"We'll never share your email with anyone else.")),n.a.createElement("div",{class:"form-group"},n.a.createElement("label",{for:"exampleInputPassword1"},"Password"),n.a.createElement("input",{onChange:y,type:"password",name:"password",class:"form-control",value:c.password})),n.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Submit")))))},O=(l(99),function(e){return n.a.createElement("div",{id:"body"},n.a.createElement(j,{sendApiRequest:function(e){return E.a.post("http://localhost:8000/api/login",e,{withCredentials:!0})}}))}),M=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"Oops can't find page"))};var A=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(g.a,null,n.a.createElement(f,{path:"/"}),n.a.createElement(O,{path:"/admin"}),n.a.createElement(M,{default:!0})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},61:function(e,t,l){e.exports=l(100)},66:function(e,t,l){},67:function(e,t,l){e.exports=l.p+"static/media/logo.ee7cd8ed.svg"},68:function(e,t,l){},69:function(e,t,l){},87:function(e,t,l){e.exports=l.p+"static/media/Mushroom.2717ed70.png"},88:function(e,t,l){e.exports=l.p+"static/media/Slime.b29de028.png"},89:function(e,t,l){},97:function(e,t,l){},99:function(e,t,l){}},[[61,1,2]]]);
//# sourceMappingURL=main.2f2b33ae.chunk.js.map