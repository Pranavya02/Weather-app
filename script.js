// Replace with your actual OpenWeatherMap API key
const apiKey = '38f339f624a69a2f33ac328de3c166ca';

// Function to fetch weather data based on city input
function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  const weatherBox = document.getElementById("weatherResult");
  weatherBox.innerHTML = "Loading..."; // Loading indicator

  // API URL with city and API key
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Fetching weather data from OpenWeatherMap API
  fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const { name, main, weather } = data;
      const weatherHTML = `
        <h2>${name}</h2>
        <p><strong>Temperature:</strong> ${main.temp} °C</p>
        <p><strong>Humidity:</strong> ${main.humidity}%</p>
        <p><strong>Condition:</strong> ${weather[0].description}</p>
      `;
      weatherBox.innerHTML = weatherHTML;
    })
    .catch(error => {
      weatherBox.innerHTML = `<span style="color: red;">Error: ${error.message}</span>`;
    });
}
