import React, { Component } from 'react';

import Header from './components/header';
import TodoForm from './components/todoform';
import TodoList from './components/todolist';
import {
  getTodos,
  newTodo,
  updateTodo,
  deleteTodo
} from './services';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      selectedTodo: { id: 0, title: '', completed: false }
    };

    // binds
    this.handleCompleted = this.handleCompleted.bind(this);
    this.handleDeleted = this.handleDeleted.bind(this);
    this.handleSelectedTodo = this.handleSelectedTodo.bind(
      this
    );
    this.handleSubmitForm = this.handleSubmitForm.bind(
      this
    );
  }

  componentDidMount() {
    this.getTodoList();
  }

  getTodoList() {
    getTodos().then((resp) =>
      this.setState({
        todos: resp.data
      })
    );
  }

  // handles
  handleCompleted(id) {
    const td = this.state.todos.find(
      (todo) => todo.id === id
    );
    updateTodo(td).then((resp) => {
      if (resp.data.id === td.id) {
        this.setState({
          todos: this.state.todos.map((todo) => {
            if (todo.id === id) {
              todo.completed = !todo.completed;
            }
            return todo;
          })
        });
      }
    });
  }

  handleDeleted(id) {
    deleteTodo(id).then((resp) => {
      if (resp.status === 200) {
        this.setState({
          todos: this.state.todos.filter(
            (todo) => todo.id !== id
          )
        });
      }
    });
  }

  handleSelectedTodo(todo) {
    this.setState({
      todos: this.state.todos,
      selectedTodo: todo
    });
  }

  handleSubmitForm(todo) {
    if (todo.id === 0 || todo.id === undefined) {
      // insert
      todo.id = this.state.todos.length + 1;
      newTodo(todo).then((resp) => {
        if (resp.data.id === 201) {
          this.setState({
            todos: [...this.state.todos, todo],
            selectedTodo: {
              id: 0,
              title: '',
              completed: false
            }
          });
        }
      });
    } else {
      // update
      updateTodo(todo).then((resp) => {
        if (resp.data.id === todo.id) {
          this.setState({
            todos: this.state.todos.map((item) => {
              if (item.id === todo.id) {
                return todo;
              } else {
                return item;
              }
            }),
            selectedTodo: this.state.selectedTodo
          });
        }
      });
    }
  }

  render() {
    return (
      <div className='container'>
        <Header />
        <TodoForm
          selectedTodo={this.state.selectedTodo}
          handleSubmit={this.handleSubmitForm}
        />
        <TodoList
          todos={this.state.todos}
          handleCheckCompleted={this.handleCompleted}
          handleDeleted={this.handleDeleted}
          handleSelectedTodo={this.handleSelectedTodo}
        />
      </div>
    );
  }
}

export default App;
