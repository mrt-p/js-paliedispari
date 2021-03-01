// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo se l'utente ha vinto.

var pariDispariUtente = prompt("Digita 'pari' o 'dispari'");
if (pariDispariUtente == 'pari') {
  alert('Hai scelto pari');
  console.log('Pari')
}
else if (pariDispariUtente == 'dispari') {
  alert('Hai scelto dispari');
  console.log('Dispari');
}
else if (pariDispariUtente != 'pari' && pariDispariUtente != 'dispari'){
  alert("Devi digitare 'pari' o 'dispari'");
}

var numUtente = parseInt(prompt("Digita un numero da 1 a 5"));
console.log(numUtente);

function numRandom(min, max) {
  return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
}
var numComputer = numRandom(1, 5);
console.log(numComputer);

somma = numComputer + numUtente;
console.log(somma);

if ((somma % 2 == 0) && (pariDispariUtente == 'pari')) {
  alert('Hai vinto');
}
else if ((somma % 2 != 0) && (pariDispariUtente == 'dispari')) {
  alert('Hai vinto');
}
else {
  alert('Hai perso');
}
