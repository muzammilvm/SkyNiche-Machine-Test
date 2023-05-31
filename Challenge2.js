const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


let d1=0
let m1=0
let y1=0

let date=new Date()
let d2=date.getDate()
let m2=date.getMonth()+1
let y2=date.getFullYear()
let month=[31,28,31,30,31,30,31,31,30,31,30,31]

rl.question("Enter day  ", (Number) => {
    d1 = Number
    rl.question("Enter month  ", (Number) => {
        m1 = Number 
        rl.question("Enter year  ", (Number) => {
            y1 = Number

            if(d1>d2){
                d2=month[m2+1]-d1+d2
                m2=m2-1
            }
            
            if(m1>m2){
                m2=12-m1+m2
                y2=y2-1
            }
            
                y2=y2-y1
                m2=m2-m1
                d2=d2-d1
             
                let sum=0
                for(i=0;i<m2;i++){
                  sum=sum+month[i]  
                }
            
               let days=365*y2+sum+d2
            
            
            
            console.log("you have lived for",days,"days");
        }) 
    })
})






