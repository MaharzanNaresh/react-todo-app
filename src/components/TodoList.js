import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {

    constructor(props) {
        super();
        this.props = props;
        this.createTodoItems = this.createTodoItems.bind(this);
        this.createTodoItem = this.createTodoItem.bind(this);
    }

    createTodoItem(el) {
        return <TodoItem todoObject={el} key={el.id} toggle={this.props.toggleTodo}/>
    }

    createTodoItems = () => {
        // we have to access as this.props.todoItems
        // it wont work as this.todoItems where in constructor we set this.todoItems = props.todoItems
        return this.props.todoItems.map(this.createTodoItem)
    }

    render() {
        return <ul className="list-container">
            {this.createTodoItems()}
        </ul>
    }
}

TodoList.propTypes = {
   toggleTodo: React.PropTypes.func.isRequired,
   todoItems: React.PropTypes.array.isRequired
}
export default TodoList;
