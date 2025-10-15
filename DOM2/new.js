// // function one(){
// //     return 1;
// // }
// // function two(){
// //     return one() + one();
// // }

// // function three(){
// //     let ans = two() + one();
// //     console.log(ans);
// // }

// // three();

// let h1 = document.querySelector("h1");

// function changeColor(color,delay,nextColorChange) {
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     },delay)
    
// }

// changeColor("red", 1000,()=>{
//    changeColor("orange", 1000, ()=>{
//     changeColor("green",1000,()=>{
//         changeColor("pink",1000)
//     })
//    }); 
// });

// // callbacks nesting : callback hell

// Callback hell

// function saveToDb (data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }
//     else{
//         failure();
//     }
    
// }

// saveToDb("apnaCollege",()=>{
//     console.log("success callback: your data was saved");
//     saveToDb(
//         "hello world", ()=>{
//             console.log("success2: data saved");
//             saveToDb(
//                 "hello javascript",()=> {
//                     console.log("success3: data saved again")
//                 }, ()=>{
//                     console.log("Oops, weak connect :(")
//                 }
                
//             )
//         },
//         ()=>{
//             console.log("failure, weak connection");
//         }
//     )
// },()=>{
//     console.log("failure callback: Weak connection, data not saved");
// })


// function saveToDb (data){
    
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed >4){
//             resolve("success: data was saved");
//         }
//         else{
//             reject("failure: weak connection");
//         }
//     })
    
// }

// // saveToDb("apna college") 

// saveToDb("Apna College")

// .then(()=>{
//     console.log("promise was resolved")
// })
// .catch(()=>{
//     console.log("promise was rejected")
// })

