const weatherInput = document.querySelector("#weatherInput");
const searchBtn = document.querySelector("#searchButton");
const weatherReport = document.querySelector("#weatherReport");
const myApiKey = "a2b814ab478b4ccdbca215217252011";


function clearInputScreen() {
    weatherInput.value = "";
}

async function fetchWeather(city) {
    try {
        const result = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=${myApiKey}&q=${city}&aqi=no`
        );
        
        if (result.status === 200) {
            const data = await result.json();
            console.log(data);

            weatherReport.innerHTML = `In ${city}, the temperature is ${data.current.temp_c}° and the humidity is ${data.current.humidity}%`;

            clearInputScreen();
        }
    } catch (error) {
        console.log(error)
    }
}

searchBtn.addEventListener("click", () => {
    const city = weatherInput.value;
    fetchWeather(city);
});