const canvas = document.getElementById("gamecanvas");
const c = canvas.getContext("2d");

// Hard Code dimensions
canvas.width = 400;
canvas.height = 600;

//Fill out with black
c.fillRect(0,0,canvas.width,canvas.height);

//Load background
const image = new Image();
image.onload = () => {
    animate()
}
image.src = 'image/towerDefense.png'

console.log(c);

//will animate the enemy moving along waypoints
let x = 60;
let y = 40
function animate() {
    //recursively call animate()
    requestAnimationFrame(animate);

    //draw background
    c.drawImage(image,0,0)

    // drawing enemy
    c.fillStyle='red';
    c.fillRect(x,y,30,30);
    x++;
    y++;

}