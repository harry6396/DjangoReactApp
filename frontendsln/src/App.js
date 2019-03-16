import React, { Component } from 'react';
import './App.css';
import MenuBar from './menubar';

class App extends Component {
  render() {
    return (
      <div>
        <div className="headerContainer">
          <div className="headerContainerText">Welcome to Django & React World!</div>
          <input type="text" className="searchBar" placeholder="Type here"/>
          <div className="fa fa-search search-icon"></div>
          <MenuBar/>
        </div>
      </div>
    );
  }
}

export default App;
