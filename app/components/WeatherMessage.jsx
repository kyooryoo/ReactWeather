var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function() {
//         var { location, temp } = this.props;
//         return(
//             <p>The temperature in {location} is {temp}.</p>
//         );
//     }
// });

var WeatherMessage = ({ location, temp }) => {
    return(
        <p>The temperature in {location} is {temp}.</p>
    );
};

module.exports = WeatherMessage;