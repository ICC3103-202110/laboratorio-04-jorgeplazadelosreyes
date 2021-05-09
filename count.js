var prompt = require('prompt-sync')({sigint: true});

function view(counter){
    return `Count: ${counter}\n\n(+) (-)\n\n(q) to quit\n`;
}
//para ftring se usa `` en tecla de corchetes
console.log(view(5));
function update(msg,counter){

}
