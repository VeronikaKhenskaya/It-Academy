
const apikey = "7e4d1602c64a4d064ef336db6d4bdc24";

window.onload = async function findWeatherInCurrentLocation() {
  let latitude;
  let longitude;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async function (position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
      let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`);
      let data = await response.json();
      showWeather(data)
    });
  }
}

function getLastStoredSearches() {
  let stored = localStorage.getItem('storageArray');
  let lastSearches;
  if (stored === null) {
    lastSearches = [];
  } else {
    lastSearches = JSON.parse(stored);
  }
  return lastSearches
}

async function inputSearch() {
  let inputData = document.querySelector(".inputData").value;
  showWeather(await findWeatherData(inputData));
  lastSearches = getLastStoredSearches();
  if (lastSearches.length >= 10) {
    lastSearches.shift();
  }
  lastSearches.unshift(inputData);
  localStorage.setItem('storageArray', JSON.stringify(lastSearches));
}


function bindEnterKey() {
  document.querySelector(".inputData").addEventListener('keydown', function (enter) {
    if (enter.key === "Enter") {
      inputSearch();
    }
  });
};
bindEnterKey();

async function findWeatherData(city) {
  let apikey = "7e4d1602c64a4d064ef336db6d4bdc24"
  let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`);
  return await response.json();
}

function showWeather(data) {
  document.querySelector(".todayTemperature").innerText = Math.round(data.list[0].main.temp) + "\xB0";
  document.querySelector("#three").innerText = data.list[0].main.humidity + '%';
  document.querySelector("#max-temp-data").innerText = Math.round(data.list[0].main.temp_max) + " \xB0" + "C";
  document.querySelector("#min-temp-data").innerText = Math.round(data.list[0].main.temp_min) + " \xB0" + "C";
  document.querySelector(".location").innerText = `${data.city.name}, ${data.city.country}`;
  document.querySelector("#weather-description").innerText = data.list[0].weather[0].description;
  document.querySelector("#nine").innerText = Math.round(data.list[0].wind.speed) + " m/s";
  let weatherIconCode = data.list[0].weather[0].icon;
  document.querySelector("#weather-icon").src = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`

  let unixTimeSunset = data.city.sunset;
  let date = new Date(unixTimeSunset * 1000);
  let sunsetHours = date.getHours();
  let sunsetMinutes = date.getMinutes();
  let formattedTime = sunsetHours + ':' + sunsetMinutes;
  document.querySelector(".sunset-time").innerText = `${formattedTime} \n Sunset time`;
  document.querySelector("#six").innerText = formattedTime;

  let unixTimeSunrise = data.city.sunrise;
  let date1 = new Date(unixTimeSunrise * 1000);
  let sunriseHours = date1.getHours();
  let sunriseMinutes = date1.getMinutes();
  let sunriseFormattedTime = sunriseHours + ':' + sunriseMinutes;
  document.querySelector("#twelve").innerText = sunriseFormattedTime;
}


function setDates() {
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let d = new Date();
  let dayOfWeek = weekday[d.getDay()];
  let todayDate = d.getDate();
  let todayMonth = months[d.getMonth()];
  let year = d.getFullYear();
  document.querySelector("#today-day").innerText = `${todayMonth} ${todayDate}`;
  for (let i = 0; i < 5; i++) {
    let nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + i)
    let dayOfWeek = weekday[nextDay.getDay()];
    let todayDate = nextDay.getDate();
    let todayMonth = months[nextDay.getMonth()];
    let dayForecast = document.getElementsByClassName("day-forecast")[i];
    let weekDayElement = dayForecast.firstChild;
    weekDayElement.textContent = `${dayOfWeek} ${todayMonth} ${todayDate}`;
  }
}
setDates()











