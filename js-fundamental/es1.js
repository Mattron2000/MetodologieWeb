'use strict';

/*
    Libretto universitario

Sviluppare un semplice programma JS per gestire i voti degli esami che hai
avuto lo scorso anno che permette di:
 1- Definire un array con tutti i voti, in ordine cronologico
     - inserire i voti nel codice sorgente
     - ignorare il nome del corso, i crediti e la data
     - considerare i 30L come 30
 2- Copiare l’array ed eliminare i due voti più bassi
 3- Aggiungere due nuovi voti, alla fine del nuovo array, uguali al “duale” dei
voti eliminate
     - Per esempio, elimino un 18, inserico un 30; elimino un 20, inserisco un 28; ecc.
 4- Stampare a schermo entrami gli array e confrontate i voti prima e dopo i
“miglioramenti”, mostrando anche la media (arrotondata) in entrambi i casi
*/

// 1-
// array con dei voti originali
const votiOriginali = [18, 30, 30, 27, 21, 25];

// 2-
// copia del vettore per poter fare delle modifiche senza intaccare il vettore originario
let votiMigliorati = Array.from(votiOriginali);
// vettore che memorizzerà i voti eliminati dal vettore votiMigliorati
let votiEliminati = [];

// ciclo per trovare il valore minimo ed eliminarlo
for(let i = 0; i < 2; i++) {
    let votoMin = Math.min(...votiMigliorati);
    let posizione = votiMigliorati.indexOf(votoMin);
    votiMigliorati.splice(posizione, 1);
    votiEliminati.push(votoMin);
}

// 3-
votiEliminati.forEach(voto => votiMigliorati.push(30 - voto + 18));

// 4-
console.log("voti originali: " + votiOriginali);
console.log("voti migliorati: " + votiMigliorati);

// Calcolo della media per il voti originali e quelli migliorati
function mediaVoti(voti) {
    let somma = voti.reduce((accumulator, a) => accumulator + a,0);

    return Math.round(somma / voti.length);
}
console.log("media originale: " + mediaVoti(votiOriginali));
console.log("media migliorata: " + mediaVoti(votiMigliorati));

