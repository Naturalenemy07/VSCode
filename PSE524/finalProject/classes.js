// Class to mark locations where a building can be built
class PlacementTile {
    constructor({position = {x:0, y:0}}) {
        this.position = position;
        this.size = 20;
        this.color = 'rgba(255, 255, 255, 0.2)';
        this.occupied = false
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

// Class for enemies
class Enemy {
    //construct enemy with position and dimensions
    constructor({position = {x: 0, y: 0}}, speed) {
        this.position = position
        this.width = 20;
        this.radius = this.width / 2;
        this.height = 20;
        this.health = 100;
        this.waypointIndex = 0;
        this.enemySpeedConst = speed;
        this.center = {
            x: this.position.x + this.width/2,
            y: this.position.y + this.height/2
        };
        this.velocity = {
            x: 0,
            y: 0
        }
    } 

    //draw enemy
    draw() {
        c.fillStyle = 'red';
        // c.fillRect(this.position.x,this.position.y,this.width, this.height);
        c.beginPath();
        c.arc(this.center.x, this.center.y, this.radius, 0, 2* Math.PI);
        c.fill()

        //health bar of enemy
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y-7, this.width, 5)
        c.fillStyle = 'green'
        c.fillRect(this.position.x, this.position.y-7, this.width * (this.health / 100), 5)
    }

    //update enemy properties, call draw each time
    update() {
        this.draw();
        
        // updating x and y positions based on angle between current position and waypoint
        const toWaypoint = waypoints[this.waypointIndex];
        const xDist = toWaypoint.x - this.center.x;
        const yDist = toWaypoint.y - this.center.y;
        const angle = Math.atan2(yDist,xDist);

        this.velocity.x = this.enemySpeedConst * Math.cos(angle)/2;
        this.velocity.y = this.enemySpeedConst * Math.sin(angle)/2;
        
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        this.center = {
            x: this.position.x + this.width/2,
            y: this.position.y + this.height/2
        }

        // sets the waypoint the enemy travels to
        if (
            Math.abs(Math.round(this.center.x) - Math.round(toWaypoint.x)) < Math.abs(this.velocity.x * 3) && 
            Math.abs(Math.round(this.center.y) - Math.round(toWaypoint.y)) < Math.abs(this.velocity.y * 3) &&
            this.waypointIndex < waypoints.length - 1
        ) {
            this.waypointIndex++;
        }
    }
}

class Projectile {
    constructor({position = {x: 0, y: 0}, enemy}) {
        this.position = position;
        this.radius = 3
        this.velocity = {
            x: 0,
            y: 0
        }
        this.enemy = enemy
        this.projectile_velocity_const = 4
    }

    draw() {
        c.beginPath();
        c.arc(this.position.x, this.position.y, this.radius, 0, 2*Math.PI);
        c.fillStyle = 'orange';
        c.fill();
    }

    update() {
        this.draw()

        const angle = Math.atan2(
            this.enemy.center.y - this.position.y, 
            this.enemy.center.x - this.position.x
        )

        this.velocity.x = this.projectile_velocity_const*Math.cos(angle);
        this.velocity.y = this.projectile_velocity_const*Math.sin(angle);

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}

// Class that 
class Building {
    constructor({position = {x: 0, y: 0}}) {
        this.position = position;
        this.width = 20;
        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.width / 2
        };
        this.projectiles = [];
        this.range = 70;
        this.target
        this.firerate = 50;
        this.frames = 0;
        this.building_level = 1;
    }

    draw() {
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, this.width, this.width);
    }

    update() {
        this.draw();
        this.frames++;
        if (this.frames % this.firerate === 0 && this.target) {
            this.projectiles.push(
                new Projectile({
                    position: {
                        x: this.center.x,
                        y: this.center.y
                    },
                    enemy: this.target
                })
            )
        }
    }
}

// Class to generate problems
class ProblemGen {
    constructor() {
        this.elementA = 0;
        this.elementB = 0;
        this.difficultConst = 10;
    }

    // generate random numbers between 1 and 10 for the equation generator
    randomGen() {
        return Math.floor(Math.random() * this.difficultConst) + 1;
    }


    getEquation() {
        this.elementA = this.randomGen();
        this.elementB = this.randomGen();

        // console.log(this.elementA, this.elementB);

        var ans;
        const operators = ['+','-','x'];
        const map = {
            '+': ans = this.elementA + this.elementB,
            '-': ans = this.elementA - this.elementB,
            'x': ans = this.elementA * this.elementB
        }

        const thisOperator = operators[Math.floor(Math.random()*operators.length)]
        const answer = map[thisOperator]
        return [thisOperator, String(answer)]
    }

}