

let countrysH = {};



function addCountry(countryName, capitalName) {
let countryName = prompt("Введите название страны");
let capitalName = prompt("Введите название столицы");
    countrysH[countryName] = capitalName;
}
console.log(countrysH)

function deleteCountry(countryName) {
    let countryName = prompt("Введите название страны");
    delete countrysH[countryName];
}

function getCountryInfo(countryName) {
    let countryName = prompt("Введите название страны");
    if (countryName in countrysH)
        return 'страна: ' + countryName + ' столица: ' + countrysH[countryName];
    else
        return 'нет информации о стране ' + countryName + '!';
}

function listCountrys() {
   
    var res = "";
    for (var CN in countrysH)
        res += '\n' + getCountryInfo(CN);
    return res;
}

addCountry('Германия', 'Берлин');
addCountry('Венгрия', 'Будапешт');
addCountry('Франция', 'Париж');

console.log("список стран:" + listCountrys());

