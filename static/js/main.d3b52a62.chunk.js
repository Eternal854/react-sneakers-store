(this["webpackJsonpreact-oaoaoa"]=this["webpackJsonpreact-oaoaoa"]||[]).push([[0],{18:function(e,t,a){e.exports={overlay:"Drawer_overlay__2UYWa",overlayVisible:"Drawer_overlayVisible__1dz3L",drawer:"Drawer_drawer__38mo5",items:"Drawer_items__3F6Ml"}},20:function(e,t,a){e.exports={card:"Card_card__3rxi2",plus:"Card_plus__23XAl",favorite:"Card_favorite__28DHv"}},41:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(14),s=a(33),i=a.n(s),o=(a(41),a(42),a(11)),l=a(13),d=a(5),j=a.n(d),u=a(12),b=a(4),m=a(6),x=a.n(m),h=a(2),f=c.a.createContext({}),p=a(1),O=function(e){var t=e.title,a=e.image,r=e.description,n=c.a.useContext(f).setCartIsOpened;return Object(p.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(p.jsx)("img",{className:"mb=20",width:"120px",src:a,alt:"Empty"}),Object(p.jsx)("h2",{children:t}),Object(p.jsx)("p",{className:"opacity-6",children:r}),Object(p.jsxs)("button",{onClick:function(){return n(!1)},className:"greenButton",children:[Object(p.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0442\u043e\u0432\u0430\u0440\u0430\u043c"]})]})},v=function(){var e=c.a.useContext(f),t=e.cartItems,a=e.setCartItems,r=t.reduce((function(e,t){return t.price+e}),0);return{cartItems:t,setCartItems:a,totalPrice:r}},g=a(18),k=a.n(g),N=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var C=function(e){var t=e.onClose,a=e.onRemove,r=e.items,n=void 0===r?[]:r,s=e.isOpen,i=v(),o=i.cartItems,l=i.setCartItems,d=i.totalPrice,m=c.a.useState(!1),h=Object(b.a)(m,2),f=h[0],g=h[1],C=c.a.useState(null),w=Object(b.a)(C,2),y=w[0],I=w[1],_=c.a.useState(!1),S=Object(b.a)(_,2),T=S[0],F=S[1],L=function(){var e=Object(u.a)(j.a.mark((function e(){var t,a,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,F(!0),e.next=4,x.a.post("https://612a4354068adf001789baa2.mockapi.io/orders",{items:o});case 4:t=e.sent,a=t.data,I(a.id),g(!0),l([]),r=0;case 10:if(!(r<o.length)){e.next=19;break}return c=o[r],e.next=14,x.a.delete("https://612a4354068adf001789baa2.mockapi.io/cart/"+c.id);case 14:return e.next=16,N(1e3);case 16:r++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437");case 24:F(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"".concat(k.a.overlay," ").concat(s?k.a.overlayVisible:k.a.overlayHidden),children:Object(p.jsxs)("div",{className:k.a.drawer,children:[Object(p.jsxs)("h2",{className:"justify-between d-flex mb-30",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430"," ",Object(p.jsx)("img",{onClick:t,className:"removeBtn cu-p",src:"img/btn-remove.svg",alt:"Close"})]}),n.length>0?Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"items flex",children:n.map((function(e){return Object(p.jsxs)("div",{className:"cartItem d-flex align-center mb-20",children:[Object(p.jsx)("div",{style:{backgroundImage:"url(".concat(e.imageUrl,")")},className:"cartItemImg"}),Object(p.jsxs)("div",{className:"mr-20 flex",children:[Object(p.jsx)("p",{className:"mb-5",children:e.title}),Object(p.jsxs)("b",{children:[e.price," \u0440\u0443\u0431."]})]}),Object(p.jsx)("img",{onClick:function(){return a(e.id)},className:"removeBtn",src:"img/btn-remove.svg",alt:"Remove"})]},e.title)}))}),Object(p.jsxs)("div",{className:"cartTotalBlock",children:[Object(p.jsxs)("ul",{className:"cartTotalBlock",children:[Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e: "}),Object(p.jsx)("div",{}),Object(p.jsxs)("b",{children:[d," \u0440\u0443\u0431."]})]}),Object(p.jsxs)("li",{children:[Object(p.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(p.jsx)("div",{}),Object(p.jsxs)("b",{children:[d/100*5," \u0440\u0443\u0431."]})]})]}),Object(p.jsxs)("button",{disabled:T,onClick:L,className:"greenButton",children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437 ",Object(p.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"})]})]})]}):Object(p.jsx)(O,{title:f?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430",description:f?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(y," \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0441\u043b\u0443\u0436\u0431\u0435 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0442\u043e\u0432\u0430\u0440, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437",image:f?"img/complete-order.jpg":"img/cart-empty.png"})]})})};var w=function(e){var t=v.totalPrice;return Object(p.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(p.jsx)(n.b,{to:"/",children:Object(p.jsxs)("div",{className:"d-flex align-center",children:[Object(p.jsx)("img",{className:"mr-10",width:40,heigth:40,src:"img/logo.png",alt:"Logo"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(p.jsx)("p",{className:"opacity-5",children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(p.jsxs)("ul",{className:"d-flex",children:[Object(p.jsxs)("li",{onClick:e.openCart,className:"mr-30 cu-p",children:[Object(p.jsx)("img",{className:"mr-10",width:18,heigth:18,src:"img/cart.svg",alt:"Cart"}),Object(p.jsx)("span",{children:Object(p.jsxs)("span",{children:[t," \u0440\u0443\u0431."]})})]}),Object(p.jsx)("li",{className:"mr-20 cu-p",children:Object(p.jsx)(n.b,{to:"/favorites",children:Object(p.jsx)("img",{width:18,heigth:18,src:"img/heart.svg",alt:"Favorites"})})}),Object(p.jsx)("li",{children:Object(p.jsx)(n.b,{to:"/orders",children:Object(p.jsx)("img",{width:18,heigth:18,src:"img/user.svg",alt:"User"})})})]})]})},y=a(36),I=a(20),_=a.n(I);var S=function(e){var t=e.id,a=e.title,r=e.imageUrl,n=e.price,s=e.addToFavorite,i=e.addToCart,o=e.contentLoaded,l=void 0!==o&&o,d=c.a.useContext(f).isAddedToCart,j=c.a.useContext(f),u=Object(b.a)(j,1)[0],m={id:t,parentId:t,title:a,imageUrl:r,price:n},x=function(){s(m)};return Object(p.jsx)("div",{className:_.a.card,children:l?Object(p.jsxs)(y.a,{speed:2,width:158,height:229,viewBox:"0 0 150 202",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(p.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"150",height:"100"}),Object(p.jsx)("rect",{x:"0",y:"118",rx:"5",ry:"5",width:"150",height:"15"}),Object(p.jsx)("rect",{x:"0",y:"141",rx:"5",ry:"5",width:"100",height:"15"}),Object(p.jsx)("rect",{x:"0",y:"177",rx:"5",ry:"5",width:"80",height:"25"}),Object(p.jsx)("rect",{x:"118",y:"170",rx:"5",ry:"5",width:"32",height:"32"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:_.a.favorite,onClick:x,children:s&&Object(p.jsx)("img",{onClick:x,src:u(t)?"img/heart-liked.svg":"img/heart-unliked.svg",alt:"Unliked"})}),Object(p.jsx)("img",{width:133,height:112,src:r,alt:"Sneakers"}),Object(p.jsx)("h5",{children:a}),Object(p.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(p.jsxs)("div",{className:"d-flex flex-column",children:[Object(p.jsx)("span",{children:"\u0426\u0435\u043d\u0430"}),Object(p.jsxs)("b",{children:[n," \u0440\u0443\u0431."]})]}),i&&Object(p.jsx)("img",{className:_.a.plus,onClick:function(){i(m)},src:d(t)?"img/btn-checked.svg":"img/btn-plus.svg",alt:"Plus"})]})]})})};var T=function(e){var t=e.items,a=e.searchValue,r=e.setSearchValue,c=e.onChangeSearchValue,n=e.addToFavoriteItemsClick,s=e.addToCartClick,i=e.isLoading;return Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsxs)("div",{className:"d-flex align-center justify-between mb-40",children:[Object(p.jsx)("h1",{children:a?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(a,'"'):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(p.jsxs)("div",{className:"search-block d-flex",children:[Object(p.jsx)("img",{src:"img/search.svg",alt:"Search"}),a&&Object(p.jsx)("img",{onClick:function(){return r("")},className:"clear cu-p",src:"img/btn-remove.svg",alt:"Clear"}),Object(p.jsx)("input",{onChange:c,value:a,placeholder:"\u041f\u043e\u0438\u0441\u043a ... "})]})]}),Object(p.jsx)("div",{className:"d-flex flex-wrap",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}));return(i?Object(l.a)(Array(8)):e).map((function(e,t){return Object(p.jsx)(S,Object(o.a)({addToFavorite:function(e){return n(e)},addToCart:function(e){return s(e)},contentLoaded:i},e),t)}))}()})]})};var F=function(){var e=c.a.useContext(f),t=e.favoriteItems,a=e.addToFavoriteItemsClick;return Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(p.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(p.jsx)("div",{className:"d-flex flex-wrap",children:t.map((function(e,t){return Object(p.jsx)(S,Object(o.a)({inFavoriteItems:!0,addToFavorite:a},e),t)}))})]})};var L=function(){var e=c.a.useState([]),t=Object(b.a)(e,2),a=t[0],r=t[1],n=c.a.useState(!0),s=Object(b.a)(n,2),i=s[0],d=s[1];return c.a.useEffect((function(){Object(u.a)(j.a.mark((function e(){var t,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://612a4354068adf001789baa2.mockapi.io/orders");case 3:t=e.sent,a=t.data,r(a.reduce((function(e,t){return[].concat(Object(l.a)(e),Object(l.a)(t.items))}),[])),d(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(p.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(p.jsx)("div",{className:"d-flex flex-wrap",children:(i?Object(l.a)(Array(8)):a).map((function(e,t){return Object(p.jsx)(S,Object(o.a)({contentLoaded:i},e),t)}))})]})};var V=function(){var e=c.a.useState([]),t=Object(b.a)(e,2),a=t[0],r=t[1],n=c.a.useState([]),s=Object(b.a)(n,2),i=s[0],d=s[1],m=c.a.useState([]),O=Object(b.a)(m,2),v=O[0],g=O[1],k=c.a.useState(""),N=Object(b.a)(k,2),y=N[0],I=N[1],_=c.a.useState(!1),S=Object(b.a)(_,2),V=S[0],A=S[1],B=c.a.useState(!0),P=Object(b.a)(B,2),U=P[0],D=P[1];c.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,a,c,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([x.a.get("https://612a4354068adf001789baa2.mockapi.io/cart"),x.a.get("https://612a4354068adf001789baa2.mockapi.io/favoriteItems"),x.a.get("https://612a4354068adf001789baa2.mockapi.io/items")]);case 3:t=e.sent,a=Object(b.a)(t,3),c=a[0],n=a[1],s=a[2],D(!1),d(c.data),g(n.data),r(s.data),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0442\u043e\u0432\u0430\u0440\u043e\u0432"),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var E=function(){var e=Object(u.a)(j.a.mark((function e(t){var a,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(a=i.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return d((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,x.a.delete("https://612a4354068adf001789baa2.mockapi.io/cart/".concat(a.id));case 6:e.next=14;break;case 8:return d((function(e){return[].concat(Object(l.a)(e),[t])})),e.next=11,x.a.post("https://612a4354068adf001789baa2.mockapi.io/cart",t);case 11:r=e.sent,c=r.data,d((function(e){return e.map((function(e){return e.parentId===c.parentId?Object(o.a)(Object(o.a)({},e),{},{id:c.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t)}))})),e.next=4,x.a.delete("https://612a4354068adf001789baa2.mockapi.io/cart/".concat(t));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b"),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(u.a)(j.a.mark((function e(t){var a,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(a=v.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=7;break}g((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),x.a.delete("https://612a4354068adf001789baa2.mockapi.io/favoriteItems/".concat(a.id)),e.next=13;break;case 7:return g((function(e){return[].concat(Object(l.a)(e),[t])})),e.next=10,x.a.post("https://612a4354068adf001789baa2.mockapi.io/favoriteItems",t);case 10:r=e.sent,c=r.data,g((function(e){return e.map((function(e){return e.parentId===c.parentId?Object(o.a)(Object(o.a)({},e),{},{id:c.id}):e}))}));case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043b\u044e\u0431\u0438\u043c\u043e\u0435"),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(f.Provider,{value:{items:a,cartItems:i,favoriteItems:v,isAddedToCart:function(e){return i.some((function(t){return Number(t.parentId)===Number(e)}))},isAddedToFavoriteItems:function(e){return v.some((function(t){return Number(t.parentId)===Number(e)}))},addToFavoriteItemsClick:H,addToCartClick:E,setCartIsOpened:A,setCartItems:d},children:Object(p.jsxs)("div",{className:"wrapper clear",children:[Object(p.jsx)(C,{items:i,onClose:function(){return A(!1)},onRemove:R,isOpen:V}),Object(p.jsx)(w,{openCart:function(){return A(!0)}}),Object(p.jsx)(h.a,{path:"/",exact:!0,children:Object(p.jsx)(T,{items:a,cartItems:i,searchValue:y,setSearchValue:I,onChangeSearchValue:function(e){I(e.target.value)},addToFavoriteItemsClick:H,addToCartClick:E,isLoading:U})}),Object(p.jsx)(h.a,{path:"/favorites",exact:!0,children:Object(p.jsx)(F,{})}),Object(p.jsx)(h.a,{path:"/orders",exact:!0,children:Object(p.jsx)(L,{})})]})})};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(n.a,{children:Object(p.jsx)(V,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.d3b52a62.chunk.js.map