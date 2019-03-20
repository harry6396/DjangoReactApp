import React , { Component } from 'react';
import Loader from 'react-loader-spinner';
import './CSS/songstab.css';
import ModalPopup from './ModalPopup';

class SongsTab extends Component{
    constructor(props){
        super(props);
        this.state={
            openModal:false,
            songData:[]
        };
        this.openPopup = this.openPopup.bind(this);
    }

    openPopup(event){
        this.setState({openModal:true, songData: event.target.dataset.songdetails});
    }

    render(){
        let songRow = [];
        let songData = [];
        let songTable=[];
        let modalClose = () => this.setState({ openModal: false });
        if (this.props.songs.length !== 0) {
            var comp = this;
            this.props.songs.map(function(status, key){
                if(key !== 0 && key%4 === 0){
                    songRow.push(<tr>{songData}</tr>);
                    songData=[];
                    songData.push(<td><div className ="songContainer" data-songDetails = {status[1]} onClick={comp.openPopup}>{status[1][0]}<br/>Artist:- {status[1][1]}<br/>Rank:- {status[1][15]}</div></td>);
                }
                else{
                    songData.push(<td><div className="songContainer" data-songDetails = {status[1]} onClick={comp.openPopup}>{status[1][0]}<br/>Artist:- {status[1][1]}<br/>Rank:- {status[1][15]}</div></td>);
                }
                return true;
            })
            if(songData.length > 0){
                songRow.push(<tr>{songData}</tr>);
            }
            songTable.push(<table className="table table-striped box top-buffer">
                <thead>
                    <tr><th></th><th></th><th></th><th></th></tr>
                </thead>
                <tbody>{songRow}</tbody>
                </table>);               
        }

        let popup=this.state.openModal?<ModalPopup show={this.state.openModal}
        onHide={modalClose}
        songDetails = {this.state.songData}
        />:"";

        return(
        <div>
            {this.props.toShowLoader && !this.props.isDataAvailable ?
            <div className="loaderContainer">
            <Loader 
            type="Circles"
            color="#00BFFF"
            height="100"	
            width="100"/>
            </div>
            : (this.props.isDataAvailable && this.props.songs.length === 0 ? <div className = "noDataAvailable"><div className="fa fa-remove"></div>No record found for this search</div> : <div>{songTable}</div>)}    
            {popup}
        </div>
        );
    }
}

export default SongsTab;