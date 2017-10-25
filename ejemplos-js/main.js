var btnAgregar= document.getElementById("btnAgregar");

/* event handler */
//btnAgregar.onclick= agregaCaja;
//btnAgregar.onclick= function(){
//     window.alert("ejecutando funciones anonimas");
//};

/* event listener */
btnAgregar.addEventListener('click', function(){
    var entrada= document.getElementById('entrada');
    var contenido = entrada.value;
    if(contenido != ''){
        agregaCaja(contenido);
    }
    agregaCaja(contenido);
});

function agregaCaja(texto){
    var cajas = document.getElementsByTagName('div');
    var nuevo = document.createElement('div');
    var texto = document.createTextNode(texto);
    nuevo.appendChild(texto);
    nuevo.setAttribute("class", "caja");
    var padre= document.getElementsByTagName('body');
    padre[0].appendChild(nuevo);
}

function prueba()
{
    window.alert('hola');
}

