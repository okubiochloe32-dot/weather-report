const weatherInput = document.querySelector("#weatherInput");
const searchBtn = document.querySelector("#searchButton");
const weatherReport = document.querySelector("#weatherReport");
const myApiKey = "a2b814ab478b4ccdbca215217252011";

function clearInputScreen() {
  weatherInput.value = "";
}

async function fetchWeather(city) {
  if (!city.trim()) {
    weatherReport.innerHTML = "Please enter a city name.";
    return;
  }
  try {
    const result = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${myApiKey}&q=${encodeURIComponent(city)}&aqi=no`
    );


    if (result.status === 200) {
      const data = await result.json();
      console.log(data);

      weatherReport.innerHTML = `In ${city} located in ${data.location.country}, the temperature is ${data.current.temp_c}°, the humidity is ${data.current.humidity}%.
            The latitude and longitude are ${data.location.lat} and ${data.location.lon} respectively.
            We also have our weather conditions to be on ${data.current.condition.text}`;

      clearInputScreen();
    }
  } catch (error) {
    console.log(error);
  }
}

searchBtn.addEventListener("click", () => {
  const city = weatherInput.value;
  fetchWeather(city);
});



