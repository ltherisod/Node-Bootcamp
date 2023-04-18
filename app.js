require('dotenv').config()
const {leerInput, inquirerMenu, pausa, listarLugares} = require('./helpers/inquirer');
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
            //Buscar los lugares
            const lugares = await busquedas.ciudad(lugar)
            //Seleccionar el lugar
            const id = await listarLugares(lugares)
            if(id === '0')continue
            const lugarSeleccionado = lugares.find(lugar => lugar.id === id)
            //guardar DB 
            busquedas.agregarHistorial(lugarSeleccionado.nombre)
            //Clima
            const clima = await busquedas.climaLugar(lugarSeleccionado.lat,lugarSeleccionado.lng)
            //Mostrar resultados
            console.log('\nInformacion de la ciudad\n'.red)
            console.log('Ciudad: ', lugarSeleccionado.nombre.red)
            console.log('Lat: ', lugarSeleccionado.lat)
            console.log('Lng: ', lugarSeleccionado.lng)
            console.log('Temp: ',clima.temp)
            console.log('Mín: ',clima.min)
            console.log('Máx: ', clima.max)
            console.log('Como esta el clima: ', clima.desc.red)
            
        break;
        case 2:
            busquedas.historialCapitalizado.forEach((lugar,i)=>{
                const idx = `${i + 1}.`.red
                console.log(`${idx} ${lugar}`)
            })
        break;
    
        
    }

    if(opt !== 0) await pausa()
    
   } while (opt !== 0);
}
main();