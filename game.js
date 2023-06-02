//This is a comment


const techno = new Audio();
techno.src = "./TECHNO.mp3";

const gunSounds = [
    new Audio("./bangBang.mp3"),
    new Audio("./bangBang.mp3"),
    new Audio("./bangBang.mp3"),
    new Audio("./bangBang.mp3"),
    new Audio("./bangBang.mp3"),
    new Audio("./bangBang.mp3"),
    new Audio("./bangBang.mp3"),
    new Audio("./bangBang.mp3"),
    new Audio("./bangBang.mp3"),
    new Audio("./bangBang.mp3"),
    new Audio("./bangBang.mp3"),

]

let gunSoundIndex = 0;
function playGunSound() {
    gunSounds[gunSoundIndex++ % gunSounds.length].play();
}

 /*document.addEventListener('click', function() {
    techno.play();
  }, { once: true });
  
*/

const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let mx = 0, my = 0;
let px = 10;
let py = 10;

ctx.fillStyle = "rgb(200,2,69)";

window.addEventListener("keydown", onKeyDown);
window.addEventListener("keyup", onKeyUp);

function onKeyDown(event) {
    if (event.repeat) return;
    keyLogic(event.key.toLowerCase(), true)
}

function onKeyUp(event) {
    keyLogic(event.key.toLowerCase(), false)
}

function keyLogic(key, isDown) {
    const amt = isDown ? 5 : 0;

    if (key == "w") my = -amt;
    else if (key == "s") my = amt;
    if (key == "a") mx = -amt;
    else if (key == "d") mx = amt;
}

window.addEventListener("keydown", fire)

let bullets = [];
function fire (ev) {
    if (ev.key != " ") return;

    if (bullets.length <= 3) {
        playGunSound();
        bullets.push([px, py + 20]);
    }
}

let c;
requestAnimationFrame(c = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    px += mx;
    py += my;

    if (px < 0) px = 0;
    else if (px + 40 > canvas.width) px = canvas.width - 40;
    if (py < 0) py = 0;
    else if (py + 40 > canvas.height) py = canvas.height - 40;

    ctx.fillRect(px, py, 40, 40);

    for (let i = 0; i < bullets.length; i++) {
        const bullet = bullets[i];

        bullet[0] += 10;
        if (bullet[0] > canvas.width) {
            bullets.splice(i, 1);
        } else {
            ctx.fillRect(bullet[0], bullet[1], 75, 5);
        }
    }

    // ctx.beginPath();
    // ctx.moveTo(50,50);
    // ctx.lineTo(450,450);
    // ctx.lineWidth = 45;
    ctx.fillStyle = "magenta";
    // ctx.stroke();
    ctx.fillRect(canvas.width - 50, canvas.height - 50, 40, 40);
    ctx.fillStyle = "lime";
    // ctx.closePath();

    requestAnimationFrame(c);
});

//THANK YOU QUINTIN - Colin

//Quentin 5/19/2023 10:50 AM

var path = "newArtGreg.png";

function neoArt (){
    document.getElementById("canvas-wrapper").style.backgroundImage = "url('./newArtGreg.png')";
}

const metalMusic = new Audio();
metalMusic.src = "./HeavyMetal.mp3";

//RustBelt

function testYourMetal (){
    metalMusic.play();
    techno.pause();
}
