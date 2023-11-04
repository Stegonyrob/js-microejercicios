//13 Escribir un programa que escriba en pantalla los divisores de un número dado
document.getElementById("numberForm").addEventListener("submit", function(event) {
    event.preventDefault();
   
    let number = Number(document.getElementById("number").value);
    let divisors = [];
  
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
          divisors.push(i);
      }
    }
  
    let outputElement = document.getElementById("result");
    outputElement.innerHTML = "Los divisores del número " + number + " son: " + divisors.join(", ") + ".";
  });
  