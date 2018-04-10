var Todo = React.createClass({    
    getInitialState: function() {
        return {editing: false}
    },    
    edit: function() {
              
        this.setState({editing:true});
      
    },
    remove: function() {        
        this.props.onRemove(this.props.index);
    },
    save: function() {

        var newValue = this.refs.newValue.getDOMNode().value;     
        this.props.onChange(newValue,this.props.index);
        this.setState({editing:false});
    },
    todoDisplay: function() {
        return (
            <div>

                    <li className="todo">

                        <span onClick={this.edit}>
                            {this.props.children}
                        </span>

                        <button onClick={this.remove} className="btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right"/>


                    </li>

            </div>
        );
    }, 
    todoForm: function() {
        return (
            <div>

                    <li className="todo">

                        <span>
                            <input placeholder="Edit todo" type="text" ref="newValue" defaultValue={this.props.children}/>                             
                        </span>

                        <button onClick={this.save} className="btn btn-default btn-sm glyphicon glyphicon-floppy-disk pull-right"/>


                    </li>
         

            </div>
        );

    },
    render: function() {
      
       if(this.state.editing){
            return this.todoForm();
       } else {
            return this.todoDisplay();
       }
            
    },
      

});

var TodoList = React.createClass({

    getInitialState: function() {
  
        return {
            todos: [],
            placeholder: "Add a todo!",
            input_style: "form-control",
            text: ""
        };
    },

    onChange: function(e){

        this.setState({text: e.target.value});
        
    },

    add: function(e){
        var arr = this.state.todos;
        var newTodo = this.refs.newTodo.getDOMNode().value;

        if(!newTodo) {
            e.preventDefault();
            this.setState({placeholder: "Please add a todo", input_style: "form-control red"})
        } else {
            arr.push(newTodo);
            this.setState({todos: arr, placeholder: "Add a todo!", text: null,  input_style: "form-control"});
        }
    },
    
    update: function(newValue, i){
        var arr = this.state.todos;
        arr[i] = newValue;
        this.setState({todos: arr});
    },

    remove: function(i){
        var arr = this.state.todos;
        arr.splice(i, 1);
        this.setState({todos: arr});
    },
    
    eachTodo: function (todo,i) {

            return (
                <Todo   key={i}
                        index={i}
                        onChange={this.update}
                        onRemove={this.remove}>
                        {todo}
                </Todo>
            )
    },

    render: function() {

        return (
            <div>
                <h1>Things to do</h1>

                <div className="form-inline">

                    <div className="form-group">
                        <input ref="newTodo" className={this.state.input_style} placeholder={this.state.placeholder} value={this.state.text} onChange={this.onChange}/>               
                        <button onClick={this.add} className="btn btn-default btn-sm add-btn">+</button>             
                    </div>
             
                </div>

                <ul>
                    {this.state.todos.map(this.eachTodo)}                 
                </ul>

            </div>
        );
    }
});
React.render(<TodoList />, document.getElementById('todo'));
