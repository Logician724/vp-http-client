(this["webpackJsonpvp-http"]=this["webpackJsonpvp-http"]||[]).push([[0],{21:function(e,t,a){e.exports={editorWidth:"HTTPEditor_editorWidth__2I9us"}},24:function(e,t,a){e.exports=a(49)},29:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),c=a.n(s),o=(a(29),a(7)),l=a.n(o),i=a(8),u=a(19),d=a(5),m=a(2),p=a(20),b=a(23),v=a(22),h=a(21),E=a.n(h),y=function(e){return r.a.createElement("div",{className:"".concat(E.a.editorWidth," btn btn-primary text-white mb-3")},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-2"},"HTTP"),r.a.createElement("div",{className:"GET"===e.type?"col-3":"col-2"},r.a.createElement("div",{className:"form-control"},e.type)),r.a.createElement("div",{className:"GET"===e.type?"col-7":"col-4"},r.a.createElement("input",{placeholder:"Request URL",type:"text",className:"form-control",value:e.url,onChange:function(t){return e.URLChangeHandler(t,e.id)}})),"GET"!==e.type?r.a.createElement("div",{className:"col-4"},r.a.createElement("textarea",{placeholder:"JSON Body",className:"form-control",rows:"1",value:e.body,onChange:function(t){return e.bodyChangeHandler(t,e.id)}})):null))},f=function(e){return r.a.createElement("div",{className:"btn btn-primary mb-3 col-7",onClick:function(){return e.clickHandler(e.type)}},r.a.createElement("div",{className:"row align-items-center"},r.a.createElement("div",{className:"col-4"},"HTTP"),r.a.createElement("div",{className:"col-8"},r.a.createElement("div",{className:"form-control"},e.type))))},g=a(4),k=a.n(g),N=(a(48),function(e){Object(b.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={requests:[],responses:[]},e.handleButtonClick=function(t){e.setState((function(e){return"GET"===t?{requests:[].concat(Object(m.a)(e.requests),[{type:t,url:""}])}:{requests:[].concat(Object(m.a)(e.requests),[{type:t,url:"",body:""}])}}))},e.handleURLChange=function(t,a){var n=Object(m.a)(e.state.requests),r=Object(d.a)(Object(d.a)({},n[a]),{},{url:t.target.value});n[a]=r,e.setState({requests:n})},e.handleBodyChange=function(t,a){var n=Object(m.a)(e.state.requests),r=Object(d.a)(Object(d.a)({},n[a]),{},{body:t.target.value});n[a]=r,e.setState({requests:n})},e.sendRequests=Object(u.a)(l.a.mark((function t(){var a,n,r,s,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("sending requests"),a=[],n=Object(i.a)(e.state.requests),t.prev=3,n.s();case 5:if((r=n.n()).done){t.next=39;break}s=r.value,t.prev=7,c=null,t.t0=s.type,t.next="GET"===t.t0?12:"POST"===t.t0?17:"PUT"===t.t0?21:"DELETE"===t.t0?25:29;break;case 12:return t.next=14,k.a.get(s.url);case 14:return c=t.sent,console.log(c),t.abrupt("break",30);case 17:return t.next=19,k.a.post(s.url,s.body?s.body:{},{Headers:{Accept:"application/json","Content-Type":"application/json"}});case 19:return c=t.sent,t.abrupt("break",30);case 21:return t.next=23,k.a.put(s.url,s.body?s.body:{});case 23:return c=t.sent,t.abrupt("break",30);case 25:return t.next=27,k.a.delete(s.url,s.body?s.body:{});case 27:return c=t.sent,t.abrupt("break",30);case 29:console.error("Unsupported request type");case 30:a.push(c),t.next=37;break;case 33:t.prev=33,t.t1=t.catch(7),a.push(t.t1),console.log(typeof t.t1);case 37:t.next=5;break;case 39:t.next=44;break;case 41:t.prev=41,t.t2=t.catch(3),n.e(t.t2);case 44:return t.prev=44,n.f(),t.finish(44);case 47:e.setState({responses:[].concat(Object(m.a)(e.state.responses),a)}),e.responseMsg(a);case 49:case"end":return t.stop()}}),t,null,[[3,41,44,47],[7,33]])}))),e.responseMsg=function(t){var a,n=[],r=Object(i.a)(e.state.responses);try{for(r.s();!(a=r.n()).done;){var s=a.value,c=null;c=s.status?"{ msg: HTTP "+s.status+" Success } "+JSON.stringify(s.data,void 0,2):s.response?"HTTP ".concat(s.response.status," Failure\n").concat(JSON.stringify(s.response,void 0,2)):"HTTP Network Error or Unknown",n.push(c)}}catch(o){r.e(o)}finally{r.f()}return n},e.render=function(){return r.a.createElement("div",{className:"container-fluid p-0 w-100 h-100"},r.a.createElement("div",{className:"row no-gutters w-100 h-100"},r.a.createElement("div",{className:"col-xs-12 col-lg-2 mt-auto mb-auto"},r.a.createElement("div",{className:"row ml-3"},r.a.createElement(f,{type:"GET",clickHandler:e.handleButtonClick}),r.a.createElement(f,{type:"POST",clickHandler:e.handleButtonClick}),r.a.createElement(f,{type:"PUT",clickHandler:e.handleButtonClick}),r.a.createElement(f,{type:"DELETE",clickHandler:e.handleButtonClick}))),r.a.createElement("div",{className:"HTTPEditors-container"},r.a.createElement("div",{className:"m-3 w-100"},e.state.requests.map((function(t,a){return r.a.createElement(y,{key:a,id:a,type:t.type,url:t.url,body:t.body,URLChangeHandler:e.handleURLChange,bodyChangeHandler:e.handleBodyChange})})))),r.a.createElement("div",{className:"col-xs-12 col-lg-4 bg-dark"},r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("button",{className:"m-auto btn btn-primary",onClick:e.sendRequests},"Send Requests"),r.a.createElement("div",{className:"response-container"},r.a.createElement("div",{className:"mb-3 ml-1 mr-1"},e.responseMsg(e.state.responses).map((function(e,t){return r.a.createElement("div",{className:"text-wrap text-break m",key:t,style:{whiteSpace:"pre-line"}},r.a.createElement("pre",{className:"text-success"},e))}))))))))},e}return a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.d4bb914f.chunk.js.map