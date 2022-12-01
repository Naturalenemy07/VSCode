const numButtons = 4;
//function to randomly select button intervals
function buttonRand() {
    var num = Math.floor(Math.random()*numButtons +1);
    var fulltext = '#button' + String(num);
    return [num, fulltext];
};

function update() {
    //get a new equation
    problem = new ProblemGen;
    var eq = [];
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
        document.querySelector(newButSel[1]).innerHTML = Math.floor(Math.random()*problem.elementA + Math.random() * 50);
        counter++;
    };

    document.getElementById('button1').addEventListener('click', function() {
        // console.log('button1 clicked ' + button1.innerHTML);
        console.log(eq[1]);
        if (button1.innerHTML === eq[1]) {
            //add money
            currency += 10;
            document.querySelector('#currency').innerHTML = currency;
            update();
        } 
    }
    );
    
    document.getElementById('button2').addEventListener('click', function() {
        // console.log('button2 clicked ' + button2.innerHTML);
        if (button2.innerHTML === eq[1]) {
            //add money
            currency += 10;
            document.querySelector('#currency').innerHTML = currency;
            update();
        } 
        // else {
        //     currency -= 20;
        //     document.querySelector('#currency').innerHTML = currency;
        //     update();
        // }
    }
    );
    
    document.getElementById('button3').addEventListener('click', function() {
        // add money if right
        if (button3.innerHTML === eq[1]) {
            //add money
            currency += 10;
            document.querySelector('#currency').innerHTML = currency;
            update();
        } 
        // else {
        //     currency -= 20;
        //     document.querySelector('#currency').innerHTML = currency;
        //     update();
        // }
    }
    );
    document.getElementById('button4').addEventListener('click', function() {
        // console.log('button3 clicked ' + button3.innerHTML);
        if (button4.innerHTML === eq[1]) {
            //add money
            currency += 10;
            document.querySelector('#currency').innerHTML = currency;
            update();
        } 
        // else {
        //     currency -= 20;
        //     document.querySelector('#currency').innerHTML = currency;
        //     update();
        // }
    }
    );
}

update();