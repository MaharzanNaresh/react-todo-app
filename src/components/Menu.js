import React from 'react';
import * as Constant from '../const/AppConstants';
import {todoCount} from '../utils/Todo';

const Menu = (props) => {
    const {filterTodoItems, todos, activeFilter} = props;
    const {total, doneCount, remaining} = todoCount(todos);
    const classFilter = (currentFilter) => (activeFilter === currentFilter) ? 'counter highlighted-counter' : 'counter';

    return (
        <ul className="list-container">
            <li className="list-item menu">
                <span className="left-block">
                    <span onClick={() => filterTodoItems(Constant.ALL)}>
                        Total TODO's
                        <span className={classFilter(Constant.ALL)}>{total}</span>
                    </span>
                </span>
                <span className="right-block">
                    <span className="completed" onClick={() => filterTodoItems(Constant.COMPLETED) }>
                        Completed
                        <span className={classFilter(Constant.COMPLETED)}>{doneCount}</span>
                    </span>
                    <span onClick={() => filterTodoItems(Constant.REMAINING) }>
                        Remaining
                        <span className={classFilter(Constant.REMAINING)}>{remaining}</span>
                    </span>
                </span>
            </li>
        </ul>
    );
}
export default Menu;