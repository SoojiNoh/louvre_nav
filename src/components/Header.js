import React, { Component, PropTypes } from 'react';

const propTypes = {

};

const defaultProps = {

};

class Header extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="title">Authentic</div>
      </div>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
