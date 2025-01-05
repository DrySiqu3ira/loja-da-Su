// Detecta o scroll da página e ativa o menu quando a página for rolada
document.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  let menuToggle = document.getElementById("menuToggle");
  let navbar = document.querySelector(".navbar");

  if (scrollPosition > 50) {
    // Quando a página for rolada para baixo
    menuToggle.style.display = "flex"; // Exibe a bolinha do menu
  } else {
    menuToggle.style.display = "none"; // Esconde a bolinha quando no topo
    navbar.classList.remove("menu-active"); // Esconde o menu se ele estava aberto
  }
});

// Abre o menu horizontal ao clicar na bolinha
document.getElementById("menuToggle").addEventListener("click", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("menu-active");
});

// Filtragem de produtos
const filterSelect = document.getElementById("brand-filter");
const productList = document.getElementById("product-list");
const products = document.querySelectorAll(".product-item");

filterSelect.addEventListener("change", function () {
  const selectedBrand = filterSelect.value;

  products.forEach((product) => {
    if (selectedBrand === "all" || product.dataset.brand === selectedBrand) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
