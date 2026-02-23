// Crea una función llamada `pizzaOven`. ¡Asegúrate de incluir los detalles de tu pizza como el tipo de corteza, salsa, quesos y salsas!
// Crea una función llamada `pizzaOven` que devuelva un objeto JavaScript (¡una deliciosa pizza!)
// Crea una pizza con: “estilo Chicago”, “tradicional”, [“mozzarella”] y [“pepperoni”, “salchicha”]
// Crea una pizza con: “lanzada a mano”, “marinara”, [“mozzarella”, “feta”] y [“champiñones”, “aceitunas”, “cebollas”]
// ¡Crea otras dos pizzas con tus ingredientes favoritos y deja volar tu imaginación!

function pizzaOven(tipoCorteza,tipoSalsa,tipoqueso,tipocarne,tipoverduras) {
    
    var pizza = {
        corteza: tipoCorteza,
        salsa: tipoSalsa,
        queso: tipoqueso,
        carne: tipocarne,
        verduras: tipoverduras
    };

    return pizza;
}

var pizza1 = pizzaOven("estilo Chicago","tradicional",["mozzarella"],["pepperoni" , "salchicha"], "");
console.log(pizza1);

var pizza2 = pizzaOven("lanzada a mano","marinara",["mozzarella", "feta"],"",["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);

var pizza3 = pizzaOven("maestra","salsa de tomate",["mozzarella"],"", "esparragos");
console.log(pizza3);

var pizza4 = pizzaOven("delgada","tradicional","","pollo",["champiñones", "piña"]);
console.log(pizza4);