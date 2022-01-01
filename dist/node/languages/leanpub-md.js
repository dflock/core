var m=Object.defineProperty;var c=e=>m(e,"__esModule",{value:!0});var i=(e,a)=>{c(e);for(var t in a)m(e,t,{get:a[t],enumerable:!0})};i(exports,{default:()=>u});var b=[["bash",[/#!(\/usr)?\/bin\/bash/g,500],[/\b(if|elif|then|fi|echo)\b|\$/g,10]],["html",[/<\/?[a-z-]+[^\n>]*>/g,10],[/^\s+<!DOCTYPE\s+html/g,500]],["http",[/^(GET|HEAD|POST|PUT|DELETE|PATCH|HTTP)\b/g,500]],["js",[/\b(console|await|async|function|export|import|this|class|for|let|const|map|join|require)\b/g,10]],["ts",[/\b(console|await|async|function|export|import|this|class|for|let|const|map|join|require|implements|interface|namespace)\b/g,10]],["py",[/\b(def|print|class|and|or|lambda)\b/g,10]],["sql",[/\b(SELECT|INSERT|FROM)\b/g,50]],["pl",[/#!(\/usr)?\/bin\/perl/g,500],[/\b(use|print)\b|\$/g,10]],["lua",[/#!(\/usr)?\/bin\/lua/g,500]],["make",[/\b(ifneq|endif|if|elif|then|fi|echo|.PHONY|^[a-z]+ ?:$)\b|\$/gm,10]],["uri",[/https?:|mailto:|tel:|ftp:/g,30]],["css",[/^(@import|@page|@media|(\.|#)[a-z]+)/gm,20]],["diff",[/^[+><-]/gm,10],[/^@@ ?[-+,0-9 ]+ ?@@/gm,25]],["md",[/^(>|\t\*|\t\d+.)/gm,10],[/\[.*\](.*)/g,10]],["docker",[/^(FROM|ENTRYPOINT|RUN)/gm,500]],["xml",[/<\/?[a-z-]+[^\n>]*>/g,10],[/^<\?xml/g,500]],["c",[/#include\b|\bprintf\s+\(/g,100]],["rs",[/^\s+(use|fn|mut|match)\b/gm,100]],["go",[/\b(func|fmt|package)\b/g,100]],["java",[/^import\s+java/gm,500]],["asm",[/^(section|global main|extern|\t(call|mov|ret))/gm,100]]],n=e=>{var a;return((a=b.map(([t,...s])=>[s.reduce((g,[r,p])=>g+[...e.matchAll(r)].length*p,0),t]).filter(([t,s])=>t>10).sort((t,s)=>s[0]-t[0])[0])==null?void 0:a[1])||"plain"};var l=[{type:"cmnt",match:/^>.*|(=|-)\1+/gm},{type:"class",match:/\*\*((?!\*\*).)*\*\*/g},{match:/```((?!```)[^])*\n```/g,sub:e=>({type:"kwd",sub:[{match:/\n[^]*(?=```)/g,sub:e.split(`
`)[0].slice(3)||n(e)}]})},{type:"str",match:/`[^`]*`/g},{type:"var",match:/~~((?!~~).)*~~/g},{type:"kwd",match:/_[^_]*_|\*[^*]*\*/g},{type:"kwd",match:/^\s*(\*|\d+\.)\s/gm},{type:"oper",match:/\[[^\]]*]/g},{type:"func",match:/\([^)]*\)/g}];var u=[{type:"insert",match:/(leanpub-start-insert)((?!leanpub-end-insert)[^])*(leanpub-end-insert)?/g,sub:[{type:"insert",match:/leanpub-(start|end)-insert/g},{match:/(?!leanpub-start-insert)((?!leanpub-end-insert)[^])*/g,sub:n}]},{type:"deleted",match:/(leanpub-start-delete)((?!leanpub-end-delete)[^])*(leanpub-end-delete)?/g,sub:[{type:"deleted",match:/leanpub-(start|end)-delete/g},{match:/(?!leanpub-start-delete)((?!leanpub-end-delete)[^])*/g,sub:n}]},...l];0&&(module.exports={});