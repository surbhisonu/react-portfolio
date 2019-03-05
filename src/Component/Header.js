import React, { Component } from 'react';
import BackgroundImg from '../imges/background.jpeg';

const mystyle = {
  'backgroundImage': `url(${ BackgroundImg })`,
  'height': '80vh',
  'backgroundSize' : 'cover'
}

class Header extends Component {
  render() { 
    return ( 
      <header style={mystyle}>
        <div className="header">
          <h1>{this.props.title}</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button> Find one More</button>
        </div>
      </header>
     );
  }
}
 
export default Header;