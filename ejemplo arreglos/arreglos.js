

var materias = [
    {nombre: 'tecnologias web', creditos: 8, optativa: true},
    {nombre: 'pensamiento computacional', creditos: 10, optativa: false},
    {nombre: 'compiladores A', creditos: 10, optativa: false}
];

muestraMaterias();

function muestraMaterias(){
    var tabla= document.createElement('table');
    tabla.appendChild(creaEncabezado());
    tabla.appendChild(creaTabla());
    document.body.appendChild(tabla);
    console.log('for-normalito');
    for (var i=0; i <materias.length;i++)
        {
            console.log('nombre:' + materias[i].nombre);
            console.log('creditos:' + materias[i].creditos);
            console.log('optativa:' + materias[i].optativa);
        }
    console.log('forEach');
    materias.forEach(function(mat){
        console.log('nombre:'+ mat.nombre);
        console.log('creditos:'+ mat.creditos);
        console.log('optativa:'+ mat.optativa ? 'si' : 'no');
    });

    
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

    return encabezado;
}

function creaTabla(){
    var fila= document.createElement('tr');
    var nombre= document.createElement('td');
    var textoNombre= document.createTextNode('Tecnologias');
    nombre.appendChild(textoNombre);

    var creditos= document.createElement('td');
    var textoCreditos= document.createTextNode('8');
    creditos.appendChild(textoCreditos);

    var optativa= document.createElement('td');
    var textoOptativa= document.createTextNode('si');
    optativa.appendChild(textoOptativa);

    fila.appendChild(nombre);
    fila.appendChild(creditos);
    fila.appendChild(optativa);

    return fila;
}