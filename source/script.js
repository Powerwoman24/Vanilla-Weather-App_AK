function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  console.log(response.data);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windspeedElement = document.querySelector("#windspeed");
  windspeedElement.innerHTML = Math.round(response.data.wind.speed);
  let dtElement = document.querySelector("#dt");
  dtElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "ab20237aa48c3e4dbfd5087d4c74545c";
let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Winterthur&appid=${apiKey}&units=metric`;

axios.get(apiURL).then(displayTemperature);
