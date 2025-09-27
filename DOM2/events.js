// let btn = document.querySelector("button");
// console.dir(btn);  // This works only on a single button

// btn.onclick = function (){
// console.log("button was clicked")
// alert("Namste UFC")
// }

// function sayhello(){
//     alert("Hello");
// }

// btn.onclick = sayhello;

// let btns = document.querySelectorAll("button"); // used for multiple button
// for(btn of btns){
//     // btn.onclick = like; // for multiple buttons
//     btn.onmouseenter = function(){
//         console.log("you entered a button")
//     }
// }

// function like(){
//     alert("You liked a picture");   

// }

// EVENT LISTENER

// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     btn.addEventListener("click", sayhello);
//     btn.addEventListener("click", sayname);
// }

// function sayhello(){
//     alert("Hello!");
// }

// function sayname(){
//     alert("Shobbhit");
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     console.log(this);
//     this.style.backgroundColor = "pink";
// });


// let btn = document.querySelector("button");

// btn.addEventListener("dblclick", function(event){
//     console.log(event);
//     console.log("button clicked")
// })

//  KEYBOARD EVENTS -

let inp = document.querySelector("input");

inp.addEventListener("keydown", function(){
    console.log("Key pressed");
})