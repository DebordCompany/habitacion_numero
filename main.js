console.log("hola mundo");

const idioma = document.querySelector("#switch_selector");

const textsToChange = document.querySelectorAll('[data-section]')

const changeLanguaje = async languaje=>{

    const requestJson = await fetch(`./assets/languaje/${languaje}.json`)
    const texts = await requestJson.json();
    
   textsToChange.forEach(element => {
        const section = element.dataset.section;
        const value = element.dataset.value;
        element.innerHTML = texts
        console.log(section, value)

    });


}
idioma.addEventListener("change", (e)=>{
   
    if(idioma.checked){
        idioma.dataset.languaje="en"
        changeLanguaje(idioma.dataset.languaje);
        
        
    }
    else{
        idioma.dataset.languaje="es"
        changeLanguaje(idioma.dataset.languaje);
        
    }
    
})