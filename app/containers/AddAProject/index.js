/*
 *
 * AddAProject
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class AddAProject extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="AddAProject" meta={[ { name: 'description', content: 'Description of AddAProject' }]}/>

        //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

AddAProject.contextTypes = {
  router: React.PropTypes.object
};
