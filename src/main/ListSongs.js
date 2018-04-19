import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ListSongs extends Component{
    constructor(props){
        super(props)
        console.log(props.props);
        
    }
    render(){
        return(  
           
           <li> <a href={`${this.props.props.url}`}  target="_blank"> {this.props.props.rank} {this.props.props.name}</a></li>
       
        )
    }

}

export default ListSongs



