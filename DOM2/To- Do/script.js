// Creating Objects of different elements
let btn = document.querySelector("button"); 
let inp = document.querySelector("input");
let ul = document.querySelector("ul");


// Now making an event listener 
btn.addEventListener("click", function(){
    let item = document.createElement("li"); // Creating a new object 
    item.innerText = inp.value;      // setting the item value to input value 

     let delBtn = document.createElement("button");// adding delete button 
     delBtn.innerText = " Delete"
    delBtn.classList.add("Delete");
    
item.appendChild(delBtn); 
    ul.appendChild(item)      // used to appending the value of input in the list
   inp.value = "";
})

let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click", function(){
        let par = delBtn.parentElement;
        console.log(par);
        par.remove();
    })
}

