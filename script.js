let carrito = [];
let total = 0;

function agregar(nombre,precio){

carrito.push(nombre + " $" + precio);
total += precio;

let lista = document.getElementById("lista");

let item = document.createElement("li");
item.textContent = nombre + " $" + precio;

lista.appendChild(item);

document.getElementById("total").textContent = total;

}

function enviar(){

let mensaje = "Hola quiero comprar:%0A";

carrito.forEach(p=>{
mensaje += "- " + p + "%0A";
});

mensaje += "Total: $" + total;

let numero = "5492212231836";

window.open("https://wa.me/" + numero + "?text=" + mensaje);

}
