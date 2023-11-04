//8 Escribe un programa que pida una frase y escriba las vocales que aparecen
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
   
    let phrase = document.getElementById("text").value;
    let vocales = phrase.match(/[aeiou]/gi) || [];
    let vocalesUnicas = [...new Set(vocales)];
  
    let outputElement = document.getElementById("result");
    outputElement.innerHTML = "Las vocales que aparecen en la frase son: " + vocalesUnicas.join(", ");
  });
  
  