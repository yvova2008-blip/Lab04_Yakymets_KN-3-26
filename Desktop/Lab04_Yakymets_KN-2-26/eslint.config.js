import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import globals from "globals";

export default [
	{
		ignores: ["node_modules/**", "legacy/**", "reports/**"],
	},
	js.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				...globals.node,
			},
		},
		rules: {
			yoda: "warn",
			complexity: ["error", 6],
			"no-implicit-coercion": "error",
			"id-length": ["warn", {min: 2, exceptions: ["i", "j", "_"]}],
			"no-var": "warn",
			"guard-for-in": "error",
		},
	},
	eslintConfigPrettier,
];