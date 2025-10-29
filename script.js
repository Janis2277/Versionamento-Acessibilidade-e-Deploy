document.getElementById('toggle-contrast').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// Foco inicial no primeiro link para navegação por teclado
document.querySelector('nav a').focus();
