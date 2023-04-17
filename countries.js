

let countrysH = {};

function addCountry() {
let countryName = prompt("Введите название страны");
let capitalName = prompt("Введите название столицы");
    countrysH[countryName] = capitalName;
}
addCountry(countryName, capitalName);


function deleteCountry() {
    let countryName = prompt("Введите название страны");
    delete countrysH[countryName];
}
deleteCountry(countryName);


function getCountryInfo() {
    let countryName = prompt("Введите название страны");
    if (countryName in countrysH)
        return 'страна: ' + countryName + ' столица: ' + countrysH[countryName];
    else
        return 'нет информации о стране ' + countryName + '!';
}
getCountryInfo(countryName);


function listCountrys() {
    let res = "";
    for (let CN in countrysH)
        res += '\n' + getCountryInfo(CN);
    return res;
}

addCountry('Германия', 'Берлин');
addCountry('Венгрия', 'Будапешт');
addCountry('Франция', 'Париж');

console.log("список стран:" + listCountrys());

