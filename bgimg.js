const IMG_NUMBER = 3;
const body = document.querySelector("body");

function loadImage(num) {
    const image = new Image();
    image.src = `image/${num+1}.jpg`
    body.appendChild(image);
    image.className = "backgroundImage";
}


function genRandNumber() {
    const num = Math.floor(Math.random() * IMG_NUMBER);
    return num;
}

function init() {
    loadImage(genRandNumber());
}
init();