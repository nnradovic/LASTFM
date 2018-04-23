import React, { Component } from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import logo from './Lastfm.jpg'

class Search extends Component {
  constructor(props){
      super(props)
      this.state={
          search:""
      }
  }

  handleChange = e => {
   
    console.log(e.target.value);
    this.setState({
      search: e.target.value
    });
    this.props.props(e.target.value);
  };
  render(){
   
     
      return (
          <nav id="main-nav" className="navbar justify-content-between">
          <div className="container">
              <Link to="/" className="navbar-brand"><img src={logo} alt="LastFM"/></Link>
              <form className="form-inline">
                  <input className="form-control" type="search" placeholder="Search all Authors-Albums" aria-label="Search" value={this.state.search} onChange={this.handleChange}/>
                  <ul className="search-results"></ul>
              </form>
          </div>
      </nav>        
      )
  }
  }

export default Search;