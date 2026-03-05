let carrito = [];
let total = 0;

function agregar(nombre, precio){

carrito.push({nombre, precio});
actualizarCarrito();

}

function eliminar(index){

total -= carrito[index].precio;
carrito.splice(index,1);

actualizarCarrito();

}

function actualizarCarrito(){

let lista = document.getElementById("lista");
lista.innerHTML = "";

total = 0;

carrito.forEach((producto,index)=>{

total += producto.precio;

let item = document.createElement("li");

item.innerHTML =
producto.nombre + " $" + producto.precio +
" <button onclick='eliminar("+index+")'>❌</button>";

lista.appendChild(item);

});

document.getElementById("total").textContent = total;

}

function enviar(){

let mensaje = "Hola quiero comprar:%0A";

carrito.forEach(p=>{
mensaje += "- " + p.nombre + " $" + p.precio + "%0A";
});

mensaje += "Total: $" + total;

let numero = "549TU_NUMERO";

window.open("https://wa.me/" + numero + "?text=" + mensaje);

}
