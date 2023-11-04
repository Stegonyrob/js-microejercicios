//Escribe un programa que pida el nombre del usuario con un input y 
//escriba un texto que diga “Hola <nombre-de-usuario>”


document.getElementById("greetingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let userName = document.getElementById("userNameInput").value;
    let greetingElement = document.getElementById("greeting");
    greetingElement.innerHTML = "Hola " + userName + "!";
});
