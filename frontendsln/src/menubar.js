import React from 'react';
import './CSS/menubar.css';

class MenuBar extends React.Component{
    constructor(props){
        super(props);
        this.state={

        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(event){
        alert(event.target.value);
    }

    render(){
        return(
            <div className="menubarContainer">
                <input type = "button" value="Home" className="menu" onClick={this.onClick}/>
                <input type = "button" value="Filter" className="menu" onClick={this.onClick}/>
            </div>
        );
    }
}

export default MenuBar;