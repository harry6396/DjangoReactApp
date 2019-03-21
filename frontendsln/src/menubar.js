import React from 'react';
import './CSS/menubar.css';
import AddSong from './addsong';

class MenuBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            toShowAddPopup: false,
            openModal: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(event){
        if(event.target.value === 'Add'){
            this.setState({toShowAddPopup: true, openModal: true});
        }
    }

    render(){
        let modalClose = () => this.setState({ openModal: false });
        return(
            <div className="menubarContainer">
                <input type = "button" value="Filter" className="menu" onClick={this.onClick}/>
                <input type = "button" value="Add" className="menu" onClick={this.onClick}/>
                <div className="fa fa-plus plusIcon"></div>
                {this.state.toShowAddPopup?<AddSong show = {this.state.openModal} onHide={modalClose}/>:""}
            </div>
        );
    }
}

export default MenuBar;