const canvas = document.getElementById("gamecanvas");
const c = canvas.getContext("2d");

// Hard Code dimensions
canvas.width = 400;
canvas.height = 600;

//Fill out with black
c.fillRect(0,0,canvas.width,canvas.height);

//Load background
const image = new Image()
image.onload = () => {
    c.drawImage(image,0,0);
}
image.src = 'image/towerDefense.png'

console.log(c);