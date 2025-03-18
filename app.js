// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//funcion que agrega el nombre a una lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    let lista = document.getElementById("listaAmigos");
    
    // Validar que no esté vacío el textbox
    if (nombre === "") {
        alert("Por favor, ingresa un nombre antes de agregar.");
        return;
    }
    
    // Validar que no contenga números ya que son nombres
    if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/.test(nombre)) {
        alert("El nombre solo puede contener letras y espacios.");
        return;
    }
    
    // Verificar si el nombre ya está en la lista asi no se repiten **borrar si se desea tener mas probabilidades al repetir los nombres
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }
    
    // Agregar a la lista de nombres
    amigos.push(nombre);
    
    // Mostrar en la lista de amigos
    let item = document.createElement("li");
    item.textContent = nombre;
    lista.appendChild(item);
    
    // Limpiar input
    input.value = "";
}
    
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    let lista = document.getElementById("listaAmigos");
    
    // Validar que haya al menos 2 amigos
    if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos para sortear.");
        return;
    }
    
    // Seleccionar un nombre aleatorio
    let indice = Math.floor(Math.random() * amigos.length);
    let elegido = amigos[indice];
    
    // Mostrar resultado
    resultado.innerHTML = `<li>El elegido es: <strong>${elegido}</strong></li>`;
    
    // Limpiar la lista de amigos
    amigos = [];
    lista.innerHTML = "";
}
