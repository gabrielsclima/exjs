let nota = -1;

function showNote(){
    nota = parseInt(prompt("Digite uma nota de 0 a 10"));
    if (!(nota >= 0) || !(nota <= 10)){
        alert("Valor inválido");
        showNote()
    }
}

function paragraph(content){
    newElement = document.createElement("p");
    elementContent = document.createTextNode(content);
    newElement.appendChild(elementContent);
    document.body.appendChild(newElement);
}

showNote()
paragraph("Nota inserida: " + nota);
paragraph("Obrigado :)")