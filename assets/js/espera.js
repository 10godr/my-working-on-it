/* Cambia la palabra del círculo con un fundido */
function iniciarEspera(config) {
  const palabra = document.getElementById("palabra");
  const palabras = config.palabras;
  let actual = 0;

  palabra.textContent = palabras[0];
  if (palabras.length < 2) return;

  setInterval(() => {
    palabra.classList.add("oculta");
    setTimeout(() => {
      actual = (actual + 1) % palabras.length;
      palabra.textContent = palabras[actual];
      palabra.classList.remove("oculta");
    }, 350);
  }, config.palabraCadaSeg * 1000);
}
