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
        <h3 className="text-center">The temperature in {location} is {temp}.</h3>
    );
};

module.exports = WeatherMessage;