// Exercise #1 - Bastions and Basilisks Bug


// Acceptance Criteria

// When the “Level up” button is clicked, the alert that pops up should show the updated values for strength/dexterity/intelligence.
// For example, when clicking the button for the first time, “strength” should be displayed as 7, not 6.

// Biggest lesson learned here is to pass what the next state will be directly to the method. So, nextStrength, nextDexterity, etc. 



import React from 'react';

function Character() {
  const [strength, setStrength] = React.useState(6);
  const [dexterity, setDexterity] = React.useState(9);
  const [intelligence, setIntelligence] = React.useState(15);

  function triggerLevelUp() {
    const nextStrength = strength + 1;
    const nextDexterity = dexterity + 2;
    const nextIntelligence = intelligence + 3;
    
    setStrength(strength + 1);
    setDexterity(dexterity + 2);
    setIntelligence(intelligence + 3);

    window.alert(`
      Congratulations! Your hero now has the following stats:
      Str: ${nextStrength}
      Dex: ${nextDexterity}
      Int: ${nextIntelligence}
    `);
  }

  return (
    <div className="wrapper">
      <img
        alt="8-bit wizard character"
        src="https://sandpack-bundler.vercel.app/img/mage-sprite.gif"
      />
      <button onClick={
      triggerLevelUp
      }>
        Level Up
      </button>
    </div>
  );
}

export default Character;


// Exercise #2 - Counter 2.0


// Acceptance Criteria

// The  button should increase the count by 1.
// The  button should increase the count by 10.
// The  button should reset the count to 0.
// The  button should set the count to a random number between 1 and 100.
// The  button should decrease the count by 10.
// The  button should decrease the count by 1.


// Biggest lesson learned: Returning random number and setting it to variable to update state immediately. More consistency with simple onClick methods


import React from 'react';
import { ChevronUp, ChevronsUp, ChevronDown, ChevronsDown, RotateCcw, Hash } from 'react-feather'

function Counter() {
  const [count, setCount] = React.useState(0);

  setRandom = (min = 0, max = 100) => {
    let difference = max - min;

    let rand = Math.random();

    rand = Math.floor( rand * difference);

    rand = rand + min;

   return rand;
  }


  return (
    <div className="wrapper">
      <p>
        <span>Current value:</span>
        <span className="count">
          {count}
        </span>
      </p>
      <div className="button-row">
        <button onClick={() =>
            setCount(count + 1)
          }>
          <ChevronUp />
          <span className="visually-hidden">
            Increase slightly
          </span>
        </button>
        <button onClick={() => 
        setCount(count + 10)
        }>
          <ChevronsUp />
          <span className="visually-hidden">
            Increase a lot
          </span>
        </button>
        <button onClick={() => setCount(0)}>
          <RotateCcw />
          <span className="visually-hidden">
            Reset
          </span>
        </button>
       <button
          onClick={() => {
            const nextCount = setRandom();
            setCount(nextCount);
          }}
        >
          <Hash />
          <span className="visually-hidden">
            Set to random value
          </span>
        </button>
        <button onClick={() => {
         setCount(count - 10)
        }}>
          <ChevronsDown />
          <span className="visually-hidden">
            Decrease a lot
          </span>
        </button>
      <button onClick={() => {
         setCount(count - 1)
        }}>
          <ChevronDown />
          <span className="visually-hidden">
            Decrease slightly
          </span>
        </button>
      </div>
    </div>
  );
}


