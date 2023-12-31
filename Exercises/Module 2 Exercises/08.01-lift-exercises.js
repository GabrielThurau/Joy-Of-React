// Exercise #1 - Cookie Clicker



// “Your coin balance”, at the bottom of the page, should update to show the value of numOfCoins.
// Clicking the coin should increment this value by 2 (since it's a $2 coin).


// App js

import React from 'react';

import BigCoin from './BigCoin';

function App() {
  const [numOfCoins, setNumOfCoins] = React.useState(0);
  
  return (
    <div className="wrapper">
      <main>
        <BigCoin
          numOfCoins={numOfCoins}
          setNumOfCoins={setNumOfCoins}
        />
      </main>
      <footer>
        Your coin balance:
        <strong>{numOfCoins}</strong>
      </footer>
    </div>
  );
}

export default App;

// bigcoin JS
import React from 'react';
import './BigCoin.css';

function BigCoin({ numOfCoins, setNumOfCoins }) {
  return (
    <div className="coin-wrapper">
      <button
        className="coin"
        onClick={() => setNumOfCoins(numOfCoins + 2)}
      >
        <span className="visually-hidden">Add 2 coins</span>
        <img className="coin-image" alt="" src="https://sandpack-bundler.vercel.app/img/toonie.png" />
      </button>
    </div>
  );
}

export default BigCoin;



// Exercise #2 - Shopping List



// The shown list of items should be driven from React state. We can remove the placeholder foods, and start with an empty list
// Submitting the form should add a new item to the list, and show it in the UI
// When submitting the form, the text input should be reset, so that it's empty. This way, users can easily add multiple items without having to erase their previous entry.
// There should be no “key” warnings in the console. Ideally, you shouldn't use the index for the key.



