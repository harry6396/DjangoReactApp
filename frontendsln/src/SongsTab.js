import React , { Component } from 'react';
import Loader from 'react-loader-spinner';
import './CSS/songstab.css';

class SongsTab extends Component{
    constructor(props){
        super(props);
        this.state={
            
        };
    }

    render(){
        let songRow = [];
        let songData = [];
        let songTable=[];
        if (this.props.songs.length !== 0) {
            this.props.songs.map(function(status, key){
                if(key !== 0 && key%4 === 0){
                    songRow.push(<tr>{songData}</tr>);
                    songData=[];
                    songData.push(<td><div className ="songContainer">{status[1][0]}</div></td>);
                }
                else{
                    songData.push(<td><div className="songContainer">{status[1][0]}</div></td>);
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
        </div>
        );
    }
}

export default SongsTab;