var React = require('react');

var IncomeForm = React.createClass({
    render: function () {
        return(
            <div>
                <form>
                    <div><input type="text" ref="" placeholder="" /></div>
                    <div><input type="text" ref="" placeholder="" /></div>
                    <div><input type="text" ref="" placeholder="" /></div>
                    <div><input type="text" ref="" placeholder="" /></div>
                    <div><input type="text" ref="" placeholder="" /></div>
                    <div><input type="text" ref="" placeholder="" /></div>
                    <div><input type="text" ref="" placeholder="" /></div>
                    <div><input type="text" ref="" placeholder="" /></div>
                    <div><input type="text" ref="" placeholder="" /></div>
                    <div><input type="text" ref="" placeholder="" /></div>
                    <div><input type="text" ref="" placeholder="" /></div>
                    <div><button>Submit</button></div>
                </form>
            </div>
        );
    }
});

module.exports = IncomeForm;