var prefix = "https://cors-anywhere.herokuapp.com/";
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');


$('#search').click(searchCountries);

function searchCountries() {
    var countryName = $('country-name').val;
    if (!countryName.length) {
        countryName = 'Poland';
    }
    $.ajax({
        url: prefix + url + countryName, 
        methode: 'GET',
        success: showCountriesList
    }); 
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
        $('<li>').text(item.name).appendTo(countriesList);   
    });
}

