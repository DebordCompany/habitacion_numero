console.log("hola mundo");


const idioma = document.querySelector("#switch_selector");

const textsToChange = document.querySelectorAll('[data-section]')

const changeLanguaje = async languaje=>{

    const requestJson = await fetch(`/${languaje}.json`)
    const texts = await requestJson.json();
    
   /*textsToChange.forEach(element => {
        const section = element.dataset.section;
        const value = element.dataset.value;
        element.innerHTML = texts
        console.log(section, value)

    });*/
    for(const item of textsToChange){
        const section = item.dataset.section;
        const value = item.dataset.value;
        item.textContent = texts[section][value];
        console.log(section, value)
    }


}

idioma.addEventListener("change", ()=>{
   
   if(idioma.checked){
    idioma.dataset.languaje = "en"
   }
   else{
    idioma.dataset.languaje = "es"
   }
    
    changeLanguaje(idioma.dataset.languaje);
})