import React, { Component } from 'react';

import PropTypes from 'prop-types';

import TodoItem from './todoitem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props)

    // binds
    this.handleCheckCompleted = this.handleCheckCompleted.bind(
      this
    );
    this.handleDeleted = this.handleDeleted.bind(this);
    this.handleSelectedTodo = this.handleSelectedTodo.bind(
      this
    );
  }

  // handles
  handleCheckCompleted(id) {
    this.props.handleCheckCompleted(id);
  }

  handleDeleted(id) {
    this.props.handleDeleted(id);
  }

  handleSelectedTodo(todo) {
    this.props.handleSelectedTodo(todo);
  }

  render() {
    const { todos } = this.props;
    return (
      <table border='0' width='100%' cellSpacing='3px'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              handleCheckCompleted={
                this.handleCheckCompleted
              }
              handleDeleted={this.handleDeleted}
              handleSelectedTodo={this.handleSelectedTodo}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default TodoList;

// ****** Props Validations ********
TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  map: PropTypes.func,
  handleCheckCompleted: PropTypes.func.isRequired,
  handleDeleted: PropTypes.func.isRequired,
  handleSelectedTodo: PropTypes.func.isRequired
};
