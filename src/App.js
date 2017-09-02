import React, { Component } from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs.js';
import Search from './components/Search/Search.js';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Tabs></Tabs>
        <Search></Search>
      </div>
    );
  }
}

export default App;
