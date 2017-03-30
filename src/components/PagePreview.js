import React, { Component, PropTypes } from 'react';

const propTypes = {

};

const defaultProps = {

};

class PagePreview extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="pagepreview">
        <div className="view">
          <img src="http://www.artinculture.kr/admin/contents/online/file/174/Figure+skating,+John+Foster_2010_Oil+on+canvas_193.9+x+112.1c..."></img>
        </div>
      </div>
    );
  }
}

PagePreview.propTypes = propTypes;
PagePreview.defaultProps = defaultProps;

export default PagePreview;
