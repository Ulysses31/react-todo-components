import axios from 'axios';

const todosUrl =
  'https://jsonplaceholder.typicode.com/todos';
const options = {
  headers: { 'content-type': 'json' },
  withCredentials: false,
  responseType: 'json'
};

// GET Todos
export async function getTodos() {
  try {
    return await axios.get(`${todosUrl}?_limit=10`);
  } catch (err) {
    return err.message;
  }
}

// Get Todo By ID
export async function getTodoById(id) {
  try {
    return await axios.get(`${todosUrl}/${id}`);
  } catch (err) {
    return err.message;
  }
}

// POST Todo
export async function newTodo(data) {
  try {
    return await axios.post(
      `${todosUrl}`,
      { data },
      options
    );
  } catch (err) {
    return err.message;
  }
}

// PUT Todo
export async function updateTodo(data) {
  try {
    return await axios.put(
      `${todosUrl}/${data.id}`,
      { data },
      options
    );
  } catch (err) {
    return err.message;
  }
}

// DELETE Todo
export async function deleteTodo(data) {
  try {
    return await axios.delete(
      `${todosUrl}/${data.id}`,
      options
    );
  } catch (err) {
    return err.message;
  }
}
