import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [todos, setTodos] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (selectedUser) {
      axios.get(`https://jsonplaceholder.typicode.com/todos/?userId=${selectedUser.id}`)
        .then(response => setTodos(response.data))
        .catch(error => console.log(error));
    }
  }, [selectedUser]);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setShowDetails(false);
  };

  const handleReadMoreClick = () => {
    setShowDetails(true);
  };

  return (
    <div>
      <h1>Task Management App</h1>
      <div className="container">
        <div className="column">
          <h2>Users</h2>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <button onClick={() => handleUserClick(user)}>{user.name}</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="column">
          <h2>Todos</h2>
          {selectedUser ? (
            <div>
              {showDetails ? (
                <div>
                  <h3>{selectedUser.name}</h3>
                  <p>Username: {selectedUser.username}</p>
                  <p>Email: {selectedUser.email}</p>
                </div>
              ) : (
                <ul className="todo-list">
                  {todos.map(todo => (
                    <li key={todo.id}>
                      <span className="todo-prefix">-</span>
                      <span className={`todo-title ${todo.completed ? 'completed' : 'incomplete'}`}>{todo.title}</span>
                      <span className="todo-completed">
                        {todo.completed ? (
                          <span className="completed">Completed</span>
                        ) : (
                          <span className="incomplete">Incomplete</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              <button onClick={handleReadMoreClick}>Read More about the user</button>
            </div>
          ) : (
            <p>Select a user to view their todos.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;