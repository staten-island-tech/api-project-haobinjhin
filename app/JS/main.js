import "../CSS/style.css";


const restcountries = "https://restcountries.com/v3.1/all";

const DOM = {
    cardbox: document.getElementById("cardbox"),
    textbreed: document.getElementById("breed"),
    nabtn: document.getElementById("northamerica"),
    sabtn: document.getElementById("southamerica"),
    eubtn: document.getElementById("europe"),
    asibtn: document.getElementById("asia"),
    afibtn: document.getElementById("africa"),
    ocebtn: document.getElementById("oceania"),
    refbtn: document.getElementById("refresh")
}


async function countries(URL){

    try {
        const response = await fetch(URL);
        const countries = await response.json();

        countries.forEach(country => {makecard(country.name.common, country.flags.png)
            
        });
        
        

    } catch (error) {
        console.log("error")
    }
    
}

countries(restcountries)

async function filtercountries(continent){

    try {
        const response = await fetch("https://restcountries.com/v3.1/region/" + continent)
        const countryincont = await response.json();
        DOM.cardbox.innerHTML =""

        countryincont.forEach(country => {makecard(country.name.common, country.flags.png)})


    } catch (error){
        console.log("error")
    }

}




function makecard(name, pic){
    DOM.cardbox.insertAdjacentHTML("beforeend", 
        `<div class = "border-4 border-neutral-950 p4" id ="card"> 
        <h1 class = 'size-[32rem]' id = "name">${name}</h1>
        <img src="${pic}" alt="${name}" class = "image">
        </div>`)

}




DOM.nabtn.addEventListener("click", () => filtercountries("north america"));
DOM.sabtn.addEventListener("click", () => filtercountries("south america"));
DOM.eubtn.addEventListener("click", () => filtercountries("europe"));
DOM.asibtn.addEventListener("click", () => filtercountries("asia"));
DOM.afibtn.addEventListener("click", () => filtercountries("africa"));
DOM.ocebtn.addEventListener("click", () => filtercountries("oceania"));
DOM.refbtn.addEventListener("click", function(){
    DOM.cardbox.innerHTML = ""
    countries(restcountries)

});