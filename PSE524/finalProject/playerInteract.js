const numButtons = 3;
//function to randomly select button intervals
function buttonRand () {
    var num = Math.floor(Math.random()*numButtons +1);
    var fulltext = '#button' + String(num);
    return [num, fulltext];
};

function eqCorrect () {
    //add money
    currency += 10;
    document.querySelector('#currency').innerHTML = currency;

    //get a new equation
    problem = new ProblemGen;
    var eq = problem.getEquation();
    var equationDisp = String(problem.elementA) + " " + eq[0] + " " + String(problem.elementB) + " =";
    document.querySelector('#equation').innerHTML = equationDisp; 

    // Randomly selects button to put correct answer in
    correctButton = buttonRand();
    var butsel = correctButton[0];
    var butSelTxt = correctButton[1];
    document.querySelector(butSelTxt).innerHTML = eq[1];

    //fills in the rest of the buttons
    var counter = 1;
    const buttonsUsed = [];
    buttonsUsed.push(butsel);

    // Fills in the rest of the buttons with pseudo random numbers
    while (counter < numButtons) {
        var newButSel = buttonRand();
        while (buttonsUsed.includes(newButSel[0])) {
            newButSel = buttonRand();
        }
        buttonsUsed.push(newButSel[0]);
        document.querySelector(newButSel[1]).innerHTML = Math.floor(Math.random()*problem.elementA + Math.random() * 10);
        counter++;
    };
}

// Generates equation and answer, puts equation on screen
problem = new ProblemGen;
var eq = problem.getEquation();
var equationDisp = String(problem.elementA) + " " + eq[0] + " " + String(problem.elementB) + " =";
document.querySelector('#equation').innerHTML = equationDisp;

// Randomly selects button to put correct answer in
correctButton = buttonRand();
var butsel = correctButton[0];
var butSelTxt = correctButton[1];
document.querySelector(butSelTxt).innerHTML = eq[1];

//fills in the rest of the buttons
var counter = 1;
const buttonsUsed = [];
buttonsUsed.push(butsel);

// Fills in the rest of the buttons with pseudo random numbers
while (counter < numButtons) {
    var newButSel = buttonRand();
    while (buttonsUsed.includes(newButSel[0])) {
        newButSel = buttonRand();
    }
    buttonsUsed.push(newButSel[0]);
    document.querySelector(newButSel[1]).innerHTML = Math.floor(Math.random()*problem.elementA + Math.random() * 10);
    counter++;
};

document.getElementById('button1').addEventListener('click', function() {
    // console.log('button1 clicked ' + button1.innerHTML);
    if (button1.innerHTML === eq[1]) {
        eqCorrect();
    }
}
);

document.getElementById('button2').addEventListener('click', function() {
    // console.log('button2 clicked ' + button2.innerHTML);
    if (button2.innerHTML === eq[1]) {
        eqCorrect();
    }
}
);

document.getElementById('button3').addEventListener('click', function() {
    // console.log('button3 clicked ' + button3.innerHTML);
    if (button3.innerHTML === eq[1]) {
        eqCorrect();
    }
}
);