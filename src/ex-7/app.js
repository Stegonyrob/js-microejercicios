//7 Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
 
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
   
    let phrase = document.getElementById("text").value;
    let count = (phrase.match(/a/g) || []).length;
  
    let outputElement = document.getElementById("result");
    outputElement.innerHTML = "La letra 'a' aparece " + count + " veces en la frase.";
  });
  