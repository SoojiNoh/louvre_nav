import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const propTypes = {

};

const defaultProps = {

};

class PagePreview extends Component {

  constructor(props) {
      super(props);
  }


  render() {

      let selectedArtwork = this.props.selectedArtwork;

      // console.log(this.d.artworkData.title);
      console.log(this.props.selectedArtwork);

    if (this.props.selectedArtwork === -1 ) {
      return (
        <div></div>
      );
    } else {
      return (
      <div className="pagepreview">
        <div className="view">
          <img src={require('../../public/images/'+this.props.selectedArtwork+'.jpg')}></img>
        </div>
      </div>
      );
    }
  }
}

PagePreview.propTypes = propTypes;
PagePreview.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    artworkData: state.artworks.artworkData,
  };
};


export default connect(mapStateToProps)(PagePreview);
