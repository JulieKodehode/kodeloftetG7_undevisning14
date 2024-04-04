console.log('Hello!');


// HENT
const listName = document.querySelector("#listName");
console.log(listName);

// LAG
const liHjem = document.createElement("li");
console.log(liHjem);

const liProsjekter = document.createElement("li");

const liKontakt = document.createElement("li");

// MODIFISER
liHjem.textContent = "Hjem";

liProsjekter.textContent = "Prosjekter";

liKontakt.textContent = "Kontakt"

// SEND
listName.appendChild(liHjem);

listName.appendChild(liProsjekter); 

listName.appendChild(liKontakt);