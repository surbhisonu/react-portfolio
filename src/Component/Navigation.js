/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    const sections = ['Home','About','Services','Portfolio','Contacts']; 
    const navLink = sections.map( section => {
      return (
        <li><a href={'#' + section }>{section}</a></li>
      )
    });
    return ( 
      <nav>
        <h2 className="logo">{this.props.LogoTitle}</h2>
        <ul>
          {navLink}
        </ul>
      </nav>
     );
  }
}
 
export default Navigation;