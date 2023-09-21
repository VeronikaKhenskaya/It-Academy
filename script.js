let inputData = document.querySelector(".inputData").value;
console.log(inputData);


function enter() {
    document.querySelector(".inputData").addEventListener('keydown', function (enter) {
        if (enter.key === "Enter") {
            console.log(this.value);
        }
    });
};
enter();

let todayWeatherIcon = document.querySelector("#todayIcon");
let todayTemperature = document.querySelector(".todayTemperature").innerText;
let location = document.querySelector(".location").innerText;
let todaySunsetTime = document.querySelector(".time").innerText;

let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = new Date();
let day = weekday[date.getDay()];
document.querySelector("#today-day").innerText = day;
console.log(day);
