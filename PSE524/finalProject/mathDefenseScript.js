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
    animate();
}
image.src = 'image/towerDefense.png'

//Class for enemies
class Enemy {
    //construct enemy with position and dimensions
    constructor({position = {x: 0, y: 0}}) {
        this.position = position
        this.width = 20;
        this.height = 20;
    } 

    //draw enemy
    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x,this.position.y,this.width, this.height);
    }

    //update enemy properties, call draw each time
    update() {
        this.draw();
        this.position.x += 1;
    }
}

//create enemies
const enemy1 = new Enemy({position: {x: 20, y: 40}})
const enemy2 = new Enemy({position: {x: 25, y: 60}})

//will animate the enemy moving along waypoints
function animate() {
    //recursively call animate()
    requestAnimationFrame(animate);

    //draw background
    c.drawImage(image,0,0);

    //draw enemies
    enemy1.update()
    enemy2.update()
}