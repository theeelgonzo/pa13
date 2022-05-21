const view = {
    box: document.getElementById("maintext"),
}

const interface = {
    lBut: document.getElementById("pclook"),
    pCan: document.getElementById("pccancel"),
    start: document.getElementById("gamestart"),
}
interface.lBut.addEventListener(type="click", textprint, false);
interface.pCan.addEventListener(type="click", cancel, false);
interface.start.addEventListener(type="click", gameStart, false);

//this projects text to main box...needs parameter to accept input from different buttons/functions
function textprint() {
    const textOne = "You looked at...what? Nothing?";
    view.box.innerText = textOne;
    console.log("Mission Success");
    return 42;
}

function cancel() {
    const zeroText = "";
    view.box.innerText = zeroText;
    console.log("We cleared that shit out, sir!");
}

function hide(element){
    element.style.display = "none"
}

function show(element){
    element.style.display = "block"
}

function gameStart(){
    hide(interface.start);

}

function gameOver(){
    show(interface.start);
}
//base organic life form constructor
function MeatBag(race, name, health, sanity) {
    this.mbRace = race;
    this.mbName = name;
    this.mbHP = health;
    this.mbSan = sanity;
}

const playerChar = new MeatBag("human", "John Doe", 10, 10);
console.log(playerChar);