function toggleAnswer(button) {
    const answer = button.nextElementSibling;
    
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";  // Mostra a resposta
        button.textContent = "Ocultar resposta";  // Altera o texto do botão
    } else {
        answer.style.display = "none";  // Oculta a resposta
        button.textContent = "Mostrar resposta";  // Restaura o texto do botão
    }
}