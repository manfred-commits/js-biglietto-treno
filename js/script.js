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
// 3) Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// quindi sarà necessario moltiplicare il valore in km fornito dall'utente per 0.21
var prezzoPerChilometro = 0.21* chilometri;
console.log("Prezzo per chilometro non scontato: " + prezzoPerChilometro);
//4) va applicato uno sconto del 20% per i minorenni,
// Quindi, se e solo se, l'età del passegero è minore di 18 anni
//5) va applicato uno sconto del 40% per gli over 65.
// ed anche qui, se se solo se, l'età del passegero è maggiore di 65 anni
var scontoDaApplicare;
if(age < 18){
    // ricavo lo sconto da sottrarre, moltiplicando il prezzo da scontare per lo sconto (in questo caso 20% per minorenni) in termini decimali
    scontoDaApplicare = prezzoPerChilometro * 0.20; 
    console.log("Sconto da applicare al prezzo del biglietto: " + scontoDaApplicare);
    // sottraggo lo sconto ricavato al prezzo finale
    prezzoPerChilometro = prezzoPerChilometro - scontoDaApplicare;
    console.log("Prezzo scontato del 20%: " + prezzoPerChilometro);
}else if(age > 65){
    // ricavo lo sconto da sottrarre, moltiplicando il prezzo da scontare per lo sconto (in questo caso 40% per over 65) in termini decimali
    scontoDaApplicare = prezzoPerChilometro * 0.40; 
    console.log("Sconto da applicare al prezzo del biglietto: " + scontoDaApplicare);
    // sottraggo lo sconto ricavato al prezzo finale
    prezzoPerChilometro = prezzoPerChilometro - scontoDaApplicare;
    console.log("Prezzo scontato del 40%: " + prezzoPerChilometro);
}
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// 6) dare l'output utilizzando la funzione toFixed, per essere sicuri che il risultato avrà solo 2 cifre decimali dopo la virgola
alert("Il prezzo da pagare per il suo biglietto, sarà: " + prezzoPerChilometro.toFixed(2) + "€");