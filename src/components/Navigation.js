import React, { Component, PropTypes } from 'react';
import './Navigation.css';
import NavigationItem from './NavigationItem'
import PagePreview from './PagePreview';
import Header from './Header';

import { connect } from 'react-redux';

const propTypes = {

};

const defaultProps = {
};


class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alreadyNav: false,
      selectedKey: -1,
      navData: [{
        title: 'Home',
      }, {
        title: 'Statement',
      }, {
        title: 'Collection',
      }, {
        title: 'Artwork',
      }, {
        title: 'Profile',
      }, {
        title: 'Location',
      },
      ],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(key) {

    let navItem = document.getElementsByClassName('navItem');
    let navMini = document.getElementsByClassName('navmini')[0];
    let preview = document.getElementsByClassName('pagepreview')[0];
    console.log(preview);

    if (this.state.alreadyNav) {
      navItem[this.state.selectedKey].classList.remove('active');
    }

    navItem[key].classList.add('active');

    if(navItem[key].innerText=='ARTWORK'){
      navMini.classList.remove('inactive');
      if (typeof preview !== 'undefined') {preview.classList.remove('inactive') };
    } else {
      navMini.classList.add('inactive');
      preview.classList.add('inactive');
    }
    this.setState({
      alreadyNav: true,
      selectedKey: key,
    });
  }


  render() {
    const mapToComponents = (data) =>{
      return data.map((navData, i) => {
        return (<NavigationItem navItem={navData} key={i} onClick={() => this.handleClick(i)} />);
      });
    }
    return (
      <div className="exhibitcatalogue">
        <Header />
        <div className="nav_preview">
          <div className="sidenav">
            <nav>
              <ul>
                {mapToComponents(this.state.navData)}
              </ul>
            </nav>
          </div>
          <PagePreview
            artworkData={this.props.artworkData}
            selectedArtwork={this.props.selectedArtwork}/>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;


const mapStateToProps = (state) => {
  return {
    selectedArtwork: state.artworks.selectedArtwork,
    artworkData: state.artworks.artworkData,
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    // handlePreview: (selectedArtwork) => {dispatch(actions.previewArtwork(selectedArtwork)); },
    // handleIncrement: () => { dispatch(actions.increment()); },
    // handleDecrement: () => { dispatch(actions.decrement()); },
    // handleSetColor: (color) => { dispatch(actions.setColor(color)); },
  // return bindActionCreators(actions, dispatch);
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
