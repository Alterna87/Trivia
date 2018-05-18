
//DECLARO MIS VARIABLES
var element = document.getElementById('name');
var name = prompt("Ingresa tu nombre:");


 // primer condicional para mostrar el nombre
if (name !== "" && name) {
  element.innerHTML = '<p><strong>BIENVENID@: </strong>' + name.toUpperCase() + '</p>';
  var play = confirm("Listo para Jugar?");

  if (play) {
    //PRIMERA PREGUNTA
    //SEGUNDA PREGUNTA
    //TERCERA PREGUNTA
  //PRIMERA PREGUNTA

  var firstQuestion = parseInt(prompt("¿Qué opción describe mejor HTML?: \n 1.- Es un lenguaje de Programación \n  2.- Es un lenguaje usado para definir y crear la presentacion de la página \n 3.-Consiste en una serie de elementos, que puedes utilizar para encerrar, envolver, o marcar partes diferentes del contenido para hacer que aparezcan de una cierta manera \n "));
    if (firstQuestion) {
      var secondQuestion = parseInt(prompt("¿Cúal es la mejor manera ideal de agregar CSS en tu páguina?: \n 1.- De manera Externa  \n 2.- De manera Inline \n 3.- CSS en el head \n "));
      if (firstQuestion == 3) {
   //validar primera pregunta
      element = document.getElementById('firstQuestion');
      element.innerHTML = "1.- ¿Qué opción describe mejor HTML?: \n <br>Respuesta.-Consiste en una serie de elementos, que puedes utilizar para encerrar, envolver, o marcar partes diferentes del contenido para hacer que aparezcan de una cierta maneras.</br>";


    } else {
      element = document.getElementById('incorrectQuestionOne');
      element.innerHTML = "1.- ¿Qué opción describe mejor HTML?: \n <br>Respuesta.-Consiste en una serie de elementos, que puedes utilizar para encerrar, envolver, o marcar partes diferentes del contenido para hacer que aparezcan de una cierta maneras.</br>";
    }
  } else {
    var cancel = document.getElementById('result');
    cancel.innerHTML = "<div id='cancel'>" + "<p>Jugaremos para la proxima</p>" + "</div>";

  }
  //SEGUNDA PREGUNTA
  if (secondQuestion) {
  var thirdQuestion = parseInt(prompt("Qué elementos componen el modelo de caja?: \n 1.- Top, right, bottom y left \n 2.- Content, Padding, Border y Margin \n 3.- Top, Border, Padding y Bottom \n "));
  if (secondQuestion == 1) {
    element = document.getElementById('secondQuestion');
    element.innerHTML = "2.- ¿Cúal es la mejor manera ideal de agregar CSS en tu páguina?: <br>Respuesta.- De manera Externa.</br>";

  } else {
    element = document.getElementById('incorrectQuestionTwo');
    element.innerHTML = "2.- ¿Cúal es la mejor manera ideal de agregar CSS en tu páguina?: <br>Respuesta.- De manera Externa.</br>";

  }
} else {
  var cancel = document.getElementById('result');
  cancel.innerHTML = "<div id='cancel'>" + "<p>Jugaremos para la proxima</p>" + "</div>";
}
  //TERCERA PREGUNTA
if (thirdQuestion) {
   if (thirdQuestion == 2) {
     element = document.getElementById('thirdQuestion');
     element.innerHTML = "3.- ¿Qué elemento componen el modelo de caja? <br>Respuesta.- Content, Padding, Border y Margin.</br>";
     //Mostramos resultados de la trivia
     alert("Veamos tu resultado");
     title = document.getElementById('titleresult');
     title.innerHTML = "<p id='titleCorrect'>CORRECTAS</p><p id='titleIncorrect'>INCORRECTAS</p>";


   } else {
     element = document.getElementById('incorrectQuestionThree');
     element.innerHTML = "3.- Qué elemento componen el modelo de caja? <br>Respuesta.- Content, Padding, Border y Margin.</br>";
     //Mostramos resultados de la trivia
     alert("Veamos tu resultado");
     title = document.getElementById('titleresult');
     title.innerHTML = "<p id='titleCorrect'>CORRECTAS</p><p id='titleIncorrect'>INCORRECTAS</p>";

   }
}
 //cuando cancela alguna pregunta
else {
  var cancel = document.getElementById('result');
  cancel.innerHTML = "<div id='cancel'>" + "<p>Jugaremos para la proxima</p>" + "</div>";

}
//cuando cancelan la opcion de Jugar
    } else {
      var cancel = document.getElementById('result');
      cancel.innerHTML = "<div id='cancel'>" + "<p>Jugaremos para la proxima</p>" + "</div>";
    }
//cuando no ponen su nombre o se encuentra vacio el campo
  } else {
    var cancel = document.getElementById('result');
    cancel.innerHTML = "<div Xid='cancel'>" + "<p>Tu nombre no es válido, Jugaremos para la próxima!</p>" + "</div>";
  }
