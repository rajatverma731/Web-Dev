// // function greet(){          // normal function 
// //     return "hello world"  // return normal "hello world"
// // }

// // async function greet2(){
// //     throw "some random error";
// //     return "namaste dunniya";
// // }

// // greet2()
// // .then((result)=>{
// //     console.log("promise resolved");
// //     console.log("result was:",result)
// // })

// // .catch((err)=>{
// //     console.log("promise was rejected:",err);
// // })

// // async function eatFood(){
// //     throw "some random err";
// //     return "Tell me what do you want to eat?"
// // }

// // eatFood()
// // .then((result)=>{
// //     console.log("Promise was resolved: ", result)
// // })

// // .catch((err)=>{
// //     console.log("Promise was rejected and the error was:",err)
// // })

// // function getnum(){
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //             let num = Math.floor(Math.random()*10)+1 ;
// //         console.log(num);
// //         resolve();
// //         },1000)
// //     });
// // }

// // async function demo(){
// //     await getnum();  // to wait for this one to resolve or reject of 1000ms
// //     await getnum();
// //     getnum();
// // }

// h1 = document.querySelector("h1")
// function changeColor(color, delay){
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             // let num = Math.floor(Math.random()*5)+1;
//             // if(num > 1){
//             //     reject("promise rejected");
//             // }
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`)
//             resolve("color changed");
//         },delay)
//     });
// }

// async function demo(){
//     try{
//     await  changeColor("red",1000);
//     await changeColor("orange",1000);
//     await  changeColor("green",1000);
//     await  changeColor("blue",1000);}
//     catch(err){
//         console.log(err);
//     }

//     let a = 5;
//     console.log(a);
//     console.log("new number: ", a+3);
// }

// let jsonres = '{"fact":"A steady diet of dog food may cause blindness in your cat - it lacks taurine.","length":77}';

// let validres = JSON.parse(jsonres);
// console.log(validres.fact);

// let student = {
//     name: "rajat",
//     age : "21"
// }



