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
    var datas = userDatas[0].users;
    console.log(datas);
    generateButtons();
    createTable(datas);
    /*
      Pár sorral lejebb majd ezt olvashatod:
      IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ!

      Na azokat a függvényeket ITT HÍVD MEG! 

      A userDatas NEM GLOBÁLIS változó, ne is tegyétek ki globálisra. Azaz TILOS!
      Ha valemelyik függvényeteknek kell, akkor paraméterként adjátok át.
    */
}

getData('js/users.json', successAjax);
// Live servert használd mindig!!!!!
/* IDE ÍRD A FÜGGVÉNYEKET!!!!!! NE EBBE AZ EGY SORBA HANEM INNEN LEFELÉ! */


function generateButtons() {
    var div = document.createElement('div');
    var buttonNames = ['1990 előttiek', '3 legidősebb', 'Szűrt nevek', 'Városok', '2000 előttiek'];
    buttonNames.forEach(function (element) {
        var button = document.createElement('button');
        button.textContent = element;
        button.addEventListener('click', function () {
            //setSorting(data, element);
        });
        div.appendChild(button);
    });
    document.getElementById('header').appendChild(div);
}

function generateHeaders(data, headerData) {
    var tr = document.createElement('tr');
    headerData.forEach(function (element) {
        var th = document.createElement('th');
        th.textContent = element;
        tr.appendChild(th);
    });
    return tr;
}



function createTd(objElement, arrElement) {
    var td = document.createElement('td');
    var element = objElement[arrElement];
    td.textContent = element;
    return td;
}

function createTable(data) {
    document.querySelector('#container').innerHTML = '';

    var dataProps = ['Azonosító', 'Felhasználónév', 'Jelszó', 'Vezetéknév', 'Keresztnév',
        'Ország', 'Megye', 'Irányítószám', 'Város', 'Cím', 'Nem', 'Születési dátum',
        'Email', 'Telefonszám'
    ];
    var realProps = Object.getOwnPropertyNames(data[0]);
    var table = document.createElement('table');
    table.appendChild(generateHeaders(data, dataProps));
    for (var i = 0; i < data.length; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < realProps.length; j++) {
            tr.appendChild(createTd(data[i], realProps[j]));
            table.appendChild(tr);
        }
        document.querySelector('#container').appendChild(table);
    }
}