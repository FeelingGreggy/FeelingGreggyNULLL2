// This Is A Comment

const ctx = {
  __click_update: document.getElementById("ClickUPDATE"),
  __clicks: 0,
  get clicks() {
    return this.__clicks;
  },
  set clicks(value) {
    this.__clicks = value;
    this.__click_update.textContent = value;
  }
}

let clickTOTAL = 0;

const GregPIC = document.getElementById("hitMe");
const JPOP = new Audio();
JPOP.src = "./FRENZY.mp3";

const blue = new Audio();
blue.src = "./BLUE.mp3";

const hitmarker = new Audio();
hitmarker.src = "./hitmarker_2.mp3";

inFrenzy = false;

dpsOne = false;


function addClicks(ix) {
  rigged();
  ctx.clicks += ix;
  clickTOTAL++;
  hitmarker.play();
  if (ctx.clicks % 100 == 0) {
    JPOP.play();
    rainbow();
    GregPIC.src = "danceGreg.gif";
    inFrenzy = true;
    ctx.clicks += 2;
  }
}

// Find a one second Greg Noise for later
//Make a Greg gif


let style;
function rainbow() {
  if (style) {
    style.parentNode.removeChild(style);
    style = undefined;
    return;
  }

  style = document.createElement("style");
  style.textContent = `
@keyframes rainbow {
  from { filter: hue-rotate(0deg) saturate(2); }
  to { filter: hue-rotate(360deg) saturate(2); }
}

* {
  animation: rainbow 1s infinite;
}
`;
  document.head.appendChild(style);

}
//Powerups




function DPS1() {
  if (ctx.clicks >= 500) {
    ctx.clicks -= 500;
    dpsOne = true;

    var count = 0;
    let interval = setInterval(() => {
      ctx.clicks += 5;
      if (count == 60) {
        clearInterval(interval);
      }
    }, 1000);
  }
}

function nullAll() {
  rainbow();
  JPOP.pause();
  GregPIC.src = "CLICKER_GREG.PNG";
  blue.pause();
}


function cheat_on_Enter() {
 rigged();
  const val = document.getElementById("passwordBox").value;
  if (val === "DPS1") {
    dpsOne = true
    var count = 0;
    let interval = setInterval(() => {
      ctx.clicks += 5;
      if (count == 60) {
        clearInterval(interval);
      }
    }, 1000);
    fanfare.play();
    document.getElementById("passwordBox").value = "";

  }
  if (val === "inItNull") {
    ctx.clicks += 5000;
    fanfare.play();
    document.getElementById("passwordBox").value = "";
  }

  if (val === "++;") {
    var count = 0;
    let interval = setInterval(() => {
      ctx.clicks += 69;
      if (count == 6000) {
        clearInterval(interval);
      }
    }, 1000);
    fanfare.play();
    document.getElementById("passwordBox").value = "";


  }

  if (val === "frenzy") {
    var count = 0;
    let interval = setInterval(() => {
      ctx.clicks += 100; ;
      if (count == 6000) {
        clearInterval(interval);
      }
    }, 1000);
    fanfare.play();
    JPOP.play();
    rainbow();
    GregPIC.src = "danceGreg.gif";


    document.getElementById("passwordBox").value = "";


  }

  if (val === "omega"){
    var count = 0;
    let interval = setInterval(() => {
      ctx.clicks += 1000; ;
      if (count == 6000) {
        clearInterval(interval);
      }
    }, 1000);
    fanfare.play();
   

  }

  if (val === "blue"){
    blue.play();
    document.getElementById("passwordBox").value = "";
    var acceptItGreg = document.getElementById("hitMe");
    acceptItGreg.src = "./art_greg.jpg";

    var originalColor = document.body.style.backgroundColor;

function flashBlue() {
  var body = document.body;
  if (body.style.backgroundColor === "blue") {
    body.style.backgroundColor = originalColor;
  } else {
    body.style.backgroundColor = "blue";
  }
}

var flashingInterval = setInterval(flashBlue, 500);

setTimeout(function() {
  clearInterval(flashingInterval);
}, 9000);

  }



  else {
    NO.play();
    document.getElementById("passwordBox").value = "";
  }
}


const NO = new Audio();
NO.src = "./talking-ben-sound.mp3";
const fanfare = new Audio("./ffxiv_level_up.mp3");

let klark = document.getElementById("artTeacher").innerHTML;

let klarkScore = 69;
let jeefScore = 45;
var craigScore = 22;

function rigged (){
document.getElementById("changeME").innerHTML = klarkScore += 1000;
document.getElementById("changeME2").innerHTML = jeefScore += 450;
document.getElementById("changeME3").innerHTML = craigScore += 30;
document.getElementById("changeME4").innerHTML = ctx.clicks + 1;
}

function BLAST (){
  if(ctx.clicks >= 25){
    ctx.clicks = ctx.clicks - 25;
    document.getElementById("changeME").innerHTML = klarkScore += -1000;
document.getElementById("changeME2").innerHTML = jeefScore += -450;
document.getElementById("changeME3").innerHTML = craigScore += -30;
neoBLASTER.play();

  }
  else{
    alert("Imagine...");
  }
}

const neoBLASTER = new Audio();
neoBLASTER.src = "./blaster.mp3";

