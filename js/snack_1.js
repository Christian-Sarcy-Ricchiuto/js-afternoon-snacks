/*JSnack
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.*/

// Chiedi all'utente di inserire due parole
let parola1 = prompt("Inserisci la prima parola:");
let parola2 = prompt("Inserisci la seconda parola:");

// Confronta la lunghezza delle due parole
let output;
if (parola1.length < parola2.length) {
    output = parola1 + " " + parola2;
} else if (parola1.length > parola2.length) {
    output = parola2 + " " + parola1;
} else {

// Se sono della stessa lunghezza, mantenere l'ordine di inserimento
    output = parola1 + " " + parola2;
}
// Stampa le parole nella pagina
document.getElementById("snack_1").textContent = output;