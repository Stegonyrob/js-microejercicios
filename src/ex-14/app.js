//14 Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
document.getElementById("numberForm").addEventListener("submit", function(event) {
    event.preventDefault();
   
    let firstNumber = Number(document.getElementById("firstNumber").value);
    let secondNumber = Number(document.getElementById("secondNumber").value);
    let commonDivisors = [];
  
    for (let i = 1; i <= Math.min(firstNumber, secondNumber); i++) {
      if (firstNumber % i === 0 && secondNumber % i === 0) {
        commonDivisors.push(i);
      }
    }
  
    let outputElement = document.getElementById("result");
    outputElement.innerHTML = "Los divisores comunes de " + firstNumber + " y " + secondNumber + " son: " + commonDivisors.join(", ") + ".";
  });
  
 




