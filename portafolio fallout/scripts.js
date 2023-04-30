// Obtener todos los elementos de la lista de opciones
var opciones = document.querySelectorAll('.opcion');

// Obtener todos los elementos de información
var informacion = document.querySelectorAll('.info');

// Para cada elemento de la lista de opciones...
opciones.forEach(function(opcion, indice) {
  // Cuando se hace clic en la opción...
  opcion.addEventListener('click', function() {
    // Agregar la clase "activo" a la opción seleccionada
    this.classList.add('activo');
    
    // Quitar la clase "activo" de todas las otras opciones
    opciones.forEach(function(otra_opcion) {
      if (otra_opcion !== opcion) {
        otra_opcion.classList.remove('activo');
      }
    });
    
    // Mostrar la información correspondiente a la opción seleccionada
    informacion.forEach(function(info) {
      if (info.dataset.opcion === opcion.innerText) {
        info.classList.add('activo');
      } else {
        info.classList.remove('activo');
      }
    });
  });
});
