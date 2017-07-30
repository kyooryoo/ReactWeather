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
        <h3 className="text-center">It is {temp} C degree in {location}.</h3>
    );
};

module.exports = WeatherMessage;