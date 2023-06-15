import React, { useState } from 'react';
import TaskBoard from './TaskBoard';
import Blog from './Blog';

export default function Home() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Welcome to Task Management App</h1>
      </header>
      <div className="options">
        <div className={`option ${selectedOption === 'task' ? 'selected' : ''}`} onClick={() => handleOptionClick('task')}>
          <h2>Task Management</h2>
          <p>Manage your tasks efficiently</p>
        </div>
        <div className={`option ${selectedOption === 'blog' ? 'selected' : ''}`} onClick={() => handleOptionClick('blog')}>
          <h2>Blog</h2>
          <p>Read and interact with blog posts</p>
        </div>
      </div>
      {selectedOption === 'task' && <TaskBoard />}
      {selectedOption === 'blog' && <Blog />}
    </div>
  );
}
