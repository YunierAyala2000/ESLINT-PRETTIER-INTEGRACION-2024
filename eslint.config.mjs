// import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

// import someConfig from "some-other-config-you-use";
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import eslintConfigPrettier from "eslint-config-prettier";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {
    languageOptions: {
        parserOptions: {
            ecmaFeatures: {
                jsx: true
            }
        }
    }
  }, 
{
   ignores: ['node_modules/', 'dist/', 'public/', 'build/'], // Ignora la carpetas
},
  pluginJs.configs.recommended,
  eslintPluginPrettier,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    // Configura la versión de React para el plugin
    settings: {
      react: {
        version: "detect", // Esto hace que ESLint detecte automáticamente la versión de React
      },
    },
  },
  {
    // EN ESTA SECCION DEFINIMOS LAS REGLAS MENSAJES QUE SEGUIRA NUESTRO CODIGO
    rules: {
      "@typescript-eslint/no-unused-vars": "warn", //muestra un mensaje cuando una varible esta declarada pero (NO SE ESTA USANDO)
      "prefer-const": "warn",  //muestra una variable tipo let esta duera de lugar
      "no-cond-assign": ["error", "always"], //No permitir operadores de asignación en expresiones condicionales
      "no-constant-binary-expression": "error", // No permitir expresiones donde la operación no afecte el valor
      "no-debugger": "warn", //No permitir el uso dedebugger
      "arrow-body-style": ["error", "always"], // Esta regla puede imponer o prohibir el uso de llaves alrededor del cuerpo de la función de flecha.
      
	    //Marca los problemas de formato como errores
			'prettier/prettier': [
				'error',
				{
					endOfLine: 'auto', // Respeta los saltos de línea del sistema operativo o del usuario
				},
			],
			'linebreak-style': 'off', // Ignora los estilos de salto de línea (Windows, Unix, etc.)

    }
  },
  eslintConfigPrettier
];
