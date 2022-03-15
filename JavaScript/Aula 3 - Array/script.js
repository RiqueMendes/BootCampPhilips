// Vetores ou Arrays

//Array 

/*let array = ['string', 1, true];
console.log(array); */

let array = ['string', 1, true, ['array1'], ['array2'],['array3'], ['array4']];
console.log(array[3]);

//forEach
array.forEach(function(item, index){console.log(item, index)});


//push - dado novo pra dentro do array

array.push('novo item');
console.log(array)


// pop - remove um item do final
array.pop();
console.log(array)

//shift - tira item do inicio
array.shift ();
console.log(array)

// unshift - o contrário do shift - adiciona item no comeco
array.unshift ();


// indexof - Mostrará o indice do valor (posicao)
console.log(array.indexOf(true))


//splice -  apaga por indice (neste caso 0 a 3 )
array.splice(0,3 ) 



//mostra somente os indices solicitados
let novoArray = array.slice(0, 3);


let object = {string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno}};