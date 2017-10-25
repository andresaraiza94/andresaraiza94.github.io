

var materias = [
    {nombre: 'tecnologias web', creditos: 8, optativa: true},
    {nombre: 'redes a', creditos: 12, optativa: true},
    {nombre: 'pensamiento computacional', creditos: 10, optativa: false},
    {nombre: 'compiladores A', creditos: 10, optativa: false}
];

muestraMaterias();

function muestraMaterias(){
    var tabla= document.createElement('table');
    tabla.appendChild(creaEncabezado());

    document.body.appendChild(tabla);
    console.log('for-normalito');
    for (var i=0; i <materias.length;i++)
        {
             
            document.write(' ' + materias[i].nombre);
            document.write(' ' + materias[i].creditos);
            document.write(' ' + materias[i].optativa);
            document.write('<br>');
           
        }
    //console.log('forEach');
    //materias.forEach(function(mat){
      //      console.log('nombre:'+ mat.nombre);
        //    console.log('creditos:'+ mat.creditos);
          //  console.log('optativa:'+ mat.optativa ? 'si' : 'no');
    //});

    
}

function creaEncabezado(){
    var encabezado= document.createElement('tr');
    var nombre= document.createElement('th');
    var textoNombre= document.createTextNode('Nombre');
    nombre.appendChild(textoNombre);

    var creditos= document.createElement('th');
    var textoCreditos= document.createTextNode('Creditos');
    creditos.appendChild(textoCreditos);

    var optativa= document.createElement('th');
    var textoOptativa= document.createTextNode('Optativa');
    optativa.appendChild(textoOptativa);

    encabezado.appendChild(nombre);
    encabezado.appendChild(creditos);
    encabezado.appendChild(optativa);

    return encabezado;}