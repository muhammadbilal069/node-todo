const todos = [];

const addTodo = (name) => {
    const todo = {
        name: name,
        status: false // Default status false
    }
    todos.push(todo);
    return true;
}

const getAllTodos = () => {
    return todos;
}

const updateTodoStatus = (index, status) => {
    if (todos[index] !== undefined) {
        todos[index].status = status;
        return true;
    }
    return false;
}

module.exports = {
    getAllTodos,
    addTodo,
    updateTodoStatus
}