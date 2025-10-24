const colors = [
  { hex: "#4F43AE", rgb: "79,67,174" },
  { hex: "#B861E2", rgb: "184,97,226" },
  { hex: "#E45F8C", rgb: "228,95,140" },
  { hex: "#F26B64", rgb: "242,107,100" },
  { hex: "#F8C54F", rgb: "248,197,79" },
  { hex: "#E8EB4F", rgb: "232,235,79" },
  { hex: "#B1DE54", rgb: "177,222,84" },
  { hex: "#6EDB8F", rgb: "110,219,143" },
  { hex: "#49C9B1", rgb: "73,201,177" },
  { hex: "#42A5D1", rgb: "66,165,209" },
  { hex: "#5876B4", rgb: "88,118,180" },
  { hex: "#745FA6", rgb: "116,95,166" },
  { hex: "#9955A1", rgb: "153,85,161" },
  { hex: "#C54D97", rgb: "197,77,151" },
  { hex: "#F56E76", rgb: "245,110,118" },
  { hex: "#F79B56", rgb: "247,155,86" },
  { hex: "#FFD255", rgb: "255,210,85" },
  { hex: "#76E283", rgb: "118,226,131" },
  { hex: "#5ED1B5", rgb: "94,209,181" },
  { hex: "#52B7D5", rgb: "82,183,213" },
  { hex: "#5ED1B5", rgb: "94,209,181" },
  { hex: "#52B7D5", rgb: "82,183,213" },
  { hex: "#6670AB", rgb: "102,112,171" },
  { hex: "#9E7DB9", rgb: "158,125,185" },
];

const paletteContainer = document.querySelector(".js-palette");
const cardsMarkup = createColorsCardMarkup(colors);

paletteContainer.insertAdjacentHTML("beforeend", cardsMarkup);

paletteContainer.addEventListener("click", onPaletteContainerClick);

function createColorsCardMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return `
    <div class="color-card">
        <div
        class="color-swatch"
        data-hex="${hex}"
        data-rgb="${rgb}"
        style="background-color: ${hex}"
        ></div>
    <div class="color-meta">
        <p>HEX: ${hex}</p>
        <p>RGB: ${rgb}</p>
    </div>
    </div>`;
    })
    .join("");
}

function onPaletteContainerClick(event) {
  const isColorSwatchEl = event.target.classList.contains("color-swatch");

  if (!isColorSwatchEl) {
    return;
  }

  const swatchEl = event.target;
  const parentColorCard = swatchEl.closest(".color-card");

  removeActiveCardClass();
  addActiveCardClass(parentColorCard);
  setBodyColor(swatchEl.dataset.hex);
}

function setBodyColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
  const currentActiveCard = document.querySelector(".color-card.is-active");

  if (currentActiveCard) {
    currentActiveCard.classList.remove("is-active");
  }
}

function addActiveCardClass(card) {
  card.classList.add("is-active");
}
