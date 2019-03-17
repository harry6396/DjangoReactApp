import React, { Component } from 'react';
import './App.css';
import MenuBar from './menubar';
import Loader from 'react-loader-spinner';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      toShowLoader:true
    };
  }
  render() {
    return (
      <div>
        <div className="headerContainer">
          <div className="headerContainerText">Welcome to Flask & React World!</div>
          <input type="text" className="searchBar" placeholder="Type here"/>
          <div className="fa fa-search search-icon"></div>
          <MenuBar/>
        </div>
        <div className="dataContainer"> 
        {this.state.toShowLoader?
        <div className="loaderContainer">
        <Loader 
         type="Circles"
         color="#00BFFF"
         height="100"	
         width="100"/>
        </div>
        :""}
        </div>
      </div>
    );
  }
}

export default App;
