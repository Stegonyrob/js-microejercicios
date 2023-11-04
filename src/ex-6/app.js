//6 Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
document.getElementById("numberForm").addEventListener("submit", function(event) {
    event.preventDefault();
   
    let firstNumber = Number(document.getElementById("firstNumber").value);
    let secondNumber = Number(document.getElementById("secondNumber").value);
    let thirdNumber = Number(document.getElementById("thirdNumber").value);
    let bigNumber;
  
    if (firstNumber > secondNumber && firstNumber < thirdNumber) {
        bigNumber = firstNumber;
    } else {
        bigNumber = secondNumber;
    }
  
    let outputElement = document.getElementById("result");
    outputElement.innerHTML = "El número " + bigNumber + " es mayor que el " + (bigNumber === firstNumber ? secondNumber : firstNumber);
  });
  