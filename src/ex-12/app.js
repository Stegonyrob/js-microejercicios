//12 Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible
// (hay que decir todos por los que es divisible)
document.getElementById("numberForm").addEventListener("submit", function(event) {
    event.preventDefault();
   
    let number = Number(document.getElementById("number").value);
    let divisors = [];
  
    if (number % 2 == 0) {
        divisors.push("2");
    }
    if (number % 3 == 0) {
        divisors.push("3");
    }
    if (number % 5 == 0) {
        divisors.push("5");
    }
    if (number % 7 == 0) {
        divisors.push("7");
    }
  
    let outputElement = document.getElementById("result");
    outputElement.innerHTML = "El número " + number + " es divisible por " + divisors.join(", ") + ".";
  });
  