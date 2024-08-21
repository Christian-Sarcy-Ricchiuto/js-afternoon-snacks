/* JSnack
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)*/

// Esercizio tramite il ciclo FOR
let somma= 0;

// Utilizzo di un ciclo FOR per chiedere 5 numeri all'utente
for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Inserisci un numero:"));

// Aggiungi il numero alla somma totale
    somma += numero;  
}

// Stampo la somma totale nella pagina
document.getElementById("snack_2_FOR").textContent = "La somma dei numeri inseriti è: " + somma;

