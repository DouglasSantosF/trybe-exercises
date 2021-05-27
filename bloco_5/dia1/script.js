        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

 function mudaTagP(texto, index){

  document.getElementsByTagName("p")[index].innerText = texto;

 }

 function verdeTrybe(){

  document.getElementsByClassName("main-content")[0].style.background = "rgb(76,164,109)";

 }

 function mudaCentroBranco(){

   document.getElementsByClassName("center-content")[0].style.backgroundColor = "white"; 

 }

 function mudaTagH1(texto, index){

  document.getElementsByTagName("h1")[index].innerText = texto;

 }

 function mudaMaiusculo(index){
  let a = document.getElementsByTagName("p")[index].innerText.toUpperCase();
    document.getElementsByTagName("p")[index].innerText = a; 
  

 }

 function listaTag(tag){

   let tamanho = document.getElementsByTagName(tag).length;

   for(let i=0; i< tamanho; i+=1){

      console.log(document.getElementsByTagName(tag)[i].innerText);
   }

 }



  mudaTagP("Me vejo tendo um bom emprego como desenvolvedor web",1);
  verdeTrybe();
  mudaCentroBranco();
  mudaTagH1("Exercício 5.1 - JavaEscripit",0);
  mudaMaiusculo(1);
  listaTag("p");