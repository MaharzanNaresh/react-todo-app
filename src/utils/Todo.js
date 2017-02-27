import * as Constants from '../const/AppConstants';

export const getInitialState = () => {
    const todoItems = getTodoItems();
    return {
        filterAction: Constants.ALL,
        todoItems: todoItems,
        filteredTodoItems: todoItems
    };
}

export const getTodoItems = () => {
    return JSON.parse(localStorage.getItem(Constants.STORAGE_KEY)) || [];
}

export const addTodo = (todo) => {
    const newTodo = {
        todo,
        id: Date.now(),
        done: false
    }
    const newTodoItems = getTodoItems().concat([newTodo]);
    localStorage.setItem(Constants.STORAGE_KEY, JSON.stringify(newTodoItems));
    return newTodoItems;
}

export const updateTodo = (todo) => {
    let todoItems = getTodoItems();
    const todoIndex = todoItems.findIndex((el) => el.id === todo.id);
    todoItems[todoIndex] = todo;
    localStorage.setItem(Constants.STORAGE_KEY, JSON.stringify(todoItems));
    return todoItems;
}

export const filterTodo = (action, newTodoItems) => {
    let todoItems = newTodoItems || getTodoItems();
    let filteredTodoItems = [];
    let filterAction = action;
    switch (action) {
        case Constants.COMPLETED:
            filteredTodoItems = todoItems.filter((todo) => todo.done === true);
            break;
        case Constants.REMAINING:
            filteredTodoItems = todoItems.filter((todo) => todo.done !== true);
            break;
        default:
            filterAction = Constants.ALL;
            filteredTodoItems = todoItems;
            break;
    }
    return {
        filterAction,
        filteredTodoItems,
        todoItems
    };
}

export const todoCount = (todos) => {
    const total = todos.length;
    const doneCount = todos.filter((val) => {
        return val.done === true;
    }).length;

    return {
        total,
        doneCount,
        remaining: total - doneCount
    }
}