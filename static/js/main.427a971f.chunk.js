(this.webpackJsonpnumberstalk=this.webpackJsonpnumberstalk||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),i=(n(12),n(3)),s=n(4),l=n(6),u=n(5),m=(n(13),function(e){return o.a.createElement("article",{className:"center mw5 mw6-ns hidden ba mv4"},o.a.createElement("h1",{className:"tc f4 bg-dark-blue white mv0 pv2 ph3"},e.numberToDisplay+" "," ",e.topicToDisplay+" "," fact"),o.a.createElement("div",{className:"pa3 bt"},o.a.createElement("p",{className:"tc f6 f5-ns lh-copy measure mv0 dark-blue"},e.factToDisplay)))}),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).getTrivia=function(){var t=document.getElementById("triviaInput").value;console.log(t),e.setState({topic:"trivia"}),e.setState({number:document.getElementById("triviaInput").value}),fetch("https://cors-anywhere.herokuapp.com/http://numbersapi.com/".concat(t,"/trivia?json")).then((function(e){return e.json()})).then((function(t){return e.setState({fact:t.text}),console.log(e.state.topic,e.state.number,e.state.fact)}))},e.getMath=function(){var t=document.getElementById("mathInput").value;console.log(t),e.setState({topic:"math"}),e.setState({number:document.getElementById("mathInput").value}),fetch("https://cors-anywhere.herokuapp.com/http://numbersapi.com/".concat(t,"/math?json")).then((function(e){return e.json()})).then((function(t){return e.setState({fact:t.text}),console.log(e.state.topic,e.state.number,e.state.fact)}))},e.getDate=function(){var t=document.getElementById("dateInput").value;console.log(t),e.setState({topic:"date"}),e.setState({number:document.getElementById("dateInput").value}),fetch("https://cors-anywhere.herokuapp.com/http://numbersapi.com/".concat(t,"/date?json")).then((function(e){return e.json()})).then((function(t){return e.setState({fact:t.text}),console.log(e.state.topic,e.state.number,e.state.fact)}))},e.getYear=function(){var t=document.getElementById("yearInput").value;console.log(t),e.setState({topic:"year"}),e.setState({number:document.getElementById("yearInput").value}),fetch("https://cors-anywhere.herokuapp.com/http://numbersapi.com/".concat(t,"/year?json")).then((function(e){return e.json()})).then((function(t){return e.setState({fact:t.text}),console.log(e.state.topic,e.state.number,e.state.fact)}))},e.state={topic:"",number:"",fact:""},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"tc dark-blue f1 mv4"}," Numbers Talk "),o.a.createElement("h1",{className:"tc dark-blue f3 mv4"}," facts behind numbers "),o.a.createElement(m,{topicToDisplay:this.state.topic,numberToDisplay:this.state.number,factToDisplay:this.state.fact}),o.a.createElement("h1",{className:"tc f3 dark-blue"}," Trivia",o.a.createElement("input",{type:"number",className:"w5 mh4",placeholder:"Enter Number",id:"triviaInput"}),o.a.createElement("p",{className:"f5 grow br-pill ba bw2 ph3 pv1 mb1 dib dark-blue pointer",onClick:this.getTrivia},"Go")),o.a.createElement("h1",{className:"tc f3 dark-blue"}," Math",o.a.createElement("input",{type:"number",className:"w5 mh4",placeholder:"Enter Number",id:"mathInput"}),o.a.createElement("p",{className:"f5 grow br-pill ba bw2 ph3 pv1 mb1 dib dark-blue pointer",onClick:this.getMath},"Go")),o.a.createElement("h1",{className:"tc f3 dark-blue"}," Date",o.a.createElement("input",{className:"w5 mh4 gray",type:"text",placeholder:"Format MM/DD",id:"dateInput"}),o.a.createElement("p",{className:"f5 grow br-pill ba bw2 ph3 pv1 mb1 dib dark-blue pointer",onClick:this.getDate},"Go")),o.a.createElement("h1",{className:"tc f3 dark-blue"}," Year",o.a.createElement("input",{className:"w5 mh4",type:"year",placeholder:"Enter Year",id:"yearInput"}),o.a.createElement("p",{className:"f5 grow br-pill ba bw2 ph3 pv1 mb1 dib dark-blue pointer",onClick:this.getYear},"Go")))}}]),n}(a.Component),h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/numberstalk",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/numberstalk","/service-worker.js");h?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):d(t,e)}))}}()},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.427a971f.chunk.js.map