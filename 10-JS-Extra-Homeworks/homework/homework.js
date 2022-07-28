// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let arr = Object.entries(objeto);
  return arr;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  let objeto={};

  for (let index = 0; index < string.length; index++) {
    const nmKey = string[index];
    if (objeto[nmKey])
    {
      objeto[nmKey]++;    
    }
    else{
      objeto[nmKey]=1
    }    
  }

  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayus='';
  let minus ='';
  for (let i=0; i<s.length; i++)
  {
    if (s[i]===s[i].toUpperCase())
    {
      mayus=mayus+s[i]
    }
    else
    {
      minus=minus+s[i];
    }   
  }

  return mayus+minus;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  const palabras = str.split(' ');
  let espejo = '';

  for (let index = 0 ; index <palabras.length ; index++) {
    const palabra = palabras[index];
    let invertido='';
    for (let i = palabra.length-1; i>=0; i--) {
      invertido = invertido + palabra[i]      
    }
    espejo = espejo+ ' '+invertido;    
  }

  return espejo.trim();

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  const numStr = numero.toString();
  let numInvertido='';

  const comparar = numStr[0];

  for (let index = numStr.length-1; index >=0 ; index--) {
      numInvertido=numInvertido+numStr[index];
  }

  return numStr===numInvertido ? "Es capicua" : "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let newCadena='';

  for (let index = 0; index < cadena.length; index++) {
    if (cadena[index]!=='a' && cadena[index]!=='b' && cadena[index]!=='c') {
      newCadena=newCadena+cadena[index]      
    }
  }

  return newCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí  
  for (let index = 0; index<arr.length-1; index++) {       
    for (let x = index+1; x < arr.length; x++) {
      let temp="";
      if (arr[index].length >arr[x].length ) {
        temp = arr[index]
        arr[index]=arr[x];
        arr[x]=temp            
      }            
    }     
  }

  return arr;  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  
  let arrNew = [];
  for (let index = 0; index < arreglo1.length; index++) {
    let existe = false;
    for (let x = 0; x < arreglo2.length; x++) {
      if (arreglo1[index] ===arreglo2[x])
      existe =true
    }

    if (existe) {arrNew.push(arreglo1[index])}
  }

  const Aordenado=(arr) => {
    for (let index = 0; index<arr.length-1; index++) {       
      for (let x = index+1; x < arr.length; x++) {
        let temp="";
        if (arr[index].length >arr[x].length ) {
          temp = arr[index]
          arr[index]=arr[x];
          arr[x]=temp            
        }            
      }     
    }

    return arr;
  }

  return Aordenado(arrNew);
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

