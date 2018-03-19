import React, { PropTypes } from 'react';

const Counter = (props) => (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => props.onChange(props.index, -1)}>
        -
      </button>
      <div className="counter-score"> {props.score} </div>
      <button className="counter-action increment" onClick={() => props.onChange(props.index, 1)}>
        +
      </button>
    </div>
);

Counter.propTypes = {
  onChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default Counter;