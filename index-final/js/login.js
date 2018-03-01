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
        email: "stark@got.com",
        password: "stark"
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

var count = 0;
// Szép munka. Az if-ek egymásba ágyazását lehetőle kerüljük
function proba() {
    var user = document.querySelector('#user').value;
    var password = document.querySelector('#password').value;

    if (user != "" && password != "" && count < 4) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].email == user && users[i].password == password) {
                document.querySelector('#success').innerHTML = `Belépve: ${users[i].email}`;
            } else {
                document.querySelector('#error').innerHTML = `Hibás e-mail vagy jelszó`;
                count++;
                break;
            }
        }
    } else if (count == 3) {
        document.querySelector('#error').innerHTML = `Háromszor rontottad el a belépést, ezért kitiltunk 24 órára.`;
    } else
    // Mi van, ha ki van töltve de eggyik adat sem jó? Akkor is ezt írja ki.
    {
        document.querySelector('#error').innerHTML = `Töltsd ki mindkét beviteli mezőt`;
    }
}

// ok
function newpass() {
    prompt("Add meg az e-mail címedet!");
    alert("Elküldtük az új jelszavadat!");
}