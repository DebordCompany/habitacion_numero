// cambio de idioma

const idioma = document.querySelector("#switch_selector");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguaje = async (languaje) => {
  const requestJson = await fetch(`/${languaje}.json`);
  const texts = await requestJson.json();

  textsToChange.forEach((element) => {
    const section = element.dataset.section;
    const value = element.dataset.value;
    element.innerHTML = texts[section][value];
  });
};

idioma.addEventListener("change", () => {
  if (idioma.checked) {
    idioma.dataset.languaje = "en";
  } else {
    idioma.dataset.languaje = "es";
  }

  changeLanguaje(idioma.dataset.languaje);
});

// cambio orientación portada para latop
var size = window.matchMedia("(max-width: 768px)")
const portada = document.querySelector("#portada")
function cambio(size) {
  if (size.matches) { 
    portada.src = "/assets/llave_about.png";
  } else {
    portada.src = "/assets/puerta_meta.png";
  }
}
cambio(size) 
size.addListener(cambio) 