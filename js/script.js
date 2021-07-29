// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// 1)richiesta numero di chilometri che si desidera percorrere
var chilometri= parseInt(prompt("Inserisci il numero di chilometri da percorrere in treno: "));
console.log("numero di chilometri: " + chilometri);
// 2)richiesta età del passegero
var age= parseInt(prompt("Inserisci la tua età: "));
console.log("età passegero: " + age);