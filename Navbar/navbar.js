document.addEventListener("DOMContentLoaded", () => {
  const searchToggle = document.querySelector("#search-toggle");
  const searchBarContainer = document.querySelector("#search-bar-container");
  const searchInput = document.querySelector("#search-input");
  const searchButton = document.querySelector("#search-button");
  const cancelSearch = document.querySelector("#cancel-search");

  // Mostrar/ocultar la barra de búsqueda
  searchToggle.addEventListener("click", () => {
    searchBarContainer.classList.toggle("d-none");
    if (!searchBarContainer.classList.contains("d-none")) {
      searchInput.focus(); // Enfoca el input automáticamente
    }
  });

  // Cancelar la búsqueda
  cancelSearch.addEventListener("click", () => {
    searchBarContainer.classList.add("d-none");
    searchInput.value = ""; // Limpia el campo de búsqueda
  });

  // Realizar la búsqueda al hacer clic en el botón o presionar Enter
  const performSearch = () => {
    const query = searchInput.value.trim();
    if (query) {
      console.log(`Buscando: ${query}`);
      // Aquí puedes realizar la lógica de búsqueda, como enviar la consulta al servidor
      alert(`Buscando: ${query}`);
    }
  };

  searchButton.addEventListener("click", performSearch);

  // Presionar Enter para buscar
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      performSearch();
    }
  });
});
