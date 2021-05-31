const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById("mySpotrybefy");

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function mudaClass(event){

  let elementoComAClasse = document.querySelector(".tech");
  elementoComAClasse.classList.remove("tech");
  event.target.classList.add("tech");
  input.value="";
}

divUm.addEventListener("click", mudaClass);
divDois.addEventListener("click", mudaClass);
divTres.addEventListener("click", mudaClass);

function mudaTexto(event){

  let elementoTech = document.querySelector(".tech");
      elementoTech.innerText = event.target.value;
}
input.addEventListener("input", mudaTexto);



//aprendi no http://www.devmedia.com.br
function outraPage(){
  window.location.href = "https://douglassantosf.github.io/";
}

myWebpage.addEventListener("dblclick",outraPage);

function mudaCor(){

  myWebpage.style.color = "green";
  console.log(myWebpage.type);

}

function mudaCor2(){

  myWebpage.style.color = "white";

}

myWebpage.addEventListener( "mouseover",mudaCor);
myWebpage.addEventListener( "mouseleave",mudaCor2);


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.