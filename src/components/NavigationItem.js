import React, { Component, PropTypes } from 'react';
import NavMini from './NavMini';
import { connect } from 'react-redux';
import * as actions from '../actions';

const propTypes = {
  navItem: React.PropTypes.object,
};

const defaultProps = {
  navItem: false,
};

class NavigationItem extends Component {


  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(selectedArtwork) {
    console.log(selectedArtwork);
    this.props.handlePreview(selectedArtwork);
  }

  render() {
    // console.log(this.props.navItem.title);
    const mapToComponents = (data) =>{
      return data.map((artworkData, i) => {
        return (<NavMini artwork={artworkData} num={i} key={i} onClick={()=>this.handleClick(i)} />);
      });
    };

    return (
      <div onClick={this.props.onClick}>
        <li className="navitem"><a href="#">{this.props.navItem.title}</a></li>
        {this.props.navItem.title === 'Artwork' ?
          <ul className="navmini inactive">{mapToComponents(this.props.artworkData)}</ul> : ''}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artworkData: state.artworks.artworkData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlePreview: (selectedArtwork) => {dispatch(actions.previewArtwork(selectedArtwork)); },
    // handleIncrement: () => { dispatch(actions.increment()); },
    // handleDecrement: () => { dispatch(actions.decrement()); },
    // handleSetColor: (color) => { dispatch(actions.setColor(color)); },
  }
  // return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItem);
