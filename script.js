let carrito = [];
let total = 0;

function agregar(nombre, precio){

carrito.push({nombre:nombre, precio:precio});

actualizar();

}

function eliminar(index){

carrito.splice(index,1);

actualizar();

}

function actualizar(){

let lista = document.getElementById("lista");
lista.innerHTML = "";

total = 0;

for(let i=0;i<carrito.length;i++){

let producto = carrito[i];

total += producto.precio;

let item = document.createElement("li");

item.innerHTML = producto.nombre + " $" + producto.precio +
" <button onclick='eliminar("+i+")'>❌</button>";

lista.appendChild(item);

}

document.getElementById("total").textContent = total;

}

function enviar(){

let mensaje = "Hola quiero comprar:%0A";

for(let i=0;i<carrito.length;i++){

mensaje += "- " + carrito[i].nombre + " $" + carrito[i].precio + "%0A";

}

mensaje += "Total: $" + total;

let numero = "5492212231836";

window.open("https://wa.me/" + numero + "?text=" + mensaje);

}
