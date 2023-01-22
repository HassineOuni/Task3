let nameInput = document.getElementById("nameInput");
let addButton = document.getElementById("addButton");
nameInput.addEventListener("input", handleChange);

function handleChange() {
    addButton.innerHTML = `Ajouter <b>${nameInput.value}</b> à la liste`;
}

function handleAjout() {
    if(nameInput.value.trim() == ''){
        alert("Vide ! Insérez un élément.");}
    else{
    let nameList = document.getElementById("List");
    let newElement = document.createElement("li");
    newElement.innerHTML = nameInput.value;
    nameList.appendChild(newElement);
    addButton.innerHTML = `Ajouter à la liste`
    nameInput.value = "";

   
}
}