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

function drawWelcomeScreen() {
    //draw welcome screen first
    ws.font = '30px serif'
    ws.textAlign = 'center'
    ws.fillText('Welcome to Math Defense!',canvas.width/2,50)

    // //make button interactable
    // button.addEventListener('click', enterButton()
}

function drawGameBackground() {
    //drawing commands for areas
}

function enterButton() {
    ws.clearRect(0, 0, c.width, c.height)
}

function mouseMoveHandler(e) {
    var relativeX = e.clientX - c.offsetLeft;
    if(relativeX > 0 && relativeX < c.width) {
      return 0;
    }
}

document.addEventListener("mousemove", mouseMoveHandler, false);

console.log(c)