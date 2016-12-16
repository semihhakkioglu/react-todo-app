import React, { Component } from 'react';
import TodoInput from './TodoInput';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoInput/>
      </div>
    );
  }
}