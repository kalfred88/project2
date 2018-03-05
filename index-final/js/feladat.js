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
var username = "";
var password = "";

document.getElementById("button").addEventListener("click", myFunction);

function myFunction() {
    username = document.querySelector("#username").value;
    password = document.querySelector("#password").value;
    var clicks = 0;
    for (var i in users) {
        if (username === "" || password === "") {
            document.querySelector("#success").innerHTML = "";
            document.querySelector("#error").innerHTML = "Meg kell adnod a felhasználóneved és jelszavad.";
        } else if (users[i].email != username || users[i].password != password) {
            document.querySelector("#success").innerHTML = "";
            document.querySelector("#error").innerHTML = "Hibás felhasználónév vagy jelszó.";
        } else if (users[i].email == username && users[i].password == password) {
            document.querySelector("#error").innerHTML = "";
            document.querySelector("#success").innerHTML = `Belépve: ${users[i].email}`;
        }
    }
}

document.getElementById("fp").addEventListener("click", myFunction2);

function myFunction2() {
    var text;
    var promptemail = prompt("Add meg az email címed");
    for (var k in users) {
        if (users[k].email === promptemail) {
            text = "Az új jelszó el lett küldve a megadott email címre";
            break;
        } else {
            text = "Nincs ilyen regisztrált felhasználó";
        }
    }
    alert(text)
}