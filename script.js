// Función temporal para probar el flip de las cards
function voltear(card) {
    card.classList.toggle('volteada');
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
