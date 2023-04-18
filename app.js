
const {leerInput, inquirerMenu, pausa} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');
require('colors')

const main = async() =>{
    const busquedas = new Busquedas()
    
   let opt;
   do {
    opt = await inquirerMenu()
    switch (opt) {
        case 1:
            //Mostrar mensaje
            const lugar = await leerInput('Ciudad:')
            console.log(lugar)
            //Buscar los lugares

            //seleccionar el lugar

            //Clima

            //Mostrar resultados

            console.log('\nInformacion de la ciudad\n'.red)
            console.log('Ciudad: ')
            console.log('Lat: ')
            console.log('Lng: ')
            console.log('Temp: ')
            console.log('Mín: ')
            console.log('Máx: ')
            
        break;
    
        
    }

    if(opt !== 0) await pausa()
    
   } while (opt !== 0);
}
main();