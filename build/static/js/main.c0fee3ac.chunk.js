(this.webpackJsonpapp1=this.webpackJsonpapp1||[]).push([[0],{159:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){},320:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n(1),r=n.n(i),c=n(29),s=n.n(c),o=(n(159),n(53)),l=n.n(o),u=n(322),d=n(326),h=n(62),m=n(327),j=(n(162),n(163),n(153)),p=n(11),f=n(54),b=n(55),g=n(63),x=n.n(g),v=function(){function e(t,n,a){var i=this;for(var r in Object(f.a)(this,e),this.mapFunction=function(e,t){return function(){var n,a=e%3===0;n=i.widgetList[e]?i.createChatBotMessage(t,{widget:i.widgetList[e],withAvatar:a}):i.createChatBotMessage(t),i.updateChatbotState(n)}},this.handleJavascriptList=function(){var e=i.createChatBotMessage("Fantastic, I've got the following resources for you on Javascript:",{widget:"javascriptLinks"});x()(".test2").remove(),i.updateChatbotState(e)},this.createChatBotMessage=t,this.setState=n,this.createClientMessage=a,this.messageList={additionalInfo:"I am designed to help humans.",whatPurpose:"Great, friend. For which purpose would you like to take out a loan?",nearestBank:"According to my data, you are at a short distance away these banks.",nearestBankNext:"With whom would you like to get in touch afterwards ?",amoutOfMoney:"Amazing ! Now, let's go down to business. Can you tell me how much money you need?",tooLow:"Considering your needs, I can redirect you to an instant loan offer.",socialConnect:"I need to gather some infos. To faster the process, you can connect with these social media. I'll get the information I need if you agree",errorSocialConnect:"I am sorry, there was an error. Could you connect again ?",sucessCheck:"It is all good! Let's check together that the information I've retrieved is the right one."},this.widgetList={additionalInfo:"additionalInfo",whatPurpose:"whatPurpose",nearestBank:"nearestBank",nearestBankNext:"nearestBankNext",amoutOfMoney:"amoutOfMoney",tooLow:"tooLow",socialConnect:"socialConnect",errorSocialConnect:"errorSocialConnect",sucessCheck:"sucessCheck"},this.push={},this.messageList)this.push[r]=this.mapFunction(r,this.messageList[r]);this.push.whatPurpose=function(){var e,t=i.createClientMessage("Hi Fundfinder !");e=i.createChatBotMessage(i.messageList.whatPurpose,{widget:i.widgetList.whatPurpose,withAvatar:!1}),x()(".options-container").remove(),i.updateChatbotState(t),i.updateChatbotState(e)},this.push.nearestBank=function(e){var t,n=i.createClientMessage(e);t=i.createChatBotMessage(i.messageList.whatPurpose,{widget:i.widgetList.nearestBank,withAvatar:!1}),x()(".options-container").remove(),i.updateChatbotState(n),i.updateChatbotState(t)}}return Object(b.a)(e,[{key:"test",value:function(){var e=this.createChatBotMessage(this.messageList.nearestBank,{widget:"learningOptions",withAvatar:!1});this.updateChatbotState(e)}},{key:"chooseInvestment",value:function(){var e=this.createChatBotMessage("Hi, I'm here to help. What do you want to learn?",{widget:"learningOptions"});this.updateChatbotState(e)}},{key:"updateChatbotState",value:function(e){this.setState((function(t){return Object(p.a)(Object(p.a)({},t),{},{messages:[].concat(Object(j.a)(t.messages),[e])})}))}}]),e}(),O=function(){function e(t,n){Object(f.a)(this,e),this.actionProvider=t,this.state=n}return Object(b.a)(e,[{key:"parse",value:function(e){var t=e.toLowerCase();(t.includes("hello")||t.includes("hi"))&&this.actionProvider.test()}}]),e}(),w=(n(164),function(e){var t=[{text:"Javascript",handler:e.actionProvider.handleJavascriptList,id:1},{text:"Data visualization",handler:function(){},id:2},{text:"APIs",handler:function(){},id:3},{text:"Security",handler:function(){},id:4},{text:"Interview prep",handler:function(){},id:5}].map((function(e){return Object(a.jsx)("button",{className:"learning-option-button",onClick:e.handler,class:"test2",children:e.text},e.id)}));return Object(a.jsx)("div",{className:"learning-options-container",children:t})}),y=(n(165),function(e){var t=e.options.map((function(e){return Object(a.jsx)("li",{className:"link-list-item",children:Object(a.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"link-list-item-url",children:e.text})},e.id)}));return Object(a.jsx)("ul",{className:"link-list",children:t})});function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var N=i.createElement("defs",null,i.createElement("style",null,".cls-1{fill:none;stroke:#515151;stroke-miterlimit:10;stroke-width:6px;}.cls-2{fill:#bcbcbc;}.cls-3{fill:#ffce00;}.cls-4{fill:#0000d8;}.cls-5{fill:#6b6b6b;}.cls-6{fill:#000049;}.cls-7{fill:#fff;}.cls-8{fill:#e2e2e2;}")),I=i.createElement("g",{id:"Calque_2","data-name":"Calque 2"},i.createElement("g",{id:"Calque_1-2","data-name":"Calque 1"},i.createElement("line",{className:"cls-1",x1:145,y1:9,x2:145,y2:121}),i.createElement("rect",{className:"cls-2",y:85,width:290,height:141,rx:63.03}),i.createElement("circle",{className:"cls-3",cx:145,cy:13,r:13}),i.createElement("circle",{className:"cls-4",cx:145.32,cy:34.34,r:20.49}),i.createElement("path",{className:"cls-2",d:"M79.85,248A201.29,201.29,0,0,0,70,311.5c0,71,33.8,128.5,75.5,128.5S221,382.46,221,311.5a201.59,201.59,0,0,0-9.86-63.5Z"}),i.createElement("ellipse",{className:"cls-5",cx:145.5,cy:248.5,rx:65.5,ry:10.5}),i.createElement("rect",{className:"cls-6",x:45,y:102,width:200,height:103.26,rx:47}),i.createElement("circle",{className:"cls-3",cx:181.8,cy:143.29,r:20}),i.createElement("circle",{className:"cls-6",cx:186.03,cy:146.45,r:10.46}),i.createElement("circle",{className:"cls-3",cx:107.52,cy:142.68,r:20}),i.createElement("circle",{className:"cls-6",cx:111.75,cy:145.84,r:10.46}),i.createElement("circle",{className:"cls-7",cx:177.39,cy:138.69,r:4.69}),i.createElement("circle",{className:"cls-7",cx:102.79,cy:138.46,r:4.69}),i.createElement("path",{className:"cls-8",d:"M128,172.8a17.12,17.12,0,0,0,33.37,0Z"})));function P(e,t){var n=e.title,a=e.titleId,r=C(e,["title","titleId"]);return i.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 290 440",ref:t,"aria-labelledby":a},r),n?i.createElement("title",{id:a},n):null,N,I)}var S=i.forwardRef(P),B=(n.p,function(){return Object(a.jsx)("div",{className:"react-chatbot-kit-chat-bot-avatar",children:Object(a.jsx)("div",{className:"react-chatbot-kit-chat-bot-avatar-container",children:Object(a.jsx)(S,{className:"react-chatbot-kit-chat-bot-avatar-icon"})})})}),M=(n(166),function(e){var t=[{text:"Hi Fundfinder !",handler:e.actionProvider.push.whatPurpose,id:1},{text:"Tell me more",handler:e.actionProvider.push.additionalInfo,id:2}].map((function(e){return Object(a.jsx)("button",{className:"option-button",onClick:e.handler,children:e.text},e.id)}));return Object(a.jsx)("div",{className:"options-container",children:t})}),E=(n(99),function(e){var t=[{text:"I get it!",handler:e.actionProvider.push.whereInvesting,id:1}].map((function(e){return Object(a.jsx)("button",{className:"option-button",onClick:e.handler,children:e.text},e.id)}));return Object(a.jsx)("div",{className:"options-container",children:t})}),F=n(94),L=n.n(F),A=n(144),K=function(e){var t=[{text:"Personal purpose",handler:function(){return n("Personal purpose")},id:1},{text:"Professional project",handler:function(){return n("Professional project")},id:2},{text:"Other",handler:function(){return n("Other")},id:3}],n=function(){var t=Object(A.a)(L.a.mark((function t(n){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(0,e.setState)((function(e){return Object(p.a)(Object(p.a)({},e),{},{purpose:n})})),e.actionProvider.push.nearestBank(n);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=t.map((function(e){return Object(a.jsx)("button",{className:"option-button",onClick:e.handler,children:e.text},e.id)}));return Object(a.jsx)("div",{className:"options-container",children:i})},J=(n(168),function(e){var t=[{text:"BANK1",handler:e.actionProvider.push.amoutOfMoney,id:1},{text:"BANK2",handler:e.actionProvider.push.amoutOfMoney,id:2}].map((function(e){return Object(a.jsx)("li",{className:"link-list-item",onClick:e.handler,children:Object(a.jsx)("p",{children:e.text})},e.id)}));return Object(a.jsx)("ul",{className:"link-list",children:t})}),q=(n(169),function(e){var t=[{text:"Hi Fundfinder !",handler:e.actionProvider.push.whatPurpose,id:1},{text:"Tell me more",handler:e.actionProvider.push.additionalInfo,id:2}].map((function(e){return Object(a.jsx)("input",{type:"range",min:"100",max:"100",value:"50",class:"slider",id:"myRange"})}));return Object(a.jsx)("div",{className:"welcome-options-container",children:t})}),T={botName:"Fundfinder",initialMessages:[Object(o.createChatBotMessage)("Hi, I am Fundfinder, powered by artificial intelligence. I will guide you to success by helping you with your next loan. Feel free to ask any question",{widget:"welcomeUser"})],state:{purpose:"",bank:"",money:""},customComponents:{botAvatar:function(e){return Object(a.jsx)(B,Object(p.a)({},e))}},customStyles:{botMessageBox:{backgroundColor:"rgb(0,0,73)"},chatButton:{backgroundColor:"#ffce00"}},widgets:[{widgetName:"learningOptions",widgetFunc:function(e){return Object(a.jsx)(w,Object(p.a)({},e))}},{widgetName:"welcomeUser",widgetFunc:function(e){return Object(a.jsx)(M,Object(p.a)({},e))}},{widgetName:"additionalInfo",widgetFunc:function(e){return Object(a.jsx)(E,Object(p.a)({},e))}},{widgetName:"whatPurpose",widgetFunc:function(e){return Object(a.jsx)(K,Object(p.a)({},e))},mapStateToProps:["purpose"]},{widgetName:"nearestBank",widgetFunc:function(e){return Object(a.jsx)(J,Object(p.a)({},e))}},{widgetName:"amountOfMoney",widgetFunc:function(e){return Object(a.jsx)(q,Object(p.a)({},e))}},{widgetName:"javascriptLinks",widgetFunc:function(e){return Object(a.jsx)(y,Object(p.a)({},e))},props:{options:[{text:"Introduction to JS",url:"https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",id:1},{text:"Mozilla JS Guide",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",id:2},{text:"Frontend Masters",url:"https://frontendmasters.com",id:3}]}}]};var H=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("header",{className:"App-header",children:Object(a.jsxs)("div",{class:"flex-container",children:[Object(a.jsx)("div",{style:{"max-width":250},class:"flex-child magenta",children:Object(a.jsx)(u.a,{defaultOpenKeys:["3","4"],activeKey:"1",children:Object(a.jsx)(u.a.Body,{children:Object(a.jsxs)(d.a,{children:[Object(a.jsx)(d.a.Item,{eventKey:"1",icon:Object(a.jsx)(h.a,{icon:"dashboard"}),children:"Dashboard"}),Object(a.jsx)(d.a.Item,{eventKey:"2",icon:Object(a.jsx)(h.a,{icon:"group"}),children:"Personal Data"}),Object(a.jsxs)(m.a,{eventKey:"3",title:"Me & Sparkasse",icon:Object(a.jsx)(h.a,{icon:"magic"}),children:[Object(a.jsx)(m.a.Item,{eventKey:"3-1",children:"Services"}),Object(a.jsx)(m.a.Item,{eventKey:"3-2",children:"Rquests"}),Object(a.jsx)(m.a.Item,{eventKey:"3-3",children:"Advisor"})]}),Object(a.jsxs)(m.a,{eventKey:"4",title:"Settings",icon:Object(a.jsx)(h.a,{icon:"gear-circle"}),children:[Object(a.jsx)(m.a.Item,{eventKey:"4-1",children:"Applications"}),Object(a.jsx)(m.a.Item,{eventKey:"4-2",children:"Channels"}),Object(a.jsx)(m.a.Item,{eventKey:"4-3",children:"Versions"}),Object(a.jsxs)(m.a.Menu,{eventKey:"4-5",title:"Custom Action",children:[Object(a.jsx)(m.a.Item,{eventKey:"4-5-1",children:"Action Name"}),Object(a.jsx)(m.a.Item,{eventKey:"4-5-2",children:"Action Params"})]})]})]})})})}),Object(a.jsx)("div",{id:"chat",class:"flex-child green",children:Object(a.jsx)(l.a,{config:T,actionProvider:v,messageParser:O})})]})})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,328)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(H,{})}),document.getElementById("root")),z()},99:function(e,t,n){}},[[320,1,2]]]);
//# sourceMappingURL=main.c0fee3ac.chunk.js.map