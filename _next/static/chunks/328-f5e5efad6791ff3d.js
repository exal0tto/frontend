"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[328],{1702:function(e,t,s){s.d(t,{L:function(){return c},e:function(){return d}});var a=s(5893),l=s(1664),n=s.n(l),i=s(1163),r=s(7518);let c=e=>{let{variant:t,text:s,onSelect:l,children:n}=e;return(0,a.jsx)("div",{className:"main-dropdown ".concat(t&&"main-dropdown--".concat(t)),children:(0,a.jsxs)(r.Z,{className:"main-dropdown__wrap",onSelect:l,children:[(0,a.jsxs)(r.Z.Toggle,{as:"button",className:"btn",type:"button",children:[(0,a.jsx)("span",{className:"text-el",children:s}),(0,a.jsx)("span",{className:"dropdown-toggle__arrow-start"}),(0,a.jsx)("span",{className:"dropdown-toggle__arrow-end"}),(0,a.jsx)("span",{className:"dropdown-toggle__clip"})]}),(0,a.jsx)(r.Z.Menu,{as:"ul",children:n})]})})};c.Item=e=>{let{text:t,active:s,...l}=e;return(0,a.jsx)("li",{children:(0,a.jsx)(r.Z.Item,{className:s&&"dropdown-item--active",...l,children:t})})};let d=e=>{let{text:t,children:s}=e;return(0,a.jsx)("div",{className:"menu-dropdown",children:(0,a.jsxs)(r.Z,{className:"menu-dropdown__wrap",children:[(0,a.jsxs)(r.Z.Toggle,{as:"button",className:"btn",type:"button",children:[(0,a.jsx)("span",{className:"text-el",children:t}),(0,a.jsx)("span",{className:"dropdown-toggle__clip"})]}),(0,a.jsx)(r.Z.Menu,{as:"ul",children:s})]})})},o=e=>{let{text:t,target:s}=e,l=(0,i.useRouter)(),c=l.pathname===s;return(0,a.jsx)("li",{children:(0,a.jsx)(r.Z.Item,{as:n(),href:s,className:c?"dropdown-item--active":"",children:(0,a.jsx)("span",{className:"text-el",children:t})})})};d.Item=o},3051:function(e,t,s){s.d(t,{K:function(){return Q},h:function(){return J}});var a=s(5893),l=s(5675),n=s.n(l),i=s(1664),r=s.n(i),c=s(682),d=s(2400),o=s(7294),m=s(4103),u=s(7918),x=s.n(u),h=s(1702),_=s(4733),j=JSON.parse('[{"inputs":[],"name":"latestRoundData","outputs":[{"internalType":"uint80","name":"roundId","type":"uint80"},{"internalType":"int256","name":"answer","type":"int256"},{"internalType":"uint256","name":"startedAt","type":"uint256"},{"internalType":"uint256","name":"updatedAt","type":"uint256"},{"internalType":"uint80","name":"answeredInRound","type":"uint80"}],"stateMutability":"view","type":"function"}]');class p{async getLatestPriceRaw(){let{answer:e}=await this._contract.methods.latestRoundData().call();return parseInt(e,10)}async getLatestPrice(){return await this.getLatestPriceRaw()/1e8}constructor(e,t="0xAB594600376Ec9fD91F8e885dADF0CE036862dE0"){this._address=t,this._web3=e,this._contract=new this._web3.eth.Contract(j,this._address)}}class w{async getLatestPrice(){let[e,{answer:t}]=await Promise.all([this._usdPriceFeed.getLatestPriceRaw(),this._contract.methods.latestRoundData().call()]);return e/parseInt(t,10)}constructor(e,t){this._address=t,this._web3=e,this._contract=new this._web3.eth.Contract(j,this._address),this._usdPriceFeed=new p(e)}}let N={USD:{name:"USD",symbol:"$",getPriceFeed:e=>new p(e)},EUR:{name:"EUR",symbol:"€",getPriceFeed:e=>new w(e,"0x73366Fe0AA0Ded304479862808e02506FE556a98")},GBP:{name:"GBP",symbol:"\xa3",getPriceFeed:e=>new w(e,"0x099a2540848573e94fb1Ca0Fa420b00acbBc845a")}},v=e=>{let{jackpot:t}=e,{library:s}=(0,m.Ge)(),[l,n]=(0,o.useState)("USD"),[i,r]=(0,o.useState)(null);return(0,o.useEffect)(()=>{(async()=>{r(null);let e=N[l].getPriceFeed(s),a=t*await e.getLatestPrice();r(Math.floor(100*a)/100)})()},[l,t,s]),(0,a.jsxs)("div",{className:"jackpot__currency",children:[(0,a.jsx)("div",{className:"jackpot__currency-shadow",children:(0,a.jsx)("div",{className:"jackpot__currency-shadow-clip"})}),(0,a.jsxs)("div",{className:"jackpot__currency-wrap",children:[(0,a.jsx)("div",{className:"jackpot__currency-select",children:(0,a.jsx)(h.L,{text:N[l].symbol,onSelect:e=>n(e),children:Object.values(N).map(e=>{let{name:t,symbol:s}=e;return(0,a.jsx)(h.L.Item,{text:s,active:l===t,eventKey:t},t)})})}),(0,a.jsx)("div",{className:"jackpot__currency-selected",children:i})]}),(0,a.jsxs)("div",{className:"jackpot__currency-descr",children:["*based on ",(0,a.jsxs)("a",{href:"https://coinmarketcap.com/currencies/polygon/",target:"_blank",rel:"noreferrer",children:["current ","MATIC"," market price"]})]})]})},f=e=>{let{lottery:t}=e,[s,l]=(0,o.useState)(null),[n,i]=(0,o.useState)(null);return(0,o.useEffect)(()=>{(async()=>{if(t){let e=await t.getTimeOfNextDraw();l(e.getTime())}})()},[t]),(0,o.useEffect)(()=>{let e=()=>{let e=Date.now();!s||e>s?i(null):i(s-e)},t=window.setInterval(e,6e4);return e(),()=>{window.clearInterval(t)}},[s]),(0,a.jsxs)("div",{className:"next-draw",children:[(0,a.jsx)("div",{className:"next-draw__title",children:"Next Draw"}),(0,a.jsx)("div",{className:"next-draw__timeline",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-4 next-draw__item",children:(0,a.jsxs)("div",{className:"next-draw__item-in",children:[(0,a.jsx)("div",{className:"next-draw__item-title",children:n?Math.floor(n%6048e5/864e5):""}),(0,a.jsx)("div",{className:"next-draw__item-sub",children:"Days"})]})}),(0,a.jsx)("div",{className:"col-4 next-draw__item",children:(0,a.jsxs)("div",{className:"next-draw__item-in",children:[(0,a.jsx)("div",{className:"next-draw__item-title",children:n?Math.floor(n%864e5/36e5):""}),(0,a.jsx)("div",{className:"next-draw__item-sub",children:"Hours"})]})}),(0,a.jsx)("div",{className:"col-4 next-draw__item",children:(0,a.jsxs)("div",{className:"next-draw__item-in",children:[(0,a.jsx)("div",{className:"next-draw__item-title",children:n?Math.floor(n%36e5/6e4):""}),(0,a.jsx)("div",{className:"next-draw__item-sub",children:"Minutes"})]})})]})})]})},g=e=>{let{lottery:t}=e,[s,l]=(0,o.useState)(null);return(0,o.useEffect)(()=>{if(t){let e=t.subscribeToJackpot(e=>{l(parseFloat(x().utils.fromWei(e)))});return()=>{e.cancel()}}},[t]),(0,a.jsx)("div",{className:"jackpot",children:(0,a.jsxs)("div",{className:"jackpot__main-shadow",children:[(0,a.jsx)("div",{className:"jackpot__title",children:(0,a.jsxs)("div",{className:"one-row-title",children:[(0,a.jsx)("div",{className:"one-row-title__top-frame",children:(0,a.jsx)("div",{className:"one-row-title__top-frame-clip"})}),(0,a.jsx)("div",{className:"one-row-title__frame",children:(0,a.jsx)("div",{className:"one-row-title__frame-in",children:(0,a.jsx)("div",{className:"one-row-title__main-text",children:"Current Jackpot"})})})]})}),(0,a.jsxs)("div",{className:"jackpot__main",children:[(0,a.jsxs)("div",{className:"jackpot__top-win",children:[null!==s&&"".concat(Math.floor(100*s)/100)," ",(0,a.jsx)("span",{className:"jackpot__top-win__currency",children:"MATIC"})]}),null!==s&&(0,a.jsx)(v,{jackpot:s}),(0,a.jsx)(f,{lottery:t})]})]})})},b=()=>(0,a.jsx)(_.r.Consumer,{children:e=>(0,a.jsx)(g,{lottery:e})});var y=s(281),k=s(9766);let A=e=>{let{numbers:t,onClick:s}=e;return(0,a.jsx)("div",{className:"lucky-picker d-none d-lg-block",children:(0,a.jsx)("div",{className:"picker-table",children:(0,k.w6)(9).map(e=>(0,k.w6)(10).map(l=>{let n=10*e+l+1,i=t.includes(n);return(0,a.jsx)("span",{className:"picker-table__item ".concat(i&&"picker-table__item--active"),children:(0,a.jsx)("span",{className:"picker-table__item-in",onClick:()=>s(n),children:(0,a.jsx)("span",{className:"picker-table__text",children:n})})},n)}))})})},P=e=>{let{numbers:t,onAddNumber:s}=e,[l,n]=(0,o.useState)(null),i=e=>{if(!/^[0-9]+$/.test(e))return;let t=parseInt(e,10);t<1||t>90||s(t)};return t.length>=k.Tj.length+5?null:null!==l?(0,a.jsx)("form",{className:"list-activated__item",onSubmit:e=>{e.preventDefault(),i(l),n(null)},children:(0,a.jsx)("input",{type:"text",autoFocus:!0,pattern:"[0-9]+",inputMode:"numeric",className:"list-activated__item-editor",value:l,onChange:e=>{/^[0-9]*$/.test(e.target.value)?n(e.target.value):e.preventDefault()},onBlur:()=>{i(l),n(null)}})}):(0,a.jsx)("div",{className:"list-activated__item",children:(0,a.jsxs)("button",{className:"btn btn-plus btn-small-arrows",onClick:()=>{n("")},children:[(0,a.jsx)("span",{className:" btn-small-arrows__arrow-start"}),(0,a.jsx)("span",{className:" btn-small-arrows__arrow-end"}),(0,a.jsx)("span",{className:"btn-small-arrows__frame",children:(0,a.jsx)("span",{className:"btn-small-arrows__text",children:(0,a.jsx)("span",{className:"btn-small-arrows__text-in",children:"+"})})})]})})},C=e=>{let{numbers:t,splice:s,onAddNumber:l}=e;return(0,a.jsxs)("div",{className:"list-activated d-flex justify-content-start flex-wrap",children:[t.map((e,t)=>(0,a.jsx)("div",{className:"list-activated__item",onClick:()=>s(t),children:(0,a.jsx)("div",{className:"list-activated__item-in",children:(0,a.jsx)("span",{className:"list-activated__text",children:e})})},t)),(0,a.jsx)(P,{numbers:t,onAddNumber:l})]})},I=e=>{let{lottery:t,numbers:s}=e,[l,n]=(0,o.useState)(null);return(0,o.useEffect)(()=>{(async()=>{if(n(null),t&&s.length>=6){let e=parseFloat(x().utils.fromWei(await t.getTicketPrice(s)));n(Math.round(1e4*e)/1e4)}})()},[t,s]),(0,a.jsxs)("div",{className:"lucky-statistic d-flex justify-content-around align-items-center",children:[(0,a.jsxs)("div",{className:"lucky-statistic__total",children:[(0,a.jsx)("div",{className:"lucky-statistic__title",children:"Total Numbers"}),(0,a.jsx)("div",{className:"lucky-statistic__subtitle",children:s.length})]}),(0,a.jsxs)("div",{className:"lucky-statistic__played",children:[(0,a.jsx)("div",{className:"lucky-statistic__title",children:"Played Combinations"}),(0,a.jsx)("div",{className:"lucky-statistic__subtitle",children:s.length<6?0:k.Tj[s.length-6]})]}),(0,a.jsxs)("div",{className:"lucky-statistic__cost",children:[(0,a.jsxs)("div",{className:"lucky-statistic__title",children:["Price (","MATIC",")"]}),(0,a.jsx)("div",{className:"lucky-statistic__subtitle",children:l})]})]})},T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],D=e=>{let{lottery:t,numbers:s,onPlayed:l}=e,n=(0,m.Ge)(),[i,r]=(0,o.useState)(null);(0,o.useEffect)(()=>{let e=async()=>{t&&r(await t.getTimeOfNextDraw())},s=window.setInterval(e,6e4);return e(),()=>{window.clearInterval(s)}},[t]);let c=async e=>{if(s.length<6)return null;try{return await e.buyTicket(s,n.account)}catch(e){return console.error(e),null}};return(0,a.jsx)(y.tC.Consumer,{children:e=>{let{showModal:r}=e;return(0,a.jsx)("div",{className:"lucky-list__buttons",children:(0,a.jsx)("button",{className:"btn-s btn-play",onClick:async()=>{if(s.length<6){r("message","Play","Please select at least 6 numbers.");return}if(!n.account)try{await r("wallet")}catch(e){return}let e=await c(t);e&&(l(),r("receipt",s,e))},children:(0,a.jsxs)("span",{className:"btn-s__frame btn-play__frame",children:[(0,a.jsx)("span",{className:"btn-s__text",children:"Play"}),(0,a.jsx)("span",{className:"btn-play-in btn-s",children:(0,a.jsx)("span",{className:"btn-play-in__frame btn-s__frame",children:(0,a.jsx)("span",{className:"btn-play-in__text",children:i?(0,a.jsxs)(a.Fragment,{children:[T[i.getMonth()]," ",(0,a.jsx)("b",{children:i.getDate()}),", ",(0,a.jsx)("b",{children:i.getFullYear()})," Draw"]}):""})})})]})})})}})},E=e=>{let{numbers:t,splice:s,onAddNumber:l,onPlayed:n}=e;return(0,a.jsxs)("div",{className:"lucky-list",children:[(0,a.jsx)(C,{numbers:t,splice:s,onAddNumber:l}),(0,a.jsx)(_.r.Consumer,{children:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(I,{lottery:e,numbers:t}),(0,a.jsx)(D,{lottery:e,numbers:t,onPlayed:n})]})})]})},M=()=>{let[e,t]=(0,o.useState)([]);return(0,a.jsxs)("div",{className:"lucky-frame__wrap",children:[(0,a.jsxs)("div",{className:"lucky-titles d-flex justify-content-between",children:[(0,a.jsxs)("div",{className:"lucky-titles__left",children:[(0,a.jsxs)("div",{className:"two-rows-title d-none d-lg-inline-block",children:[(0,a.jsx)("div",{className:"two-rows-title__top-frame",children:(0,a.jsx)("div",{className:"two-rows-title__top-frame-clip"})}),(0,a.jsx)("div",{className:"two-rows-title__frame",children:(0,a.jsxs)("div",{className:"two-rows-title__frame-in",children:[(0,a.jsx)("div",{className:"two-rows-title__main-text",children:"Pick Your Lucky Numbers"}),(0,a.jsxs)("div",{className:"two-rows-title__sub-text",children:["Min 6 - Max ",k.Tj.length+5]})]})})]}),(0,a.jsxs)("div",{className:"one-row-title d-lg-none",children:[(0,a.jsx)("div",{className:"one-row-title__top-frame",children:(0,a.jsx)("div",{className:"one-row-title__top-frame-clip"})}),(0,a.jsx)("div",{className:"one-row-title__frame",children:(0,a.jsx)("div",{className:"one-row-title__frame-in",children:(0,a.jsx)("div",{className:"one-row-title__main-text",children:"Pick Your Lucky Numbers"})})})]})]}),(0,a.jsx)("div",{className:"lucky-titles__right d-none d-lg-block",children:(0,a.jsxs)("div",{className:"one-row-title",children:[(0,a.jsx)("div",{className:"one-row-title__top-frame",children:(0,a.jsx)("div",{className:"one-row-title__top-frame-clip"})}),(0,a.jsx)("div",{className:"one-row-title__frame",children:(0,a.jsx)("div",{className:"one-row-title__frame-in",children:(0,a.jsx)("div",{className:"one-row-title__main-text",children:"Your Lucky List"})})})]})})]}),(0,a.jsx)("div",{className:"lucky-frame__shadow",children:(0,a.jsxs)("div",{className:"lucky-frame d-flex justify-content-between align-items-start",children:[(0,a.jsx)(A,{numbers:e,onClick:s=>{let a=e.indexOf(s);a<0?e.length<k.Tj.length+5&&e.push(s):e.splice(a,1),t(e.slice())}}),(0,a.jsx)(E,{numbers:e,splice:s=>{let a=e.slice();a.splice(s,1),t(a)},onAddNumber:s=>{let a=e.indexOf(s);if(a<0)t(e.concat(s));else{let l=e.slice();l.splice(a,1),l.push(s),t(l)}},onPlayed:()=>{t([])}})]})}),(0,a.jsx)("div",{className:"lucky-frame__shadow-double"})]})};var S=s(1163);let F=[{caption:"Home",target:"/",visible:"always"},{caption:"How to Play",target:"/howtoplay",visible:"always"},{caption:"My Tickets",target:"/tickets",visible:"account"},{caption:"Odds",target:"/odds",visible:"always"},{caption:"Whitepaper",target:"/whitepaper",visible:"always"},{caption:"ICO",target:"/ico",visible:"never"},{caption:"Partners",target:"/partners",visible:"always"},{caption:"ToS & PP",target:"/legal",visible:"never"}],B=e=>{let{caption:t,target:s}=e,l=(0,S.useRouter)(),n=l.pathname===s;return(0,a.jsx)("li",{className:"top-menu__item ".concat(n?"top-menu__item--active":""),children:(0,a.jsxs)(r(),{href:s,className:"top-menu__link",children:[(0,a.jsx)("span",{className:"top-menu__text-el",children:t}),(0,a.jsx)("span",{className:"top-menu__line"})]})})},R=()=>{let{account:e}=(0,m.Ge)();return(0,a.jsx)("div",{className:"d-none d-lg-block",children:(0,a.jsx)("ul",{className:"top-menu",children:F.filter(t=>{let{visible:s}=t;return"always"===s||"account"===s&&e}).map((e,t)=>{let{caption:s,target:l}=e;return(0,a.jsx)(B,{caption:s,target:l},t)})})})},L=e=>{for(let t of F)if(e===t.target)return t.caption;return""},U=()=>{let e=(0,S.useRouter)(),{account:t}=(0,m.Ge)();return(0,a.jsx)(h.e,{type:"menu",text:L(e.pathname),children:F.filter(e=>{let{visible:s}=e;return"always"===s||"account"===s&&t}).map((e,t)=>{let{caption:s,target:l}=e;return(0,a.jsx)(h.e.Item,{text:s,target:l},t)})})};var H={src:"/_next/static/media/logo.be3cc1a6.png",height:54,width:54,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEVMaXHW0DlC9f0j9blE+f/mxhD/vwD/vAFA9P8c/z0p/0P/wQD/wAD/xgD/wQQp/0ol/0VF+EXyzH8e/1Ac//9057yi3YNT9d1B+v//nACS4pU5975C9PpC9P5RCYz4AAAAHnRSTlMAylAMtQ+gfptjimPAkTabqE0UfC3q2INmGrBHf3d4HaEOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVR4nBXIRxKAMAwAsU21HUronf9/k0FHgX8DNhiqT7wLlQjHbnMhcl6bjAFVty4igHcTfQeQJeV/SNI28AFZbgIkhpCPDwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8};let O=()=>(0,a.jsxs)(r(),{href:"/",className:"logo d-flex align-items-center",children:[(0,a.jsx)(n(),{src:H,className:"logo__img",alt:""}),(0,a.jsxs)("span",{className:"logo__text",children:[(0,a.jsx)("span",{className:"logo__text-colored",children:"Exa"}),"Lotto"]})]}),Z=()=>(0,a.jsxs)("div",{className:"main-section d-flex justify-content-between flex-column flex-md-row",children:[(0,a.jsx)(b,{}),(0,a.jsx)(M,{})]}),J=()=>(0,a.jsx)("div",{className:"header-out",children:(0,a.jsxs)(c.Z,{children:[(0,a.jsxs)("div",{className:"header d-flex justify-content-between align-items-start",children:[(0,a.jsx)(O,{}),(0,a.jsx)(R,{}),(0,a.jsx)(U,{}),(0,a.jsx)(d.NL,{})]}),(0,a.jsx)(Z,{})]})}),Q=()=>(0,a.jsx)("div",{className:"header-out header-out--article",children:(0,a.jsx)(c.Z,{children:(0,a.jsxs)("div",{className:"header d-flex justify-content-between align-items-start",children:[(0,a.jsx)(O,{}),(0,a.jsx)(R,{}),(0,a.jsx)(U,{}),(0,a.jsx)(d.NL,{})]})})})},5788:function(e,t,s){s.d(t,{t:function(){return x}});var a=s(5893),l=s(2400),n=s(7294),i=s(1664),r=s.n(i),c=s(7041);let d="privacyPolicyAccepted",o={maxAge:2592e3},m=()=>{let[e,t]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{let e=!!(0,c.getCookie)(d,o);t(!0!==e)},[]),e)?(0,a.jsxs)("div",{style:{padding:"1em",position:"fixed",width:"100%",left:0,right:0,bottom:0,backgroundColor:"rgba(0.03, 0.03, 0.03, 0.7)",textAlign:"right",color:"white",fontWeight:600},children:["This website uses cookies to improve the navigation experience. Please read our ",(0,a.jsx)(r(),{href:"/legal",children:"privacy policy"}),". ",(0,a.jsx)("button",{onClick:()=>{(0,c.setCookie)(d,!0,o),t(!1)},children:"Accept"})]}):null};var u=s(281);let x=e=>{let{children:t}=e;return(0,a.jsx)("div",{className:"main-body",children:(0,a.jsxs)(u.F0,{children:[t,(0,a.jsx)(l.xY,{}),(0,a.jsx)(u.Ed,{}),(0,a.jsx)(m,{})]})})}},9766:function(e,t,s){s.d(t,{RN:function(){return n},TI:function(){return i},Tj:function(){return a},dp:function(){return r},w6:function(){return l}});let a=[1,7,28,84,210,462,924,1716,3003,5005,8008,12376,18564,27132,38760];function l(e){return Array.from({length:e},(e,t)=>t)}function n(e,t){return function e(t,s){return s>t?BigInt(0):BigInt(0)===s?BigInt(1):s*BigInt(2)>t?e(t,t-s):t*e(t-BigInt(1),s-BigInt(1))/s}(BigInt(e),BigInt(t))}function i(e,t){return Number(e/t)+Number(e%t)/Number(t)}function r(e,t){let s=e.utils.toBN(t),a=e.utils.toBN("1000000000000000000"),l=s.div(a),n=s.mod(a);return l.toString(10)+"."+n.toString(10,18)}}}]);