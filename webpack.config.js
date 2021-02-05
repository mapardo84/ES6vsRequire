let MODE = "production";
let WATCH = false;
if(process.env.ENVIRONMENT === "development"){
   MODE = "development";
   WATCH = true;
}
module.exports = {
    entry: './src/index.js', // el punto de arranque de nuestro programa
    output: {
      path: __dirname + '/dist', // el path absoluto para el directorio donde queremos que el output sea colocado
      filename: 'main.js' // el nombre del archivo que va a contener nuestro output - podemos nombrarlo como queramos pero bundle.js es lo típico
    },
    mode: MODE,
    watch: WATCH,
  }