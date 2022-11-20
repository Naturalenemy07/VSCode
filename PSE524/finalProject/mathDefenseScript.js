const canvas = document.getElementById("gamecanvas");
const c = canvas.getContext("2d");

// Hard Code dimensions
canvas.width = 400;
canvas.height = 600;

//Fill out with black
c.fillRect(0,0,canvas.width,canvas.height);

console.log(placementTilesData)

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
        this.waypointIndex = 0;
        this.center = {
            x: this.position.x + this.width/2,
            y: this.position.y + this.height/2
        };
    } 

    //draw enemy
    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x,this.position.y,this.width, this.height);
    }

    //update enemy properties, call draw each time
    update() {
        this.draw();
        
        // updating x and y positions based on angle between current position and waypoint
        const toWaypoint = waypoints[this.waypointIndex];
        const xDist = toWaypoint.x - this.center.x;
        const yDist = toWaypoint.y - this.center.y;
        const angle = Math.atan2(yDist,xDist);

        this.position.x += Math.cos(angle)/2;
        this.position.y += Math.sin(angle)/2;

        this.center = {
            x: this.position.x + this.width/2,
            y: this.position.y + this.height/2
        }

        if (
            Math.round(this.center.x) === Math.round(toWaypoint.x) && 
            Math.round(this.center.y) === Math.round(toWaypoint.y) &&
            this.waypointIndex < waypoints.length - 1
        ) {
            this.waypointIndex++;
        }
    }
}

//create enemies
const enemies = []
for (let i = 1; i < 10; i++) {
    const xOffset = i*30
    enemies.push(new Enemy({
        position: {x: waypoints[0].x - xOffset, y: waypoints[0].y}
    }));
}

//will animate the enemy moving along waypoints
function animate() {
    //recursively call animate()
    requestAnimationFrame(animate);

    //draw background
    c.drawImage(image,0,0);

    //draw enemies
    enemies.forEach(enemy => {
        enemy.update()
    })
}