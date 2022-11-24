class PlacementTile {
    constructor({position = {x:0, y:0}}) {
        this.position = position
        this.size = 20
        this.color = 'rgba(255, 255, 255, 0.2)'
    }

    draw() {
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.size, this.size)
    }

    //mouse 
    update() {
        this.draw();
        // add 8 for the offset on screen
        if (mouse.x > (this.position.x + 8) && mouse.x < (this.position.x + this.size + 8) && 
            mouse.y > (this.position.y + 8) && mouse.y < (this.position.y + this.size + 8)) {
                // console.log('colliding with placement tile')
                this.color = 'white';
            }
        else this.color = 'rgba(255, 255, 255, 0.2)'

    }
}

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

class Building {
    constructor({position = {x: 0, y: 0}}) {
        this.position = position;
    }

    draw() {
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, 20,20);
    }
}