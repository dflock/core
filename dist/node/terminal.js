var L=Object.create;var m=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var z=Object.getOwnPropertyNames;var D=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty;var g=(t,e)=>()=>(t&&(e=t(t=0)),e);var y=(t,e)=>{for(var n in e)m(t,n,{get:e[n],enumerable:!0})},b=(t,e,n,p)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of z(e))!E.call(t,a)&&a!==n&&m(t,a,{get:()=>e[a],enumerable:!(p=T(e,a))||p.enumerable});return t};var o=(t,e,n)=>(n=t!=null?L(D(t)):{},b(e||!t||!t.__esModule?m(n,"default",{value:t,enumerable:!0}):n,t)),N=t=>b(m({},"__esModule",{value:!0}),t);var r,$=g(()=>{r={black:"\x1B[30m",red:"\x1B[31m",green:"\x1B[32m",gray:"\x1B[90m",yellow:"\x1B[33m",blue:"\x1B[34m",magenta:"\x1B[35m",cyan:"\x1B[36m",white:"\x1B[37m"}});var j={};y(j,{default:()=>C});var C,v=g(()=>{$();C={deleted:r.red,var:r.red,err:r.red,kwd:r.red,num:r.yellow,class:r.yellow,cmnt:r.gray,insert:r.green,str:r.green,bool:r.cyan,type:r.blue,oper:r.blue,section:r.magenta,func:r.magenta}});var S={};y(S,{highlightText:()=>I,printHighlight:()=>H,setTheme:()=>M});module.exports=N(S);var w={num:{type:"num",match:/(\.e?|\b)\d(e-|[\d.oxa-fA-F_])*(\.|\b)/g},str:{type:"str",match:/(["'])(\\[^]|(?!\1)[^\r\n\\])*\1?/g},strDouble:{type:"str",match:/"((?!")[^\r\n\\]|\\[^])*"?/g}};var u={};async function f(t,e,n){var p;try{let a,s,i={},d,l=[],c=0,x=typeof e=="string"?await((p=u[e])!=null?p:u[e]=Promise.resolve().then(()=>o(require(`./languages/${e}.js`)))):e,h=[...typeof e=="string"?x.default:e.sub];for(;c<t.length;){for(i.index=null,a=h.length;a-- >0;){if(s=h[a].expand?w[h[a].expand]:h[a],l[a]===void 0||l[a].match.index<c){if(s.match.lastIndex=c,d=s.match.exec(t),d===null){h.splice(a,1),l.splice(a,1);continue}l[a]={match:d,lastIndex:s.match.lastIndex}}l[a].match[0]&&(l[a].match.index<=i.index||i.index===null)&&(i={part:s,index:l[a].match.index,match:l[a].match[0],end:l[a].lastIndex})}if(i.index===null)break;n(t.slice(c,i.index),x.type),c=i.end,i.part.sub?await f(i.match,typeof i.part.sub=="string"?i.part.sub:typeof i.part.sub=="function"?i.part.sub(i.match):i.part,n):n(i.match,i.part.type)}n(t.slice(c,t.length),x.type)}catch{n(t)}}var A=Promise.resolve().then(()=>(v(),j)),I=async(t,e)=>{let n="",p=(await A).default;return await f(t,e,(a,s)=>{var i;return n+=s?`${(i=p[s])!=null?i:""}${a}\x1B[0m`:a}),n},H=async(t,e)=>console.log(await I(t,e)),M=async t=>A=Promise.resolve().then(()=>o(require(`./themes/${t}.js`)));0&&(module.exports={highlightText,printHighlight,setTheme});
