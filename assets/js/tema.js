/* Pasa los colores y velocidades de CONFIG a las variables CSS */
function aplicarTema(config) {
  const css = document.documentElement.style;
  const c = config.colores;

  css.setProperty("--obra-amarillo", c.amarillo);
  css.setProperty("--obra-negro", c.negro);
  css.setProperty("--papel", c.papel);
  css.setProperty("--plano", c.plano);
  css.setProperty("--giro", config.balanceoGrados + "deg");
  css.setProperty("--vel-balanceo", config.balanceoSeg + "s");
}
