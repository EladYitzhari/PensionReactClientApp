(this["webpackJsonppension-app"]=this["webpackJsonppension-app"]||[]).push([[0],{128:function(e,t,a){e.exports=a.p+"static/media/LOGOONO.34641b59.jpg"},148:function(e,t,a){e.exports=a(285)},153:function(e,t,a){},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},277:function(e,t,a){},278:function(e,t,a){},285:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(28),o=a.n(r),u=(a(153),a(154),a(17)),c=a(18),i=a(19),s=a(20),m=a(21),E=a(128),p=a.n(E),h=(a(155),a(156),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:" fadeInUp animated",style:{width:"100%",textAlign:"center"}},l.a.createElement("img",{id:"opening_logoImg",src:p.a,alt:"onoLogo"}))}}]),t}(n.Component)),d=a(43),f=a(16),g=a(293),C=a(292),v=a(286),b=(a(157),a(25)),y=function(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t},O=(a(162),function(e){return function(t){t(function(e){return{type:"CHANGE_STAGE",val:e}}(e))}}),q=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={quest1:"0",quest2:"0",quest3:"0",quest4:"0",quest5:"0",quest6:"0",quest7:"0",quest8:"0",quest9:"0",quest10:"0",quest11:"0",quest12:"0",gender:"0",age:"0",familyStatus:"-",numOfKids:"0",totalWorkYears:"0",religionStatus:"-",numOfEmployers:"0",insurenceEmployers:"0",areYouManager:"no",numOfEmployees:"0"},a.test=function(e){console.log(e)},a.updateState=function(e,t){a.setState(Object(f.a)({},t,e.target.value)),console.log(a.state)},a.insertToServer=function(e){var t=Math.round(3*Math.random())+1,n=Object(d.a)({},e,{mobileDevice:"undefined"!==typeof window.orientation||-1!==navigator.userAgent.indexOf("IEMobile"),createTime:(new Date).toString(),simulationType:t});a.props.updateVersion(t),a.props.insertUserDetails(n),a.props.changeStage("explanation"),console.log(a.state)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this,a=["-","1","2","3","4","5","6","7"];return l.a.createElement("div",{id:"mainDivQuestionnaire"},l.a.createElement("div",{id:"discriptionsQuestionnaire"},"\u05d4\u05de\u05e9\u05e4\u05d8\u05d9\u05dd \u05e9\u05dc\u05e4\u05e0\u05d9\u05da \u05de\u05ea\u05d9\u05d9\u05d7\u05e1\u05d9\u05dd \u05dc\u05d0\u05d5\u05e4\u05df \u05e9\u05d1\u05d5 \u05d0\u05ea\u05d4 \u05de\u05e8\u05d2\u05d9\u05e9 \u05d1\u05de\u05e2\u05e8\u05db\u05d5\u05ea \u05d9\u05d7\u05e1\u05d9\u05dd \u05e7\u05e8\u05d5\u05d1\u05d5\u05ea \u05e2\u05dd \u05d0\u05e0\u05e9\u05d9\u05dd \u05d0\u05d7\u05e8\u05d9\u05dd. ",l.a.createElement("br",null),"\u05d4\u05de\u05d5\u05e0\u05d7 '\u05d0\u05e0\u05e9\u05d9\u05dd \u05d0\u05d7\u05e8\u05d9\u05dd' \u05de\u05ea\u05d9\u05d9\u05d7\u05e1 \u05dc\u05d0\u05e0\u05e9\u05d9\u05dd \u05d4\u05e0\u05de\u05e6\u05d0\u05d9\u05dd \u05d1\u05d9\u05d7\u05e1\u05d9\u05dd \u05e7\u05e8\u05d5\u05d1\u05d9\u05dd \u05d0\u05ea\u05da.",l.a.createElement("br",null),"\u05d0\u05e0\u05d5 \u05de\u05ea\u05e2\u05e0\u05d9\u05d9\u05e0\u05d9\u05dd \u05d1\u05d3\u05e8\u05da \u05e9\u05d1\u05d4 \u05d0\u05ea\u05d4 \u05d7\u05d5\u05d5\u05d4 \u05d1\u05d3\u05e8\u05da \u05db\u05dc\u05dc \u05de\u05e2\u05e8\u05db\u05d5\u05ea \u05d9\u05d7\u05e1\u05d9\u05dd.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"\u05d4\u05ea\u05d9\u05d9\u05d7\u05e1 \u05dc\u05db\u05dc \u05de\u05e9\u05e4\u05d8 \u05e2\u05dc \u05d9\u05d3\u05d9 \u05d3\u05e8\u05d5\u05d2 \u05e2\u05d3 \u05db\u05de\u05d4 \u05d0\u05ea\u05d4 \u05de\u05e1\u05db\u05d9\u05dd \u05d0\u05d5 \u05d0\u05d9\u05e0\u05da \u05de\u05e1\u05db\u05d9\u05dd \u05d0\u05ea\u05d5, \u05e2\u05dc \u05d9\u05d3\u05d9 \u05e9\u05d9\u05de\u05d5\u05e9 \u05d1\u05e1\u05d5\u05dc\u05dd \u05e9\u05dc\u05d4\u05dc\u05df:")),l.a.createElement(g.a,{textAlign:"right"},l.a.createElement(g.a.Header,null,l.a.createElement(g.a.Row,{textAlign:"center"},l.a.createElement(g.a.HeaderCell,null,"\u05e2\u05d3 \u05db\u05de\u05d4 \u05d0\u05ea\u05d4 \u05de\u05e1\u05db\u05d9\u05dd \u05d0\u05d5 \u05d0\u05d9\u05e0\u05da \u05de\u05e1\u05db\u05d9\u05dd \u05e2\u05dd \u05db\u05dc \u05de\u05e9\u05e4\u05d8:"),l.a.createElement(g.a.HeaderCell,null,l.a.createElement("span",{style:{color:"green"}},"\u05de\u05d0\u05d5\u05d3 \u05de\u05e1\u05db\u05d9\u05dd-7 "),l.a.createElement("span",{style:{color:"red"}},"\u05de\u05d0\u05d5\u05d3 \u05dc\u05d0 \u05de\u05e1\u05db\u05d9\u05dd-1")))),l.a.createElement(g.a.Body,null,l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Cell,null,"1. \u05d6\u05d4 \u05e2\u05d5\u05d6\u05e8 \u05dc\u05e4\u05e0\u05d5\u05ea \u05dc\u05d0\u05e0\u05e9\u05d9\u05dd \u05d0\u05d7\u05e8\u05d9\u05dd \u05d1\u05e8\u05d2\u05e2\u05d9\u05dd \u05e9\u05d0\u05e0\u05d9 \u05d6\u05e7\u05d5\u05e7 \u05dc\u05d4\u05dd"),l.a.createElement(g.a.Cell,null,l.a.createElement("select",(e={value:this.state.quest1},Object(f.a)(e,"value",this.state.quest1),Object(f.a)(e,"onChangeCapture",(function(e){return t.updateState(e,"quest1")})),Object(f.a)(e,"className","questionnaireQuest"),e)," ",a.map((function(e){return l.a.createElement("option",{key:e+Math.random(),value:e},e)}))))),l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Cell,null,"2. \u05d0\u05e0\u05d9 \u05e0\u05d6\u05e7\u05e7 \u05dc\u05d4\u05e8\u05d1\u05d4 \u05d0\u05d9\u05e9\u05d5\u05e8\u05d9\u05dd \u05dc\u05db\u05da \u05e9\u05d0\u05e0\u05d9 \u05d0\u05d4\u05d5\u05d1 \u05e2\u05dc \u05d9\u05d3\u05d9 \u05d0\u05e0\u05e9\u05d9\u05dd \u05d4\u05e7\u05e8\u05d5\u05d1\u05d9\u05dd \u05dc\u05d9"),l.a.createElement(g.a.Cell,null,l.a.createElement("select",{value:this.state.quest2,onChangeCapture:function(e){return t.updateState(e,["quest2"])},className:"questionnaireQuest"}," ",a.map((function(e){return l.a.createElement("option",{key:e+Math.random(),value:e},e)}))))),l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Cell,null,"3. \u05d0\u05e0\u05d9 \u05e8\u05d5\u05e6\u05d4 \u05dc\u05d4\u05ea\u05e7\u05e8\u05d1 \u05dc\u05d0\u05e0\u05e9\u05d9\u05dd \u05d0\u05d7\u05e8\u05d9\u05dd \u05d0\u05d1\u05dc \u05d0\u05e0\u05d9 \u05de\u05de\u05e9\u05d9\u05da \u05dc\u05e1\u05d2\u05ea \u05de\u05d4\u05dd"),l.a.createElement(g.a.Cell,null,l.a.createElement("select",{value:this.state.quest3,onChangeCapture:function(e){return t.updateState(e,["quest3"])},className:"questionnaireQuest"}," ",a.map((function(e){return l.a.createElement("option",{key:e+Math.random(),value:e},e)}))))),l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Cell,null,"4. \u05d0\u05e0\u05d9 \u05de\u05e8\u05d2\u05d9\u05e9 \u05e9\u05d0\u05e0\u05e9\u05d9\u05dd \u05d0\u05d7\u05e8\u05d9\u05dd \u05d0\u05d9\u05e0\u05dd \u05e8\u05d5\u05e6\u05d9\u05dd \u05dc\u05d4\u05ea\u05e7\u05e8\u05d1 \u05db\u05e4\u05d9 \u05e9\u05d0\u05e0\u05d9 \u05d4\u05d9\u05d9\u05ea\u05d9 \u05e8\u05d5\u05e6\u05d4"),l.a.createElement(g.a.Cell,null,l.a.createElement("select",{value:this.state.quest4,onChangeCapture:function(e){return t.updateState(e,["quest4"])},className:"questionnaireQuest"}," ",a.map((function(e){return l.a.createElement("option",{key:e+Math.random(),value:e},e)}))))),l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Cell,null,"5. \u05d0\u05e0\u05d9 \u05e4\u05d5\u05e0\u05d4 \u05dc\u05d0\u05e0\u05e9\u05d9\u05dd \u05d0\u05d7\u05e8\u05d9\u05dd \u05d1\u05e7\u05e9\u05e8 \u05dc\u05d4\u05e8\u05d1\u05d4 \u05d3\u05d1\u05e8\u05d9\u05dd \u05db\u05d5\u05dc\u05dc \u05e0\u05d7\u05de\u05d4 \u05d5\u05d0\u05d9\u05e9"),l.a.createElement(g.a.Cell,null,l.a.createElement("select",{value:this.state.quest5,onChangeCapture:function(e){return t.updateState(e,["quest5"])},className:"questionnaireQuest"}," ",a.map((function(e){return l.a.createElement("option",{key:e+Math.random(),value:e},e)}))))),l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Cell,null,"6. \u05d4\u05e8\u05e6\u05d5\u05df \u05e9\u05dc\u05d9 \u05dc\u05d4\u05d9\u05d5\u05ea \u05de\u05d0\u05d5\u05d3 \u05e7\u05e8\u05d5\u05d1, \u05dc\u05e2\u05ea\u05d9\u05dd \u05de\u05e8\u05d7\u05d9\u05e7 \u05de\u05de\u05e0\u05d9 \u05d0\u05e0\u05e9\u05d9\u05dd"),l.a.createElement(g.a.Cell,null,l.a.createElement("select",{value:this.state.quest6,onChangeCapture:function(e){return t.updateState(e,["quest6"])},className:"questionnaireQuest"}," ",a.map((function(e){return l.a.createElement("option",{key:e+Math.random(),value:e},e)}))))),l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Cell,null,"7. \u05d0\u05e0\u05d9 \u05de\u05e0\u05e1\u05d4 \u05dc\u05d4\u05d9\u05de\u05e0\u05e2 \u05de\u05dc\u05d4\u05ea\u05e7\u05e8\u05d1 \u05d9\u05d5\u05ea\u05e8 \u05de\u05d3\u05d9 \u05dc\u05d0\u05e0\u05e9\u05d9\u05dd \u05d0\u05d7\u05e8\u05d9\u05dd"),l.a.createElement(g.a.Cell,null,l.a.createElement("select",{value:this.state.quest7,onChangeCapture:function(e){return t.updateState(e,["quest7"])},className:"questionnaireQuest"}," ",a.map((function(e){return l.a.createElement("option",{key:e+Math.random(),value:e},e)}))))),l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Cell,null,"8. \u05d0\u05d9\u05e0\u05e0\u05d9 \u05de\u05d5\u05d3\u05d0\u05d2 \u05dc\u05e2\u05ea\u05d9\u05dd \u05e7\u05e8\u05d5\u05d1\u05d5\u05ea \u05de\u05d3\u05d9 \u05de\u05db\u05da \u05e9\u05d9\u05e0\u05d8\u05e9\u05d5 \u05d0\u05d5\u05ea\u05d9"),l.a.createElement(g.a.Cell,null,l.a.createElement("select",{value:this.state.quest8,onChangeCapture:function(e){return t.updateState(e,["quest8"])},className:"questionnaireQuest"}," ",a.map((function(e){return l.a.createElement("option",{key:e+Math.random(),value:e},e)}))))),l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Cell,null,"9. \u05d1\u05d3\u05e8\u05da \u05db\u05dc\u05dc \u05d0\u05e0\u05d9 \u05d3\u05df \u05d1\u05d1\u05e2\u05d9\u05d5\u05ea \u05d5\u05d1\u05d3\u05d0\u05d2\u05d5\u05ea \u05e9\u05dc\u05d9 \u05e2\u05dd \u05d0\u05e0\u05e9\u05d9\u05dd \u05d4\u05e7\u05e8\u05d5\u05d1\u05d9\u05dd \u05dc\u05d9"),l.a.createElement(g.a.Cell,null,l.a.createElement("select",{value:this.state.quest9,onChangeCapture:function(e){return t.updateState(e,["quest9"])},className:"questionnaireQuest"}," ",a.map((function(e){return l.a.createElement("option",{key:e+Math.random(),value:e},e)}))))),l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Cell,null,"10. \u05d0\u05e0\u05d9 \u05e0\u05e2\u05e9\u05d4 \u05de\u05ea\u05d5\u05e1\u05db\u05dc \u05db\u05d0\u05e9\u05e8 \u05d0\u05e0\u05e9\u05d9\u05dd \u05d0\u05d7\u05e8\u05d9\u05dd \u05dc\u05d0 \u05e0\u05de\u05e6\u05d0\u05d9\u05dd \u05d0\u05d9\u05ea\u05d9 \u05d1\u05de\u05d9\u05d3\u05d4 \u05d1\u05d4 \u05d4\u05d9\u05d9\u05ea\u05d9 \u05e8\u05d5\u05e6\u05d4 \u05e9\u05d9\u05d4\u05d9\u05d5"),l.a.createElement(g.a.Cell,null,l.a.createElement("select",{value:this.state.quest10,onChangeCapture:function(e){return t.updateState(e,["quest10"])},className:"questionnaireQuest"}," ",a.map((function(e){return l.a.createElement("option",{key:e+Math.random(),value:e},e)}))))),l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Cell,null,"11. \u05d0\u05e0\u05d9 \u05e0\u05e2\u05e9\u05d4 \u05de\u05ea\u05d5\u05d7 \u05db\u05d0\u05e9\u05e8 \u05d0\u05e0\u05e9\u05d9\u05dd \u05d0\u05d7\u05e8\u05d9\u05dd \u05de\u05ea\u05e7\u05e8\u05d1\u05d9\u05dd \u05d0\u05dc\u05d9 \u05d9\u05d5\u05ea\u05e8 \u05de\u05d3\u05d9"),l.a.createElement(g.a.Cell,null,l.a.createElement("select",{value:this.state.quest11,onChangeCapture:function(e){return t.updateState(e,["quest11"])},className:"questionnaireQuest"}," ",a.map((function(e){return l.a.createElement("option",{key:e+Math.random(),value:e},e)}))))),l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Cell,null,"12. \u05d0\u05e0\u05d9 \u05d3\u05d5\u05d0\u05d2 \u05e9\u05dc\u05d0\u05e0\u05e9\u05d9\u05dd \u05d0\u05d7\u05e8\u05d9\u05dd \u05dc\u05d0 \u05d9\u05d4\u05d9\u05d4 \u05d0\u05db\u05e4\u05ea \u05de\u05de\u05e0\u05d9 \u05d1\u05d0\u05d5\u05ea\u05d4 \u05de\u05d9\u05d3\u05d4 \u05e9\u05d1\u05d4 \u05dc\u05d9 \u05d0\u05db\u05e4\u05ea \u05de\u05d4\u05dd"),l.a.createElement(g.a.Cell,null,l.a.createElement("select",{value:this.state.quest12,onChangeCapture:function(e){return t.updateState(e,["quest12"])},className:"questionnaireQuest"}," ",a.map((function(e){return l.a.createElement("option",{key:e+Math.random(),value:e},e)}))))))),l.a.createElement(g.a,{textAlign:"right"},l.a.createElement(g.a.Header,null,l.a.createElement(g.a.Row,null,l.a.createElement(g.a.HeaderCell,null," \u05e4\u05e8\u05d8\u05d9\u05dd \u05db\u05dc\u05dc\u05d9\u05d9\u05dd"),l.a.createElement(g.a.HeaderCell,null,"\u05d0\u05e0\u05d0 \u05de\u05dc\u05d0/\u05d9 \u05d0\u05ea \u05d4\u05e2\u05e8\u05da"))),l.a.createElement(g.a.Body,null,l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Cell,null,"\u05de\u05d9\u05df"),l.a.createElement(g.a.Cell,null,l.a.createElement("select",{onChangeCapture:function(e){return t.updateState(e,["gender"])},className:"questionnaireQuest"},l.a.createElement("option",{value:"-"},"-"),l.a.createElement("option",{value:"male"},"\u05d6\u05db\u05e8"),l.a.createElement("option",{value:"female"},"\u05e0\u05e7\u05d1\u05d4")))),l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Cell,null,"\u05d2\u05d9\u05dc"),l.a.createElement(g.a.Cell,null,l.a.createElement(C.a,{onChangeCapture:function(e){return t.updateState(e,["age"])},className:"questionnaireQuest",type:"number"}))),l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Cell,null,"\u05de\u05e6\u05d1 \u05de\u05e9\u05e4\u05d7\u05ea\u05d9"),l.a.createElement(g.a.Cell,null,l.a.createElement("select",{onChangeCapture:function(e){return t.updateState(e,["familyStatus"])},className:"questionnaireQuest"},l.a.createElement("option",{value:"-"},"-"),l.a.createElement("option",{value:"single"},"\u05e8\u05d5\u05d5\u05e7/\u05d4"),l.a.createElement("option",{value:"married"},"\u05e0\u05e9\u05d5\u05d9/\u05d4"),l.a.createElement("option",{value:"divorcee"},"\u05d2\u05e8\u05d5\u05e9/\u05d4"),l.a.createElement("option",{value:"widow"},"\u05d0\u05dc\u05de\u05df/\u05d4")))),l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Cell,null,"\u05de\u05e1\u05e4\u05e8 \u05d9\u05dc\u05d3\u05d9\u05dd"),l.a.createElement(g.a.Cell,null,l.a.createElement(C.a,{onChangeCapture:function(e){return t.updateState(e,["numOfKids"])},className:"questionnaireQuest",type:"number"}))),l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Cell,null," \u05e9\u05e0\u05d5\u05ea \u05e2\u05d1\u05d5\u05d3\u05d4 \u05d1\u05db\u05dc\u05dc"),l.a.createElement(g.a.Cell,null,l.a.createElement(C.a,{onChangeCapture:function(e){return t.updateState(e,["totalWorkYears"])},className:"questionnaireQuest",type:"number"}))),l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Cell,null,"\u05d4\u05d2\u05d3\u05e8 \u05d0\u05ea \u05d9\u05d7\u05e1\u05da \u05dc\u05d3\u05ea"),l.a.createElement(g.a.Cell,null,l.a.createElement("select",{onChangeCapture:function(e){return t.updateState(e,["religionStatus"])},className:"questionnaireQuest"},l.a.createElement("option",{value:"-"},"-"),l.a.createElement("option",{value:"chiloni"},"\u05d7\u05d9\u05dc\u05d5\u05e0\u05d9"),l.a.createElement("option",{value:"masorati"},"\u05de\u05e1\u05d5\u05e8\u05ea\u05d9"),l.a.createElement("option",{value:"dati"},"\u05d3\u05ea\u05d9"),l.a.createElement("option",{value:"charedi"},"\u05d7\u05e8\u05d3\u05d9")))),l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Cell,null," \u05d1\u05db\u05de\u05d4 \u05d0\u05d9\u05e8\u05d2\u05d5\u05e0\u05d9\u05dd \u05e2\u05d1\u05d3\u05ea \u05dc\u05e4\u05e0\u05d9 \u05e2\u05d1\u05d5\u05d3\u05ea\u05da \u05d4\u05e0\u05d5\u05db\u05d7\u05d9\u05ea"),l.a.createElement(g.a.Cell,null,l.a.createElement(C.a,{onChangeCapture:function(e){return t.updateState(e,"numOfEmployers")},className:"questionnaireQuest",type:"number"}))),l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Cell,null," \u05db\u05de\u05d4 \u05de\u05d4\u05dd \u05d1\u05ea\u05d7\u05d5\u05dd \u05d4\u05d1\u05d9\u05d8\u05d5\u05d7"),l.a.createElement(g.a.Cell,null,l.a.createElement(C.a,{className:"questionnaireQuest",type:"number",onChangeCapture:function(e){return t.updateState(e,"insurenceEmployers")}}))),l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Cell,null," \u05d4\u05d0\u05dd \u05d0\u05ea\u05d4 \u05de\u05e0\u05d4\u05dc"),l.a.createElement("select",{onChangeCapture:function(e){return t.updateState(e,"areYouManager")},className:"questionnaireQuest"},l.a.createElement("option",{value:"no"},"\u05dc\u05d0"),l.a.createElement("option",{value:"yes"},"\u05db\u05df"))),"yes"===this.state.areYouManager?l.a.createElement(g.a.Row,null,l.a.createElement(g.a.Cell,null,"\u05db\u05de\u05d4 \u05e2\u05d5\u05d1\u05d3\u05d9\u05dd \u05d0\u05ea\u05d4 \u05de\u05e0\u05d4\u05dc"),l.a.createElement(g.a.Cell,null,l.a.createElement(C.a,{className:"questionnaireQuest",onChangeCapture:function(e){return t.updateState(e,"numOfEmployees")},type:"number"}))):null,l.a.createElement(g.a.Row,{textAlign:"center"},l.a.createElement(g.a.Cell,null,l.a.createElement(v.a,{size:"big",color:"green",onClick:function(){return t.insertToServer(t.state)}},"\u05d4\u05de\u05e9\u05da ")),l.a.createElement(g.a.Cell,null)))))}}]),t}(n.Component),w=Object(b.b)(null,(function(e){return{insertUserDetails:function(t){return e(function(e){return function(t){fetch("http://localhost:8080//User/NewUser",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(y).then((function(e){return e.text()})).then((function(e){console.log("request succeeded: http://localhost:8080//User/NewUser",e),t({type:"INSERT_NEW_USER",val:e})})).catch((function(e){console.log("request failed",e.data),alert("Somthing went wrong, send that message to the admin: "+e.data)}))}}(t))},changeStage:function(t){return e(O(t))},updateVersion:function(t){return e({type:"UPDATE_VERSION_NUMBER",val:t})}}}))(q),M=a(294),S=(a(277),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={},a.componentDidMount=function(){console.log("is mobile","undefined"!==typeof window.orientation||-1!==navigator.userAgent.indexOf("IEMobile"));var e="undefined"!==typeof window.orientation||-1!==navigator.userAgent.indexOf("IEMobile");alert("is mobile: "+e)},a.nextLevel=function(){a.props.finishExplain(a.props.userId,(new Date).toString()),console.log("userId",a.props.userId,"date",(new Date).toString()),a.props.changeStage("simulation")},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=null;return 1===this.props.version||2===this.props.version?t=l.a.createElement(M.a,null,l.a.createElement(M.a.Header,null,"\u05e1\u05d9\u05de\u05d5\u05dc\u05d8\u05d5\u05e8 \u05d4\u05e9\u05e7\u05e2\u05d4"),l.a.createElement("p",null,"\u05d1\u05de\u05e2\u05e8\u05db\u05ea \u05e0\u05d9\u05d4\u05d5\u05dc \u05d4\u05d4\u05e9\u05e7\u05e2\u05d5\u05ea \u05d0\u05ea\u05d4 \u05e0\u05d3\u05e8\u05e9 \u05dc\u05d4\u05e9\u05e7\u05d9\u05e2 \u05d1\u05de\u05e9\u05da \u05e9\u05dc\u05d5\u05e9\u05d9\u05dd \u05e1\u05d1\u05d1\u05d9 \u05d4\u05e9\u05e7\u05e2\u05d4. \u05d1\u05e1\u05d1\u05d1 \u05d4\u05e8\u05d0\u05e9\u05d5\u05df \u05ea\u05e7\u05d1\u05dc \u05e1\u05db\u05d5\u05dd \u05e9\u05dc 1000 \u05dc\u05d4\u05e9\u05e7\u05e2\u05d4.",l.a.createElement("br",null),l.a.createElement("b",null," \u05ea\u05d5\u05db\u05dc \u05dc\u05d1\u05d7\u05d5\u05e8 \u05dc\u05d4\u05e9\u05e7\u05d9\u05e2 \u05d1\u05d0\u05d7\u05d3 \u05de\u05d1\u05d9\u05df \u05e9\u05dc\u05d5\u05e9\u05d4 \u05de\u05e1\u05dc\u05d5\u05dc\u05d9 \u05d4\u05e9\u05e7\u05e2\u05d4:"),l.a.createElement("br",null),l.a.createElement("b",null," \u05d0. \u05de\u05e1\u05dc\u05d5\u05dc \u05d1\u05e1\u05d9\u05db\u05d5\u05df \u05d2\u05d1\u05d5\u05d4 "),' \u05e9\u05d1\u05d5  \u05d4\u05e1\u05db\u05d5\u05dd \u05e9\u05ea\u05e9\u05e7\u05d9\u05e2 \u05de\u05d3\u05d9 \u05ea\u05e7\u05d5\u05e4\u05d4 \u05d9\u05d4\u05d9\u05d4 \u05d1\u05e2\u05dc \u05de\u05d0\u05e4\u05d9\u05d9\u05e0\u05d9\u05dd \u05e1\u05d8\u05d8\u05d9\u05e1\u05d8\u05d9\u05d9\u05dd \u05e9\u05e0\u05d3\u05d2\u05de\u05d5 \u05de\u05ea\u05d9\u05e7 \u05de\u05e0\u05d9\u05d5\u05ea \u05d1\u05d9\u05e0"\u05dc',l.a.createElement("br",null),l.a.createElement("b",null," \u05d1. \u05de\u05e1\u05dc\u05d5\u05dc \u05d1\u05e1\u05d9\u05db\u05d5\u05df \u05e0\u05de\u05d5\u05da "),', \u05e9\u05d1\u05d5  \u05d4\u05e1\u05db\u05d5\u05dd \u05e9\u05ea\u05e9\u05e7\u05d9\u05e2 \u05de\u05d3\u05d9 \u05ea\u05e7\u05d5\u05e4\u05d4 \u05d9\u05d4\u05d9\u05d4 \u05d1\u05e2\u05dc \u05de\u05d0\u05e4\u05d9\u05d9\u05e0\u05d9\u05dd \u05e1\u05d8\u05d8\u05d9\u05e1\u05d8\u05d9\u05d9\u05dd \u05e9\u05e0\u05d3\u05d2\u05de\u05d5 \u05de\u05ea\u05d9\u05e7 \u05d0\u05d2"\u05d7 \u05de\u05de\u05e9\u05dc\u05ea\u05d9',l.a.createElement("br",null),l.a.createElement("b",null,"\u05d2. \u05de\u05e1\u05dc\u05d5\u05dc \u05d1\u05e1\u05d9\u05db\u05d5\u05df \u05d1\u05d9\u05e0\u05d5\u05e0\u05d9"),', \u05d4\u05de\u05e9\u05dc\u05d1 \u05d0\u05ea \u05d4\u05ea\u05d9\u05e7 \u05d4\u05e8\u05d0\u05e9\u05d5\u05df \u05d5\u05d4\u05ea\u05d9\u05e7 \u05d4\u05e9\u05e0\u05d9 ,\u05d1\u05de\u05e9\u05e7\u05dc\u05d5\u05ea \u05e9\u05d5\u05d5\u05d9\u05dd \u05e9\u05dc 50% \u05db"\u05d0 \u05d5\u05d4\u05d5\u05d0 \u05d1\u05e2\u05dc \u05de\u05d0\u05e4\u05d9\u05d9\u05e0\u05d9\u05dd \u05e1\u05d8\u05d8\u05d9\u05e1\u05d8\u05d9\u05d9\u05dd \u05de\u05ea\u05d0\u05d9\u05de\u05d9\u05dd.',l.a.createElement("br",null),"\u05dc\u05d0\u05d7\u05e8 \u05e9\u05ea\u05d1\u05d7\u05e8, \u05d4\u05ea\u05d5\u05db\u05e0\u05d4 \u05ea\u05e6\u05d9\u05d2 \u05dc\u05da \u05db\u05de\u05d4 \u05ea\u05e9\u05d5\u05d0\u05d4 \u05e6\u05d1\u05e8\u05ea \u05d1\u05e1\u05d1\u05d1 \u05d4\u05e8\u05d0\u05e9\u05d5\u05df  \u05d5\u05d0\u05ea \u05e1\u05da \u05d4\u05e1\u05db\u05d5\u05dd \u05e9\u05e2\u05d5\u05de\u05d3 \u05dc\u05e8\u05e9\u05d5\u05ea\u05da \u05d5\u05d0\u05d6 \u05ea\u05ea\u05d1\u05e7\u05e9 \u05dc\u05d4\u05e9\u05e7\u05d9\u05e2 \u05de\u05d7\u05d3\u05e9 \u05d0\u05ea \u05d4\u05e1\u05db\u05d5\u05dd \u05d4\u05e6\u05d1\u05d5\u05e8 \u05d5\u05e2\u05d5\u05d3 1000 \u20aa \u05d7\u05d3\u05e9\u05d9\u05dd \u05d1\u05e1\u05d1\u05d1 \u05d4\u05e9\u05e0\u05d9.",l.a.createElement("br",null),"\u05d1\u05db\u05dc \u05e1\u05d1\u05d1 \u05ea\u05ea\u05d1\u05e7\u05e9 \u05dc\u05e7\u05d1\u05dc \u05d4\u05d7\u05dc\u05d8\u05d4 \u05de\u05d7\u05d3\u05e9 \u05d4\u05ea\u05d4\u05dc\u05d9\u05da \u05e0\u05de\u05e9\u05da \u05d1\u05de\u05e9\u05da 30 \u05e4\u05e2\u05de\u05d9\u05dd \u05d1\u05e1\u05da \u05d4\u05db\u05dc. \u05d4\u05e9\u05dc\u05de\u05ea \u05d4\u05d4\u05e9\u05e7\u05e2\u05d4 \u05d1\u05e4\u05e2\u05dd \u05d4-30 \u05de\u05e9\u05dc\u05d9\u05de\u05d4 \u05d0\u05ea \u05d4\u05de\u05e9\u05d9\u05de\u05d4    \u05d4\u05e4\u05d9\u05e0\u05e0\u05e1\u05d9\u05ea")):3!==this.props.version&&4!==this.props.version||(t=l.a.createElement(M.a,null,l.a.createElement(M.a.Header,null,"\u05e1\u05d9\u05de\u05d5\u05dc\u05d8\u05d5\u05e8 \u05e4\u05e0\u05e1\u05d9\u05d5\u05e0\u05d9"),l.a.createElement("p",null,"\u05de\u05e2\u05e8\u05db\u05ea \u05e0\u05d9\u05d4\u05d5\u05dc \u05d4\u05d4\u05e9\u05e7\u05e2\u05d5\u05ea \u05d4\u05e4\u05e0\u05e1\u05d9\u05d5\u05e0\u05d9\u05ea \u05de\u05d3\u05de\u05d4 \u05d4\u05e9\u05e7\u05e2\u05d4 \u05dc\u05d8\u05d5\u05d5\u05d7 \u05e9\u05dc 30 \u05e9\u05e0\u05d4 \u05e2\u05d3 \u05d4\u05e4\u05e8\u05d9\u05e9\u05d4. \u05d1\u05de\u05e2\u05e8\u05db\u05ea \u05d0\u05ea\u05d4 \u05de\u05ea\u05d1\u05e7\u05e9  \u05dc\u05d4\u05e9\u05e7\u05d9\u05e2 \u05d0\u05ea \u05db\u05e1\u05e4\u05d9 \u05d4\u05e4\u05e0\u05e1\u05d9\u05d4 \u05d1\u05de\u05e9\u05da \u05e9\u05dc\u05d5\u05e9\u05d9\u05dd \u05e1\u05d1\u05d1\u05d9 \u05d4\u05e9\u05e7\u05e2\u05d4. \u05d1\u05db\u05dc \u05e9\u05e0\u05d4 \u05ea\u05e7\u05d1\u05dc \u05e1\u05db\u05d5\u05dd \u05e9\u05dc 1000 \u05dc\u05d4\u05e9\u05e7\u05e2\u05d4.",l.a.createElement("br",null),l.a.createElement("b",null," \u05ea\u05d5\u05db\u05dc \u05dc\u05d1\u05d7\u05d5\u05e8 \u05dc\u05d4\u05e9\u05e7\u05d9\u05e2 \u05d1\u05d0\u05d7\u05d3 \u05de\u05d1\u05d9\u05df \u05e9\u05dc\u05d5\u05e9\u05d4 \u05de\u05e1\u05dc\u05d5\u05dc\u05d9 \u05d4\u05e9\u05e7\u05e2\u05d4:"),l.a.createElement("br",null),l.a.createElement("b",null," \u05d0. \u05de\u05e1\u05dc\u05d5\u05dc \u05d1\u05e1\u05d9\u05db\u05d5\u05df \u05d2\u05d1\u05d5\u05d4 "),' \u05e9\u05d1\u05d5  \u05d4\u05e1\u05db\u05d5\u05dd \u05e9\u05ea\u05e9\u05e7\u05d9\u05e2 \u05de\u05d3\u05d9 \u05ea\u05e7\u05d5\u05e4\u05d4 \u05d9\u05d4\u05d9\u05d4 \u05d1\u05e2\u05dc \u05de\u05d0\u05e4\u05d9\u05d9\u05e0\u05d9\u05dd \u05e1\u05d8\u05d8\u05d9\u05e1\u05d8\u05d9\u05d9\u05dd \u05e9\u05e0\u05d3\u05d2\u05de\u05d5 \u05de\u05ea\u05d9\u05e7 \u05de\u05e0\u05d9\u05d5\u05ea \u05d1\u05d9\u05e0"\u05dc',l.a.createElement("br",null),l.a.createElement("b",null," \u05d1. \u05de\u05e1\u05dc\u05d5\u05dc \u05d1\u05e1\u05d9\u05db\u05d5\u05df \u05e0\u05de\u05d5\u05da "),', \u05e9\u05d1\u05d5  \u05d4\u05e1\u05db\u05d5\u05dd \u05e9\u05ea\u05e9\u05e7\u05d9\u05e2 \u05de\u05d3\u05d9 \u05ea\u05e7\u05d5\u05e4\u05d4 \u05d9\u05d4\u05d9\u05d4 \u05d1\u05e2\u05dc \u05de\u05d0\u05e4\u05d9\u05d9\u05e0\u05d9\u05dd \u05e1\u05d8\u05d8\u05d9\u05e1\u05d8\u05d9\u05d9\u05dd \u05e9\u05e0\u05d3\u05d2\u05de\u05d5 \u05de\u05ea\u05d9\u05e7 \u05d0\u05d2"\u05d7 \u05de\u05de\u05e9\u05dc\u05ea\u05d9',l.a.createElement("br",null),l.a.createElement("b",null,"\u05d2. \u05de\u05e1\u05dc\u05d5\u05dc \u05d1\u05e1\u05d9\u05db\u05d5\u05df \u05d1\u05d9\u05e0\u05d5\u05e0\u05d9"),', \u05d4\u05de\u05e9\u05dc\u05d1 \u05d0\u05ea \u05d4\u05ea\u05d9\u05e7 \u05d4\u05e8\u05d0\u05e9\u05d5\u05df \u05d5\u05d4\u05ea\u05d9\u05e7 \u05d4\u05e9\u05e0\u05d9 ,\u05d1\u05de\u05e9\u05e7\u05dc\u05d5\u05ea \u05e9\u05d5\u05d5\u05d9\u05dd \u05e9\u05dc 50% \u05db"\u05d0 \u05d5\u05d4\u05d5\u05d0 \u05d1\u05e2\u05dc \u05de\u05d0\u05e4\u05d9\u05d9\u05e0\u05d9\u05dd \u05e1\u05d8\u05d8\u05d9\u05e1\u05d8\u05d9\u05d9\u05dd \u05de\u05ea\u05d0\u05d9\u05de\u05d9\u05dd.',l.a.createElement("br",null),"\u05dc\u05d0\u05d7\u05e8 \u05e9\u05ea\u05d1\u05d7\u05e8, \u05d4\u05ea\u05d5\u05db\u05e0\u05d4 \u05ea\u05e6\u05d9\u05d2 \u05dc\u05da \u05db\u05de\u05d4 \u05ea\u05e9\u05d5\u05d0\u05d4 \u05e6\u05d1\u05e8\u05ea \u05d1\u05e1\u05d1\u05d1 \u05d4\u05e8\u05d0\u05e9\u05d5\u05df  \u05d5\u05d0\u05ea \u05e1\u05da \u05d4\u05e1\u05db\u05d5\u05dd \u05e9\u05e2\u05d5\u05de\u05d3 \u05dc\u05e8\u05e9\u05d5\u05ea\u05da \u05d5\u05d0\u05d6 \u05ea\u05ea\u05d1\u05e7\u05e9 \u05dc\u05d4\u05e9\u05e7\u05d9\u05e2 \u05de\u05d7\u05d3\u05e9 \u05d0\u05ea \u05d4\u05e1\u05db\u05d5\u05dd \u05d4\u05e6\u05d1\u05d5\u05e8 \u05d5\u05e2\u05d5\u05d3 1000 \u20aa \u05d7\u05d3\u05e9\u05d9\u05dd \u05d1\u05e1\u05d1\u05d1 \u05d4\u05e9\u05e0\u05d9.",l.a.createElement("br",null)," \u05d1\u05db\u05dc \u05e1\u05d1\u05d1 \u05ea\u05ea\u05d1\u05e7\u05e9 \u05dc\u05e7\u05d1\u05dc \u05d4\u05d7\u05dc\u05d8\u05d4 \u05de\u05d7\u05d3\u05e9 \u05d4\u05ea\u05d4\u05dc\u05d9\u05da \u05e0\u05de\u05e9\u05da \u05d1\u05de\u05e9\u05da 30 \u05e4\u05e2\u05de\u05d9\u05dd \u05d1\u05e1\u05da \u05d4\u05db\u05dc. \u05d4\u05e9\u05dc\u05de\u05ea \u05d4\u05d4\u05e9\u05e7\u05e2\u05d4 \u05d1\u05e4\u05e2\u05dd \u05d4-30 \u05de\u05e9\u05dc\u05d9\u05de\u05d4 \u05d0\u05ea \u05d4\u05de\u05e9\u05d9\u05de\u05d4    \u05d4\u05e4\u05d9\u05e0\u05e0\u05e1\u05d9\u05ea"))),l.a.createElement("div",{className:"explanationMainDiv",style:{textAlign:"center"}},t,l.a.createElement(v.a,{onClick:function(){return e.nextLevel()},size:"big",color:"green"},"\u05d4\u05d1\u05e0\u05ea\u05d9, \u05d1\u05d5\u05d0 \u05e0\u05ea\u05d7\u05d9\u05dc"))}}]),t}(n.Component)),N=Object(b.b)((function(e){return{stage:e.main.stage,version:e.main.version,userId:e.main.userId}}),(function(e){return{changeStage:function(t){return e(O(t))},finishExplain:function(t,a){return e(function(e,t){return function(a){fetch("http://localhost:8080//User/finishExplain",{method:"POST",body:JSON.stringify({userId:e,finishExplanation:t}),headers:{"Content-Type":"application/json"}}).then(y).then((function(e){a({type:"FINISH_EXPLAINATION"}),console.log("request succeeded: http://localhost:8080//User/finishExplain/"+t,e)})).catch((function(e){console.log("request failed",e.data)}))}}(t,a))}}}))(S),j=(a(278),a(136)),R=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"mainDivSimulation"},"Simulation",l.a.createElement(j.a,{width:"undefined"!==typeof window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")?"300":"1000",height:"500",options:{responsive:!1,maintainAspectRatio:!1,defaultFontSize:"30px",width:"400",height:"400",hover:!0,legend:{display:!0,position:"right"}},data:{labels:[1,2,3],datasets:[{label:"t1",borderColor:"rgb("+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+")",backgroundColor:"rgb("+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+")",data:[100,200,300]},{label:"t2",borderColor:"rgb("+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+")",backgroundColor:"rgb("+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+")",data:[100,50,20]},{label:"t3",borderColor:"rgb("+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+")",backgroundColor:"rgb("+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+")",data:[50,70,30]}]}}))}}]),t}(n.Component),k=Object(b.b)()(R),x=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={stage:a.props.stage},a.componentDidMount=function(){setTimeout((function(){a.props.changeStage("user")}),2e3)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=null;return"opening"===this.props.stage?e=l.a.createElement(h,null):"user"===this.props.stage?e=l.a.createElement(w,null):"explanation"===this.props.stage?e=l.a.createElement(N,null):"simulation"===this.props.stage&&(e=l.a.createElement(k,null)),l.a.createElement(l.a.Fragment,null,e)}}]),t}(n.Component),A=Object(b.b)((function(e){return{stage:e.main.stage}}),(function(e){return{changeStage:function(t){return e(O(t))}}}))(x);var I=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=a(138),T=a(35),_={stage:"opening",userId:null,version:null,chartData:{cycleNum:0}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INSERT_NEW_USER":return Object(d.a)({},e,{userId:t.val});case"CHANGE_STAGE":return Object(d.a)({},e,{stage:t.val});case"UPDATE_VERSION_NUMBER":return Object(d.a)({},e,{version:t.val})}return e},U=Object(T.c)({main:D}),H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.d,B=Object(T.e)(U,H(Object(T.a)(Q.a)));o.a.render(l.a.createElement(b.a,{store:B},l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[148,1,2]]]);
//# sourceMappingURL=main.1b2fd15a.chunk.js.map