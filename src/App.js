import React, { useState } from 'react';
import './App.css';

import NewTask from './components/new-task';

function App() {
  return (
    <div className="App">
      <h1>Todo List Example with RecoilJs</h1>
      <NewTask />
    </div>

  );
}

export default App;
