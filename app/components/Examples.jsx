var React = require('react');
var { Link } = require('react-router');

// var Examples = React.createClass({
//     render: function () {
//         return (
//             <h3>Examples Component</h3>
//         )
//     }
// });

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Washington DC'>Washington DC, USA</Link>
                </li>
                <li>
                    <Link to='/?location=Tokyo'>Tokyo, Japan</Link>
                </li>
                <li>
                    <Link to='/?location=Beijing'>Beijing, China</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;