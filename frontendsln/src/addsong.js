import React, {Component} from 'react';
import './CSS/modalpopup.css';

class addsong extends Component{
    constructor(props){
        super(props);
        this.state={
            showPopup: false,
            songName: '',
            songArtist: '',
            songDuration: ''
        };
        this.submitData = this.submitData.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    submitData(){
        var data={};
        data.songName= this.state.songName;
        data.songArtist=this.state.songArtist;
        data.songDuration=this.state.songDuration;
        fetch('http://127.0.0.1:5000/api/AddSong', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
                this.props.onHide();
                alert("Successfully added the song");
        }).catch(err => err);
    }

    onKeyUp(event){
        if(event.target.id === "songname"){
            this.setState({songName: event.target.value});
        }else if(event.target.id === "artist"){
            this.setState({songArtist: event.target.value});
        }else if(event.target.id === "duration"){
            this.setState({songDuration: event.target.value});
        }
    }

    render(){
        return(
            <div>
            <div id="myModal" className={this.props.show ? "modal" : "modal displayPopup"}>
            <div className="modal-content">
            <span className="close" onClick={this.props.onHide}>&times;</span>
            <div className="divisionModal"></div>
            <div className="modalSongContent">
                <div><div className="addModalField modal-fields-add">Song Name</div><input type="text" className="addModalField" id="songname" onChange={this.onKeyUp}/></div>
                <div><div className="addModalField modal-fields-add">Artist</div><input type="text" className="addModalField" id="artist" onChange={this.onKeyUp}/></div>
                <div><div className="addModalField modal-fields-add">Duration</div><input type="text" className="addModalField" id="duration" onChange={this.onKeyUp} /></div>
            </div>
            <div className="modal-footer"><input className="submit-button" type="button" value="Add" onClick={this.submitData}/></div>
            </div>
            </div>
            </div>
        );
    }
}

export default addsong;