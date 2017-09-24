/*
 *
 * SignIn
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

export default class SignIn extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="SignIn" meta={[ { name: 'description', content: 'Description of SignIn' }]}/>

        //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

SignIn.contextTypes = {
  router: React.PropTypes.object
};
