(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{6725:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/partners",function(){return n(1050)}])},927:function(e,t,n){"use strict";n.d(t,{d:function(){return o}});var a=n(5893),i=n(1151),s=n(1664),p=n.n(s),y=n(682),u=n(3051),r=n(5788);let l={a:e=>{let{children:t,href:n,...i}=e;return/^[^/]+:/.test(n)?(0,a.jsx)("a",{href:n,...i,target:"_blank",rel:"noreferrer",children:t}):(0,a.jsx)(p(),{href:n,...i,children:t})}},o=e=>{let{meta:{date:t},children:n}=e;return(0,a.jsxs)(r.t,{children:[(0,a.jsx)(u.K,{}),(0,a.jsx)("section",{className:"article",children:(0,a.jsx)(y.Z,{children:(0,a.jsxs)("div",{className:"article__wrap d-flex justify-content-start align-items-start flex-column flex-lg-row",children:[(0,a.jsx)("aside",{className:"article__sidebar",children:(0,a.jsx)("div",{className:"article__date",children:t})}),(0,a.jsx)(i.Zo,{components:l,children:(0,a.jsx)("article",{className:"article__body text",children:n})})]})})})]})}},1050:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T},meta:function(){return m}});var a=n(5893),i=n(1151),s=n(7294),p=n(4103),y=JSON.parse('{"Mt":[{"inputs":[{"internalType":"contract LotteryToken","name":"_token","type":"address"},{"internalType":"contract Lottery","name":"_lottery","type":"address"},{"internalType":"address[]","name":"proposers","type":"address[]"},{"internalType":"address[]","name":"executors","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"CallExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"},{"indexed":false,"internalType":"bytes32","name":"predecessor","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"delay","type":"uint256"}],"name":"CallScheduled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"Cancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"oldDuration","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newDuration","type":"uint256"}],"name":"MinDelayChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"CANCELLER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EXECUTOR_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROPOSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TIMELOCK_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"canDraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"cancel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cancelFailedDrawing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"closeRound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"vrfSubscriptionId","type":"uint64"},{"internalType":"bytes32","name":"vrfKeyHash","type":"bytes32"}],"name":"draw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"payload","type":"bytes"},{"internalType":"bytes32","name":"predecessor","type":"bytes32"},{"internalType":"bytes32","name":"salt","type":"bytes32"}],"name":"execute","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"bytes[]","name":"payloads","type":"bytes[]"},{"internalType":"bytes32","name":"predecessor","type":"bytes32"},{"internalType":"bytes32","name":"salt","type":"bytes32"}],"name":"executeBatch","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getAccountRevenueRecord","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"uint256","name":"globalRevenue","type":"uint256"},{"internalType":"uint256","name":"accountRevenue","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMinDelay","outputs":[{"internalType":"uint256","name":"duration","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRevenueRecord","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"getTimestamp","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getUnclaimedRevenue","outputs":[{"internalType":"uint256","name":"revenue","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"bytes32","name":"predecessor","type":"bytes32"},{"internalType":"bytes32","name":"salt","type":"bytes32"}],"name":"hashOperation","outputs":[{"internalType":"bytes32","name":"hash","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"bytes[]","name":"payloads","type":"bytes[]"},{"internalType":"bytes32","name":"predecessor","type":"bytes32"},{"internalType":"bytes32","name":"salt","type":"bytes32"}],"name":"hashOperationBatch","outputs":[{"internalType":"bytes32","name":"hash","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"isOperation","outputs":[{"internalType":"bool","name":"registered","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"isOperationDone","outputs":[{"internalType":"bool","name":"done","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"isOperationPending","outputs":[{"internalType":"bool","name":"pending","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"isOperationReady","outputs":[{"internalType":"bool","name":"ready","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastWithdrawalBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lottery","outputs":[{"internalType":"contract Lottery","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numRevenueRecords","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC1155BatchReceived","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC1155Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"bytes32","name":"predecessor","type":"bytes32"},{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"schedule","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"targets","type":"address[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"},{"internalType":"bytes[]","name":"payloads","type":"bytes[]"},{"internalType":"bytes32","name":"predecessor","type":"bytes32"},{"internalType":"bytes32","name":"salt","type":"bytes32"},{"internalType":"uint256","name":"delay","type":"uint256"}],"name":"scheduleBatch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract LotteryToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newDelay","type":"uint256"}],"name":"updateDelay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"account","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]}'),u=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint32","name":"pos","type":"uint32"}],"name":"checkpoints","outputs":[{"components":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint224","name":"votes","type":"uint224"}],"internalType":"struct ERC20Votes.Checkpoint","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPastTotalDelegatedVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPastTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPastVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalDelegatedVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}'),r=n(9766);let l=e=>{let{context:{account:t,library:n},token:i,controller:p}=e,[y,u]=(0,s.useState)(!1),[l,o]=(0,s.useState)(null),[d,m]=(0,s.useState)(null);return((0,s.useEffect)(()=>{(async()=>{o(null),m(null);let e=n.utils.toBN(await i.methods.balanceOf(t).call());if(!e.cmp(n.utils.toBN(0))){u(!1);return}o(e),u(!0),m(n.utils.toBN(await p.methods.getUnclaimedRevenue(t).call()))})()},[t,p,i,n]),y)?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{children:"Account Status"}),(0,a.jsx)("p",{children:"Greetings, esteemed partner!"}),(0,a.jsxs)("p",{children:["You are connected as: ",(0,a.jsx)("a",{href:"https://".concat("polygonscan.com","/address/").concat(t),target:"_blank",rel:"noreferrer",children:t})]}),l?(0,a.jsxs)("p",{children:["Your ",(0,a.jsx)("code",{children:"EXL"})," balance is: ",(0,r.dp)(n,l)]}):null,d&&d.cmp(n.utils.toBN(0))?(0,a.jsxs)("p",{children:["You have unclaimed fees: ",(0,r.dp)(n,d)," ","MATIC"," – ",(0,a.jsx)("button",{onClick:async()=>{await p.methods.withdraw(t).send({from:t})},children:"withdraw"})]}):null]}):null},o=()=>{let e=(0,p.Ge)();if(!e.account)return null;{let t=e.library,n=new t.eth.Contract(u.Mt,"0x55d433Fbbe21e8A76f4435bfd36F30d87af331d7"),i=new t.eth.Contract(y.Mt,"0x079119A6A0e0239CC0B362742E27B05209ced18d");return(0,a.jsx)(l,{context:e,token:n,controller:i})}};var d=n(927);let m={title:"ExaLotto Partnership Program"},c=e=>{let{children:t}=e;return(0,a.jsx)(d.d,{meta:m,children:t})};function b(e){let t=Object.assign({h1:"h1",a:"a",span:"span",h2:"h2",p:"p",em:"em",code:"code",strong:"strong"},(0,i.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.h1,{id:"exalotto-partnership-program",children:[(0,a.jsx)(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#exalotto-partnership-program",children:(0,a.jsx)(t.span,{className:"icon icon-link"})}),"ExaLotto Partnership Program"]}),"\n",(0,a.jsx)(o,{}),"\n",(0,a.jsxs)(t.h2,{id:"overview",children:[(0,a.jsx)(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#overview",children:(0,a.jsx)(t.span,{className:"icon icon-link"})}),"Overview"]}),"\n",(0,a.jsx)(t.p,{children:"Anyone can make money with ExaLotto, and not just by winning!"}),"\n",(0,a.jsxs)(t.p,{children:["ExaLotto is managed as a DAO (",(0,a.jsx)(t.em,{children:'"Decentralized Autonomous Organization"'}),") and anyone can join. Voting\npower is measured in ",(0,a.jsx)(t.code,{children:"EXL"}),", an ",(0,a.jsx)(t.a,{href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-20/",children:"ERC20"})," token that you can ",(0,a.jsx)(t.a,{href:"https://app.uniswap.org/#/tokens/polygon/0x55d433fbbe21e8a76f4435bfd36f30d87af331d7",children:"trade on Uniswap"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"// TODO: link to Tally"}),"\n",(0,a.jsxs)(t.h2,{id:"referral-program",children:[(0,a.jsx)(t.a,{"aria-hidden":"true",tabIndex:"-1",href:"#referral-program",children:(0,a.jsx)(t.span,{className:"icon icon-link"})}),"Referral Program"]}),"\n",(0,a.jsxs)(t.p,{children:["Want to make even ",(0,a.jsx)(t.em,{children:"more"})," money with ExaLotto? We have launched a referral program allowing anyone to\nresell ExaLotto tickets and take a ",(0,a.jsx)(t.strong,{children:"generous 10% cut"})," on their sales!"]}),"\n",(0,a.jsx)(t.p,{children:"Joining the program is as easy as 1-2-3."}),"\n",(0,a.jsx)(t.p,{children:"// TODO: referral wizard"})]})}var T=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(c,Object.assign({},e,{children:(0,a.jsx)(b,e)}))}},1151:function(e,t,n){"use strict";n.d(t,{Zo:function(){return y},ah:function(){return s}});var a=n(7294);let i=a.createContext({});function s(e){let t=a.useContext(i);return a.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let p={};function y({components:e,children:t,disableParentContext:n}){let y;return y=n?"function"==typeof e?e({}):e||p:s(e),a.createElement(i.Provider,{value:y},t)}}},function(e){e.O(0,[509,328,774,888,179],function(){return e(e.s=6725)}),_N_E=e.O()}]);