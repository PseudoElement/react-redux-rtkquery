import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <ul className="nav">
          <Link to={'/home'}>Home</Link>
          <Link to={'/favourites'}>Favourites</Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
