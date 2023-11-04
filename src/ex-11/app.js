document.getElementById("numberForm").addEventListener("submit", function(event) {
    event.preventDefault();
   
    let number = Number(document.getElementById("number").value);
    let divisibleBy = "";
  
    if (number % 2 == 0) {
        divisibleBy = "2";
    } else if (number % 3 == 0) {
        divisibleBy = "3";
    } else if (number % 5 == 0) {
        divisibleBy = "5";
    } else if (number % 7 == 0) {
        divisibleBy = "7";
    } else {
        divisibleBy = "ninguno de los cuatro";
    }
  
    let outputElement = document.getElementById("result");
    outputElement.innerHTML = "El número " + number + " es divisible por " + divisibleBy + ".";
  });
  
  