(this["webpackJsonpdigital-clock"]=this["webpackJsonpdigital-clock"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(2),l=n.n(i),r=(n(13),n(3)),o=n(4),s=n(6),u=n(5),m=n(7),d=(n(14),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={time:(new Date).toLocaleString().replace(","," ")},n.updateTime(),n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"updateTime",value:function(){var e=this;setInterval((function(){e.setState({time:(new Date).toLocaleString().replace(",","")})}),1e3)}},{key:"render",value:function(){return c.a.createElement("h1",null,this.state.time)}}]),t}(a.Component));l.a.render(c.a.createElement("div",{class:"main"},c.a.createElement("div",{class:"image"}),c.a.createElement("div",{class:"clock"},c.a.createElement(d,null))),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.dd80fdd0.chunk.js.map