const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


var results = [
    {
        HomeTeam: "Kerala",
        HomeTeamScore: 122,
        AwayTeam: 'Karnataka',
        AwayTeamScore: 104
    },
    {
        HomeTeam: "Kerala",
        HomeTeamScore: 96,
        AwayTeam: 'TamilNadu',
        AwayTeamScore: 59
    },
    {
        HomeTeam: "Kerala",
        HomeTeamScore: 65,
        AwayTeam: 'AndraPradhesh',
        AwayTeamScore: 68
    },
    {
        HomeTeam: "TamilNadu",
        HomeTeamScore: 88,
        AwayTeam: 'Maharashtra',
        AwayTeamScore: 100
    },
    {
        HomeTeam: "Kerala",
        HomeTeamScore: 129,
        AwayTeam: 'Maharashtra',
        AwayTeamScore: 109
    },
    {
        HomeTeam: "Punjab",
        HomeTeamScore: 78,
        AwayTeam: 'Karnataka',
        AwayTeamScore: 62
    },
    {
        HomeTeam: "Goa",
        HomeTeamScore: 34,
        AwayTeam: 'Kerala',
        AwayTeamScore: 90
    },
    {
        HomeTeam: "Bihar",
        HomeTeamScore: 87,
        AwayTeam: 'Karnataka',
        AwayTeamScore: 130
    },
    {
        HomeTeam: "Punjab",
        HomeTeamScore: 77,
        AwayTeam: 'Kerala',
        AwayTeamScore: 105
    },
    {
        HomeTeam: "Punjab",
        HomeTeamScore: 117,
        AwayTeam: 'TamilNadu',
        AwayTeamScore: 104
    },
    {
        HomeTeam: "Rajasthan",
        HomeTeamScore: 100,
        AwayTeam: 'Karnataka',
        AwayTeamScore: 103
    },
    {
        HomeTeam: "Rajasthan",
        HomeTeamScore: 73,
        AwayTeam: 'Kerala',
        AwayTeamScore: 92
    },
    {
        HomeTeam: "Kerala",
        HomeTeamScore: 99,
        AwayTeam: 'Gujarath',
        AwayTeamScore: 87
    },
    {
        HomeTeam: "Gujarath",
        HomeTeamScore: 105,
        AwayTeam: 'Karnataka',
        AwayTeamScore: 99
    },
    {
        HomeTeam: "Gujarath",
        HomeTeamScore: 56,
        AwayTeam: 'Rajasthan',
        AwayTeamScore: 77
    },
    {
        HomeTeam: "Gujarath",
        HomeTeamScore: 65,
        AwayTeam: 'TamilNadu',
        AwayTeamScore: 67
    },
    {
        HomeTeam: "Kerala",
        HomeTeamScore: 83,
        AwayTeam: 'Manipur',
        AwayTeamScore: 71
    },
    {
        HomeTeam: "Manipur",
        HomeTeamScore: 104,
        AwayTeam: 'Karnataka',
        AwayTeamScore: 122
    },
    {
        HomeTeam: "Manipur",
        HomeTeamScore: 48,
        AwayTeam: 'TamilNadu',
        AwayTeamScore: 111
    },
    {
        HomeTeam: "Gujarath",
        HomeTeamScore: 70,
        AwayTeam: 'Manipur',
        AwayTeamScore: 82
    },
]




let userInput = "";
rl.question("1. Add a Result\n2. Search for all results for a team\n", (string) => {
    userInput = string
    if (userInput == 1) {
        let team = {
            HomeTeam: '',
            HomeTeamScore: 0,
            AwayTeam: "",
            AwayTeamScore: 0
        }
        rl.question("Enter Home Team Name \n", (string) => {
            team.HomeTeam = string
            rl.question("Enter Home Team Score \n", (Number) => {
                team.HomeTeamScore = Number
                rl.question("Enter Away Team Name \n", (string) => {
                    team.AwayTeam = string

                    rl.question("Enter Home Team Score \n", (Number) => {
                        team.AwayTeamScore = Number

                        results.push(team)
                        console.log(results);
                    })
                })
            })
        })




    }

    if (userInput == 2) {
        let team = ''
        let teamdetails=[]
        rl.question("Enter Team Name \n", (string) => {
            team=string
            for(let teams of results){
                if(teams.AwayTeam==team || teams.HomeTeam==team){
                    teamdetails.push(teams)
                }
            }
            console.log(teamdetails);
        })
    }
})