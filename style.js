console.log(" Select an option. \na. option1 \nb. option2  \nc. option3");


var text;

choice = prompt("enter your choice");

switch(choice){
    case "a" :
        text=   "You have select 1";
        break;
    case "b" :
        text =  "You have select 2";
        break;
    case "c" :
        text=   "You have select 3";
        break;
    default:
        text =  "Invalid choice";
}

console.log(text);