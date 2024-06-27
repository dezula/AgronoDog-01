document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
});

// Função para rolar o carrossel
document.querySelector('.carousel').addEventListener('wheel', (event) => {
    event.preventDefault();
    const container = event.currentTarget;
    const containerScrollPosition = container.scrollLeft;
    container.scrollTo({
        top: 0,
        left: containerScrollPosition + event.deltaY * 5,
        behavior: 'smooth'
    });
});
