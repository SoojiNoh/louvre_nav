// import { INCREMENT, DECREMENT, SET_COLOR } from
import * as types from './ActionTypes';

export function increment() {
  return {
    type: types.INCREMENT,
  };
}

export function previewArtwork(selectedArtwork) {
  return {
    type: types.PREVIEWARTWORK,
    selectedArtwork,
  };
}

export function setColor(color) {
  return {
    type: types.SET_COLOR,
    color,
  };
}
