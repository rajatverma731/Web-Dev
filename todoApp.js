let todo = [];
let req = prompt("Please enter your request");

while(true){
    if(req == "quit"){
        console.log("Quiting app")
        break;
    }

    if(req == "list"){
        console.log("---------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("---------------");
    }
     
    if( req == "add"){
        let addition = prompt("Enter to add the Task");
        todo.push(addition);
        console.log("Task Added")
    }

     req = prompt("Please enter your request");

    if(req == "del"){
       let idx = prompt("Enter the index to delete the task you want");
        todo.splice(idx,1);
        console.log("Task Deleted");
    }
    else {
        console.log("Wrong request");
    }
}