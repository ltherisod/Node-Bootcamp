const axios = require('axios')
class Busquedas{
    historial = ['Buenos Aires', 'Calafate', 'Rada Tilly']

    constructor(){
        //Leer la DB
    }
    get paramsMapbox(){
        return{
            'access_token':process.env.MAPBOX_KEY,
            'limit':5,
            'language':'es'
        }
    }

    async ciudad(lugar = ''){
        //peticion http
        try {
            const instance = axios.create({
                baseURL:`http://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params:this.paramsMapbox
            })
            const resp = await instance.get()
            console.log(resp.data)
        } catch (error) {
    
            console.log(error)
        }
        console.log('ciudad',lugar)

        return []; //retornar lugares que coinciden con la busqueda
    }

}

module.exports=Busquedas;