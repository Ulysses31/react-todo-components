import React, { Component } from 'react';

import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);

    // binds
    this.handleCheckCompleted = this.handleCheckCompleted.bind(
      this
    );
    this.handleDeleted = this.handleDeleted.bind(this);
    this.handleSelectedTodo = this.handleSelectedTodo.bind(
      this
    );
  }

  // style
  getCheckStyle = () => {
    return {
      textDecoration: this.props.todo.completed
        ? 'line-through'
        : 'none'
    };
  };

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
    const { todo } = this.props;
    return (
      <tr>
        <td>
          <input
            type='checkbox'
            value={todo.completed}
            checked={todo.completed}
            onChange={() =>
              this.handleCheckCompleted(todo.id)
            }
          />
          &nbsp;
          <span style={this.getCheckStyle()}>
            {todo.title}
          </span>
        </td>
        <td style={{ textAlign: 'center' }}>
          <button
            onClick={() => this.handleSelectedTodo(todo)}
          >
            Edit
          </button>{' '}
          <button
            onClick={() => this.handleDeleted(todo.id)}
          >
            x
          </button>
        </td>
      </tr>
    );
  }
}

export default TodoItem;

// ****** Props Validations ********
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  completed: PropTypes.bool,
  handleCheckCompleted: PropTypes.func.isRequired,
  handleDeleted: PropTypes.func.isRequired,
  handleSelectedTodo: PropTypes.func.isRequired
};
