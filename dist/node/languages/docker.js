var l=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var r=Object.getOwnPropertyNames;var n=Object.prototype.hasOwnProperty;var d=(t,e)=>{for(var s in e)l(t,s,{get:e[s],enumerable:!0})},m=(t,e,s,p)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of r(e))!n.call(t,a)&&a!==s&&l(t,a,{get:()=>e[a],enumerable:!(p=c(e,a))||p.enumerable});return t};var h=t=>m(l({},"__esModule",{value:!0}),t);var b={};d(b,{default:()=>u});module.exports=h(b);var o={type:"var",match:/\$\w+|\${[^}]*}|\$\([^)]*\)/g},i=[{sub:"todo",match:/#.*/g},{type:"str",match:/(["'])((?!\1)[^\r\n\\]|\\[^])*\1?/g,sub:[o]},{type:"kwd",match:/-[a-zA-Z]+|$<|[&|;]+|\b(unset|readonly|shift|export|if|fi|else|elif|while|do|done|for|until|case|esac|break|continue|exit|return|trap|wait|eval|exec|then|declare|enable|local|select|typeset|time|add|remove|install|update|delete)\b/g},{expand:"num"},{type:"func",match:/\b(set|alias|bg|bind|builtin|caller|command|compgen|complete|dirs|disown|echo|enable|eval|exec|exit|fc|fg|getopts|hash|help|history|jobs|kill|let|logout|popd|printf|pushd|pwd|read|set|shift|shopt|source|suspend|test|times|trap|type|ulimit|umask|unalias|unset)\b/g},{type:"bool",match:/\b(true|false)\b/g},{type:"func",match:/[a-z_]+(?=\s*\()/g},{type:"oper",match:/[=(){}<>+*/!?~^-]+/g},{type:"var",match:/\w+(?=\s*=)/g},o];var u=[{type:"kwd",match:/^(FROM|RUN|CMD|LABEL|MAINTAINER|EXPOSE|ENV|ADD|COPY|ENTRYPOINT|VOLUME|USER|WORKDIR|ARG|ONBUILD|STOPSIGNAL|HEALTHCHECK|SHELL)\b/gmi},...i];0&&(module.exports={});
