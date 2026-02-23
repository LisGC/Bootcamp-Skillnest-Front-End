// Cambia el texto
function cambiarTexto(){
    const botton = document.querySelector("#login-button");
    botton.textContent = "Cerrar Sesión";
}

// Cambia el numero de likes
function cambiarLike(id) {

    var botton;

    // revisa si el id corresponde al botton de gato o perro
    // y toma el valor de ese id
    switch(id)
    {
        case "button-cat": botton = document.querySelector("#button-cat");
        alert("Se le dio me gusta a Gato Atigrado");
        break;

        case "button-dog": botton = document.querySelector("#button-dog");
        alert("Se le dio me gusta a Golden Retriever");
        break;
    }
    
    // aqui cambia el valor
    let num = parseInt(botton.textContent);

    num += 1;

    botton.textContent = num + " me gusta";
}

// Borra el botton
function borrarBoton()
{
    const bot = document.querySelector("#button-add");

    bot.remove();

}