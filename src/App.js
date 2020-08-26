import React from 'react';
import logo from './logo.svg';
import './App.css';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Courses></Courses>
      </header>
    </div>
  );
}

export default App;
