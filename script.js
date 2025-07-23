
// start 

let background_btn = document.querySelector("#Box");
let body = document.querySelector("body");
let nav  = document.querySelector(".nav");
let btn =  document.getElementById("btn")
let creat_link2 = document.getElementById("creat_link2");
let creat_link1 = document.getElementById("creat_link1");
let mode = "light"

//------------------------copy code ---------------------------
// BUBBLE ANIMATION BACKGROUND
const canvas = document.getElementById('bubble-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const bubbles = [];

function createBubble() {
    return {
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 100,
        radius: Math.random() * 6 + 2,
        speed: Math.random() * 1 + 0.5,
        alpha: Math.random() * 0.5 + 0.5
    };
}

// Create initial bubbles
for (let i = 0; i < 50; i++) {
    bubbles.push(createBubble());
}

function drawBubbles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bubbles.forEach((bubble) => {
        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(150, 100, 255, ${bubble.alpha})`; // Light purple bubbles
        ctx.fill();
        bubble.y -= bubble.speed;
        if (bubble.y < -bubble.radius) {
            Object.assign(bubble, createBubble(), { y: canvas.height + bubble.radius });
        }
    });
    requestAnimationFrame(drawBubbles);
}
drawBubbles();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
// --------------------------end------------------------------

 background_btn.addEventListener('click' , ()=>{

if(mode ===  "light"){
    mode = "dark"
    body.style.backgroundColor = "black"
    localStorage.setItem("theam" , "dark");

    background_btn.style.color = "#DDDDDD"
    body.style.color = "#DDDDDD"
    creat_link2.style.color = "#DDDDDD"
    creat_link1.style.color = "#DDDDDD"
   nav.style.boxShadow = "0 1px 10px #DDDDDD";
   btn.style.boxShadow = "0 1px 10px #DDDDDD";


}else{
    mode = "light"
    localStorage.getItem("them" , "light");
    body.style.backgroundColor = "white"
    background_btn.style.color = "black"
    body.style.color = "black"
    nav.style.boxShadow = "0 1px 10px black";
    creat_link2.style.color = "black"
    creat_link1.style.color = "black"
    btn.style.boxShadow = "0 1px 10px black";

}
})
