const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const image = new Image();

image.onload = function() {
    // Once the image is loaded, draw it on the canvas
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
};

// Set the image source to the path of your image
image.src = '/Images/Portfolio3.jpg';