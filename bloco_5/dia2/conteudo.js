let ex1 = document.getElementById("elementoOndeVoceEsta");
console.log(ex1);

ex1.parentNode.style.color = "green";

document.querySelector("#primeiroFilhoDoFilho").innerText="Novo Texto";

console.log(document.querySelector("#pai").firstElementChild);

console.log(document.querySelector("#elementoOndeVoceEsta").previousElementSibling);

console.log(ex1.parentElement.innerText);
console.log(ex1.nextElementSibling);
console.log(document.querySelector("#pai").lastElementChild.previousElementSibling);

let irmaoElementoOndeVoceEsta = document.createElement("div");
document.querySelector("#pai").appendChild(irmaoElementoOndeVoceEsta);
irmaoElementoOndeVoceEsta.id="quintoFilho";
console.log(document.querySelector("#quintoFilho"));

let filhoVoceEsta = document.createElement("div");
document.querySelector("#elementoOndeVoceEsta").appendChild(filhoVoceEsta);
filhoVoceEsta.id = "filhoVoceEsta";


let primFilhoDoFilho = document.createElement("div");
    primFilhoDoFilho.id = "primFilhoDoFilho";
    document.querySelector("#primeiroFilhoDoFilho").appendChild(primFilhoDoFilho);


console.log(document.querySelector("#primFilhoDoFilho").parentElement.parentElement.nextElementSibling);
//removeChild(); exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho


function deletaFilho(pai , filho){

  let a = document.querySelector(pai);
  let b = document.querySelector(filho);

  a.removeChild(b);
}

deletaFilho("#pai","#primeiroFilho");
deletaFilho("#elementoOndeVoceEsta","#segundoEUltimoFilhoDoFilho");
deletaFilho("#elementoOndeVoceEsta","#filhoVoceEsta");
deletaFilho("#pai","#terceiroFilho");
deletaFilho("#pai","#quartoEUltimoFilho");
deletaFilho("#pai","#quintoFilho");

console.log(document.querySelector("#paiDoPai"));



