function getData(url, callbackFunc) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunc(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function successAjax(xhttp) {
    // itt a json content, benne a data változóban
    var userDatas = (JSON.parse(xhttp.responseText))[0].users;
    console.log(userDatas);
    /*
      Pár sorral lejebb majd ezt olvashatod:
      IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ!

      Na azokat a függvényeket ITT HÍVD MEG! 

      A userDatas NEM GLOBÁLIS változó, ne is tegyétek ki globálisra. Azaz TILOS!
      Ha valemelyik függvényeteknek kell, akkor paraméterként adjátok át.
    */

    generateTable(userDatas);

    document.getElementById('before1990').addEventListener('click', function () {
        before1990(userDatas);
    });

    document.getElementById('filterednames').addEventListener('click', function () {
        filteredNames(userDatas);
    });

    document.getElementById('getcities').addEventListener('click', function () {
        getCities(userDatas);
    });

    document.getElementById('before2000').addEventListener('click', function () {
        before2000(userDatas);
    });

    document.getElementById('stat').addEventListener('click', function () {
        writeStatistics(userDatas);
    });

}

getData('js/users.json', successAjax);

// Live servert használd mindig!!!!!
/* IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ! */

// ---------------------------------TÁBLÁZAT---------------------------------------------

function generateTable(userDatas) {

    // Header tartalma, lekérdezés az objektumból
    // id, username, password stb.
    var col = [];
    for (var i = 0; i < userDatas.length; i++) {
        for (var key in userDatas[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // Táblázat létrehozása dinamikusan

    var table = document.createElement('table');
    table.border = 1;

    // HTML táblázat fejléc generálása, az előbb kinyert fejléc nevekből
    var dataProps = ['Azonosító', 'Felhasználónév', 'Jelszó', 'Vezetéknév', 'Keresztnév',
        'Ország', 'Megye', 'Irányítószám', 'Város', 'Cím', 'Nem', 'Születési dátum',
        'Email', 'Telefonszám'
    ];

    var tr = table.insertRow(-1); // Table row

    for (var i = 0; i < dataProps.length; i++) {
        var th = document.createElement('th'); // Table header
        th.innerHTML = dataProps[i];
        tr.appendChild(th);
        th.bgColor = 'grey';
    }

    // JSON adatok hozzáadása a táblázathoz, sorokként
    for (var i = 0; i < userDatas.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tableCell = tr.insertCell(-1);
            tableCell.innerHTML = userDatas[i][col[j]];
        }
    }

    // Hozzáadom a generált táblázatot egy div elemhez
    var genTable = document.querySelector('#gentable');
    genTable.innerHTML = '';
    genTable.appendChild(table);
}

// -----------------------------------GOMBOK---------------------------------------

// 1990 előtti felhasználók, felhasználónevét írja ki a táblázatba

function before1990(userDatas) {
    var col = [];
    for (var i = 0; i < userDatas.length; i++) {
        for (var key in userDatas[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
    var table = document.createElement('table');
    table.border = 1;
    var dataProps = ['Felhasználónév'];
    var tr = table.insertRow(-1);
    var th = document.createElement('th');
    th.innerHTML = dataProps[0];
    tr.appendChild(th);
    th.bgColor = 'grey';
    for (var i = 0; i < userDatas.length; i++) {
        if (userDatas[i].birthdate < "1990. 01. 01.") {
            tr = table.insertRow(-1);
            var tableCell = tr.insertCell(-1);
            tableCell.innerHTML = userDatas[i][col[1]];
        }

    }
    var genTable = document.querySelector('#gentable');
    genTable.innerHTML = '';
    genTable.appendChild(table);

}

// A 3 legidősebb ember adatai

function oldest3() {

}

// Szűrt nevek kiírása

function filteredNames(userDatas) {
    var col = ["firstname", "lastname"];
    var table = document.createElement('table');
    table.border = 1;
    var dataProps = ['Vezetéknév', 'Keresztnév'];
    var tr = table.insertRow(-1); // Table row

    for (var i = 0; i < dataProps.length; i++) {
        var th = document.createElement('th'); // Table header
        th.innerHTML = dataProps[i];
        tr.appendChild(th);
        th.bgColor = 'grey';
    }
    for (var i = 0; i < userDatas.length; i++) {
        if (userDatas[i].birthdate > "1990. 01. 01." &&
            userDatas[i].birthdate < "2000. 01. 01." &&
            userDatas[i].city == "Budapest" &&
            userDatas[i].state != null &&
            userDatas[i].sex == "férfi") {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tableCell = tr.insertCell(-1);
                tableCell.innerHTML = userDatas[i][col[j]];
            }
        }
    }

    var genTable = document.querySelector('#gentable');
    genTable.innerHTML = '';
    genTable.appendChild(table);
}

// Városok + lakók száma a táblázatba

function getCities(userDatas) {
    var col = ['city'];
    var table = document.createElement('table');
    table.border = 1;
    var dataProps = ['Város', 'Lakók'];
    var tr = table.insertRow(-1); // Table row

    for (var i = 0; i < dataProps.length; i++) {
        var th = document.createElement('th'); // Table header
        th.innerHTML = dataProps[i];
        tr.appendChild(th);
        th.bgColor = 'grey';
    }
    for (var i = 0; i < userDatas.length; i++) {
        if (userDatas.indexOf('Budapest') > 2) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tableCell = tr.insertCell(-1);
                tableCell.innerHTML = userDatas[i][col[j]];
            }
        }
    }

    var genTable = document.querySelector('#gentable');
    genTable.innerHTML = '';
    genTable.appendChild(table);
}

// 2000 előttiek adatait írja ki a táblázatba

function before2000(userDatas) {
    var col = ["username", "firstname", "lastname", "email", "phone"];
    var table = document.createElement('table');
    table.border = 1;
    var dataProps = ['Felhasználónév', 'Vezetéknév', 'Keresztnév', 'Email', 'Telefonszám'];
    var tr = table.insertRow(-1); // Table row

    for (var i = 0; i < dataProps.length; i++) {
        var th = document.createElement('th'); // Table header
        th.innerHTML = dataProps[i];
        tr.appendChild(th);
        th.bgColor = 'grey';
    }
    for (var i = 0; i < userDatas.length; i++) {
        if (userDatas[i].birthdate < "2000. 01. 01." || userDatas[i].city !== "Budapest") {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tableCell = tr.insertCell(-1);
                tableCell.innerHTML = userDatas[i][col[j]];
            }
        }
    }

    var genTable = document.querySelector('#gentable');
    genTable.innerHTML = '';
    genTable.appendChild(table);
}

// --------------------------------STATISZTIKA-----------------------------------------

// statisztikai adatok kiírása a táblázat alá

function formatDate(userDatas) {
    date = new Date(userDatas);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    d = d < 10 ? '0' + d : d;

    switch (m) {
        case 1:
            return `${y}. január ${d}.`
            break;
        case 2:
            return `${y}. február ${d}.`
            break;
        case 3:
            return `${y}. március ${d}.`
            break;
        case 4:
            return `${y}. április ${d}.`
            break;
        case 5:
            return `${y}. május ${d}.`
            break;
        case 6:
            return `${y}. június ${d}.`
            break;
        case 7:
            return `${y}. július ${d}.`
            break;
        case 8:
            return `${y}. augusztus ${d}.`
            break;
        case 9:
            return `${y}. szeptember ${d}.`
            break;
        case 10:
            return `${y}. október ${d}.`
            break;
        case 11:
            return `${y}. november ${d}.`
            break;
        default:
            return `${y}. december ${d}.`
            break;
    }
}

function oldest(userDatas) {
    var oldest = userDatas.reduce(function (a, b) {
        return a.birthdate < b.birthdate ? a : b;
    });
    return oldest.username + ' ' + formatDate(oldest.birthdate)
}

function youngest(userDatas) {
    var youngest = userDatas.reduce(function (a, b) {
        return a.birthdate > b.birthdate ? a : b;
    });
    return youngest.username + ' ' + formatDate(youngest.birthdate)
}

var date = new Date();
var currentYear = date.getFullYear();

function avgAge(userDatas) {
    return (sumAge(userDatas) / userDatas.length).toFixed(2);
}

function sumAge(userDatas) {
    var count = 0;
    userDatas.forEach(function (userDatas) {
        count += (2018 - parseInt(userDatas.birthdate.slice(0, 4)))
    })
    return count;
}

function statistics(userDatas) {
    return {
        'A legidősebb ember felhasználóneve': oldest(userDatas),
        'A legfiatalabb ember felhasználóneve': youngest(userDatas),
        'Az átlagéletkor': avgAge(userDatas),
        'Az összegzett életkor': sumAge(userDatas)
    }
}

function writeStatistics(userDatas) {
    var stat = statistics(userDatas);
    for (var i in stat) {
        var p = document.createElement('p');
        p.textContent = `${i} : ${stat[i]}`;
        document.body.appendChild(p);
    }
}