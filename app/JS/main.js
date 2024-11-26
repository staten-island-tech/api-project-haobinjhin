const URL = "https://dogapi.dog/api/v2/breeds";

const DOM = {
    box: document.getElementById("box"),
    textbreed: document.getElementById("breed"),
}


async function getData(URL){

    try {
        const response = await fetch(URL);
        const dogdata = await response.json();
        console.log(dogdata)
        dogdata.data.forEach(dog => {makecard(dog.attributes.name)
    });

    } catch (error) {
        console.log("error")
    }
    
}

getData(URL)

function makecard(name){
    DOM.box.insertAdjacentHTML("beforeend", 
        `<div class = "card"> 
        <h1>${name}</h1>
        </div>`)

}

