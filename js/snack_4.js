/*JSnack
 Chiedi un numero di 4 cifre all’utente
 e calcola la somma di tutte le cifre che compongono il numero.*/

 // Chiedi all'utente di inserire un numero di 4 cifre
let numero = prompt("Inserisci un numero di 4 cifre:");

// Inizializza la variabile per la somma delle cifre
let sommaSnack4 = 0;

// Controlla se l'input è effettivamente un numero di 4 cifre
if (numero.length === 4 && !isNaN(numero)) {

// Calcola la somma delle cifre
    for (let i = 0; i < numero.length; i++) {
        sommaSnack4 += parseInt(numero[i], 10);
    }

// Mostra il risultato
    document.getElementById("snack_4").textContent = 
        "La somma delle cifre di " + numero + " è: " + sommaSnack4;
} else {

// Mostra un messaggio di errore se l'input non è valido
    document.getElementById("snack_4").textContent = 
        "Per favore, inserisci un numero valido di 4 cifre.";
}
