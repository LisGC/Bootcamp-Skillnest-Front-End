// alerta al seleccionar el boton donar
function donation() {
    alert("¡Gracias por donar a AdoptaTuÁrbol!");
}

// cambio de color de boton al adoptar un arbol
function adopt(num) {
    const button = document.getElementById(`tree${num}`);

    // cambios de color y texto
    button.textContent = "Adoptado";
    button.style.backgroundColor = "#274E11";
    button.style.color = "white";
}

// cambio de texto al escoger una opcion del select
function showSelect() {
    const select = document.getElementById("trees");
    let viewText = document.getElementById("trees-view");

    // cambio del texto
    viewText.textContent = select.options[select.selectedIndex].text;
}

