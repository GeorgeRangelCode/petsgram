# Pasos para instalar webpack:

## Paso 1:

Vamos a instalar webpack y webpack-cli como dependencias de desarrollo con:

```bash
npm i webpack wepack-cli --save-dev.
```

## Paso 2:

Crearemos una carpeta llama src y dentro de ella un archivo index.js en el cual colocaremos solo un

```js
console.log('Empezamos!').
```

## Paso 3:

Crearemos en el root de nuestro proyecto un archivo webpack.config.js el cual tendrá toda la configuración de webpack

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    filename: "app.bundle.js",
  },
  plugins: [new HtmlWebpackPlugin()],
};
```

## Paso 4:

Instalaremos html-webpack-plugin con:

```bash
npm i html-webpack-plugin --save-dev
```

## Paso 5:

Instalaremos webpack-dev-server con:

```bash
npm i webpack-dev-server --save-dev
```

## Paso 6:

Añadiremos dos nuevos scripts in package.json llamados:

```json
"scripts": {
    "build": "webpack",
    "dev": "webpack-dev-server"
  }
```

# Instalación de React y Babel

Ahora vamos a configurar React instalando las dependencias

```bash
npm i react react-dom
```

Babel para poder transpilar código jsx a JavaScript Vanilla con:

```bash
npm i @babel/core @babel/preset-env babel-loader @babel/preset-react --save-dev
```

Ahora añadiremos en nuestro webpack.config.js lo siguiente:

```js
{/*...*/}
module.exports = {
  {/*...*/}
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
}
```
