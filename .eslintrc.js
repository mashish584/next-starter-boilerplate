/* eslint-disable */

module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: "module",
	},
	plugins: ["react", "eslint-plugin-import"],
	rules: {
		quotes: [2, "double", { avoidEscape: true }],
		indent: [2, "tab", { SwitchCase: 1, VariableDeclarator: 1 }],
		semi: ["error", "always"],
		"linebreak-style": ["error", "unix"],
		"no-unused-vars": ["error", { vars: "all", args: "none" }],
		"import/order": 2,
		"no-tabs": 0,
		"no-useless-constructor": "error",
		"no-undefined": "error",
		"react/prop-types": 0,
	},
};
