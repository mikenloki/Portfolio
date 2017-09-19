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
      images: ['API-Routes', 'Authentication', 'FullPage-Slider', 'Grid-Layout', 'Photo-FrontEnd', 'Photo-Upload', 'Portfolio', 'Responsive-Navbar', 'ToDo-Backend', 'ToDo-List'],
      links: ['https://github.com/mikenloki/API-Routes',    'https://github.com/mikenloki/Authentication', 'https://github.com/mikenloki/FullPage-Slider', 'https://github.com/mikenloki/Grid-Layout', 'https://github.com/mikenloki/Photo-FrontEnd', 'https://github.com/mikenloki/Photo-Upload', 'https://github.com/mikenloki/Portfolio', 'https://github.com/mikenloki/Responsive-Navbar', 'https://github.com/mikenloki/ToDo-Backend', 'https://github.com/mikenloki/ToDo-List', ]
    }
  }

  render() {
    return (
      <div>
        <div className="grid">
          {this.state.images.map((image, index) => (
            <div className="gridItem" key={index}>
              <div className="tooltip">
                <span className="tooltiptext">{this.state.images[index]}</span>
              </div>
              <a href={this.state.links[index]} target="_blank"><img src={require('../../images/' +image+'.png')}  className="gridImage"/></a>
              <div className="hoverBox">
              </div>
            </div>
          ))}
        </div>
        {/*<div className="BOOM">BOOM!</div>*/}
      </div>
    );
  }
}

Grid.contextTypes = {
  router: React.PropTypes.object
};
