/*
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for. Possiamo concatenare una stringa con un template literal oppure utilizzare gli altri metodi di manipolazione del DOM che abbiamo visto insieme. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello slider, prendendo il posto della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se l' immagine attiva è la prima e l'utente clicca la freccia per andare indietro, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso avanti, deve attivarsi la prima immgine.
BONUS 2:
Creiamo delle miniature di tutte le immagni, in cui dovrà apparire in evidenza l’immagine equivalente a quella attiva, scegliete liberamente se scurire le altre immagini oppure se evidenziarla semplicemente con un bordo. Tra queste miniature, quella corrispondente all'immagine attiva deve evidenziarsi, scegliete voi l'effetto estetico, potete colorarla diversamente rispetto alle altre o aggiungere un semplice bordo.
Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche settimana la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
Consigli del giorno:
1. Costruiamo del carosello una versione statica contenente un'immagine grande con del testo ben posizionato e una miniatura. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
3. Al momento giusto (starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"
*/

// Steps

// Creo un array con il percorso relativo delle immagini

const arrayIndex = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg'];

// Creo le frecce per gestire le slide

const nextButton = `<button id="next"><i class="bi bi-arrow-right-circle-fill"></i></button>`
const prevButton = `<button id="prev"><i class="bi bi-arrow-left-circle-fill"></i></i></button>`

// Creo il display per il mio html

const display = document.querySelector('.container');

// Riempio il div coi contenuti

let content = `<div id="carousel"><div class="slide">`

for(let i = 0; i < arrayIndex.length; i++){
    content += `<img src="${arrayIndex[i]}" alt="image${[i+1]}" class="d-none"></img>`
}

content += `${nextButton}${prevButton}</div></div>`

// Finalizzo il display

display.innerHTML = content