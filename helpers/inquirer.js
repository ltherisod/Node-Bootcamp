const inquirer = require('inquirer')
require('colors')
const preguntas = [
    {
        type:'list',
        name:'option',
        message:'¿Qué desea hacer?',
        choices:[
            {
                value:'1',
                name:`${'1.'.red} Crear tarea`
            },
            {
                value:'2',
                name:`${'2.'.red} Lista tareas`
            },
            {
                value:'3',
                name:`${'3.'.red} Lista tareas completadas`
            },
            {
                value:'4',
                name:`${'4.'.red} Lista tareas pendientes`
            },
            {
                value:'5',
                name:`${'5.'.red} Completar tarea(s)`
            },
            {
                value:'6',
                name:`${'6.'.red} Borrar tarea`
            },
            {
                value:'0',
                name:`${'0.'.red} Salir`
            },

        ]
    }
];
const inquirerMenu = async() =>{
    console.clear();
    console.log('========================'.red)
    console.log('Seleccione una opcion'.rainbow)
    console.log('========================\n'.red)

    const {option} = await inquirer.prompt(preguntas);
    return option
}

const pausa = async () =>{
    const question = [
        {
            type:'input',
            name:'enter',
            message:`Presione ${'ENTER'.red} para continuar`
        }
    ]
    console.log('\n')
    await inquirer.prompt(question);
}
const leerInput = async (message) =>{
    const question = [
        {
            type:'input',
            name:'desc',
            message,
            validate ( value ){
                if(value.length === 0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];
   
    const {desc} = await inquirer.prompt(question);
    return desc;
}

const listadoTareasBorrar = async(tareas = [])=>{
    const choices = tareas.map((tarea, i )=> {
        const idx = `${i + 1}.`.red
        return{
            value:tarea.id,
            name:`${idx} ${tarea.desc}`
            }
    });
    choices.unshift({
        value:'0',
        name:'0.'.red + ' Cancelar'
    })
    const preguntas = [
        {
            type:'list',
            name:'id',
            message:'Borrar',
            choices
        }
    ]
    const {id} = await inquirer.prompt(preguntas);
    return id
    
}
const mostrarListadoChecklist = async(tareas = [])=>{
    const choices = tareas.map((tarea, i )=> {
        const idx = `${i + 1}.`.red
        return{
            value:tarea.id,
            name:`${idx} ${tarea.desc}`,
            checked:(tarea.completadoEn) ? true : false
            }
    });
   
    const pregunta = [
        {
            type:'checkbox',
            name:'ids',
            message:'Seleccione',
            choices
        }
    ]
    const {ids} = await inquirer.prompt(pregunta);
    return ids
    
}
const confirmar = async (message) =>{
    const question = [
        {
            tyoe:'confirm',
            name:'ok',
            message
        }
    ]
    const {ok} = await inquirer.prompt(question);
    return ok
}


module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar, 
    mostrarListadoChecklist
}