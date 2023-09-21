function inputSearch(){
    let inputData = document.querySelector(".inputData").value;
    console.log(inputData);
}

function bindEnterKey() {
    document.querySelector(".inputData").addEventListener('keydown', function (enter) {
        if (enter.key === "Enter") {
            console.log(this.value);
        }
    });
};
bindEnterKey();

let todayWeatherIcon = document.querySelector("#todayIcon");
let todayTemperature = document.querySelector(".todayTemperature").innerText;
let placeToSearch = document.querySelector(".location").innerText;
let todaySunsetTime = document.querySelector(".sunset-time").innerText;

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
let annualRain = document.querySelector("#rrainfall-changes").innerText;