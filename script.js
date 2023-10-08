const apikey = "7e4d1602c64a4d064ef336db6d4bdc24";
//находит текущее местоположение и загружает погодные данные текущего местоположения
window.onload = async function findWeatherInCurrentLocation() {
  let latitude;
  let longitude;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async function (position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`);
      let data = await response.json();
      showWeather(data)
      weatherByDate(data).forEach(displayForecastWeather);
    })
  }
}

function weatherByDate(data) {
  let forecastWeatherDataArray = data.list.filter(element => new Date([element.dt] * 1000).getHours() < 13);
  //console.log(forecastWeatherDataArray);
  let dateToWeather = new Map(forecastWeatherDataArray.map(getForecastWeatherData));
  function getForecastWeatherData(weather) {
    for (i = 0; i < forecastWeatherDataArray.length; i++) {
      return [new Date(weather.dt * 1000).toDateString(), [weather.main.temp, weather.weather[0].icon]];
    }
  }
  console.log(dateToWeather)
  return dateToWeather
}



function displayForecastWeather(value, key, map) {
  let forecastContainer = document.querySelector(".forecast-container");
  let dailyForecast = forecastContainer.appendChild(document.createElement('div'));
  dailyForecast.className = "day-forecast-container";
  let forecastDate = dailyForecast.appendChild(document.createElement('div'));
  forecastDate.className = "forecast-date";
  forecastDate.textContent = key;
  let forecastIcon = dailyForecast.appendChild(document.createElement('img'));
  forecastIcon.className = "forecast-icon";
  forecastIcon.src = `https://openweathermap.org/img/wn/${value[1]}@2x.png`;
  let forecastTemperature = dailyForecast.appendChild(document.createElement('div'));
  forecastTemperature.className = "forecast-temperature";
  forecastTemperature.textContent = Math.round(value[0]) + " \xB0" + "C";
}


//вычисляет и отображает текущую дату, месяц и следующие пять дней
function setDates() {
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let d = new Date();
  let dayOfWeek = weekday[d.getDay()];
  let todayDate = d.getDate();
  let todayMonth = months[d.getMonth()];
  let year = d.getFullYear();
  document.querySelector("#today-day").innerText = `${todayMonth} ${todayDate}`;
}
setDates()

//показывает найденные погодные данные
function showWeather(data) {
  document.querySelector(".todayTemperature").innerText = Math.round(data.list[0].main.temp) + "\xB0";
  document.querySelector("#humidity-data").innerText = data.list[0].main.humidity + '%';
  document.querySelector("#max-temp-data").innerText = Math.round(data.list[0].main.temp_max) + " \xB0" + "C";
  document.querySelector("#min-temp-data").innerText = Math.round(data.list[0].main.temp_min) + " \xB0" + "C";
  document.querySelector(".location").innerText = `${data.city.name}, ${data.city.country}`;
  document.querySelector("#weather-description").innerText = data.list[0].weather[0].description;
  document.querySelector("#wind-data").innerText = Math.round(data.list[0].wind.speed) + " m/s";
  let weatherIconCode = data.list[0].weather[0].icon;
  document.querySelector("#weather-icon").src = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;
  document.querySelector(".inputData").value = `${data.city.name}`;
  // вычисляет и показывает время заката
  let unixTimeSunset = data.city.sunset;
  let date = new Date(unixTimeSunset * 1000);
  let sunsetHours = date.getHours();
  let sunsetMinutes = date.getMinutes();
  let formattedTime = sunsetHours + ':' + sunsetMinutes;
  document.querySelector(".sunset-time").innerText = `${formattedTime} \n Sunset time`;
  document.querySelector("#sunset-data").innerText = formattedTime;
  // вычисляет и показывает время рассвета
  let unixTimeSunrise = data.city.sunrise;
  let date1 = new Date(unixTimeSunrise * 1000);
  let sunriseHours = date1.getHours();
  let sunriseMinutes = date1.getMinutes();
  let sunriseFormattedTime = sunriseHours + ':' + sunriseMinutes;
  document.querySelector("#sunrise-data").innerText = sunriseFormattedTime;
}

//вызывает функции поиска погодных данных по введенному городу в input и сохраняет данные поиска в localStorage
async function inputSearch() {
  let inputData = document.querySelector(".inputData").value;
  showWeather(await findWeatherData(inputData));
  lastSearches = getLastStoredSearches();
  if (lastSearches.length >= 10) {
    lastSearches.pop
      ();
  }
  if (!lastSearches.includes(inputData)) {
    lastSearches.unshift(inputData);
    localStorage.setItem('storageArray', JSON.stringify(lastSearches));
  }
  for (i = 0; i < lastSearches.length; i++) {
    if (lastSearches[i] === inputData) {
      lastSearches.splice(i, 1);
      lastSearches.unshift(inputData);
      localStorage.setItem('storageArray', JSON.stringify(lastSearches));
    }
  }
}

//вызывает функцию inputSearch по нажатию на "Enter"
function bindEnterKey() {
  document.querySelector(".inputData").addEventListener('keydown', function (enter) {
    if (enter.key === "Enter") {
      inputSearch();
    }
  });
};
bindEnterKey();

//загружает данные погоды с помощью api
async function findWeatherData(city) {
  let apikey = "7e4d1602c64a4d064ef336db6d4bdc24"
  let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`);
  return await response.json();
}

//возвращает массив данных поиска из localStorage
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