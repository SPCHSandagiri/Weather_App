const a = require('axios');

const getGeo = (location)=>{
    return new Promise ((resolve, reject)=>{

// const location = "London";

const url = 'https://api.openweathermap.org/geo/1.0/direct?q='+location+'&limit=1&appid=82415a211e5275437604cee65aea2e60';

a.get(url)
  .then(function (response) {
    // handle success
    // console.log(response.data[0].name);
    resolve({
        Name:response.data[0].name,
        Lat:response.data[0].lat,
        Lon:response.data[0].lon
    });
    // console.log("City name : "+response.data[0].name+" City Lat : "+response.data[0].lat+" City Lon : "+response.data[0].lon);
  })
  .catch(function (error) {
    // handle error
    reject({
        error:"Couldn't Find the Location"
    });
    // console.log("Couldn't Find the Location");
  });
    });
}

module.exports = getGeo