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
}