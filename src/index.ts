/*
Realice un programa que devuelva la potencia de un número. 
La base y el exponente deben ser ingresados por teclado. 
Sólo deben admitirse exponentes mayores o iguales a cero. 
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos. 

*/

let base: number = Number(prompt("Ingrese la base"));
let exponente: number = Number(prompt("Ingrese el exponente"));
let resultado: number = 1;
function potenciaDeUnNumero(base: number, exponente: number): number {      
  if (exponente === 0) {
    return 1;
  } else {
    for (let i: number = 1; i <= exponente; i++) {
      resultado = resultado * base;
    }
    return resultado;
  }
}
resultado = potenciaDeUnNumero(base, exponente);
console.log(resultado);
