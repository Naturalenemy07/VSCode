const canvas = document.getElementById("gamecanvas");
const c = canvas.getContext("2d");

// Hard Code dimensions
canvas.width = 400;
canvas.height = 600;

//Fill out with black
c.fillRect(0,0,canvas.width,canvas.height);


// Placement tiles (for defense structures)
const placementTilesData2D = []

for (let i = 0; i < placementTilesData.length; i+=20) {
    placementTilesData2D.push(placementTilesData.slice(i, i + 20))
}

const placementTiles = []

placementTilesData2D.forEach((row, y_index) => {
    row.forEach((symbol, x_index) => {
        if (symbol === 5) {
            //add building placement tile here
            placementTiles.push(new PlacementTile({
                position: {
                    x: x_index * 20,
                    y: y_index * 20
                }
            }))
        }
    })
})


//Load background
const image = new Image();
image.onload = () => {
    animate();
}
image.src = 'image/towerDefense.png'


//Create enemies
const enemies = []
for (let i = 1; i < 10; i++) {
    const xOffset = i*30
    enemies.push(new Enemy({
        position: {x: waypoints[0].x - xOffset, y: waypoints[0].y}
    }));
}

const buildings = [];
let activeTile = undefined;



//Animation 
function animate() {
    //recursively call animate()
    requestAnimationFrame(animate);

    //draw background
    c.drawImage(image,0,0);

    //draw enemies
    enemies.forEach(enemy => {
        enemy.update()
    })

    //draw placement tiles
    placementTiles.forEach(tile => {
        tile.update(mouse)
    })

    //buildings
    buildings.forEach(building => {
        building.draw()
    })
}

// Mouse movement
const mouse = {
    x: undefined,
    y: undefined
}

canvas.addEventListener('click', (event) => {
    if (activeTile) {
        buildings.push(new Building({
            position: {
                x: activeTile.position.x,
                y: activeTile.position.y
            }
        }))
    }
    console.log(buildings)
})

window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    // console.log(event)

    for (let i = 0; i < placementTiles.length; i++) {
        const tile = placementTiles[i];
        if (mouse.x > (tile.position.x + 8) && mouse.x < (tile.position.x + tile.size + 8) && 
            mouse.y > (tile.position.y + 8) && mouse.y < (tile.position.y + tile.size + 8)) {
                activeTile = tile;
                break;
            }
    }
})