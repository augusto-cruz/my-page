(this["webpackJsonpmy-page"]=this["webpackJsonpmy-page"]||[]).push([[0],{26:function(e,t,a){e.exports=a(54)},48:function(e,t,a){},49:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),l=a.n(c),u=a(3),s=a.n(u),o=a(4),i=a(5),m=a(6),p=a(8),h=a(7),b=a(9),g=a(25),f=a.n(g).a.create({baseURL:"https://api.github.com/users/augusto-cruz"}),E=(a(48),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={repos:[]},a.getRepos=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get("/repos");case 3:t=e.sent,a.setState({repos:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getRepos()}},{key:"render",value:function(){return r.a.createElement("div",{className:"repo-list"},this.state.repos.map((function(e){return r.a.createElement("article",{key:e.id},r.a.createElement("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer",className:"title"},e.name),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Description: ",e.description),r.a.createElement("p",null,"Language: ",e.language))})))}}]),t}(n.Component)),d=(a(49),a(10)),v=a(11),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={myData:[]},a.getData=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get();case 3:t=e.sent,a.setState({myData:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state.myData;return r.a.createElement("main",null,r.a.createElement("header",null,r.a.createElement("div",{className:"header-content"},r.a.createElement("img",{src:e.avatar_url,alt:"Augusto Cruz"}),r.a.createElement("h3",null,r.a.createElement("strong",null,"Augusto Cruz")),r.a.createElement("p",null,e.bio)),r.a.createElement("div",{class:"social-button"},r.a.createElement("a",{href:"https://github.com/augusto-cruz",target:"_blank",className:"button github"},r.a.createElement(d.a,{icon:v.b})),r.a.createElement("a",{href:"https://www.linkedin.com/in/augustoccruz/",target:"_blank",className:"button linkedin"},r.a.createElement(d.a,{icon:v.c})),r.a.createElement("a",{href:"https://codepen.io/augusto-cruz",target:"_blank",className:"button codepen"},r.a.createElement(d.a,{icon:v.a})))),r.a.createElement(E,null))}}]),t}(n.Component);l.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.5b0b5f2b.chunk.js.map