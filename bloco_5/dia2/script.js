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


console.log(document.body);