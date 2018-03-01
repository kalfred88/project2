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
    var userDatas = JSON.parse(xhttp.responseText);
    console.log(userDatas);
    /*
      Pár sorral lejebb majd ezt olvashatod:
      IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ!

      Na azokat a függvényeket ITT HÍVD MEG! 

      A userDatas NEM GLOBÁLIS változó, ne is tegyétek ki globálisra. Azaz TILOS!
      Ha valemelyik függvényeteknek kell, akkor paraméterként adjátok át.
    */

    funtablazatMegjelenit(userDatas);

    document.getElementById("button1").addEventListener("click", elso);
    document.getElementById("button2").addEventListener("click", masodik);
    document.getElementById("button3").addEventListener("click", harmadik);
    document.getElementById("button4").addEventListener("click", negyedik);
    document.getElementById("button5").addEventListener("click", otodik);
    document.getElementById("button6").addEventListener("click", hatodik);

    function elso() {
        fun90elottiek(userDatas)
    };

    function masodik() {
        fun3legidossebb(userDatas)
    };

    function harmadik() {
        funszurtnevek(userDatas)
    };

    function negyedik() {
        funVarosok(userDatas)
    };

    function otodik() {
        funY2Kelottiek(userDatas)
    };

    function hatodik() {
        funstatistics(userDatas)
    };


}

getData('js/users.json', successAjax);

// Live servert használd mindig!!!!!
/* IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ! */



function funtablazatfejlec() {

    var tablehead = ""
    tablehead += `
    <th>Azonosító</th>
    <th>Felhasználónév</th>
    <th>Jelszó</th>
    <th>Vezetéknév</th>
    <th>Keresztnév</th>
    <th>Ország</th>
    <th>Állam/Megye</th>
    <th>Irányítószám</th>
    <th>Város</th>
    <th>Cím</th>
    <th>Nem</th>
    <th>Születési dátum</th>
    <th>Email cím</th>
    <th>Telefonszám</th>
    `;
    document.querySelector(".table-head").innerHTML = tablehead;


}

function funtablazatMegjelenit(data) {
    funtablazatfejlec();
    var jsonData = data[0].users;
    var tableBody = "";
    for (var i = 0; i < jsonData.length; i++) {

        tableBody += `<tr><td>${jsonData[i].id}</td>
    <td>${jsonData[i].username}</td>
    <td>${jsonData[i].password}</td>
    <td>${jsonData[i].firstname}</td>
    <td>${jsonData[i].lastname}</td>
    <td>${jsonData[i].country}</td>
    <td>${jsonData[i].state}</td>
    <td>${jsonData[i].zipcode}</td>
    <td>${jsonData[i].city}</td>
    <td>${jsonData[i].address}</td>
    <td>${jsonData[i].sex}</td>
    <td>${jsonData[i].birthdate}</td>
    <td>${jsonData[i].email}</td>
    <td>${jsonData[i].phone}</td></tr>`

    }

    document.querySelector(".table-body").innerHTML = tableBody;
    //console.log(jsonData[4].birthdate.substring(0, 4) < 1990);
}

function fun90elottiek(data) {
    var tablehead = ""
    tablehead += `
   
    <th>Felhasználónév</th>
    
    `;
    document.querySelector(".table-head").innerHTML = tablehead;

    var jsonData = data[0].users
    var tableBody = ""
    for (var i = 0; i < jsonData.length; i++) {
        if (jsonData[i].birthdate.substring(0, 4) < 1990) {
            tableBody += `<tr>
    <td>${jsonData[i].username}</td>
    </tr> `
        }
    }

    document.querySelector(".table-body").innerHTML = tableBody;
}

function fun3legidossebb(data) {
    var tablehead = ""
    tablehead += `
    <th>Vezetéknév</th>
    <th>Keresztnév</th>
    <th>Születési dátum</th>
    `;

    document.querySelector(".table-head").innerHTML = tablehead;



    var jsonData = data[0].users;
    jsonData.sort(function (a, b) {
        /* a = new Date(a.birthdate);
         b = new Date(b.birthdate);*/
        return new Date(a.birthdate) - new Date(b.birthdate);
        //return a.birthdate.substring(0, 4) - b.birthdate.substring(0, 4)
    })



    var tableBody = "";
    for (var i = 0; i < 3; i++) {
        tableBody += `<tr>
    <td>${jsonData[i].firstname}</td>
    <td>${jsonData[i].lastname}</td>
    <td>${jsonData[i].birthdate}</td>
    </tr>`
        document.querySelector(".table-body").innerHTML = tableBody;

    }


};


function funszurtnevek(data) {
    var tablehead = ""
    tablehead += `
    <th>Vezetéknév</th>
    <th>Keresztnév</th>
        `;

    document.querySelector(".table-head").innerHTML = tablehead;



    var jsonData = data[0].users;
    jsonData.sort(function (a, b) {

        if (a.firstname > b.firstname) {
            return 1
        } else if (a.firstname < b.firstname) {
            return -1
        } else {
            if (a.lastname > b.lastname) {
                return 1
            };
            if (a.lastname < b.lastname) {
                return -1
            };
            if (a.lastname == b.lastname) {
                return 0
            };
        }
        //return a.birthdate.substring(0, 4) - b.birthdate.substring(0, 4)
    })

    var tableBody = "";
    for (var i = 0; i < jsonData.length; i++) {
        if (jsonData[i].city == "Budapest" &&
            jsonData[i].sex == "férfi" &&
            jsonData[i].state != "" &&
            jsonData[i].birthdate >= "1900. 01. 01" &&
            jsonData[i].birthdate <= "1999. 12. 31") {
            tableBody += `<tr>
    <td>${jsonData[i].firstname}</td>
    <td>${jsonData[i].lastname}</td>
     </tr>`
            document.querySelector(".table-body").innerHTML = tableBody;
        }
    }
};


function funVarosok(data) {
    var jsonData = data[0].users;
    var tablehead = ""
    tablehead += `
     <th>Város</th>
     <th>Lakosok száma</th>
        `;

    document.querySelector(".table-head").innerHTML = tablehead;
    jsonData.sort(function (a, b) {
        if (a.city > b.city) {
            return 1
        } else if (a.city < b.city) {
            return -1
        } else {
            return 0
        }
    });
    var cities = [jsonData[0].city];
    var counters = []
    var counter = 1;

    for (var i = 0; i < jsonData.length - 1; i++) {

        if (jsonData[i].city == jsonData[i + 1].city) {
            counter += 1;
        } else {
            cities.push(jsonData[i + 1].city)
            counters.push(counter)
            counter = 1
        }

    }
    counters.push(counter)

    console.log(counters);
    console.log(cities);


    var tableBody = "";
    for (var i = 0; i < cities.length; i++) {
        if (counters[i] > 1) {
            tableBody += `<tr>
       <td>${cities[i]}
       <td>${counters[i]}</td>
        </tr>`
        }
    }
    document.querySelector(".table-body").innerHTML = tableBody;
};

function funY2Kelottiek(data) {
    var jsonData = data[0].users;
    var tablehead = ""
    tablehead += `
    <th>Felhasználónév</th>
    <th>Vezetéknév</th>
    <th>Keresztnév</th>
    <th>Email cím</th>
    <th>Telefonszám</th>
    `;
    document.querySelector(".table-head").innerHTML = tablehead;

    var tableBody = "";
    for (var i = 0; i < jsonData.length; i++) {
        if (jsonData[i].city != 'Budapest' && jsonData[i].birthdate < "2000. 01. 01.") {
            tableBody += `<tr><td>${jsonData[i].username}</td>
              <td>${jsonData[i].firstname}</td>
        <td>${jsonData[i].lastname}</td>
        <td>${jsonData[i].email}</td>
        <td>${jsonData[i].phone}</td></tr>`
            document.querySelector(".table-body").innerHTML = tableBody;
        }
    }
};

function funstatistics(data) {
    var jData = data[0].users;
    jData.sort(function (a, b) {
        if (a.username > b.username) {
            return 1
        };
        if (a.username < b.username) {
            return -1
        };
        if (a.username == b.username) {
            return 0
        };
    })
    var statistics;
    var legfiatalabb = {};
    var legoregebb = {};
    legfiatalabb.date = new Date(jData[0].birthdate);
    legoregebb.date = new Date(jData[0].birthdate);
    var sumKor = 0;
    for (var i = 0; i < jData.length; i++) {
        var tempDate = new Date(jData[i].birthdate);
        if (tempDate < legoregebb.date) {
            legoregebb.date = tempDate;
            legoregebb.id = jData[i].username;
        } else if (tempDate > legfiatalabb.date) {
            legfiatalabb.date = tempDate
            legfiatalabb.id = jData[i].username;
        }
        sumKor += (new Date()).getFullYear() - tempDate.getFullYear();
        console.log(tempDate.valueOf());
        console.log(jData[i].id);
    }
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };


    legfiatalabb.date = new Date(legfiatalabb.date);
    legoregebb.date = new Date(legoregebb.date);

    statistics = `${legfiatalabb.id}: ${legfiatalabb.date.toLocaleString("hu", options)}
    <br> ${legoregebb.id}: ${legoregebb.date.toLocaleString("hu", options)}<br>
    A korok összege: ${sumKor}<br>
    A korok átlaga: ${sumKor/jData.length}`
    console.log(legfiatalabb.date, legfiatalabb.id, (legoregebb.date).toLocaleString("hu", options), legoregebb.id);
    console.log(data);
    document.querySelector("#statistic").innerHTML = statistics;


};