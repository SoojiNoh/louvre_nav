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
      alreadyNavItem: false,
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

    // console.log(key);

    if (!this.state.alreadyNavItem) {
      const navItem = document.getElementsByClassName('navItem')[key];
      navItem.classList.add('active');
      this.setState({ alreadyNavItem: true });
    } else {
      let navItem = document.getElementsByClassName('navItem')[this.state.selectedKey];
      navItem.classList.remove('active');
      navItem = document.getElementsByClassName('navItem')[key];
      navItem.classList.add('active');
    }
    this.setState({
      selectedKey: key,
    });
  }


  render() {
    console.log("selectedArtwork : "+ this.props.selectedArtwork);

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
