import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="favourites">Favourites</Link>
      <Link to="contact">Contact</Link>
      {/* <Link to="characters/:family">Family</Link> */}
    </div>
  );
};

export default Nav;
