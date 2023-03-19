
function iniciarSesion() {

  var usuario__nickname = window.prompt("Ingrese su usuario..");
  var passwordCorrect = "kevin";
  var passcorrecto = "12345678910";
  var acceso = false;
  var password = "";
  var intro = false;
  var intentos = 0;
  var maxintentos = 4;

  while (acceso == false) {
    password = window.prompt("Ingresa tu usuario");
    if (password == passwordCorrect) {
      acceso = true;
    } else {
      window.alert("Ups... Usuario no existente");
      acceso = false;
    }
  }


  while (intro == false) {
    var pass = window.prompt("Ingrese su contraseña.. Tienes " + (maxintentos - intentos) + " Intentos");
    if (pass == passcorrecto) {
      document.write('tu saldo es de 50.000 pesos');
      intro = true;
    } else {
      intentos++;
      if (intentos == maxintentos) {
        window.alert("Usuario Bloqueado.");
        break;
      }
    }
  } //
} // 

//////////////////////////////////////////////////

function mostrarDatos() {

  var nombreEmpresa = "TU HOROSCOPO SEMANAL";
  var infoEmpresa = "¿Listo para saber sobre tu futuro?...";
  var contactoEmpresa = "tuhoroscopo@gmail.com";


  window.alert("Bienvenido a " + nombreEmpresa + "\n Listo para " + infoEmpresa + "\n Contáctanos: " + contactoEmpresa);
}

////////////////////////////////////////////////////////////



function pedirDatos() {
  var nombre = window.prompt("Ingrese su nombre");
  var apellido = window.prompt("Ingrese su apellido");
  var correo = window.prompt("Ingrese su e-mail");


  var respuesta = confirm("desea recibir newsletter?");
  if (respuesta) {
    window.alert("Listo");

  } else
    acceso = false;
}


///////////////////////////////////////////////////////////////////

var nuevacontrasena = [];
var campo1 = document.querySelector("#field1");
var campo2 = document.querySelector("#field2");
var campo3 = document.querySelector("#field3");
var campo4 = document.querySelector("#field4");
campo1.style.backgroundColor = "white";
campo2.style.backgroundColor = "white";
campo3.style.backgroundColor = "white";
campo4.style.backgroundColor = "white";

function generarContrasena() {
  if (campo1.value != "") {
    var contrasena = crearContrasena(campo1.value); // cmr88
    guardarContrasena(contrasena);
  } else {
    window.alert("Campo vacio!");
  }

}


function crearContrasena(param1) {
  var contrasena = "" + param1 + "";
  return contrasena;
}

function guardarContrasena(param1) {
  nuevacontrasena.push(param1);
}


function mostrarContrasena(param1) {
  if (nuevacontrasena.length > 0) {
    window.alert("Gracias por registrarte" + param1 + " en breves recibiras la informacion solicitada");
  } else {
    window.alert("NO HAY DATOS EXISTENTES");
  }
}

function borrarContrasena() {
  nuevacontrasena.pop();
}
