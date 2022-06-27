/*
BONUS 2:
Creiamo delle miniature di tutte le immagni, in cui dovrà apparire in evidenza l’immagine equivalente a quella attiva, scegliete liberamente se scurire le altre immagini oppure se evidenziarla semplicemente con un bordo. Tra queste miniature, quella corrispondente all'immagine attiva deve evidenziarsi, scegliete voi l'effetto estetico, potete colorarla diversamente rispetto alle altre o aggiungere un semplice bordo.
Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche settimana la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
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
    content += `<img src="./${arrayIndex[i]}" alt="image${[i+1]}" class="item"></img>`
}

content += `${nextButton}${prevButton}</div>`

// * BONUS 2

content += `<div class="row row-cols-5 mini-slide">`

for(let i = 0; i < arrayIndex.length; i++){
    content += `<div class="col"><img src="./${arrayIndex[i]}" alt="image${[i+1]}" class="item"></img></div>`
}

content += `</div></div>`

// Finalizzo il display

display.innerHTML = content

// Creo una variabile per l'elemento attivo

let activeItem = 0

// Creo un array per scorrere fra gli elementi attivi desiderati

const activeArray = document.querySelectorAll('#carousel .slide img');
const activeSideArray = document.querySelectorAll('#carousel .mini-slide img');

// Aggiungo la classe che funge da active

activeArray[activeItem].classList.add("active")
activeSideArray[activeItem].classList.add("active");


// Se clicco next

next.addEventListener('click',function(){

    // Tolgo l'active all'elemento corrente
    activeArray[activeItem].classList.remove("active");
    activeSideArray[activeItem].classList.remove("active");

    // Aumento il "contatore di active"
    activeItem++

    // * BONUS 1: Se il contatore è al massimo quando clicco, torna a 0
    if(activeItem === activeArray.length){
        activeItem = 0;
    }

    // E restituisco l'active al "nuovo" elemento
    activeArray[activeItem].classList.add("active");
    activeSideArray[activeItem].classList.add("active");
})

// Se clicco next

prev.addEventListener('click',function(){

    // Tolgo l'active all'elemento corrente
    activeArray[activeItem].classList.remove("active");
    activeSideArray[activeItem].classList.remove("active");
    
    // * BONUS 1: Se il contatore è al minimo quando clicco, torna al massimo
    if(activeItem === 0){
        activeItem = activeArray.length;
    }

    // Diminuisco il "contatore di active"
    activeItem--


    // E restituisco l'active al "nuovo" elemento
    activeArray[activeItem].classList.add("active");
    activeSideArray[activeItem].classList.add("active");
})
