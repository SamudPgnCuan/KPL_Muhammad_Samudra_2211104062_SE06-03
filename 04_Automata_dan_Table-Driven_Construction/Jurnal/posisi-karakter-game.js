const readline = require('readline');  

const rl = readline.createInterface({  
    input: process.stdin,  
    output: process.stdout  
});  

const State = {  
    JONGKOK: 'JONGKOK',  
    TENGKURAP: 'TENGKURAP',  
    BERDIRI: 'BERDIRI',
    TERBANG: 'TERBANG',  
    EXIT: 'EXIT'  
};  

let state = State.BERDIRI;  
const screenNames = {  
    [State.JONGKOK]: 'JONGKOK',  
    [State.TENGKURAP]: 'TENGKURAP',  
    [State.BERDIRI]: 'BERDIRI',  
    [State.TERBANG]: 'TERBANG',  
    [State.EXIT]: 'EXIT'  
};  

function displayScreen() {  
    console.log(`${screenNames[state]}\n`);  
    rl.question('Enter Command: ', (command) => {  
        handleCommand(command);  
    });  
}  

let nim = 2211104062;

function handleCommand(command) {  
    switch (state) {  
        case State.BERDIRI:  
            if (command === 'W') {  
                if (nim % 3 === 0){
                    console.log("tombol arah atas ditekan");
                }
                if (nim % 3 === 2){
                    console.log("posisi take off");
                }  
                state = State.TERBANG;

            } else if (command === 'S') {  
                if (nim % 3 === 0){
                    console.log("tombol arah bawah ditekan");
                } 
                state = State.JONGKOK; 
            }  else if (command === 'QUIT') {  
                state = State.EXIT;  
            }  
            break;  

        case State.TERBANG:  
            if (command === 'S') {  
                if (nim % 3 === 0){
                    console.log("tombol arah bawah ditekan");
                }
                if (nim % 3 === 1){
                    console.log("posisi standby");
                }
                state = State.BERDIRI;

            }  else if (command === 'X') {  
                if (nim % 3 === 2){
                    console.log("posisi landing");
                }
                state = State.JONGKOK;

            } else if (command === 'QUIT') {  
                state = State.EXIT;  
            }  
            break
              
        case State.JONGKOK:  
            if (command === 'W') {  
                if (nim % 3 === 0){
                    console.log("tombol arah atas ditekan");
                }
                if (nim % 3 === 1){
                    console.log("posisi standby");
                }
                state = State.BERDIRI;

            } else if (command === 'S') {  
                if (nim % 3 === 0){
                    console.log("tombol arah bawah ditekan");
                }
                if (nim % 3 === 1){
                    console.log("posisi istirahat");
                }
                state = State.TENGKURAP;

            } else if (command === 'QUIT') {  
                state = State.EXIT;  
            }  
            break;
            
        case State.TENGKURAP:
            if (command === 'W') {
                if (nim % 3 === 0){
                    console.log("tombol arah atas ditekan");
                }
                state = State.JONGKOK;
            } else if (command === 'QUIT') {  
                state = State.EXIT;  
            }  
            break;
    }  

    if (state !== State.EXIT) {  
        displayScreen();  
    } else {  
        console.log('EXIT SCREEN');  
        rl.close();  
    }  
}  

// Start the application 
console.log("Kontrol: W/S/X/QUIT"); 
displayScreen();