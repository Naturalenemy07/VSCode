const c = document.getElementById("gamecanvas");
const ws = c.getContext("2d");
// const button = c.querySelector('gamecanvas');
const cent =  c.width/2;

function drawWelcomeScreen() {
    //draw welcome screen first
    ws.font = '30px serif'
    ws.textAlign = 'center'
    ws.fillText('Welcome to Math Defense!',cent,50)

    // //make button interactable
    // button.addEventListener('click', enterButton()
}

function drawGameBackground() {
    //drawing commands for areas
    ws.rect(0,00,400,450); //playable area
    ws.stroke(); //draws the rectangle
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

drawGameBackground()