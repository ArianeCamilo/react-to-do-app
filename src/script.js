var Todo = React.createClass({

    render: function() {

        return (
            <div>
                <h1>Things to do</h1>
            </div>
        );
    }

});

React.render(<Todo />, document.getElementById("todo"));
