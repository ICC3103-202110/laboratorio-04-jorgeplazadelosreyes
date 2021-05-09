var prompt = require('prompt-sync')({sigint: true});

function view(counter){
    return `    Count: ${counter}\n\n    (+) (-)\n\n    (q) to quit\n`;
}

function update(msg,counter){
    if (msg === "+"){
        return counter+1;
    }
    if(msg === "-"){
        return counter-1;
    }
    if(msg === "q"){
        return "q";
    }
}
function app(counter){
    while (true){
        console.log(view(counter));
        var msg = prompt("What would you do? ");
        counter = update(msg,counter);
        if(counter === "q"){
            break;
        }
        console.clear();
    }
}
app(0)
