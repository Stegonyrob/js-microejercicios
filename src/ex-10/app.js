//10 Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
   
    let phrase = document.getElementById("text").value;
    let vocalA = (phrase.match(/a/g) || []).length;
    let vocalE = (phrase.match(/e/g) || []).length;
    let vocalI = (phrase.match(/i/g) || []).length;
    let vocalO = (phrase.match(/o/g) || []).length;
    let vocalU = (phrase.match(/u/g) || []).length;
  
    let outputElement = document.getElementById("result");
    outputElement.innerHTML = "La frase contiene " + vocalA + " vocales 'a', " + vocalE + " vocales 'e', " + vocalI + " vocales 'i', " + vocalO + " vocales 'o' y " + vocalU + " vocales 'u'.";
  });
  
  
 
  