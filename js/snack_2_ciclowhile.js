/* JSnack
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)*/

//Esercizio tramite il ciclo WHILE
let somma= 0;
let count = 0;

// Utilizzo un ciclo while per chiedere 5 numeri all'utente
while (i < 5) {
    let numero = parseInt(prompt("Inserisci un numero:"));

// Aggiunta del numero alla somma totale
    somma += numero;
   
// Incremento del contatore  
    i++;  
}

// Stampo la somma totale nella pagina
document.getElementById("snack_2_WHILE").textContent = "La somma dei numeri inseriti è: " + somma;