(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[824],{1568:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tickets",function(){return t(5042)}])},9312:function(e,s,t){"use strict";t.d(s,{N:function(){return r}});var a=t(5893);let r=e=>{let{title:s}=e;return(0,a.jsx)("div",{className:"past-draws__title-out d-none d-lg-flex justify-content-center",children:(0,a.jsxs)("div",{className:"past-draws__title",children:[s,(0,a.jsx)("span",{className:"past-draws__title-line past-draws__title-line--left",children:(0,a.jsx)("span",{})}),(0,a.jsx)("span",{className:"past-draws__title-line past-draws__title-line--right",children:(0,a.jsx)("span",{})})]})})}},5042:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return j}});var a=t(5893),r=t(3051),n=t(5788),l=t(7294),i=t(4103);function c(e){return("0"+e).slice(-2)}let d=e=>{let{date:s,children:t,onDetails:r}=e;return(0,a.jsx)("div",{className:"draws__item",children:(0,a.jsxs)("div",{className:"draws__frame",children:[(0,a.jsxs)("div",{className:"draws__date",children:[c(s.getDate()),".",c(s.getMonth()+1),".",c(s.getFullYear())]}),(0,a.jsxs)("div",{className:"draws__main-shadow",children:[(0,a.jsx)("div",{className:"draws__main",children:t}),r?(0,a.jsx)("div",{className:"draws__buttons",children:(0,a.jsxs)("button",{className:"btn btn-details",onClick:r,children:[(0,a.jsx)("span",{className:"btn-details__text",children:"More Details"}),(0,a.jsx)("span",{className:"btn-details__shadow"})]})}):null]})]})})};d.Jackpot=e=>{let{jackpot:s}=e;return(0,a.jsx)("div",{className:"draws__jackpot",children:(0,a.jsxs)("div",{className:"draws__jackpot-frame",children:[(0,a.jsx)("div",{className:"draws__jackpot-title",children:"Jackpot"}),(0,a.jsx)("div",{className:"draws__jackpot-container",children:(0,a.jsxs)("div",{className:"draws__jackpot-number",children:[Math.floor(100*s)/100," ","MATIC"]})})]})})},d.Numbers=e=>{let{title:s,numbers:t,highlightedNumbers:r}=e;return(0,a.jsx)("div",{className:"my-numbers__out",children:(0,a.jsxs)("div",{className:"my-numbers",children:[(0,a.jsx)("div",{className:"my-numbers__title",children:s}),(0,a.jsx)("div",{className:"my-numbers__body",children:t.map((e,s)=>{let t=null==r?void 0:r.includes(e);return(0,a.jsx)("div",{className:"my-numbers__item"+(t?" my-numbers__item--selected":""),children:(0,a.jsx)("span",{className:"my-numbers__text",children:e})},s)})})]})})},d.Numbers.defaultProps={highlightedNumbers:[]},d.NoWin=()=>(0,a.jsx)("div",{className:"prize prize--empty",children:(0,a.jsx)("span",{className:"prize__text",children:"No Win!"})}),d.Prize=()=>(0,a.jsx)("div",{className:"prize",children:(0,a.jsx)("div",{className:"prize__title",children:"You Won!"})});var u=t(4733),m=t(9312);let _=e=>{let{ticket:s}=e;if(!s.draw)return null;let t=s.draw.numbers.map(e=>s.numbers.includes(e)).reduce((e,s)=>s+(e?1:0),0);return t>1?(0,a.jsx)(d.Prize,{}):(0,a.jsx)(d.NoWin,{})},o=e=>{let{lottery:s,account:t}=e,[r,n]=(0,l.useState)([]);return(0,l.useEffect)(()=>{(async()=>{let e=(await s.getTicketIds(t)).sort((e,s)=>s-e);n(await Promise.all(e.map(e=>s.getTicket(e))))})()},[t,s]),(0,a.jsx)("section",{className:"draws d-flex justify-content-start align-items-center flex-column flex-lg-row align-items-lg-start",children:r.map((e,s)=>{var t;return(0,a.jsxs)(d,{date:e.date,children:[e.draw?(0,a.jsx)(d.Numbers,{title:"Drawn Numbers",numbers:e.draw.numbers,highlightedNumbers:e.numbers}):null,(0,a.jsx)(d.Numbers,{title:"Your Numbers",numbers:e.numbers,highlightedNumbers:null===(t=e.draw)||void 0===t?void 0:t.numbers}),(0,a.jsx)(_,{ticket:e})]},s)})})},h=()=>{let{account:e}=(0,i.Ge)();return(0,a.jsx)("section",{className:"past-draws",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)(m.N,{title:"My Tickets"}),e?(0,a.jsx)(u.r.Consumer,{children:s=>(0,a.jsx)(o,{lottery:s,account:e})}):(0,a.jsx)("article",{children:(0,a.jsx)("p",{className:"past-draws__descr",children:"Please connect your wallet."})})]})})};function j(){return(0,a.jsxs)(n.t,{children:[(0,a.jsx)(r.h,{}),(0,a.jsx)(h,{})]})}}},function(e){e.O(0,[509,328,774,888,179],function(){return e(e.s=1568)}),_N_E=e.O()}]);