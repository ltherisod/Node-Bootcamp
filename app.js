const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
 require('colors')
//limpiar la consola
console.clear()
//no recomendada, sin validaciones
// const [ , , arg3='base=7'] = process.argv;
// const [ , base = 7] = arg3.split('=')

crearArchivo(argv.b, argv.l, argv.h)
.then(base => console.log(base.rainbow))
.catch((error)=> console.log(error))
