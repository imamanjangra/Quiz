// let color = document.querySelector("#Box");
// let body = document.querySelector("body");

// let mode = "light";

// color.addEventListener("click", () => {
//     if (mode === "light") {
//         mode = "dark";
//         body.classList.remove("light");
//         body.classList.add("dark");
//         color.classList.remove("light-btn");
//         color.classList.add("dark-btn");
//     } else {
//         mode = "light";
//         body.classList.remove("dark");
//         body.classList.add("light");
//         color.classList.remove("dark-btn");
//         color.classList.add("light-btn");
//     }
// });

// start 

let background_btn = document.querySelector("#Box");
let body = document.querySelector("body");
let nav  = document.querySelector(".nav");
let mode = "light"

 background_btn.addEventListener('click' , ()=>{

if(mode ===  "light"){
    mode = "dark"
    body.style.backgroundColor = "black"
    background_btn.style.color = "#DDDDDD"
    body.style.color = "#DDDDDD"
   nav.style.boxShadow = "0 1px 10px #DDDDDD";

}else{
    mode = "light"
    body.style.backgroundColor = "white"
    background_btn.style.color = "black"
    body.style.color = "black"
    nav.style.boxShadow = "0 1px 10px black";

}
})
