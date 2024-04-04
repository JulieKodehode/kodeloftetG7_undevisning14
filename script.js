console.log('Hello!');


// HENT
// Variable that saves data. The data saved is a element fetched from the HTML document.
const listName = document.querySelector("#listName");
console.log(listName);

// LAG
const liHjem = document.createElement("li");
console.log(liHjem);

const liProsjekter = document.createElement("li");

const liKontakt = document.createElement("li");

// MODIFISER
liHjem.textContent = "Hjem";
liHjem.classList.add("listItem");

liProsjekter.textContent = "Prosjekter";
liProsjekter.classList.add("listItem");

liKontakt.textContent = "Kontakt"
liKontakt.classList.add("listItem");

// SEND
listName.appendChild(liHjem);

listName.appendChild(liProsjekter); 

listName.appendChild(liKontakt);