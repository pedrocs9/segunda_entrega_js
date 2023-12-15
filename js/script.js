// Definición del array de tareas
let tareas = [
    { id: 1, tarea: 'Hacer la compra', completada: false },
    { id: 2, tarea: 'Estudiar para el examen', completada: true },
    { id: 3, tarea: 'Hacer ejercicio', completada: false }
  ];





  // Función para mostrar todas las tareas
function mostrarTodasLasTareas() {
    console.log('Listado de tareas:');
    for (const t of tareas) {
      console.log(`${t.id}. [${t.completada ? 'X' : ' '}] ${t.tarea}`);
    }
  }
 

  // Función para agregar una nueva tarea
function agregarTarea(nuevaTarea) {
    const nuevaTareaObj = {
      id: tareas.length + 1,
      tarea: nuevaTarea,
      completada: false
    };
    tareas.push(nuevaTareaObj);
    console.log(`Tarea agregada: ${nuevaTarea}`);
  }

  // Función para marcar una tarea como completada
function completarTarea(idTarea) {
    const tareaEncontrada = tareas.find(tarea => tarea.id === idTarea);
  
    if (tareaEncontrada) {
      tareaEncontrada.completada = true;
      console.log(`Tarea ${tareaEncontrada.tarea} marcada como completada.`);
    } else {
      console.log(`No se encontró una tarea con el ID ${idTarea}.`);
    }
  }


  // Función para filtrar tareas completadas
function filtrarTareasCompletadas() {
    const tareasCompletadas = tareas.filter(tarea => tarea.completada);
    console.log('Tareas completadas:');
    for (let tarea of tareasCompletadas) {
      console.log(`${tarea.id}. [X] ${tarea.tarea}`);
    }
  }
// Función para eliminar una tarea por su ID
function eliminarTarea(idTarea) {
  const indiceTarea = tareas.findIndex(tarea => tarea.id === idTarea);

  if (indiceTarea !== -1) {
      const tareaEliminada = tareas.splice(indiceTarea, 1)[0];
      console.log(`Tarea eliminada: ${tareaEliminada.tarea}`);
  } else {
      console.log(`No se encontró una tarea con el ID ${idTarea}.`);
  }
}

  function IniciarApp(){
    console.log("¡Bienvenido a la aplicación de tareas!");
    console.log("Presiona cualquier tecla para comenzar.");
    window.addEventListener('keypress', preguntarOpcion);
  }
  function preguntarOpcion(){
    console.log("Elije opcion de lo que deseas hacer\n1-Mostrar Todas Las Tareas\n2-Agregar Tarea\n3-Marcar Tarea Como Completada\n4-Mostrar Tareas Completadas\n5-Eliminar Tarea\n6-Salir");
    let Respuesta = prompt("Ingrese una opción");
        switch(Respuesta){
            case '1':
                console.log("--------------------------------------------");
                mostrarTodasLasTareas();
                console.log("--------------------------------------------");
                preguntarOpcion();
                break;
            case '2':
                console.log("--------------------------------------------");
                let tarea = prompt("Ingrese Tarea");
                agregarTarea(tarea);
                console.log("--------------------------------------------");
                preguntarOpcion();
                break;
            case '3':
              console.log("--------------------------------------------");
                let tareaMarcada = prompt("Ingrese ID de tarea que desea marcar como lista");
                const idTarea = parseInt(tareaMarcada);
                completarTarea(idTarea);
                console.log("--------------------------------------------");
                preguntarOpcion();
                break;
            case '4':
                console.log("--------------------------------------------");
                filtrarTareasCompletadas();
                console.log("--------------------------------------------"); 
                preguntarOpcion();
                break;
            case '5':
              console.log("--------------------------------------------");
                let tareaEliminar = prompt("Ingrese ID de tarea que desea eliminar");
                const idTareaElimina = parseInt(tareaEliminar);
                eliminarTarea(idTareaElimina);
                console.log("--------------------------------------------");
                preguntarOpcion();
                break;
            case '6':
            alert("Aplicación Cerrada.");
            break;
            default:
              console.log("--------------------------------------------");
              console.log('Opción no válida. Por favor, elige una opción válida.');
              console.log("--------------------------------------------");
              preguntarOpcion();
        }
        

    
    
}


IniciarApp();

  



