import React from 'react';

const NavBar = (props) => {
  return (
      <ul className="navBar">
      <li className="navLink">
        <img className="logo" src="../images/panda2.png" alt="panda logo"/>
      </li>
        <li className="navLink">
          <a href="/home">Home</a>
        </li>
        <li className="navLink">
          <a href="/groups">My Groups</a>
        </li>
        <li className="navLink">
          <a href="/news">Good News</a>
        </li>
        <li className="navLink">
          <a href="/checks" >My Checks</a>
        </li>
        <li className="navLink">
          <a href="/profile" >My Profile</a>
        </li>
        <li className="navLink">
          <a href="/logout" >Logout</a>
        </li>
      </ul>
  )
}

export default NavBar;
