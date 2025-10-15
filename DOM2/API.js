
// fetch(url)
// // now this return a promise and a promise have a response

// .then((res)=>{
//     console.log(res);
//     // To get the information shown on console we need to use res.json() 
//     return res.json();
// })
// // if the response resolved then this .then function will work otherwise error.
// .then((data)=>{
//     console.log(data);
// })

// .catch((err)=>{
//     console.log("ERROR-"+ err);
// })

// ---- NOW USING ASYNC AND AWAIT TO FETCH DETAILS ---
let url = "https://catfact.ninja/fact";

async function getFacts() {
    let res = fetch(url);
    console.log(res);

}