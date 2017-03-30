import React, { Component, PropTypes } from 'react';
import Navigation from './Navigation';

const propTypes = {

};

const defaultProps = {

};

class App extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div>
        <Navigation />
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
