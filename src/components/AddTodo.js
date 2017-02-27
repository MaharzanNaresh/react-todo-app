import React from 'react';

class AddTodo extends React.PureComponent {
    constructor(props) {
        super(props);
        this.props = props;
        this.addTodo = this.addTodo.bind(this);
    }

    shouldComponentUpdate() {
        return false;
    }

    addTodo(event) {
        const todo = event.target.value.trim();
        if (event.keyCode === 13 && todo) {
            event.target.value = '';
            this.props.addTodo(todo);
        }
    }

    render() {
        return (
            <div>
                <input className="new-todo" ref="add-todo" placeholder="Add Your New TODO" onKeyDown={this.addTodo}/>
            </div>
        )
    }
}

export  default AddTodo;