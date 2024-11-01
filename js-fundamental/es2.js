'use strict';

/*
    I miei corsi

Realizzare un programma JS per gestire la lista dei tuoi corsi universitari:
 1- Definire i nomi dei corsi, come una lista separata da virgole
     - per esempio “Metodologie di programmazione per il Web, Reti 1, Paradigmi di
programmazione, Sistemi operativi, Basi di dati e sistemi informativi”
 2- Creare un array che contenga i nomi, un nome per posizione
     - assicurandosi che non ci siano spazi “extra”
 3- Creare un secondo array calcolando gli acronimi dei corsi (cioè, le lettere
iniziali dei nomi)
     - per esempio, Metodologie di programmazione per il Web -> MDPPIW
     - gli acronimi devono essere tutti maiuscoli
 4- Stampare la lista risultante di acronimi e nomi
     - extra: in ordine alfabetico per acronimi
*/

// 1-
// lista dei corsi
const lista = `Metodologie di programmazione per il Web, Reti 1, Paradigmi di programmazione, Sistemi operativi, Basi di dati e sistemi informativi`;

// 2-
// creare un array con un nome di corso per posizione togliendo gli eventuali spazi prima e dopo ogni nome del corso
const corsi = lista.split(',').map((corso) => corso.trim());

// 3-
const acronimi = corsi.map((corso) => corso.split(' ').map((parola) => parola.charAt(0).toUpperCase()).join(''));

// 4-
// creo una array che conterrà le stringe da stampare
const output = [acronimi, corsi].reduce((a, c) => a.map((v, i) => v + ' - ' + c[i]));

// riordinare l'array
console.log(output.sort());

