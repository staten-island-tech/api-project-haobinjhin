const URL = "https://dogapi.dog/api/v2/breeds";

DOM = {
    textbreed: document.getElementById("breed/")
}


async function getData(URL){

    try {
        const response = await fetch(URL);
        const data = await response.json();
        if (document.getElementById("breed").textContent = "Caucasian Shepherd Dog")
            {document.getElementById("api-response").textContent = data.data[0].attributes.description}
        console.log(data.data[1].attributes.description)
    } catch (error) {
        console.log("error")
    }
    
}


getData(URL)