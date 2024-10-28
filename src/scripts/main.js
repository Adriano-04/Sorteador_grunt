document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener("submit", function(event) {
        event.preventDefault();
        let maximo = document.getElementById("numero").value;
        maximo = parseInt(maximo);

        let numeroAleatorio = Math.random() * maximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);
        
        document.getElementById("resultado").innerText = numeroAleatorio;
        document.querySelector(".result-container").style.display = "block"

    })
})