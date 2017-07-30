var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function() {
//         var { location, temp } = this.props;
//         return(
//             <p>The temperature in {location} is {temp}.</p>
//         );
//     }
// });

var WeatherMessage = ({ name, temp, humidity, desp, pressure, }) => {
    return(
        <div>
            <h3 className="text-center">{name}</h3>
            <h3 className="text-center">{desp}</h3>
            <h3 className="text-center">Temperature: {temp} C</h3>
            <h3 className="text-center">Humidity: {humidity} %</h3>
            <h3 className="text-center">Pressure: {pressure}</h3>
        </div>
    );
};

module.exports = WeatherMessage;