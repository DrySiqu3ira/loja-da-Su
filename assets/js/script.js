const products = [
  {
    brand: "Shein",
    name: "Kit 3 Short Tactel Bermuda Praia Skate Trieno 7 NEW YORK Oferta",
    image: "./img/shein/shein-1.jpeg",
    link: "https://br.shein.com/Kit-3-Short-Tactel-Bermuda-Beach-Skate-Trieno-7-NEW-YORK-Offer-p-55745190.html?mallCode=2&imgRatio=3-4",
  },
  {
    brand: "Shein",
    name: "Amo&Tiamo Sutiã Esportivo com bojo Confortável Ideal Para Mulheres /fitness/Yoga/Esportes/ Top",
    image: "./img/shein/shein-2.jpeg",
    link: "https://br.shein.com/Women-Bras-Bralettes-p-30128498.html?mallCode=2&imgRatio=3-4",
  },
];

const productsContainer = document.getElementById("products");

function renderProducts(filter = "all") {
  productsContainer.innerHTML = "";
  const filtered =
    filter === "all" ? products : products.filter((p) => p.brand === filter);
  filtered.forEach((p) => {
    const productEl = document.createElement("div");
    productEl.className = "product";
    productEl.innerHTML = `
      <div class="rounded-xl shadow-lg p-4" style="background-color: rgba(255, 255, 255, 0.5);">
        <img src="${p.image}" alt="${p.name}" class="w-full h-48 object-contain rounded bg-gray-100">
        <h3 class="text-lg font-semibold mt-2">${p.name}</h3>
        <a href="${p.link}" target="_blank" rel="noopener noreferrer"
           class="mt-4 inline-block bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition">
          Ver mais
        </a>
      </div>
    `;
    productsContainer.appendChild(productEl);
  });
}

renderProducts();

document.querySelectorAll(".filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    const brand = button.getAttribute("data-brand");
    document
      .querySelectorAll(".filter-button")
      .forEach((btn) => btn.classList.remove("bg-pink-100"));
    button.classList.add("bg-pink-100");
    renderProducts(brand);
  });
});

// Carrossel automático
const carousel = document.getElementById("carousel");
let index = 0;
const totalImages = carousel.children.length; // Número total de imagens
setInterval(() => {
  index = (index + 1) % totalImages; // Avança para a próxima imagem
  carousel.style.transform = `translateX(-${index * 100}%)`; // Move o carrossel
}, 4000);
