//15 Escribir un programa que nos diga si un número dado es primo 
//(no es divisible por ninguno otro número que no sea él mismo o la unidad)

  document.getElementById("numberForm").addEventListener("submit", function(event) {
    event.preventDefault();
   
    let number = Number(document.getElementById("number").value);
    let isPrime = true;
  
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  
    let outputElement = document.getElementById("result");
    outputElement.innerHTML = "El número " + number + " es " + (isPrime ? "primo" : "no primo") + ".";
  });
  