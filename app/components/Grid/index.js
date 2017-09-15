/**
*
* Grid
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Grid extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      images: ['API-Routes.png', 'Authentication.png', 'FullPage-Slider.png', 'Grid-Layout.png', 'Photo-FrontEnd.png', 'Photo-Upload.png', 'Portfolio.png', 'Responsive-Navbar.png', 'ToDo-Backend.png', 'ToDo-List.png']
    }
  }

  render() {
    return (
      <div>
        <div className="grid">
          {this.state.images.map((image, index) => (
            <div className="gridItem" key={index}>
              <img src={require('../../images/' +image)}  className="gridImage"/>
              <div className="hoverBox">
              </div>
            </div>
          ))}
        </div>
        <div className="BOOM">BOOM!</div>
      </div>
    );
  }
}

Grid.contextTypes = {
  router: React.PropTypes.object
};
