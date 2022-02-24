for(let i=0; i<3; i++){
    (function test(o){
        alert(o)
    })(i)
}


//let: throws an error "Cannot access before initialization" because let doesn't have hoisting

/*
test()

function test(){
    console.log("I am a function")
}

result = the function is executed successfull. In hoisting for a function, this whole declaration of 
function will be hoisted
*/