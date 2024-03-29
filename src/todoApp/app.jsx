import React  from 'react';

import AddTodo from './addTodo';
import VisibleTodoList from './todoList';
import Footer from './footer';

const TodoApp = ({
    store
}) => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default TodoApp;