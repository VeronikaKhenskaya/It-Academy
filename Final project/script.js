
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
    let videoElement = document.getElementsByTagName("video")[0];
    closeBtn.style.display = "none";
    videoDiv.style.width = "350px";
    videoDiv.style.height = "200px";
    videoDiv.style.transform = "translate(-5px)";
    videoDiv.style.transitionDuration = "1s";
    videoDiv.style.borderRadius = "10px";
}

function toggleColor(heartLabel) {
    let c = heartLabel.getElementsByTagName('circle')[0];
    let heart = heartLabel.getElementsByTagName("path")[0];
    let checkBoxElement = heartLabel.getElementsByTagName("input")[0];
    if (checkBoxElement.checked == true) {
        heart.style.fill = "#0499DD";
        heart.style.stroke = "#0499DD";
        c.style.stroke = "#0499DD";
    } else {
        heart.style.fill = "#EDEDED";
        heart.style.stroke = "#D4D4D4";
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

function closeSection(sectionToClose) {
    let closeBtn = sectionToClose.getElementsByClassName('close-btn')[0];
    let openBtn = sectionToClose.getElementsByClassName('open-btn')[0];
    let filterSection = sectionToClose.getElementsByClassName ('filterSection')[0];
    filterSection.style.display = "none";
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
}

function openSection(sectionToOpen) {
    let closeBtn = sectionToOpen.getElementsByClassName('close-btn')[0];
    let openBtn = sectionToOpen.getElementsByClassName('open-btn')[0];
    let filterSection = sectionToOpen.getElementsByClassName('filterSection')[0];
    filterSection.style.display = "block";
    closeBtn.style.display = "block";
    openBtn.style.display = "none";
}

function renderCarousel() {
    slideDivs = document.getElementById('x');
    x.innerHtml

}
function previousSlide() {
    let slideshowContainer = document.getElementById('x');
    let slides = slideshowContainer.getElementsByTagName('div');
    let firstSlide = slides[0];
    slideshowContainer.removeChild(firstSlide);
    slideshowContainer.appendChild(firstSlide);

}

function nextSlide() {
    let slideshowContainer = document.getElementById('x');
    let slides = slideshowContainer.getElementsByTagName('div');
    let lastSlide = slides[slides.length-1];
     slideshowContainer.removeChild(lastSlide);
    slideshowContainer.insertBefore(lastSlide, slides[0]);
   
    

}

