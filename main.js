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
if(idioma){
  idioma.addEventListener("change", () => {
  if (idioma && idioma.checked) {
    idioma.dataset.languaje = "en";
  } else {
    idioma.dataset.languaje = "es";
  }

  changeLanguaje(idioma.dataset.languaje);

});
function inclusionTextos(){
  changeLanguaje(idioma.dataset.languaje);
}
inclusionTextos()
}


// pintar textos desde json




// cambio orientación portada para latop
var size = window.matchMedia("(max-width: 768px)")
const portada = document.querySelector("#portada")
function cambio(size) {
  if (size.matches) { 
    portada.src = "/assets/plano_vertical.jpg";
  } else {
    portada.src = "/assets/plano.jpeg";
  }
}
cambio(size) 
size.addListener(cambio) 