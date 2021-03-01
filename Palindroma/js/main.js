// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// l'utente inserisce una parola
var parola = prompt("Scrivi una parola");
for (i=0; i < parola.length; i++) {
  ultimaPosizione = parola.length - 1;
  parolaUtenteReversed = parola[ultimaPosizione - i];
  console.log(parolaUtenteReversed);
}

for (i=0; i < parola.length; i++) {
  primaPosizione = parola.length;
  parolaUtente = parola[i];
  console.log(parolaUtente);
}

function palindroma (a, b) {
  if (parolaUtente == parolaUtenteReversed) {
    return("La parola è palindroma");
  }
  else {
    return("La parola non è palindroma");
  }
}
alert(palindroma(parolaUtente, parolaUtenteReversed));


// if (parolaUtente == parolaUtenteReversed) {
//   alert("La parola è palindroma");
// }
// else {
//   alert("La parola non è palindroma");
// }

// ultimaPosizione = parola.length - 1;
// ultimaLettera = parola[ultimaPosizione];
// console.log(ultimaLettera);
// penultimaLettera = parola[ultimaPosizione - 1];
// console.log(penultimaLettera);
// terzultimaLettera = parola[ultimaPosizione - 2];
// console.log(terzultimaLettera);
// quartultimaLettera = parola[ultimaPosizione -3];
// console.log(quartultimaLettera);
