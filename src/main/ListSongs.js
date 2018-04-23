import React, { Component } from 'react'

import './Main.css'
class ListSongs extends Component{
    constructor(props){
        super(props)
       
        
    }
    render(){
        return(     
           <li> <a href={`${this.props.props.url}`}  target="_blank"> {this.props.props.rank} {this.props.props.name}</a></li>

        )
    }
}

export default ListSongs



