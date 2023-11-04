//Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”.
document.getElementById("numberForm").addEventListener("submit", function(event) {
    event.preventDefault();
   
    let firstNumber = Number(document.getElementById("firstNumber").value);
    let secondNumber = Number(document.getElementById("secondNumber").value);
    let result = firstNumber + secondNumber;
    let outputElement = document.getElementById("result");
    outputElement.innerHTML = "La suma de " + firstNumber + " con " + secondNumber + " es " + result;
 });
 