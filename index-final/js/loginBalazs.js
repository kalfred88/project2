var users = [{
        email: 'baratheon@got.com',
        password: 'baratheon'
    },
    {
        email: 'bolton@got.com',
        password: 'bolton'
    },
    {
        email: 'florent@got.com',
        password: 'florent'
    },
    {
        email: 'lennister@got.com',
        password: 'lennister'
    },
    {
        email: 'martell@got.com',
        password: 'martell'
    },
    {
        email: 'redwyne@got.com',
        password: 'redwyne'
    },
    {
        email: 'stark@got.com',
        password: 'stark'
    },
    {
        email: 'umber@got.com',
        password: 'umber'
    },
    {
        email: 'tully@got.com',
        password: 'tully'
    },
    {
        email: 'targaryen@got.com',
        password: 'targaryen'
    }
];

var failedAttempt;
var attempt = 3;
var message3 = 'Háromszor is elrontottad az adataidat, 24 órára kitiltottunk.'

function calc() {
    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;
    var empty = '';
    var message = 'Meg kell adnod a felhasználóneved és jelszavad.'
    var message2 = 'Hibás felhasználónév vagy jelszó.';
    var attempt = 3;
    var message3 = 'Háromszor is elrontottad az adataidat, 24 órára kitiltottunk.'
    document.querySelector('#error').innerHTML = ' ';
    document.querySelector('#success').innerHTML = ' ';

    for (var i in users) {
        if (username == empty || password == empty) {
            document.querySelector('#error').innerHTML = message;
        } else if (users[i].email !== username && users[i].password !== password) {
            document.querySelector('#error2').innerHTML = message2;
        } else if (users[i].email == username && users[i].password == password) {
            document.querySelector('#error').innerHTML = "";
            document.querySelector('#success').innerHTML = `Belépve: ${username}`;
            window.location.assign("/Day12/indexBalazs.html");
        }
    }
}


function calc2() {
    prompt('Add meg az email címed.')
    alert('Az új jelszó el lett küldve az email címre.')
}