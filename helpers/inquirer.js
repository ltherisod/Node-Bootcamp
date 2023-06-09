const inquirer = require('inquirer')
require('colors')
const preguntas = [
    {
        type:'list',
        name:'option',
        message:'¿Qué desea hacer?',
        choices:[
            {
                value:1,
                name:`${'1.'.red} Buscar ciudad`
            },
            {
                value:2,
                name:`${'2.'.red} Historial`
            },
            {
                value:0,
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

const listarLugares = async(lugares = [])=>{
    const choices = lugares.map((lugar, i )=> {
        const idx = `${i + 1}.`.red
        return{
            value:lugar.id,
            name:`${idx} ${lugar.nombre}`
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
            message:'Seleccione lugar:',
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
    listarLugares,
    confirmar, 
    mostrarListadoChecklist
}