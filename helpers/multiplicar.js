const fs = require('fs');
const crearArchivo = (base = 1, listar=false, hasta=10) =>{
    return new Promise ((resolve)=>{
        let salida='';
        for(let i=1; i <=hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if(listar)console.log(salida);
        
        fs.writeFileSync(`./txt/tabla-${base}.txt`, salida)
        
        resolve(`tabla-${base}.txt done`)
    })
   
}

module.exports = {
    crearArchivo
}