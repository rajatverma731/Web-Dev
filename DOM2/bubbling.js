let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelector("li");

div.addEventListener("click", function(){
    console.log("div was created");
})

ul.addEventListener("click", function(){
    console.log("ul was created");
})

li.addEventListener("click", function(){
    console.log("li was created");
})