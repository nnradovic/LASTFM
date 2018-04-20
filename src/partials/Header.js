import React, { Component } from "react";
import "./Header.css";
import {Link} from "react-router-dom";

class Header extends Component {
  constructor(props){
      super(props)
      this.state={
          search:""
      }
  }

  handleChange = e => {
    //   e.target.value
    console.log(e.target.value);
    this.setState({
      search: e.target.value
    });
    this.props.props(e.target.value);
  };
  render(){
    //  console.log(this.props.match.path);
     
      return (
          <nav id="main-nav" className="navbar justify-content-between">
          <div className="container">
              <Link to="/" className="navbar-brand">Last FM</Link>
              <form className="form-inline">
                  <input className="form-control" type="search" placeholder="Search all Authors-Albums" aria-label="Search" value={this.state.search} onChange={this.handleChange}/>
                  <ul className="search-results"></ul>
              </form>
          </div>
      </nav>        
      )
  }
  }

export default Header;