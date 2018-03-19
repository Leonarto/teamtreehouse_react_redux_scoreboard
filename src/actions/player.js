import * as PlayerActionTypes from '../actionTypes/player';

export const addPlayer = name => {
  return {
    type: PlayerActionTypes.ADD_PlAYER,
    name
  };
};

export const removePlayer = index => {
  return {
    type: PlayerActionTypes.REMOVE_PlAYER,
    index
  };
};

export const updatePlayerScore = (index, score) => {
  return {
    type: PlayerActionTypes.UPDATE_PlAYER_SCORE,
    index,
    score
  };
};