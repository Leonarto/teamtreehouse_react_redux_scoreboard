import React, {PropTypes} from 'react';
import Counter from './Counter';

const Player = props => (
    <div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={() => props.onRemove(props.index)}>✖</a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter index={props.index} onChange={props.onScoreChange} score={props.score}/>
      </div>
    </div>
);

Player.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  onScoreChange: PropTypes.func.isRequired,
};

export default Player;

