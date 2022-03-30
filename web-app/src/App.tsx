import React from 'react';
import logo from './logo.svg';
import './App.css';
import AsyncExample from './api/search_alt'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AsyncExample />
      </header>
    </div>
  );
}

export default App;
