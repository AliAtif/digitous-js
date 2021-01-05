// 01 - Countries

var request = require('request');
var countriesNames = [];
request.get( "https://restcountries.eu/rest/v1/all", function (err, res, body) {
    var getCountries = JSON.parse(body);
    // console.log(err);
    // console.log(res.statusCode);
    // console.log(body);
    console.log(getCountries);
   countriesNames = getCountries .map(function(element){
        return element.name
   });console.log( countriesNames);
    
});

//================================================================================

// 02 - Chuck Norris
