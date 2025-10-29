const express = require("express"); // express package require kiya or usko express keyword me save kiya
const app = express(); // calling the express function an storing in app keyword

//So now app is your actual server instance.
// You’ll use it later to:

// handle routes → app.get("/", callback)

// start server → app.listen(3000)

// use middleware → app.use(...)

// console.dir(app)

let port = 3000; // 8080
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})

app.use((req,res)=>{
    console.log("request recieved")
})