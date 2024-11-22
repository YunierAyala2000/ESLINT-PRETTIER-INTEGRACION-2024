
# CONFIGURACION Y INSTALACCION DE ESLINT Y PRETTIER 2024 

Aqui tendras el paso a paso a realizar para llevar acabo la instalacion y aplicacion del correcto funcionamiento en tu proyecto


## Installation

Instalacion de dependencias:  ESLINT Y PRETTIER 

```bash
  Instalaremos ESLINT Ejecutando los siguientes comandos:

  npm init @eslint/config@latest

  Instalaremos PRETTIER y los necesario para trabajar con Eslint Ejecutando los siguientes comandos:

  npm install --save-dev --save-exact prettier

  node --eval "fs.writeFileSync('.prettierrc','{}\n')"

  node --eval "fs.writeFileSync('.prettierignore','# Ignore  artifacts:\nbuild\ncoverage\n')"

  LUEGO DE QUE SE INSTALEN Y SE HALLAN CREADO LOS ARCHIVOS:
  .prettierignore
  .prettierrc

  EJECUTAMOS EL SIGUIENTE COMANDO:
  
  npm i -D eslint-plugin-prettier eslint-config-prettier

  
```

CONFIGURACION ARCHIVOS:

```javascript
EN ESTE ARCHIVO ESPECIFICAMOS LAS CARPETAS O ARCHIVOS 
A LOS CUALES NO SE LE REALIZARA EL FORMATEO

.prettierignore
 {
    # Ignore artifacts:
    build
    coverage
    node_modules
 }

================================================================

EN ESTE DEFINIMOS EL FORMATO DE FORMATEO 
 
PUEDE GUIARSE DE ESTA PAGINA: https://prettier.io/playground/

.prettierrc
{
    "arrowParens": "always",
    "bracketSameLine": false,
    "bracketSpacing": true,
    "semi": true,
    "experimentalTernaries": false,
    "singleQuote": true,
    "jsxSingleQuote": false,
    "quoteProps": "as-needed",
    "trailingComma": "all",
    "singleAttributePerLine": true,
    "htmlWhitespaceSensitivity": "css",
    "vueIndentScriptAndStyle": false,
    "proseWrap": "never",
    "insertPragma": false,
    "printWidth": 150,
    "requirePragma": false,
    "tabWidth": 2,
    "useTabs": true,
    "embeddedLanguageFormatting": "auto"
}

=================================================================================

CREAMOS UN ARCHIVO EN LA CARPETA RAIZ DEL PROYECTO PARA ESLINT LLAMADO: 
eslint.config.mjs


import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
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

================================================================================

EN EL ARCHIVO => package.json AGREGAMOS A 
"scripts": {
    "lint": "eslint",
    "lint:fix": "eslint --fix"
  },

==============================================================================
```
POR ULTIMO PASO CREAMOS UNA CARPETA LLAMADA:

.vscode Y CREAMOS UN ARCHIVO LLAMADO:

```bash
settings.json{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    }
}
```

================================================================================
## Enlaces de ayuda

[- Eslint Rules O Reglas](https://eslint.org/docs/latest/rules/#suggestions)
[- Prettier Documentacion ](https://prettier.io/)
