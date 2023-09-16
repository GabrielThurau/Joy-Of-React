// Solutions that I came up with for exercises. 
//Obviously we can't have both not commented out without errors because of duplicate variable names/methods


import React from 'react';
import { createRoot } from 'react-dom/client';

// JSX

const element = (
  <form>
<label htmlFor="search-input">Search:</label>
<input type="search" id="search-input"/>
<button aria-label="Submit" className='submit-btn'>
    <img src="https://sandpack-bundler.vercel.app/img/arrow-right.svg" alt="" />
</button>
  </form>
);

/*
Here's the raw HTML:

<form>
  <label for="search-input">Search:</label>
  <input id="search-input">
  <button aria-label="Submit" class="submit-btn">
    <img
      alt=""
      src="https://sandpack-bundler.vercel.app/img/arrow-right.svg"
    >
  </button>
</form>
*/

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(element);


// exercise #2


// Acceptance Criteria:

// The UI should match the mockup, using the data from the message object
// The data should be referenced using expression slots. Instead of copy/pasting the data into the JSX, we should access it from the message object, like message.content.
// The user's name should be a link, and it should link to /users/[handle]. With this particular data, it should be /users/benjaminthorn.
// There is no actual "profile page", and so the link won't resolve to anything. That's alright.
// The avatar image should use the author's avatarDescription for the alt text.
// For the timestamp in the footer, use the provided formatDate function. Pass in the message.published to get a nicely-formatted timestamp.



import React from 'react';
import { createRoot } from 'react-dom/client';

import { formatDate } from './date-helpers.js';

/*
  This convenient helper function takes an
  ISO date string, and formats it like:
  
  March 14th, 2024 at 11:09 AM
*/
export function formatDate(date) {
    return format(
      new Date(date),
      "MMMM do 'at' hh:mm b"
    );
  }

  const message = {
    content:
      'Just ate at “Les Corbeaux En Colère”. Wonderful little venue!',
    published: '2024-03-14T15:09:26.000Z',
    author: {
      avatarSrc: 'https://sandpack-bundler.vercel.app/img/avatars/009.png',
      avatarDescription: 'Cartoon bear',
      name: 'Ben Thorn',
      handle: 'benjaminthorn',
    }
  };
  
  const users = "/users/"
  const handle = message.author.handle;
  
  const element = (
    <article>
     <header>
      <img src={message.author.avatarSrc} alt={message.author.avatarDescription} />
      <a href={users + handle}>{message.author.name}</a>
     </header>
     <p>
      {message.content}
     </p>
     <footer>
      Posted
       {' '}
      <time>
      {formatDate(message.published)}
      </time>
     </footer>
    </article>
  );
  
  /*
  Here's the raw HTML:
  
  <article style="filter: var(--shadow-elevation-high)">
    <header>
      <img src="TODO">
      <a href="">Author name here</a>
    </header>
    <p>
      Message content here
    </p>
    <footer>
      Posted
      <time datetime="2024-01-01T00:00:00.000Z">
        January 1st at 12:00am
      </time>
    </footer>
  </article>
  */
  
  const container = document.querySelector('#root');
  const root = createRoot(container);
  root.render(element);