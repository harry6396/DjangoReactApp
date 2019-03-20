import React, { Component } from 'react';
import './App.css';
import MenuBar from './menubar';
import SongsDetails from './SongsTab';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      songs: [],
      isDataAvailable: false
    };
    this.fetchSongs = this.fetchSongs.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
  }

componentDidMount(){
    this.fetchSongs('');
}
  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.setState({isDataAvailable: false});
      this.fetchSongs(e.target.value);
    }
    else if(e.key === 'Backspace' && e.target.value.length <=1 ){
      this.setState({isDataAvailable: false});
      this.fetchSongs('');
    }
  }

  fetchSongs(searchKeyword){
    var comp = this;
    var isDataFetched= true;
    var sURL = "http://127.0.0.1:5000/api/GetSongsData" + (searchKeyword === '' || searchKeyword === undefined ? "" : "/" + searchKeyword);
    fetch(sURL)
      .then(res => res.json())
      .then(
        (result) => {
          isDataFetched = true;
          comp.setState({songs:Object.entries(JSON.parse(result).status), isDataAvailable: isDataFetched});
        },
        (error) => {
        }
      )
    }

  render() {
    return (
      <div>
        <div className="headerContainer">
          <div className="headerContainerText">Welcome to Flask & React World!</div>
          <input type="text" className="searchBar" placeholder="Type here" onKeyDown={this._handleKeyPress}/>
          <div className="fa fa-search search-icon"></div>
          <MenuBar/>
        </div>
        <div className="dataContainer"> 
        <SongsDetails
        songs = {this.state.songs}
        toShowLoader = {true}
        isDataAvailable = {this.state.isDataAvailable}
        />
        </div>
      </div>
    );
  }
}

export default App;
