// Vedd fel az alábbi tömböt a javascript fájlodba:
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
    },
    {
        email: 'a',
        password: 'b'
    }
];
var count = 0,
    belep;

function funBelep() {
    document.getElementById("success").innerHTML = "";
    count++;
    console.log(count);
    if (count > 2) {
        document.querySelector("#error").innerHTML = "Háromszor is elrontottad az adataidat, 24 órára kitiltottunk.";
        document.querySelectorAll("input")[1].setAttribute("disabled", "disabled");
        setTimeout(function () {
            document.querySelectorAll("input")[1].removeAttribute("disabled");
            console.log("Na jó még sem vagy kitiltva");
        }, 1e4);

    };
    if (document.querySelector("#userName").value == "" || document.querySelector("#password").value == "") {
        document.querySelector("#error").innerHTML = "Meg kell adnod a felhasználóneved és jelszavad."
        count = 0;
    } else {

        for (var i in users) {


            if (document.querySelector("#userName").value == users[i].email && document.querySelector("#password").value == users[i].password) {
                document.querySelector("#error").innerHTML = ""
                var belep = users[i].email;

                document.getElementById("success").innerHTML = `Belépve: ${belep}`
                window.open('/adminpage-tomi.html')
                count = 0;
            } else if (count < 3) {
                document.querySelector("#error").innerHTML = "Rossz a felhasználóneved vagy jelszavad."
            }
        }

    };
}

function funForget() {
    prompt("Email cím?:")
    if (prompt.value !== "") {

        alert("Jelszó ell lett küldve a megadott emailre!")
    }

};







/*  
   Minden alkalommal, amikor a login gombra kattintanak, ellenőrizni kell, 
    hogy a felhasználónév és a jelszó nem üres e. 
    Amennyiben üres, a login gomb fölé egy #error id - jú span elembe írjuk ki, 
    piros betűszínnel, hogy: Meg kell adnod a felhasználóneved és jelszavad. 


    Ha nem ürresek a mezők, akkor egy függvény leellenőrzi, hogy az adott
    felhasználónév, jelsz ópáros szerepel e a tömbben.
    Ha igen, kiírja a LOGIN gomb fölé egy #success id-jú elembe,
    zölden, hogy Belépve: usename.
    (A username helyére az adott user emailjét írja ki)

    Ha a tömbünkben nincs olyan felhasználó akinek ez lenne a felhasználónév jelszó
    párosa, a login gomb fölé egy #error id - jú span elembe írjuk ki, 
    piros betűszínnel, hogy: Hibás felhasználónév vagy jelszó.

    Ha legalább háromszor téves felhasználónév jelszó páros lett megadva,
    akkor a login gomb fölé egy #error id - jú span elembe írjuk ki, 
    piros betűszínnel : HÁromszor is elrontottad az adataidat, 24 órára kitiltottunk.

    Amennyiben a user a forgott password-re kattint, ugorjon fel egy prompt,
    amibe bekérjük a felhasználó email címét.
    Miután ezt leokézta, ugorjon fel egy alert azzal a szöveggel, hogy az 
    új jelszó el lett küldve az email címére.
    (Az emailt persze nem kell elküldeni)
*/