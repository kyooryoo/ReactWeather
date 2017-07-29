var React = require('react');

// var About = React.createClass({
//     render: function () {
//         return (
//             <h3>About Component</h3>
//         )
//     }
// });

// arrow function could be used as this component 
// only cotain render and does not maintain state
var About = (props) => {
    return (
        <h3>About Component</h3>
    );
};

module.exports = About;