// 1️⃣ Imprimir pares del 1 al 30: Usando un bucle, escribe un código que imprima todos los números pares del 1 al 30.

for (var i = 1; i <= 30; i++) {
    if (i % 2 == 0) {
        console.log("Par: " + i);
    }

    else {
        console.log("Impar: " + i);
    }
}

// 2️⃣ Imprimir múltiplos de 4 en orden descendente: Utilizando un bucle, escribe un código que imprima todos los números que sean múltiplos de 4 en orden descendente, desde 100 hasta 0.

console.log("Multiplos de 4");

for(var i = 100; i> 0; i--)
{
    if(i%4 == 0)
    {
        console.log(i);
    }
}

// 3️⃣ Imprime la secuencia: Esta vez, queremos imprimir una secuencia un poco diferente. Utiliza un bucle para imprimir los siguientes valores: 10, 7, 4, 1, -2, -5.
var i=6;
var j=10;
while(i > 0)
{
    console.log(j);

    j -=3;

    i--;
}

// 4️⃣ Suma todos los números pares del 1 al 50: Utiliza un bucle para sumar todos los números pares del 1 hasta el 50 y muestra el resultado de la suma con console log.
var suma= 0;
for(var i = 1; i <= 50; i++)
{
    if(i%2 == 0)
    {
        suma+=i;
    }
}

console.log("La suma de pares da: " + suma);


// 5️⃣ Factorial: Para este último desafío, necesitamos multiplicar todos los números del 1 al 20. Es decir, 1 * 2 * 3 * … * 18 * 19 * 20. ¿Puedes calcular el producto final?
var sumaFactorial = 1;

for(var i = 1; i <= 20; i++)
{
    sumaFactorial *= i;
}

console.log("El resultado del factorial es: " + sumaFactorial);