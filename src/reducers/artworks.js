import * as types from '../actions/ActionTypes';

const initialState = {
  artworkData: [{
    title: 'Running Deer',
    image: '/public/images/01.jpg',
  }, {
    title: 'Chris Crick',
    image: '/public/images/02.jpg',
  }, {
    title: 'Club Swinging',
    image: '/public/images/03.jpg',
  }, {
    title: 'Figure skating',
    image: '/public/images/04.jpg',
  }, {
    title: 'Gunfighter',
    image: '/public/images/05.jpg',
  }, {
    title: 'Portrait of Smoky',
    image: '/public/images/06.jpg',
  },
  ],
  selectedArtwork: -1,
};

/*
export default function artworks(state, action){
  if(typeof state === 'undefined') {
    return initialState;
  }
  */
export default function artworks(state = initialState, action) {

  if (action.type === types.PREVIEWARTWORK) {
    return {
      ...state,
      selectedArtwork: action.selectedArtwork,
    };
  }
  return state;
}
