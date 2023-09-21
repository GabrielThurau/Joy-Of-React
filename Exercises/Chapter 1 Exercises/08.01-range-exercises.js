
// Exercise #1: Make a graph that advances in steps of 10



// The Graph component should use the provided range function to generate the correct pegs for the given from and to props.
// The pegs should always increase by 10, and be inclusive of both the from and to values.
// You can assume that from and to will always be multiples of 10.
// There shouldn't be any key-related warnings in the console.
// To clarify some of these acceptance criteria, here are some examples, showing the UI we expect to produce based on different from/to values:


// Finished answer: https://codesandbox.io/s/m88sn6?file=/Graph.js&utm_medium=sandpack


 // App.js

 import Graph from './Graph';

function App() {
  return (
    <Graph
      from={0}
      to={40}
    />
  );
}

export default App;

// Graph.js

import React from 'react';

import { range } from './utils';

function Graph({ from, to }) {
  return (
    <div className="graph">
      {
        range(from, to + 1, 10).map(
          (num) => (
             <div key={num} className="peg">{num}</div>
          ))}
    </div>
  );
}

export default Graph;

// Utils.js

export const range = (start, end, step = 1) => {
    let output = [];
    
    if (typeof end === 'undefined') {
      end = start;
      start = 0;
    }
    
    for (let i = start; i < end; i += step) {
      output.push(i);
    }
    
    return output;
  };

 // Exercise #2: Create a grid with variable rows


// You've been given the template for a Grid component, which will be provided with a numRows prop for the number of rows, and a numCols prop for the number of columns.
// There should be X divs with a class of row, where X is equal to the numRows prop.
// Inside each row, there should be Y divs with a class of cell, where Y is equal to the numCols prop.
// You should use the provided range function to solve this problem.
// There shouldn't be any key-related warnings in the console.


// Code sanbox solution link: https://codesandbox.io/s/nw6l85?file=/Grid.js&utm_medium=sandpack

import { range } from './utils';

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {
        range(numRows).map(
          (rowIndex) => (
            <div key={rowIndex} className="row">
            {
              range(numCols).map(
                (colIndex) => (
                  <div key={colIndex} className="cell"></div>
                )
              )
            }
            </div>
          )
        )
      }
    </div>
  );
}

export default Grid;