
function inputSearch() {
  let inputData = document.querySelector(".inputData").value;
  findWeatherData(inputData);
  let stored = localStorage.getItem('storageArray');
  let lastSearches;
  if (stored === null) {
    lastSearches = []
  } else {
    lastSearches = JSON.parse(stored)
  }
  if (lastSearches.length >= 10) {
    lastSearches.shift();
  }
  lastSearches.push(document.querySelector(".inputData").value);
  localStorage.setItem('storageArray', JSON.stringify(lastSearches));
  console.log(localStorage.getItem('storageArray'))
}

function bindEnterKey() {
  document.querySelector(".inputData").addEventListener('keydown', function (enter) {
    if (enter.key === "Enter") {
      inputSearch();
    }
  });
};
bindEnterKey();

//let todayWeatherIcon = document.querySelector("#todayIcon");

async function findWeatherData(city) {
  let apikey = "7e4d1602c64a4d064ef336db6d4bdc24"
  let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`);
  let data = await response.json();
  console.log(data);
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

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let d = new Date();
console.log(d);
let dayOfWeek = weekday[d.getDay()];
console.log(dayOfWeek);
let todayDate = d.getDate();
console.log(todayDate);
let todayMonth = months[d.getMonth()];
console.log(todayMonth);
let year = d.getFullYear();
console.log(year);
document.querySelector("#today-day").innerText = `${todayMonth} ${todayDate}`;

let humidityData = document.querySelector("#three").innerText;
let sunsetTime = document.querySelector("#six").innerText;
let sunriseTime = document.querySelector("#twelve").innerText;

/*for (let i = 0; i < 5; i++) {
  let nextDay = new Date();
  nextDay.setDate(nextDay.getDate() + i)
  //console.log(nextDay)
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let dayOfWeek = weekday[nextDay.getDay()];
  //console.log(dayOfWeek)
  let todayDate = nextDay.getDate() - 1;
  //console.log(todayDate);
  let todayMonth = months[nextDay.getMonth()];
  //console.log(todayMonth);
  //console.log(`${dayOfWeek}, ${todayMonth} ${todayDate}`)
  let dayForecast = document.getElementsByClassName("day-forecast")[i];
  //console.log(dayForecast);
  let weekDayElement = dayForecast.getElementsByClassName("week-day")[0];
  //console.log(weekDayElement)
  weekDayElement.textContent = "`${dayOfWeek}, ${todayMonth} ${todayDate}`"
}*/

function setForecastDates() {
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
setForecastDates()








