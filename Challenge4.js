const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwart", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "vos",
        "number": "unknown",
        "likes": ["javascript", "gaming", "Foxes"]
    }

]


let NAME = "";
let PROP='';
rl.question("Enter First Name  ", (string) => {
    NAME = string
    rl.question("Enter property  ", (string) => {
        PROP = string 
        
        lookUpProfile(NAME,PROP)
    })
})


var Details={}

function lookUpProfile(name,prop) {
    let present=false

    for (let fname of contacts) {
        if(name==fname.firstName){
            Details=fname
            present=true
        }
    }

    if(present==true){
       let props= Details[prop]
       if(props){
        console.log(props);
       }else{
        console.log("No Such Property");
       }
    }else{
        console.log("No Such Contact");
    }

}