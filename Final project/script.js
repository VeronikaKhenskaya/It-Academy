
function playVideo(videoDiv) {
    videoDiv.style.width = "700px";
    videoDiv.style.height = "400px";
    videoDiv.style.transform = "translate(-80%,-70%)";
    videoDiv.style.transitionDuration = "1s";
    let videoElement = document.getElementsByTagName("video")[0];
    let playBtn = document.getElementById("playButton");
    let playImg = document.getElementById("playImg");
    let closeBtn = document.getElementById('closeVideo');
    if (videoElement.paused) {
        videoElement.play();
        playImg.style.display = "none";
        closeBtn.style.display = "block";
    } else {
        videoElement.pause();
        playImg.style.display = "block"
    }
}

function closeVideo(videoDiv) {
    let closeBtn = document.getElementById('closeVideo');
    closeBtn.style.display = "none";
    videoDiv.style.width = "300px";
    videoDiv.style.height = "190px";
    videoDiv.style.transform = "translate(0px)";
    videoDiv.style.transitionDuration = "1s";
}

function toggleColor() {
    let c = document.getElementById("circle")
    let e = document.getElementById("heart");
    let checkBoxElement = document.getElementById("checkbox")
    if (checkBoxElement.checked == true) {
        e.style.fill = "#0499DD";
        e.style.stroke = "#0499DD";
        c.style.stroke = "#0499DD";
    } else {
        e.style.fill = "#EDEDED";
        e.style.stroke = "#D4D4D4";
        c.style.stroke = "#D4D4D4";
    }
}


window.onload = function () {
    let wrappers = document.getElementsByClassName("wrapper");
    for (i = 0; i < wrappers.length; i++) {
        sliderOne(wrappers[i]);
        sliderTwo(wrappers[i]);
    }
}
function sliderOne(rangeElement) {
    let displayValues = rangeElement.getElementsByTagName('span');
    let sliders = rangeElement.getElementsByTagName('input');
    if (parseInt(sliders[1].value) - parseInt(sliders[0].value) <= 0) {
        sliders[0].value = parseInt(sliders[1].value);
    }
    displayValues[0].textContent = sliders[0].value;
    let sliderTrack = rangeElement.getElementsByClassName('slider-track')[0];
    fillColor(sliders[0], sliders[1], sliderTrack);
}
function fillColor(sliderOne, sliderTwo, sliderTrack) {
    percent1 = (sliderOne.value / sliderTwo.max) * 100;
    percent2 = (sliderTwo.value / sliderTwo.max) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #0499DD, #0499DD, #dadae5 ${percent2}%)`;
}

function sliderTwo(rangeElement) {
    let displayValues = rangeElement.getElementsByTagName('span');
    let sliders = rangeElement.getElementsByTagName('input');
    if (parseInt(sliders[1].value) - parseInt(sliders[0].value) <= 0) {
        sliders[1].value = parseInt(sliders[0].value);
    }
    displayValues[1].textContent = sliders[1].value;
    let sliderTrack = rangeElement.getElementsByClassName('slider-track')[0];
    fillColor(sliders[0], sliders[1], sliderTrack);
}

function changeButtonColor(button, checkbox) {
    console.log(button);
    let buttons = document.getElementsByClassName('checkbox');
    for (i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = 'white';
    }
    button.style.backgroundColor = "#0499DD";
}

function closeSection() {
    let closeBtn = document.getElementsByClassName('close-btn')[0];
    let openBtn = document.getElementsByClassName('open-btn')[0];
    let sectionToClose = document.getElementsByClassName('costs')[0];
    sectionToClose.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
}

function openSection() {
    let closeBtn = document.getElementsByClassName('close-btn')[0];
    let openBtn = document.getElementsByClassName('open-btn')[0];
    let sectionToOpen = document.getElementsByClassName('costs')[0];
    sectionToOpen.style.display = "block";
    closeBtn.style.display = "block";
    openBtn.style.display = "none";
}
