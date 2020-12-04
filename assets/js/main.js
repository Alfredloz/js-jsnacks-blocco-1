$(function(){
//!snack 5
// Crea 10 oggetti che rappresentano una zucchina,
// indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
var zucchina = [
    {
        varieta: 'Calabra',
        peso: 3,
        lunghezza:10
    },
    {
        varieta: 'Fiorentina',
        peso: 4,
        lunghezza: 8,
    },
    {
        varieta:'Emiliana',
        peso: 4,
        lunghezza: 17
    },
    {
        varieta: 'Spagnola',
        peso: 7,
        lunghezza: 6
    },
    {
        varieta: 'Brasiliana',
        peso: 15,
        lunghezza: 15,
    },
    {
        varieta: 'Giapponese',
        peso: 10,
        lunghezza: 8
    },
    {
        varieta: 'Georgiana',
        peso: 3,
        lunghezza: 21
    },
    {
        varieta: 'Faenza',
        peso: 14.2,
        lunghezza: 8.3
    },
    {
        varieta: 'Francese',
        peso: 9.9,
        lunghezza: 9
    },
    {
        varieta: 'Croata',
        peso: 4.4,
        lunghezza: 5
    },
];
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
var zucchinePiccole = [];
var zucchineGrandi = [];
zucchina.forEach(function(zucchine){
    var dimesions = zucchine.lunghezza;
    if (dimesions >= 15) {
        console.log(zucchine.lunghezza);
        zucchineGrandi.push(zucchine)
    } else {
        zucchinePiccole.push(zucchine);
    }
});
console.log(zucchinePiccole);
console.log(zucchineGrandi);
});
