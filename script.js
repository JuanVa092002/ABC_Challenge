function voltear(card) {
    card.classList.toggle('volteada');

    // Solo cuenta la primera vez que se descubre la letra
    if (!card.classList.contains('descubierta') && card.classList.contains('volteada')) {
        card.classList.add('descubierta');
        const contador = document.getElementById('contador');
        contador.textContent = Number(contador.textContent) + 1;
    }
}

function filtrar(tipo) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(function (card) {
        if (tipo === 'vocales') {
            card.classList.toggle('oculta', card.dataset.tipo !== 'vocal');
        } else {
            card.classList.remove('oculta');
        }
    });
}