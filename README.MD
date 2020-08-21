# Pasos para iniciar nuestro proyecto:

## Paso 1:

Vamos a instalar webpack y webpack-cli como dependencias de desarrollo con:

```bash
npm i webpack wepack-cli --save-dev.
```

## Paso 2:

Crearemos una carpeta llama src y dentro de ella un archivo index.js en el cual colocaremos solo un

```js
console.log('Empezamos el curso!').
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
