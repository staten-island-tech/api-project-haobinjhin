const URL = "https://dogapi.dog/api/v2/breeds";

async function getData(URL){
    const response = await fetch(URL);
    console.log(response)
}

getData(URL)