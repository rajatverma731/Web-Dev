// let n = 5;

// for(let i = 0; i< n ; i++){
//     console.log("hello",i);
// }

// console.log(process.argv);

// let args = process.argv;

// for(let i = 2; i < args.length; i++){
//     console.log("Hello to " , args[i]);
// }

//  MODULE EXPORT

// const math = require("./math");

// console.log(math.sum(2,2));
// console.log(math.mul(3,3));

// const info = require("./Fruits")
// console.log(info);

import { sum, pi, mul } from "./math.js";

console.log(sum(2,4));
