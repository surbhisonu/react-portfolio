import React, { Component } from 'react';

class Services extends Component {
  render() { 
    return ( 
      <div className="services">
        <h3>Services</h3>
        <h2>What we offer</h2>
        <div className="row">
          <div>
            <span>
              <ion-icon name="call"></ion-icon>
            </span> 
            <h4>Responsive</h4>
            <p>Lorem Ipsum is <ion-icon name="heart"></ion-icon> simply dummy text</p>
          </div>
          <div>
            <span>
              <ion-icon name="brush"></ion-icon>
            </span> 
            <h4>Responsive</h4>
            <p>Lorem Ipsum is <ion-icon name="heart"></ion-icon> simply dummy text</p>
          </div>
          <div>
            <span>
              <ion-icon name="thumbs-up"></ion-icon>  
            </span> 
            <h4>Responsive</h4>
            <p>Lorem Ipsum is <ion-icon name="heart"></ion-icon> simply dummy text</p>
          </div>
          <div>
            <span>
              <ion-icon name="help"></ion-icon>
            </span> 
            <h4>Responsive</h4>
            <p>Lorem Ipsum is <ion-icon name="heart"></ion-icon> simply dummy text</p>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Services;