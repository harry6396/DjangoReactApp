import React, {Component} from 'react';
import './CSS/modalpopup.css';

export default class ModalPopup extends Component{
    constructor(props){
        super(props);
        this.state={
            toHidePopup: !this.props.isShowPopup
        };
    }

    render(){
        let songRow = [];
        let songData = [];
        let songTable=[];
        if (this.props.songDetails.length !== 0) {
            this.props.songDetails.split(',').map(function(status, key){
                if(key !== 0 && key%2 === 0){
                    songRow.push(<tr>{songData}</tr>);
                    songData=[];
                    songData.push(<td><div className ="songModalContainer" >{status}</div></td>);
                }
                else{
                    songData.push(<td><div className="songModalContainer">{status}</div></td>);
                }
                return true;
            })
            if(songData.length > 0){
                songRow.push(<tr>{songData}</tr>);
            }
            songTable.push(<table className="table table-striped box top-buffer">
                <thead>
                    <tr><th></th><th></th></tr>
                </thead>
                <tbody>{songRow}</tbody>
                </table>);               
        }

        let popup = 
        !this.props.show ? "" :
        <div id="myModal" className={this.props.show ? "modal" : "modal displayPopup"}>
        <div className="modal-content">
        <span className="close" onClick={this.props.onHide}>&times;</span>
        <div className="divisionModal"></div>
        <div className="modalSongContent">
            {songTable}
        </div>
        </div>
        </div> ;
        return(
        <div>
            {popup}
        </div>
        );
    }
}
