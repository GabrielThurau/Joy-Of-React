// Exercise #1 Click the Ball

// When the user clicks the ball, a winning message should be shown.
// You should handle “click” events specifically, as this event is triggered 
//on click, on tap, and even when the user focuses the element with the keyboard and hits the “Enter” key.



import React from 'react';

import VisuallyHidden from './VisuallyHidden';

function ClickBallGame() {

  function doClick() {
    alert('you win!')
  }
  return (
    <div className="wrapper">
      <button onClick={doClick}
        className="ball"
      >
        <VisuallyHidden>
          Ball
        </VisuallyHidden>
      </button>
    </div>
  );
}

export default ClickBallGame;

// Exercise #2 Click the Ball v2

// When the user clicks the ball, a winning message should be shown.
// When the user clicks the bomb, a losing message should be shown.
// The handleClick function should still be used, and you shouldn't have to change anything about the function itself.



import React from 'react';

import VisuallyHidden from './VisuallyHidden';

function ClickBallGame() {
  function handleClick(type) {
    if (type === 'win') {
      alert('You win!');
    } else {
      alert('You lose :(');
    }
  }
  
  return (
    <div className="wrapper">
      <button
        className="ball"
        onClick={() => (handleClick('win'))}
      >
        <VisuallyHidden>
          Ball
        </VisuallyHidden>
      </button>
      <button
        className="bomb"
        onClick={() => (handleClick('lose'))}
      >
        <span
          role="img"
          aria-label="bomb"
        >
          💣
        </span>
      </button>
    </div>
  );
}

export default ClickBallGame;