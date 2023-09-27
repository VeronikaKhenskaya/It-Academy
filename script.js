//let inputData = document.querySelector(".inputData").value;
function inputSearch() {
  let inputData = document.querySelector(".inputData").value;
  console.log(inputData);
  findWeatherData(inputData);
}

function bindEnterKey() {
  document.querySelector(".inputData").addEventListener('keydown', function (enter) {
    if (enter.key === "Enter") {
      inputSearch();
    }
  });
};
bindEnterKey();

let todayWeatherIcon = document.querySelector("#todayIcon");

async function findWeatherData(city) {
  let apikey = "7e4d1602c64a4d064ef336db6d4bdc24"
  let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`);
  let data = await response.json();
  console.log(data);
  document.querySelector(".todayTemperature").innerText = Math.round(data.list[0].main.temp) + '\xB0';
  document.querySelector("#three").innerText = data.list[0].main.humidity + '%';
  //document.querySelector("#todayIcon") = data.list[0].weather[0].icon;
  document.querySelector(".location").innerText = `${data.city.name}, ${data.city.country}`;
  document.querySelector("#weather-description").innerText = data.list[0].weather[0].description;

  let weatherIconCode = data.list[0].weather[0].icon;
  document.querySelector("#weather-icon").src = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`


  let unixTimeSunset = data.city.sunset;
  // Create a new JavaScript Date object based on the timestamp
  // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  let date = new Date(unixTimeSunset * 1000);
  // Hours part from the timestamp
  let sunsetHours = date.getHours();
  // Minutes part from the timestamp
  let sunsetMinutes = date.getMinutes();
  // Will display time in 10:30:23 format
  let formattedTime = sunsetHours + ':' + sunsetMinutes;
  document.querySelector(".sunset-time").innerText = formattedTime;
  document.querySelector("#six").innerText = formattedTime;

  let unixTimeSunrise = data.city.sunrise;
  let date1 = new Date(unixTimeSunrise * 1000);
  let sunriseHours = date1.getHours();
  let sunriseMinutes = date1.getMinutes();
  let sunriseFormattedTime = sunriseHours + ':' + sunriseMinutes;
  document.querySelector("#twelve").innerText = sunriseFormattedTime;
}



let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = new Date();
let day = weekday[date.getDay()];
document.querySelector("#today-day").innerText = day;
console.log(day);

let humidityData = document.querySelector("#three").innerText;
let sunsetTime = document.querySelector("#six").innerText;
let sunriseTime = document.querySelector("#twelve").innerText;
let uvIndex = document.querySelector("#nine").innerText;
let monthlyRain = document.querySelector("#rainfall-data").innerText;
//let annualRain = document.querySelector("#rrainfall-changes").innerText;


//const options = {
//  enableHighAccuracy: true,
// timeout: 5000,
// maximumAge: 0,
//};

//function success(pos) {
//const crd = pos.coords;
//const lat = crd.latitude;
//const lon = crd.longitude;
//console.log("Your current position is:");
// console.log(`Latitude : ${lat}`);
// console.log(`Longitude: ${lon}`);
//}
//function error(err) {
//console.warn(`ERROR(${err.code}): ${err.message}`);
//}
//z = navigator.geolocation.getCurrentPosition(success, error, options);
//console.log(z);

function inputSearch() {
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
inputSearch();





