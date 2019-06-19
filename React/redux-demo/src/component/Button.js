import React from 'react';
import { connect } from 'react-redux';

function Button(props) {
  return (
    <div>
      <button
        onClick={() =>
          props.dispatch({
            type: 'add',
            payload: {
              step: 2,
            },
          })
        }
        style={{ background: props.color, border: props.border }}
      >
        {props.txt}
      </button>
    </div>
  );
}

export default connect()(Button);
