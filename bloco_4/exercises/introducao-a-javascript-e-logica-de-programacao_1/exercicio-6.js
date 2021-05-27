
let peca ="King";
let pecaLowerCase = peca.toLowerCase();


switch(pecaLowerCase){
 
  case "rei":
    console.log("A peça " +pecaLowerCase+ " Move para todos os lados, apenas uma casa por vez." );
    break;
  
  case "rainha":
    console.log("A peça " +pecaLowerCase+ " Move para todos os lados, quantas casas quiser." );
    break;

  case "bispo":
      console.log("A peça " +pecaLowerCase+ " Move nas diagonais." );
      break;

  case "cavalo":
    console.log("A peça " +pecaLowerCase+ " Move em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa." );
    break;

  case "torre":
    console.log("A peça " +pecaLowerCase+ " Move pela vertical ou horizontal." );
    break;

  case "peão":
    console.log("A peça " +pecaLowerCase+ " Move apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
    break;

  default:
    console.log("Peça inválida!! ");
    break;

}


