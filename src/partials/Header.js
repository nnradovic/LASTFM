import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

const Header = (props) => {
  const{value,keyup} = props
    return (
        <nav id="main-nav" className="navbar justify-content-between">
        <div className="container">
            <Link to="/" className="navbar-brand">Last FM</Link>
            <form className="form-inline">
                <input className="form-control" type="search" placeholder="Find Show" aria-label="Search" value={value} onChange={keyup}/>
                <ul className="search-results"></ul>
            </form>
        </div>
    </nav>        
    )
}

export default Header;