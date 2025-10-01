// let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//         let user = form.elements[0];
//         let pass = form.elements[1];
//     // let user = document.querySelector("#user");
//     // let pass = document.querySelector("#pass");
//     // console.log(inp.value);
//     console.log(user.value);
//     console.log(pass.value)

//     alert(`Hi ${user.value} your password is ${pass.value}`);
// })

let user = document.querySelector("#user");
user.addEventListener("change", function(){
    console.log("input changed");
    console.log("final value =", user.value);
})