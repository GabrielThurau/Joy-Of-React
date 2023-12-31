
// Contact card component 
// Uses prop destructuring in the component arguments


import React from 'react';

function ContactCard({name, job, email}) {
  return(
     <li className="contact-card">
        <h2>{name}</h2>
        <dl>
          <dt>Job</dt>
          <dd>{job}</dd>
          <dt>Email</dt>
          <dd>{email}</dd>
        </dl>
      </li>
  );
}

function App() {
  return (
    <ul>
      <ContactCard
        name={"Sunita Kumar"}
        job={"Electrical Engineer"}
        email={"sunita.kumar@acme.co"}
        />
         <ContactCard
        name={"Henderson G. Sterling II"}
        job={"Receptionist"}
        email={"henderson-the-second@acme.co"}
        />
          <ContactCard
        name={"Aoi Kobayashi"}
        job={"President"}
        email={"kobayashi.aoi@acme.co"}
        />
    </ul>
  );
}

export default App;


// exercise 2: Creating a button component


import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(
  document.querySelector('#root')
);

function SpecialButton({ children, borderColor, color }) {
    return(
      <button
        style={{
        border: '2px solid',
        color,
        borderColor,
        background: 'white',
        borderRadius: 4,
        padding: 16,
        margin: 8,
      }}
        >
        {children}
      </button>
    );
  }

root.render(
  <div>
    <SpecialButton
     borderColor = "red"
     color = "red"
      >
      Cancel
    </SpecialButton>
    <SpecialButton
      borderColor="black"
      color="black"
    >
     Confirm
    </SpecialButton>
  </div>
);