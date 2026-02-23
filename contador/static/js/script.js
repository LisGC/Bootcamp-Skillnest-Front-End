function cambiarContador(id){
    
    let textNum = document.querySelector("#numero");

    let aux = parseInt(textNum.textContent);
    
    switch (id)
    {
        case "negative": aux -= 1;
        break;

        case "neutral": aux = 0;
        break;

        case "positive": aux += 1;
        break;
    }

    textNum.textContent = aux;
}

