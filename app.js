const { guardarDB, leerDB } = require('./helpers/guardarArchivo')
const {inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist} = require('./helpers/inquirer')
require('colors')
const Tareas = require('./models/tareas')
const main = async() =>{
    let option = ''
    const tareas = new Tareas();
    const tareasDB = leerDB();
    if(tareasDB){
        //esto es si existen las tareas.
        tareas.cargarTareasFromArray(tareasDB)
    }
   
    do {
        //imprimir menu
        option = await inquirerMenu();
        switch (option) {
            case '1':
                //crear option
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea(desc);
            break;

            case '2':
                //listado de todas
               tareas.listadoCompleto()
            break;
            case '3'://listar completadas
               tareas.listadoPendientesCompletadas(true)
            break;
            case '4'://listar pendientes
                tareas.listadoPendientesCompletadas(false)
             break;
             case '5'://completo | pendiente
                const ids = await mostrarListadoChecklist(tareas.listadoArr)
                tareas.toggleCompletadas(ids)
             break;
             case '6'://borrar tareas
             const id = await listadoTareasBorrar(tareas.listadoArr)
            if(id !== '0'){
                const confirm = await confirmar('¿Estas seguro?')
                if(confirm){
                   tareas.borrarTarea(id)
                   console.log('Tarea borrada')
                }
            }
            
           
          break;
             
        }

         guardarDB(tareas.listadoArr)
        
         await pausa()
    } while (option !== '0');
 
    // pausa()
}
main();