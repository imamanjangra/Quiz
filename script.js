
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
