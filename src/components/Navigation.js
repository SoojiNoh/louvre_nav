import React, { Component, PropTypes } from 'react';
import './Navigation.css';
import NavigationItem from './NavigationItem'
import PagePreview from './PagePreview';
import Header from './Header';
const propTypes = {

};

const defaultProps = {
};

class MyComponent extends Component {

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
      artworkData: [{
        title: 'Running Deer',
      }, {
        title: 'Chris Crick',
      }, {
        title: 'Club Swinging',
      }, {
        title: 'Figure skating',
      }, {
        title: 'Gunfighter',
      }, {
        title: 'Portrait of Smoky',
      },
      ],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(key) {
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
    // console.log(mindButton);
    // const mindButtonCoord = mindButton.getBoundingClientRect();
    // const popup = document.getElementsByClassName("popup")[0];
    // const popupCoordsX = mindButtonCoord.left + window.scrollX;
    // const popupCoordsY = mindButtonCoord.top + window.scrollY;
    //
    // if(!this.state.alreadyPopup) {
    //   mindButton.classList.add('clicked');
    //   popup.classList.add('visible');
    // } else {
    //   mindButton.classList.remove('clicked');
    //   popup.classList.remove('visible');
    // }
    // // console.log(popup);
    //
    // popup.style.transform = `translate(${popupCoordsX}px, ${popupCoordsY}px)`;
    //
    // this.setState({
    //   alreadyPopup: !this.state.alreadyPopup,
    // });


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
          <PagePreview />
        </div>
      </div>
    );
  }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
