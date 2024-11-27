const URL = "https://hp-api.herokuapp.com/api/characters";

const DOM = {
    box: document.querySelector(".box"),
    textbreed: document.getElementById("breed"),
}


async function getData(URL){

    try {
        const response = await fetch(URL);
        const harrydata = await response.json();
        console.log(harrydata[0].image)
        
        harrydata.forEach(wizard => {makecard(wizard.name, wizard.image)})

    } catch (error) {
        console.log("error")
    }
    
}

getData(URL)

function makecard(name, pic){
    DOM.box.insertAdjacentHTML("beforeend", 
        `<div class = "card"> 
        <h1>${name}</h1>
        <img src="${pic}" alt="${name}" class = "image">
        </div>`)

}

