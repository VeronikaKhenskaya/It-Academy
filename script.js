function search() {
    let searchLocation = document.querySelector(".search").value;
    console.log(searchLocation);
}

function enter() {
    document.querySelector(".search").addEventListener('keydown', function (enter) {
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

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date();
let day = weekday[date.getDay()];
document.querySelector("#today-day").innerText = day;
console.log(day);
