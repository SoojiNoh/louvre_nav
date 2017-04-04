import React, { Component, PropTypes } from 'react';

const propTypes = {

};

const defaultProps = {

};

class NavMini extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    // console.log(this.props.num);
    return (
      <div onClick={this.props.onClick}>
        <li className="navminiItem">{this.props.artwork.title}</li>
      </div>
    );
  }
}

NavMini.propTypes = propTypes;
NavMini.defaultProps = defaultProps;

export default NavMini;
