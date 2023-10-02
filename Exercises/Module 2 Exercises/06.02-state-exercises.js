

//Exercise #1: Adding more colors to gradient selector



// The color inputs should work; picking a new color should update the gradient accordingly.
// Clicking “Add color” should add a new color, at the end of the array.
// Clicking "Remove color" should remove the last color in the array.
// When adding new colors, they should default to #FF0000 (bright red).
// There should always be between 2 and 5 colors. No more, no less.




import React from 'react';
function App() {
  const [colors, setColors] = React.useState([
    '#FFD500',
    '#FF0040',
  ]);

  const [
    numOfVisibleColors,
    setNumOfVisibleColors,
  ] = React.useState(2);


  
  const colorStops = colors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;


  function addColor() {
    if (colors.length > 5) {
      alert('There can only be a maximum of 5 colors')
      return;
    }

    const nextColors = [...colors];
    nextColors.push('#FF0000');
    setColors(nextColors);
    
  }

  function removeColor() {
    if (colors.length <= 2) {
      alert('there have to be at least 2 colors present')
      return;
    }

    const nextColors = [...colors];
    nextColors.pop();
    setColors(nextColors);
  }

  return (
    <div className="wrapper">
      <div className="actions">
        <button onClick={removeColor}>
          Remove color
        </button>
        <button onClick={addColor}>
          Add color
        </button>
      </div>
      
      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />
      
      <div className="colors">
        {colors.map((color, index) => {
          const colorId = `color-${index}`;
          return (
            <div key={colorId} className="color-wrapper">
              <label htmlFor={colorId}>
                Color {index + 1}:
              </label>
              <div className="input-wrapper">
                <input
                  id={colorId}
                  type="color"
                  onChange={(event) => {
                    const nextColors = [...colors]
                    nextColors[index] = event.target.value;
                    setColors(nextColors)
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;



//Exercise #1.5: Stretch Goal for Gradient Selector

// When the user removes and then re-adds a color, it should be restored to the previously-set value, rather than being reset to #FF0000.


import React from 'react';

function App() {
  const [colors, setColors] = React.useState([
    '#FFD500',
    '#FF0040',
    '#FF0040',
    '#FF0040',
    '#FF0040',
  ]);
  const [
    numOfVisibleColors,
    setNumOfVisibleColors,
  ] = React.useState(2);

  const visibleColors = colors.slice(0, numOfVisibleColors);

  const colorStops = visibleColors.join(', ');
  const backgroundImage = `linear-gradient(${colorStops})`;

  function addColor() {
    if (numOfVisibleColors >= 5) {
      window.alert('There is a maximum of 5 colors');
      return;
    }

    setNumOfVisibleColors(numOfVisibleColors + 1);
  }

  function removeColor() {
    if (numOfVisibleColors <= 2) {
      window.alert('There is a minimum of 2 colors');
      return;
    }

    setNumOfVisibleColors(numOfVisibleColors - 1);
  }

  return (
    <div className="wrapper">
      <div className="actions">
        <button onClick={removeColor}>Remove color</button>
        <button onClick={addColor}>Add color</button>
      </div>

      <div
        className="gradient-preview"
        style={{
          backgroundImage,
        }}
      />

      <div className="colors">
        {visibleColors.map((color, index) => {
          const colorId = `color-${index}`;
          return (
            <div key={colorId} className="color-wrapper">
              <label htmlFor={colorId}>
                Color {index + 1}:
              </label>
              <div className="input-wrapper">
                <input
                  id={colorId}
                  type="color"
                  value={color}
                  onChange={(event) => {
                    const nextColors = [...colors];
                    nextColors[index] = event.target.value;

                    setColors(nextColors);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
