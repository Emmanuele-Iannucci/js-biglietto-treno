// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e
// l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio,
// secondo queste regole:

// Fase di preparazione #

// il prezzo del biglietto è definito in base ai km (0.21 € al km),
const PriceForKilometre = 0.21;
// va applicato uno sconto del 20% per i minorenni,
// Prezzo scontato = P × (1 − s/100)
// Prezzo scontato = 0.21 * (1 - 20/100) = 0.8 €
const YoungDiscount = 0.8;
// va applicato uno sconto del 40% per gli over 65.,
// Prezzo scontato = 0.21 * (1 - 40/100) = 0.6 €
const elderDiscount = 0.6;
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
// per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.,

// Uso il metodo toFixed per approssimare il prezzo a due cifre decimali

// TIP: Per controllare che la vostra logica sui prezzi funzioni correttamente,
// provate a verificare quanto segue:

// 100km, 10 anni => prezzo corretto:  €16.80,
// 100km, 70 anni => prezzo corretto: €12.60,

// Inizializzazione di prova
// Usiamo la funzione Number che converte le stringhe in numeri 
// Usiamo la funzione globale prompt che restituisce SEMPRE una stringa
const km = Number(prompt("Quanti chilometri vuoi percorrere?"));
const age = Number(prompt("Quanti anni hai?"));

// Calcolare il prezzo senza sconti
let prezzoBase = km * PriceForKilometre;

let risultato;

if (age < 18) {
    risultato = prezzoBase * YoungDiscount
} else if (age >= 65) {
    risultato = prezzoBase * elderDiscount

} else {
    risultato = prezzoBase
}

console.log(`Il costo è di ${risultato.toFixed(2)}€`)


