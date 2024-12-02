import "../CSS/style.css";


const URL = "https://restcountries.com/v3.1/all";

const DOM = {
    cardbox: document.querySelector(".cardbox"),
    textbreed: document.getElementById("breed"),
}


async function getData(URL){

    try {
        const response = await fetch(URL);
        const flagdata = await response.json();

        flagdata.forEach(flag => { makecard(flag.name.common, flag.flags.png)
            
        });
        
        

    } catch (error) {
        console.log("error")
    }
    
}

getData(URL)

function makecard(name, pic){
    DOM.cardbox.insertAdjacentHTML("beforeend", 
        `<div class = "card"> 
        <h1>${name}</h1>
        <img src="${pic}" alt="${name}" class = "image">
        </div>`)

}

