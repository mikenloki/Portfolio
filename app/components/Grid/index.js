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
      images: ['HBomb-1.jpg', 'HBomb-2.jpg', 'HBomb-3.jpg', 'HBomb-4.jpg']
    }
  }

  render() {
    return (
      <div>
        <div className="grid">
          {this.state.images.map((image, index) => (
            <div className="gridItem" key={index}>
              <img src={require('../../images/' +image)}  className="gridImage"/>
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
