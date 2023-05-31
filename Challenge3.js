const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

var recordCollection = {
    1011: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    1012: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Covertte']
    },
    1013: {
        albumTitle: 'Slippery When Wet',
        artist: 'Robert Palmer',
        tracks: []
    },
    1014: {
        albumTitle: 'ABBA Gold',
    },
}
let ID = "";
let PROP='';
let VAlUE='';
rl.question("Enter Id  ", (string) => {
    ID = string
    rl.question("Enter property  ", (string) => {
        PROP = string 
        rl.question("Enter Value  ", (string) => {
            VAlUE = string
            updateRecords(recordCollection, ID, PROP, VAlUE)
        }) 
    })
})

function updateRecords(records, id, prop, value) {

    if (prop != "tracks" && value != '') {
        records[id][prop] = value
        console.log(records);
    }

    if (prop == "tracks" && records[id].hasOwnProperty("tracks") == false) {
        records[id][prop] = []
        records[id][prop].push(value)
        console.log(records);
    }

    if (prop == "tracks" && value != '') {
        records[id][prop].push(value)
        console.log(records);
    }

    if (value == '') {
        delete records[id][prop]
        console.log(records);
    }
    return records;

}