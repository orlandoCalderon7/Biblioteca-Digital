document.addEventListener("DOMContentLoaded", function () {
  // Navegación entre secciones
  const navItems = document.querySelectorAll("nav li");
  const sections = document.querySelectorAll("main section");

  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Ocultar todas las secciones
      sections.forEach((section) => {
        section.classList.remove("seccion-activa");
        section.classList.add("seccion-oculta");
      });

      // Mostrar la sección correspondiente
      const sectionId = "gestion-" + this.id.replace("nav-", "");
      const section = document.getElementById(sectionId);

      if (section) {
        section.classList.remove("seccion-oculta");
        section.classList.add("seccion-activa");

        // Si es la sección de estadísticas, cargar datos
        if (sectionId === "gestion-estadisticas") {
          cargarEstadisticas();
        }
      } else {
        console.error(`No se encontró la sección con ID: ${sectionId}`);
      }
    });
  });
});

// Función para cargar estadísticas
function cargarEstadisticas() {
  // Simular datos (en una aplicación real, estos vendrían de una API)
  const datos = {
    totalLibros: 125,
    totalUsuarios: 73,
    prestamosActivos: 42,
    prestamosVencidos: 8,
    librosMasPrestados: [
      { titulo: "Cien Años de Soledad", vecesPrestado: 15 },
      { titulo: "1984", vecesPrestado: 12 },
      { titulo: "El Principito", vecesPrestado: 10 },
      { titulo: "Don Quijote de la Mancha", vecesPrestado: 9 },
      { titulo: "La Odisea", vecesPrestado: 7 },
    ],
  };

  // Actualizar contadores
  document.getElementById("total-libros").textContent = datos.totalLibros;
  document.getElementById("total-usuarios").textContent = datos.totalUsuarios;
  document.getElementById("prestamos-activos").textContent =
    datos.prestamosActivos;
  document.getElementById("prestamos-vencidos").textContent =
    datos.prestamosVencidos;

  // Generar gráfico de libros más prestados
  const graficoContainer = document.querySelector(".graficos");
  graficoContainer.innerHTML = "<h3>Libros Más Prestados</h3>";
  const lista = document.createElement("ul");
  lista.style.listStyleType = "none";
  lista.style.padding = "0";

  datos.librosMasPrestados.forEach((libro) => {
    const item = document.createElement("li");
    item.textContent = `${libro.titulo} - ${libro.vecesPrestado} préstamos`;
    lista.appendChild(item);
  });

  graficoContainer.appendChild(lista);
}

// Cargar estadísticas al inicio si la sección está activa
if (
  document
    .getElementById("gestion-estadisticas")
    ?.classList.contains("seccion-activa")
) {
  cargarEstadisticas();
}
