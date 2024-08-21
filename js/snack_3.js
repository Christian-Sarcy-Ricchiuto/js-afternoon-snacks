/*JSnack
 Calcola la somma e la media dei primi 10 numeri.*/
let sommasnack3 = 0;
let media = 0;

// Numero di elementi
const n = 10;

// Calcola la somma dei primi 10 numeri
for (let i = 1; i <= n; i++) {
    sommasnack3 += i;
}

// Calcola la media
media = sommasnack3 / n;

// Stampa i risultati nella pagina
document.getElementById("snack_3").textContent = 
    "La somma dei primi 10 numeri è: " + sommasnack3 + 
    ". La media è: " + media.toFixed(2);
