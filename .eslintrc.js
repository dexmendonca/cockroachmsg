module.exports = {
	env: {
		es2021: true,
		node: true
	},
	extends: [
		'standard'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 13,
		sourceType: 'module'
	},
	plugins: [
		'@typescript-eslint'
	],
	rules: {
		semi: [2, 'always', { omitLastInOneLineBlock: false }],
		indent: ['error', 'tab'],
		'no-tabs': 'off'
	}
};
