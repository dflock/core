"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../detect.js"),e=[{type:"cmnt",match:/^>.*|(=|-)\1+/gm},{type:"class",match:/\*\*((?!\*\*).)*\*\*/g},{match:/```((?!```)[^])*\n```/g,sub:e=>({type:"kwd",sub:[{match:/\n[^]*(?=```)/g,sub:e.split("\n")[0].slice(3)||t.detectLanguage(e)}]})},{type:"str",match:/`[^`]*`/g},{type:"var",match:/~~((?!~~).)*~~/g},{type:"kwd",match:/_[^_]*_|\*[^*]*\*/g},{type:"kwd",match:/^\s*(\*|\d+\.)\s/gm},{type:"oper",match:/\[[^\]]*]/g},{type:"func",match:/\([^)]*\)/g}];exports.default=e;