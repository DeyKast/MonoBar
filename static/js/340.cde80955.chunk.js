/*! For license information please see 340.cde80955.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[340],{262:function(e,t,a){"use strict";a(791);t.Z=a.p+"static/media/sprite.3c9f3c1d6662c9b99d1242f9f47247c1.svg"},916:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var s=a(942),i={customButton:"customButton_customButton__0G2R5",icon:"customButton_icon__UTy+O",wide:"customButton_wide__56+gW",medium:"customButton_medium__+TnCm",smallAdaptive:"customButton_smallAdaptive__0yFAp",smallAdaptiveChose:"customButton_smallAdaptiveChose__+iBMU"},r=a(418),n=a.n(r),c=a(262),o=a(184),d=function(e){var t=e.label,a=e.type,r=e.icon,d=e.onClick,u=n()(i.customButton,(0,s.Z)({},i[a],a));return(0,o.jsxs)("button",{className:u,onClick:d,children:[t,r?(0,o.jsx)("svg",{className:i.icon,children:(0,o.jsx)("use",{className:i.icon,href:"".concat(c.Z,"#").concat(r)})}):null]})}},340:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return D}});a(791);var s={navButtonsList:"menuPage_navButtonsList__jYJCu"},i=a(916),r={defaultMenuSection:"defaultPage_defaultMenuSection__11hcA",defaultPageTitle:"defaultPage_defaultPageTitle__AG7cL"},n=a(184),c=function(e){var t=e.title,a=e.children;return(0,n.jsx)("div",{className:r.container,children:(0,n.jsxs)("div",{className:"section ".concat(r.defaultMenuSection),children:[(0,n.jsx)("h1",{className:r.defaultPageTitle,children:t}),a]})})},o="menuNavigator_menuNavigatorWrapper__pXfqs",d=function(e){var t=e.data;return(0,n.jsx)("div",{className:o,children:t.map((function(e){return(0,n.jsx)(i.Z,{label:e.category,type:"smallAdaptive"},e.categoryID)}))})},u="menuList_menuListWrapper__WKfvK",l="menuList_menuListCardsWrapper__WqYo-",m="menuList_categoryName__cQWy9",_="dishCard_dishCard__fYXYz",p="dishCard_dishCardImage__4MIyH",h="dishCard_dishCardInfoWrapper__SeWAg",g="dishCard_dishNameWrapper__bjIOU",f="dishCard_dishName__rPxip",v="dishCard_dishAmount__rFc2v",y="dishCard_dishIngredients__cld2c",j="dishCard_dishPriceWrapper__BwGpH",x="dishCard_dishPrice__-057p",N=a(45),C=function(e){var t=e.dishesData;return console.log(t),(0,n.jsx)(n.Fragment,{children:t.map((function(e){return(0,n.jsxs)("div",{className:_,children:[(0,n.jsx)("img",{src:N,alt:"dish_image",className:p}),(0,n.jsxs)("div",{className:h,children:[(0,n.jsxs)("div",{className:g,children:[(0,n.jsx)("p",{className:f,children:e.name}),(0,n.jsx)("p",{className:v,children:e.amount})]}),(0,n.jsx)("div",{children:(0,n.jsx)("p",{className:y,children:e.ingredients.join(" | ")})}),(0,n.jsxs)("div",{className:j,children:[(0,n.jsx)("p",{className:x,children:e.price}),(0,n.jsx)(i.Z,{label:"\u041e\u0431\u0440\u0430\u0442\u0438",type:"smallAdaptiveChose"})]})]})]},e.id)}))})},I=function(e){var t=e.data;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{data:t}),(0,n.jsx)("div",{className:u,children:t.map((function(e){return(0,n.jsxs)("div",{className:l,children:[(0,n.jsx)("p",{className:m,children:e.category}),(0,n.jsx)(C,{dishesData:e.items})]},e.categoryID)}))})]})},B=JSON.parse('{"r":[{"categoryID":"p1c1","category":"\u0411\u0443\u0440\u0433\u0435\u0440\u0438","items":[{"id":"p1c1i1","categoryID":"p1c1","name":"\u041c\u043e\u043d\u043e \u0411\u0443\u0440\u0433\u0435\u0440","amount":"535 \u0433\u0440\u0430\u043c","ingredients":["\u041a\u043e\u0442\u043b\u0435\u0442\u0430 \u0437 \u0442\u0435\u043b\u044f\u0442\u0438\u043d\u0438","\u0427\u0435\u0434\u0434\u0435\u0440","\u041f\u0435\u0447\u0435\u0440\u0438\u0446\u0456","\u0426\u0438\u0431\u0443\u043b\u044f","\u042f\u0439\u0446\u0435","\u0421\u043e\u0443\u0441 \u043c\u043e\u043d\u043e"],"price":"158 \u0433\u0440\u043d","imageName":"monoBurger"},{"id":"p1c1i2","categoryID":"p1c1","name":"\u041c\u043e\u043d\u043e \u0411\u0443\u0440\u0433\u0435\u0440 2X","amount":"670 \u0433\u0440\u0430\u043c","ingredients":["\u041f\u043e\u0434\u0432\u0456\u0439\u043d\u0430 \u043a\u043e\u0442\u043b\u0435\u0442\u0430 \u0437 \u0442\u0435\u043b\u044f\u0442\u0438\u043d\u0438","\u0427\u0435\u0434\u0434\u0435\u0440","\u041f\u0435\u0447\u0435\u0440\u0438\u0446\u0456","\u0426\u0438\u0431\u0443\u043b\u044f","\u042f\u0439\u0446\u0435","\u0421\u043e\u0443\u0441 \u043c\u043e\u043d\u043e"],"price":"176 \u0433\u0440\u043d","imageName":"monoBurger2X"}]},{"categoryID":2,"category":"\u041f\u0435\u043b\u044c\u043c\u0435\u043d\u0456","items":[]},{"categoryID":3,"category":"\u0413\u043e\u0444\u0440\u0438","items":[]},{"categoryID":4,"category":"\u0421\u0430\u043b\u0430\u0442\u0438","items":[]},{"categoryID":5,"category":"\u041f\u0435\u0440\u0448\u0456 \u0441\u0442\u0440\u0430\u0432\u0438","items":[]},{"categoryID":6,"category":"\u0414\u043b\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u0457","items":[]},{"categoryID":7,"category":"\u0414\u0435\u0441\u0435\u0440\u0442\u0438","items":[]},{"categoryID":8,"category":"\u0421\u043d\u0456\u0434\u0430\u043d\u043a\u0438","items":[]}],"K":[]}'),D=function(){return(0,n.jsxs)(c,{title:"\u041c\u0435\u043d\u044e",children:[(0,n.jsxs)("ul",{className:s.navButtonsList,children:[(0,n.jsx)("li",{className:s.navButtonsListItem,children:(0,n.jsx)(i.Z,{label:"\u041a\u0443\u0445\u043d\u044f",type:"medium",onClick:function(){}})}),(0,n.jsx)("li",{className:s.navButtonsListItem,children:(0,n.jsx)(i.Z,{label:"\u0411\u0430\u0440",type:"medium",onClick:function(){}})})]}),(0,n.jsx)(I,{data:B.r}),(0,n.jsx)(I,{data:B.K})]})}},418:function(e,t){var a;!function(){"use strict";var s={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var a=arguments[t];a&&(e=n(e,r(a)))}return e}function r(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var a in e)s.call(e,a)&&e[a]&&(t=n(t,a));return t}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()}}]);
//# sourceMappingURL=340.cde80955.chunk.js.map