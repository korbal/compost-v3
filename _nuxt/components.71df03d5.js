import{A as d,j as o,B as c,C as p,D as g,E as f,G as S,H as v,I as m,J as s}from"./entry.21c95ac4.js";function h(r,t={}){const e=t.head||d();if(e)return e.ssr?e.push(r,t):y(e,r,t)}function y(r,t,e={}){const n=o(!1),a=o({});c(()=>{a.value=n.value?{}:m(t)});const i=r.push(a.value,e);return p(a,u=>{i.patch(u)}),v()&&(g(()=>{i.dispose()}),f(()=>{n.value=!0}),S(()=>{n.value=!1})),i}const b=r=>Object.fromEntries(Object.entries(r).filter(([,t])=>t!==void 0)),l=(r,t)=>(e,n)=>(h(()=>r({...b(e),...n.attrs},n)),()=>{var a,i;return t?(i=(a=n.slots).default)==null?void 0:i.call(a):null}),B={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},A=s({name:"Title",inheritAttrs:!1,setup:l((r,{slots:t})=>{var e,n,a;return{title:((a=(n=(e=t.default)==null?void 0:e.call(t))==null?void 0:n[0])==null?void 0:a.children)||null}})}),j=s({name:"Meta",inheritAttrs:!1,props:{...B,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:l(r=>{const t={...r};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})}),q=s({name:"Head",inheritAttrs:!1,setup:(r,t)=>()=>{var e,n;return(n=(e=t.slots).default)==null?void 0:n.call(e)}});export{q as H,j as M,A as T,h as u};
