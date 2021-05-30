let a = document.createElement("div");
document.body.appendChild(a);
a.className="main-content"; 

let b = document.createElement("h1");
document.body.appendChild(b);
b.innerText = "Exercício 5.2 - JavaScript DOM ";

let c = document.createElement("div");
a.appendChild(c);
c.className = "center-content";

let d = document.createElement("p");
c.appendChild(d);
d.innerText = "SabadouuuL";

let e = document.createElement("div");
a.appendChild(e);
e.className = "left-content";

let f = document.createElement("div");
a.appendChild(f);
f.className ="right-content";

let g = document.createElement("img");
e.appendChild(g);
g.src ="https://picsum.photos/200";
g.className = "small-image";


let numbers = ["Um","Dois","Três","Quatro","Cinco","Seis","Sete","Oito","Nove","Dez"];

let list = document.createElement("ul");
f.appendChild(list);
list.className = "list-numbers";

for(let index=0; index<numbers.length; index+=1){

  let text = numbers[index];

  let itemList = document.createElement("li");
      itemList.innerText = text;
      itemList.className = text;
  
  document.querySelector(".list-numbers").appendChild(itemList);
      
}

let h3_0 = document.createElement("h3");
    //h3_0.className = "primeiro";
    a.appendChild(h3_0);

let h3_1 = document.createElement("h3");
   // h3_1.className = "segundo";
    a.appendChild(h3_1);

let h3_2 = document.createElement("h3");
    //h3_2.className = "terceiro";
    a.appendChild(h3_2);    

console.log(document.body);