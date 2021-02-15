import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

export default function TodoForm(props) {
  const { selectedTodo, handleSubmit } = props;
  const [formTodo, setFormTodo] = useState(selectedTodo);

  useEffect(() => {
    setFormTodo(selectedTodo);
  }, [props]);

  // handles
  const handleSelectedTodo = (e) => {
    setFormTodo({
      id: formTodo.id,
      title: e.target.value,
      completed: formTodo.completed
    });
  };

  const handleNewTodo = (e) => {
    e.preventDefault();
    setFormTodo({ id: 0, title: '', completed: false });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit(formTodo);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type='text'
        id='title'
        name='title'
        placeholder='enter a title'
        value={formTodo.title}
        onChange={handleSelectedTodo}
      />
      <button onClick={handleNewTodo}>New</button>
      <button>Save</button>
    </form>
  );
}

// ****** Props Validations ********
TodoForm.propTypes = {
  selectedTodo: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
