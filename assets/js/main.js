$(function(){
//!snack 5
// Crea 10 oggetti che rappresentano una zucchina,
// indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// var zucchina = [
//     {
//         varieta: 'Calabra',
//         peso: 3,
//         lunghezza:10
//     },
//     {
//         varieta: 'Fiorentina',
//         peso: 4,
//         lunghezza: 8,
//     },
//     {
//         varieta:'Emiliana',
//         peso: 4,
//         lunghezza: 17
//     },
//     {
//         varieta: 'Spagnola',
//         peso: 7,
//         lunghezza: 6
//     },
//     {
//         varieta: 'Brasiliana',
//         peso: 15,
//         lunghezza: 15,
//     },
//     {
//         varieta: 'Giapponese',
//         peso: 10,
//         lunghezza: 8
//     },
//     {
//         varieta: 'Georgiana',
//         peso: 3,
//         lunghezza: 21
//     },
//     {
//         varieta: 'Faenza',
//         peso: 14.2,
//         lunghezza: 8.3
//     },
//     {
//         varieta: 'Francese',
//         peso: 9.9,
//         lunghezza: 9
//     },
//     {
//         varieta: 'Croata',
//         peso: 4.4,
//         lunghezza: 5
//     },
// ];
// var sum = 0;
// zucchina.forEach(function(zucchine) {  
//     var pesoZucchina = zucchine.peso;
//     sum+= pesoZucchina;
    
// });
// console.log(sum);

// //!snack6
// Scrivi una funzione che accetti una stringa come
// argomento e la ritorni girata (es. Ciao -> oaiC)
/**
 * girare le parole
 * //@param {string} string 
 */
// function paroleGirate(string) {
//     if (isNaN(string)) {
//        return string.split("").reverse().join("");
        
//     } else {
//         alert('questo è un numero!');
//     }
    
// }
// var parolaUtente = paroleGirate(prompt('Inserisci una parola'));
// console.log(parolaUtente);

//!snack 7
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano
// meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi
// di zucchine
//TODO ATTIVARE ESERCIZIO ZUCCHINE 
// var zucchinePiccole = [];
// var zucchineGrandi = [];
// zucchina.forEach(function(zucchine){
//     var dimesions = zucchine.lunghezza;
//     if (dimesions >= 15) {
//         console.log(zucchine.lunghezza);
//         zucchineGrandi.push(zucchine)
//     } else {
//         zucchinePiccole.push(zucchine);
//     }
// });
// console.log(zucchinePiccole);
// console.log(zucchineGrandi);

// //!snack 8
// Scrivi una funzione che fonda due array (con lo stesso
//     numero di elementi) prendendo alternativamente gli    
//     elementi da uno e dall’altro
//     es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
/*******************************************/
//creazione array con stesso numero di elementi e array vuoto
// var primoArray = [1, 2, 3, 4];
// var secondoArray = ['a','b' ,'c' ,'d'];
// var newArray = [];

/*******************************************/
//creazione funzione
/**
 * funzione per fondere due array della stessa lunghezza alternando gli elementi
 *  //@param {array} array 
 * //@param {array} array2 
 * //@param {array} array3
 */
// function fusioneArray(array1, array2, array3) {
// //crazioni indici array
//      var x = 0;
//      var y = 0;
//      var z = 0;
//      while (z < array1.length + array2.length) {
//       if (x > y) {
//           array3[z]= array2[y];
//           y++;
//       } else{
//           array3[z]= array1[x];
//           x++;
//       }
//          z++;
//      }
//      return array3 

// }
// fusioneArray (primoArray, secondoArray, newArray);
// console.log(newArray);
//!snack 9
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al
// massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra “a” e “b”
/*******************************************/
//crazione variabili
var a = 7;
var b = 8;
var arrayProva = [1, 'cosa', 12, 'perla', 3, 'bestia', 'respirazione', 11, 'zucchina', 12];
/**
 * fusione di più elementi dove il terzo si posiziona tra il primo ed il secondo in un nuovo array
 * @param {number} numb1 
 * @param {number} numb2 
 * @param {array} array 
 */
function fusioneValori(numb1, numb2, array1) {
    if (numb1 < numb2 && numb2 <= array1.length) {
        array1.unshift(numb1);
        array1.push(numb2);
        return array1
    }
    
}
fusioneValori(a, b, arrayProva);
console.log(arrayProva);
});
