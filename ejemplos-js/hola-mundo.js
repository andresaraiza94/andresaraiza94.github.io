function imprimeNumeros(arreglo)
{
    for(i=0;i<arreglo.length;i++)
        {
            document.write('<br>');
            document.write(arreglo[i]);
           
        
        }
}

document.write("Hola desde JavaScript");
/*notacion literal de arreglos*/
var arreglo = [3, 5, 7];
imprimeNumeros(arreglo);


/*notacion constructor de arreglo*/
var arreglo2= new Array[9, 11, 13];
imprimeNumeros(arreglo2);

console.log("Hola para la consola");

var triangulo = {
    base: 3,
    altura: 5,
    area: function(){
        console.log("area = " + this.base * this.altura/2);
    }
};

triangulo.area();

