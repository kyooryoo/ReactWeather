var React = require('react');
var IncomeForm = require('IncomeForm');
var IncomeMessage = require('IncomeMessage');

var Income = React.createClass({
    render: function () {
        return (
            <div>
                <h3>Income Component</h3>
                <IncomeForm />
                <IncomeMessage />
            </div>
        )
    }
});

module.exports = Income;