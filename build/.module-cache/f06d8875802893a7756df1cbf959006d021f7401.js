var Todo = React.createClass({displayName: "Todo",


    edit: function() {
        alert("edit todo");
    },

    remove: function(){
        alert("Todo removed");
    },

    save: function(){
        alert("Todo saved")
    },

    todoDisplay: function(){
        return (                      
            React.createElement("li", {className: "todo"}, 
            
            React.createElement("span", {onClick: this.edit}, 
            this.props.children
            ), 
    
            React.createElement("button", {onClick: this.remove, className: "btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right"})
                  
            )                 
        );
        
    },
    todoForm: function(){
        return (                      
            React.createElement("li", {className: "todo"}, 
            
            React.createElement("span", null, 
            React.createElement("input", {type: "text", placeholder: "Edit Todo", defaultValue: this.props.children})
            ), 
    
            React.createElement("button", {onClick: this.save, className: "btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right"})
                  
            )                 
        );

    },

    render: function() {

    }

});

React.render(React.createElement("div", null, 

        React.createElement("h1", null, "Things to do"), 
            React.createElement("div", {className: "form-inline"}, 
                React.createElement("div", {className: "form-group"}, 
                    React.createElement("input", {className: "form-control", placeholder: "Add Todo"}), 
                    React.createElement("button", {className: "btn btn-default btn-sm"}, "+")
                )
            ), 
        
    React.createElement("ul", null, 
    React.createElement(Todo, null, "Call Henry"), 
    React.createElement(Todo, null, "Pay phone bill"), 
    React.createElement(Todo, null, "Make dentist appointment")
    )

    ), document.getElementById("todo"));
