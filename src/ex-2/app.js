//Escribe un programa que escriba en la pantalla “La suma de 3 + 5 es <resultado>”.
let numerOne = 3;
let numerTwo = 5;
let result = numerOne + numerTwo;
let outputElement = document.getElementById("result");
outputElement.innerHTML = "La suma de " + numerOne + " + " + numerTwo + " es " + result;
