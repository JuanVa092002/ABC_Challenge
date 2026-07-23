const cartas = document.querySelectorAll(".card");
let clics = 0;
cartas.forEach(function(carta) {
  carta.addEventListener("click", function() {
    clics++;
    console.log(`Clics: ${clics}`);
  });
});