import { useMemo } from 'react';
import List from './List.js';
import { filterTodos } from './utils.js'

 function TodoList({ todos, theme, tab }) {
   
    const visibleTodos = useMemo(                    //to memoize the value
        () => filterTodos(todos, tab),
        [todos, tab]
    );

    // const visibleTodos = filterTodos(todos, tab)
       
    return (
        <div className={theme}>
            <p><b>Note: <code>List</code> is artificially slowed down!</b></p>
            <List items={visibleTodos} />
        </div>
    );
}

export default TodoList
