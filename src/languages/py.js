export default [
	{
		match: /#.*/g,
		type: 'cmnt'
	},
	{
		match: /f("|')(\\[^]|(?!\1).)*\1?|f((["'])\4\4)(\\[^]|(?!\3)[^])*\3?/gi,
		type: 'str',
		sub: [
			{
				match: /{[^{}]*}/g,
				sub: [
					{
						match: /(?!^{)[^]*(?=}$)/g,
						sub: 'py'
					}
				],
				type: 'var'
			}
		]
	},
	{
		match: /("""|''')(\\[^]|(?!\1)[^])*\1?/g,
		type: 'str'
	},
	{
		expand: 'str'
	},
	{
		match: /\b(and|as|assert|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/g,
		type: 'kwd'
	},
	{
		match: /\b(False|True|None)\b/g,
		type: 'bool'
	},
	{
		expand: 'num'
	},
	{
		match: /[a-z_]+(?=\s*\()/g,
		type: 'func'
	},
	{
		match: /[-/*+<>,=!&|^%]+/g,
		type: 'oper'
	},
  {
    match: /\b[A-Z]\w*\b/g,
    type: 'class',
  }
]