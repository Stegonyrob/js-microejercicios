//9 Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase.
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
   
    let phrase = document.getElementById("text").value;
    let vocalA = (phrase.match(/a/g) || []).length;
    let vocalE = (phrase.match(/e/g) || []).length;
    let vocalI = (phrase.match(/i/g) || []).length;
    let vocalO = (phrase.match(/o/g) || []).length;
    let vocalU = (phrase.match(/u/g) || []).length;
  let cant = vocalA + vocalE + vocalI + vocalO + vocalU
    let outputElement = document.getElementById("result");
    outputElement.innerHTML = "La frase contiene " + cant + "vocales";
  });
  
  