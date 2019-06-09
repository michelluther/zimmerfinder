// module.exports = {	
// 	root: true,
// 	plugins: [
// 		'prettier'
// 	],
// 	extends: [
// 		'airbnb',
// 		'prettier',
// 		'ui5',
// 	],
// 	rules: {
// 		'prettier/prettier' : [
//       'error',
// 			{
//         singleQuote: true,
//         semi: false
// 			}
// 		],
		// semi: 'error',
		// 'linebreak-style': 'off',
		// 'ui5/hungarian-notation': 'off',
		// 'ui5/no-global-name': 'off',
		// quotes: [
		// 	'error',
		// 	'single'
		// ],
		// 'func-style': 'off',
		// 'no-warning-comments': [
		// 	'error',
		// 	{
		// 		terms: [
		// 			'fixme'
		// 		],
		// 		location: 'anywhere'
		// 	}
		// ]
// 	},
// 	parserOptions: {
//    	 	parser: 'babel-eslint'
//   	},
// 	globals: {
// 		sap: true,
// 		$: true,
// 		jQuery: true,
// 		_: true,
// 		moment: true,
// 		require: true,
// 		__dirname: true,
// 		QUnit: true,
// 		process: true,
// 		Buffer: true
// 	}
// }
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // semi: 'error',
    // 'prettier/prettier': 'error'
    'no-warning-comments': [
        'error',
        {
          terms: [
            'fixme'
          ],
          location: 'anywhere'
        }
    ],  
    'prettier/prettier': [
      'error',
      { 
        printWidth: 120,
        jsxBracketSameLine: true,
        singleQuote: true,
        semi: true
      }
    ],
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['prettier'],
  	globals: {
		sap: true,
		$: true,
		jQuery: true,
		_: true,
		moment: true,
		require: true,
		__dirname: true,
		QUnit: true,
		process: true,
		Buffer: true
	}
}
