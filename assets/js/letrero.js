/* Llena el letrero y la imagen; "10godr" se vuelve un link discreto */
function montarLetrero(config) {
  const nombre = document.getElementById("nombre");

  if (config.enlace) {
    const a = document.createElement("a");
    a.href = config.enlace;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = config.nombre;
    nombre.appendChild(a);
  } else {
    nombre.textContent = config.nombre;
  }

  document.getElementById("lema").textContent = config.lema;
  document.getElementById("imagen").src = config.imagen;
}
