// VERSIONE FOR - ALESSIO 

const items = ['Latte', 'Pane', 'Uova', 'Acqua'];

const itemsList = document.getElementById('items');

for (let i = 0; i < items.length; i++) {
    const newLi = document.createElement('li');
    newLi.innerHTML = items[i];
    itemsList.append(newLi);
}



// VERSIONE WHILE ESERCIZIO 

const spesaDaFare = ['Pizza', 'Pasta', 'Carne', 'Torta'];

let x = 0;
const itemsTwo = document.getElementById('itemsTwo');

while (x < spesaDaFare.length) {
    const newLiTwo = document.createElement('li');
    newLiTwo.innerHTML = spesaDaFare[x];
    itemsTwo.append(newLiTwo);
    x++
}
 