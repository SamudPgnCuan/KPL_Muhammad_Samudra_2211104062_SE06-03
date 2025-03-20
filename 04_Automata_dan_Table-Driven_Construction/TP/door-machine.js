const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const State = {
    Terkunci: 'Terkunci',
    Terbuka: 'Terbuka',
    EXIT: 'EXIT' //here
};

let state = State.Terkunci; 

const screenNames = {
    [State.Terkunci]: 'Pintu Terkunci',
    [State.Terbuka]: 'Pintu tidak Terkunci',
    [State.EXIT]: 'Keluar' 
};

function displayScreen() {
    console.log(`\nStatus: ${screenNames[state]}`);
    rl.question('Masukkan perintah (BukaPintu/KunciPintu/EXIT): ', (command) => {
        handleCommand(command);
    });
}

function handleCommand(command) {
    switch (state) {
        case State.Terkunci:
            if (command === 'BukaPintu') {
                state = State.Terbuka;
            } else if (command === 'KunciPintu') {
                state = State.Terkunci;
            } else if (command === 'EXIT') {
                state = State.EXIT;
            } else {
                console.log('Perintah tidak valid, silahkan cek pengejaan');
            }
            break;

        case State.Terbuka:
            if (command === 'KunciPintu') {
                state = State.Terkunci;
            } else if (command === 'BukaPintu') {
                state = State.Terbuka;
            } else if (command === 'EXIT') {
                state = State.EXIT;
            } else {
                console.log('Perintah tidak valid, silahkan cek pengejaan');
            }
            break;
    }

    if (state !== State.EXIT) {
        displayScreen(); 
    } else {
        console.log('dadah');
        rl.close(); 
    }
}

displayScreen(); 