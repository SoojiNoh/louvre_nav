import React, { Component, PropTypes } from 'react';
import NavMini from './NavMini';

const propTypes = {
  navItem: React.PropTypes.object,
  key: React.PropTypes.integer,
};

const defaultProps = {
  navItem: false,
  key: -1,
};

export default class NavigationItem extends Component {

  constructor(props) {
    super(props);
    // this.handleClick=this.handleClick.bind(this);
  }

  render() {
    console.log(this.props.navItem.title);
    return (
      <div onClick={this.props.onClick}>
        <li className="navitem"><a href="#">{this.props.navItem.title}</a></li>
        {this.props.navItem.title === 'Artwork' ? <NavMini /> : ''}
      </div>
    );
  }
}

// <li><a href="#">Home</a></li>
// <li><a href="#">Statement</a></li>
// <li><a href="#">Collection</a></li>
// <li className="active"><a href="#">Artwork</a></li>
// <li><a href="#">Profile</a></li>
// <li><a href="#">Location</a></li>
