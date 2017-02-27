import React from 'react';

const TodoItem = (props) => {

    const {todoObject, toggle} = props;

    const toggleChange = () => {
        todoObject.done = !todoObject.done;
        toggle(todoObject);
    }

    return (
        <li className={(todoObject.done) ? " list-item done" : "list-item"} onClick={toggleChange}>
            <div>
                <label>{todoObject.todo}</label>
            </div>
        </li>
    );
}

export default TodoItem;