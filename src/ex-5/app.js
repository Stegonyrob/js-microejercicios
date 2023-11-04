//5 Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
document.getElementById("numberForm").addEventListener("submit", function(event) {
    event.preventDefault();
   
    let firstNumber = Number(document.getElementById("firstNumber").value);
    let secondNumber = Number(document.getElementById("secondNumber").value);
    let bigNumber;
  
    if (firstNumber > secondNumber) {
        bigNumber = firstNumber;
    } else {
        bigNumber = secondNumber;
    }
  
    let outputElement = document.getElementById("result");
    outputElement.innerHTML = "El número " + bigNumber + " es mayor que el " + (bigNumber === firstNumber ? secondNumber : firstNumber);
  });
  