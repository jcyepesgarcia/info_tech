let resizeTimer;

window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");

  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(() => {
    document.body.classList.add("resize-animation-stopper");
  }, 400);
});

/*
Este código JavaScript se encarga de manejar el evento de redimensionamiento de la ventana del navegador y realiza las siguientes acciones:

1. La declaración let resizeTimer; crea una variable resizeTimer sin asignarle un valor específico. Esta variable se utilizará para almacenar el identificador de un temporizador.

2. window.addEventListener("resize", () => { ... }); agrega un evento de escucha al objeto window que se activa cuando se produce un evento de redimensionamiento de la ventana. La función de flecha () => { ... } es el manejador de eventos que se ejecutará cuando ocurra el evento de redimensionamiento.

3. document.body.classList.add("resize-animation-stopper"); agrega la clase CSS "resize-animation-stopper" al elemento body del documento HTML. Esto se hace utilizando la propiedad classList del objeto body, que permite agregar, eliminar o cambiar clases en un elemento HTML.

4. clearTimeout(resizeTimer); cancela cualquier temporizador previo que se haya establecido utilizando el identificador almacenado en resizeTimer. Esto se hace para asegurarse de que solo se active el temporizador más reciente.

5. resizeTimer = setTimeout(() => { ... }, 400); establece un nuevo temporizador utilizando la función setTimeout. Esta función ejecuta una función de flecha después de un cierto período de tiempo. En este caso, se espera 400 milisegundos (0.4 segundos) antes de ejecutar la función.

6. document.body.classList.add("resize-animation-stopper"); nuevamente agrega la clase CSS "resize-animation-stopper" al elemento body. Esta línea de código se ejecuta después de que haya transcurrido el tiempo especificado en el temporizador.

En resumen, este código JavaScript se encarga de agregar una clase CSS al elemento body del documento cuando se produce un evento de redimensionamiento de la ventana. Además, establece un temporizador para asegurarse de que la clase se agregue después de un breve período de tiempo (0.4 segundos) desde el último evento de redimensionamiento. Esto podría ser útil para detener temporalmente las animaciones o transiciones durante el proceso de redimensionamiento de la ventana, evitando problemas visuales o de rendimiento.
*/
