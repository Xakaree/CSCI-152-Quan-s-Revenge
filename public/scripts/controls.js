/*
control mapping
  -set values equal to the keycode of the desired key
  -pass as parameter when creating player
*/

var defaultcontrols = {  //player controls are set to this if no controls passed in
    left: null,
    right: null,
    up: null,
    down: null,
    jump: null,
    attack: null
}

function mobile(id) {
    this.left = [id, 3];
    this.right = [id, 1];
    this.up = [id, 0];
    this.down = [id, 2];
    this.attack = [id, 4];
    this.jump = [id, 5];
}

var p1controls = { //Default Player 1 Controls
    left: 37,   //left arrow
    right: 39,  //right arrow
    up: 38,     //up arrow
    down: 40,   //down arrow
    jump: 67,   //up arrow
    attack: 32  //spacebar
}

var p2controls = { //Default Player 2 Controls
    left: 65,   //a
    right: 68,  //d
    up: 87,     //w
    down: 83,   //s
    jump: 87,   //w
    attack: 90
}

var p3controls = {  //Default Player 3 Controls
    left: null,
    right: null,
    up: null,
    down: null,
    jump: null,
    attack: null
}

var p4controls = {  //Default Player 4 Controls
    left: null,
    right: null,
    up: null,
    down: null,
    jump: null,
    attack: null
}

var econtrols = []; //external controls (phone)
var pcontrols = [];
pcontrols.push(p1controls);
pcontrols.push(p2controls);
//pcontrols.push(p3controls);
//pcontrols.push(p4controls);

if(localStorage.p1left == undefined) {
    console.log("creating new local pcontrols")
    storeLocalControls();
}
else {
    console.log("loading local pcontrols")
    loadLocalControls();
}


function storeLocalControls() {
    localStorage.p1left = pcontrols[0].left;
    localStorage.p1right = pcontrols[0].right;
    localStorage.p1up = pcontrols[0].up;
    localStorage.p1down = pcontrols[0].down;
    localStorage.p1jump = pcontrols[0].jump;
    localStorage.p1attack = pcontrols[0].attack;

    localStorage.p2left = pcontrols[1].left;
    localStorage.p2right = pcontrols[1].right;
    localStorage.p2up = pcontrols[1].up;
    localStorage.p2down = pcontrols[1].down;
    localStorage.p2jump = pcontrols[1].jump;
    localStorage.p2attack = pcontrols[1].attack;

    /*localStorage.p3left = pcontrols[2].left;
    localStorage.p3right = pcontrols[2].right;
    localStorage.p3up = pcontrols[2].up;
    localStorage.p3down = pcontrols[2].down;
    localStorage.p3jump = pcontrols[2].jump;
    localStorage.p3attack = pcontrols[2].attack;

    localStorage.p4left = pcontrols[3].left;
    localStorage.p4right = pcontrols[3].right;
    localStorage.p4up = pcontrols[3].up;
    localStorage.p4down = pcontrols[3].down;
    localStorage.p4jump = pcontrols[3].jump;
    localStorage.p4attack = pcontrols[3].attack;*/
}

function loadLocalControls() {
    //pcontrols = localStorage.pcontrols;
    pcontrols[0].left = localStorage.p1left;
    pcontrols[0].right = localStorage.p1right
    pcontrols[0].up = localStorage.p1up;
    pcontrols[0].down = localStorage.p1down;
    pcontrols[0].jump = localStorage.p1jump;
    pcontrols[0].attack = localStorage.p1attack;

    pcontrols[1].left = localStorage.p2left;
    pcontrols[1].right = localStorage.p2right
    pcontrols[1].up = localStorage.p2up;
    pcontrols[1].down = localStorage.p2down;
    pcontrols[1].jump = localStorage.p2jump;
    pcontrols[1].attack = localStorage.p2attack;

    /*pcontrols[2].left = localStorage.p3left;
    pcontrols[2].right = localStorage.p3right
    pcontrols[2].up = localStorage.p3up;
    pcontrols[2].down = localStorage.p3down;
    pcontrols[2].jump = localStorage.p3jump;
    pcontrols[2].attack = localStorage.p3attack;

    pcontrols[3].left = localStorage.p4left;
    pcontrols[3].right = localStorage.p4right
    pcontrols[3].up = localStorage.p4up;
    pcontrols[3].down = localStorage.p4down;
    pcontrols[3].jump = localStorage.p4jump;
    pcontrols[3].attack = localStorage.p4attack;*/
}
