
function inputSearch() {
  let inputData = document.querySelector(".inputData").value;
  console.log(inputData);
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

let todayWeatherIcon = document.querySelector("#todayIcon");

async function findWeatherData(city) {
  let apikey = "7e4d1602c64a4d064ef336db6d4bdc24"
  let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`);
  let data = await response.json();
  console.log(data);
  document.querySelector(".todayTemperature").innerText = Math.round(data.list[0].main.temp) + "\xB0";
  document.querySelector("#three").innerText = data.list[0].main.humidity + '%';
  document.querySelector("#max-temp-data").innerText = Math.round(data.list[0].main.temp_max) + " \xB0" + "C" ;
  document.querySelector("#min-temp-data").innerText = Math.round(data.list[0].main.temp_min) + " \xB0" + "C";
  document.querySelector(".location").innerText = `${data.city.name}, ${data.city.country}`;
  document.querySelector("#weather-description").innerText = data.list[0].weather[0].description;
  document.querySelector("#nine").innerText = Math.round(data.list[0].wind.speed) + " m/s";

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
  document.querySelector(".sunset-time").innerText = `${formattedTime} \n Sunset time`;
  document.querySelector("#six").innerText = formattedTime;

  let unixTimeSunrise = data.city.sunrise;
  let date1 = new Date(unixTimeSunrise * 1000);
  let sunriseHours = date1.getHours();
  let sunriseMinutes = date1.getMinutes();
  let sunriseFormattedTime = sunriseHours + ':' + sunriseMinutes;
  document.querySelector("#twelve").innerText = sunriseFormattedTime;
}

//let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//let date = new Date();
//let day = weekday[date.getDay()];
//document.querySelector("#today-day").innerText = day;
//console.log(day);

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let d = new Date();
console.log(d);
let dayOfWeek = weekday[d.getDay()];
console.log(dayOfWeek);
//document.querySelector(".week-day").innerText = dayOfWeek;
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

/* function inputSearch() {
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
inputSearch(); */

window.addEventListener('resize', resizeScreen);
function resizeScreen() {
    if (window.innerWidth <= 947) {
      document.getElementsByTagName('header')[0].style.flexDirection = "column"
      document.getElementsByTagName('header')[0].style.width = "100%";
      document.querySelector(".main-table").style.width = "100%";
      document.querySelector(".container").style.width = "100%";
      document.getElementsByTagName('input')[0].style.width = '100%';
      document.getElementsByTagName('h1')[0].style.width = '100%';
      document.getElementsByTagName('h1')[0].style.textAlign = "center";
      document.querySelector(".container").style.gridTemplateColumns = "100%"
      document.querySelector(".container").style.gridTemplateRows = "1fr 1fr 1fr";
      document.querySelector(".container").style.justifyContent = "center";
      document.querySelector(".weather-parameters").style.gridColumn = "1";
      document.querySelector(".weather-parameters").style.gridRow = "1";
      document.querySelector(".max-min-temperature").style.gridColumn = "1";
      document.querySelector(".max-min-temperature").style.gridRow = "2";
      document.querySelector(".forecast-container").style.gridColumn = "1";
      document.querySelector(".forecast-container").style.gridRow = "3";
    } else {
      document.getElementsByTagName('header')[0].style.flexDirection = "row"
      document.getElementsByTagName('header')[0].style.width = "90%";
      document.querySelector(".main-table").style.width = "90%";
      document.querySelector(".container").style.width = "90%";
      document.getElementsByTagName('input')[0].style.width = '80%';
      document.getElementsByTagName('h1')[0].style.width = '';
      document.getElementsByTagName('h1')[0].style.textAlign = "";
      document.querySelector(".container").style.gridTemplateColumns = "50% 50%"
      document.querySelector(".container").style.gridTemplateRows = "100px 100px";
      document.querySelector(".container").style.justifyContent = "";
      document.querySelector(".weather-parameters").style.gridColumn = "1";
      document.querySelector(".weather-parameters").style.gridRow = "1";
      document.querySelector(".max-min-temperature").style.gridColumn = "1";
      document.querySelector(".max-min-temperature").style.gridRow = "2";
      document.querySelector(".forecast-container").style.gridColumn = "2";
      document.querySelector(".forecast-container").style.gridRow = "1/3";
    }

    for(let i=0; i < 5; i++) {
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
        console.log(`${dayOfWeek}, ${todayMonth} ${todayDate}`)
       let dayForecast =  document.getElementsByClassName("day-forecast")[i];
    console.log(dayForecast);
    let weekDayElement = dayForecast.getElementsByClassName("week-day")[0];
      weekDayElement.innerText = `${dayOfWeek}, ${todayMonth} ${todayDate}`
    }
  }




