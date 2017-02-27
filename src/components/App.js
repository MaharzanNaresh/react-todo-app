import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Menu from './Menu';
import {addTodo, updateTodo, filterTodo, getInitialState} from '../utils/Todo';

class App extends React.Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.addNewTodo = this.addNewTodo.bind(this);
        this.applyFilter = this.applyFilter.bind(this);
    }

    componentWillMount() {
        const initialState = getInitialState();
        this.setState(initialState)
    }

    toggle(todo) {
        const updatedTodoItems = updateTodo(todo)
        this.applyFilter(this.state.filterAction, updatedTodoItems)
    }

    addNewTodo(newTodoItem) {
        const newTodoItems = addTodo(newTodoItem);
        this.applyFilter(this.state.filterAction, newTodoItems);
    }

    applyFilter(action, newTodoItems) {
        const filteredData = filterTodo(action, newTodoItems);
        this.setState(filteredData);
    }

    render() {
        return (
            <div>
                <AddTodo addTodo={this.addNewTodo}/>
                <Menu todos={this.state.todoItems} filterTodoItems={this.applyFilter} activeFilter={this.state.filterAction}/>
                <TodoList todoItems={this.state.filteredTodoItems} toggleTodo={this.toggle}/>
            </div>
        );
    }
}
export default App;