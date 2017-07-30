var axios = require('axios');

const OWM_URL = 'http://api.openweathermap.org/data/2.5/weather?';
const UNITS = '&units=metric';
const KEY = '&appid=703d4ca8de4e5cb4525eeeb79fdf4f31';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OWM_URL}q=${encodedLocation}${UNITS}${KEY}`;
        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                console.log(res);
                var weather = {
                    name: res.data.name,
                    temp: res.data.main.temp, 
                    humidity: res.data.main.humidity,
                    pressure: res.data.main.pressure,
                    desp: res.data.weather[0].description,
                }
                return weather;
            }
        }, function (res) {
            throw new Error(res.response.data.message);
        });
    }
};