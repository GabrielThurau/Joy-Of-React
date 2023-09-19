// Exercise 1


// Acceptance Criteria:

//Users who are online should have the text “(Online)” added after their names.
// The VisuallyHidden component should be used to make sure that this text isn't shown visually.
// Users who are offline should not be affected.





import VisuallyHidden from './VisuallyHidden';

function Friend({ name, isOnline }) {
  return (
    <li className="friend">
      {isOnline && <div className="green-dot" />}
      {name}
      {isOnline && (
      <VisuallyHidden> (Online) </VisuallyHidden>
      )}
    </li>
  );
}

function App() {
  return (
    <ul className="friend-list">
      <Friend name="Andrew" isOnline={false} />
      <Friend name="Beatrice" isOnline={true} />
      <Friend name="Chen" isOnline={true} />
    </ul>
  )
}

export default App;

// These styles will make sure the component
// is not visible, but will still be announced
// by screen readers.
//
// Adding “display: none” would hide the
// element from ALL users, including those
// using screen-readers.
const hiddenStyles = {
    display: 'inline-block',
    position: 'absolute',
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    height: 1,
    width: 1,
    margin: -1,
    padding: 0,
    border: 0,
  };
  
  const VisuallyHidden = ({ children }) => {
    return (
      <span style={hiddenStyles}>
        {children}
      </span>
    );
  };
  
  export default VisuallyHidden;



  // Exercise #2

  // Acceptance Criteria:

// If the user has at least 1 badge, an unordered list with the class badge-list should be rendered, using the data from profile.badges.
// Each badge should be its own list item, with badge.label being rendered within.
// There should be no “key” warnings in the browser console. You can trust that the badge slugs are unique.


// Badge markup 

{/* <ul class="badge-list">
  <li>Badge 1</li>
  <li>Badge 2</li>
  <li>Badge 3</li>
</ul> */}



// GOAL:
// Render an unordered list with the class
// “badge-list” when the user has at least
// 1 badge.
//
// Each badge is an object with this shape:
// { slug: string, label: string }
//
// STRETCH:
// If the user has 3+ badges, the “golden”
// class should be added to the unordered
// list (in addition to “badge-list”).

// GOAL:
// Render an unordered list with the class
// “badge-list” when the user has at least
// 1 badge.
//
// Each badge is an object with this shape:
// { slug: string, label: string }
//
// STRETCH:
// If the user has 3+ badges, the “golden”
// class should be added to the unordered
// list (in addition to “badge-list”).

function ProfileCard({ profile }) {
    const badgeAmount = profile.badges.length;
    
    return (
      <article className="profile-card">
        <header>
          <img
            alt={profile.imageAlt}
            src={profile.imageSrc}
          />
  
          <h2>{profile.name}</h2>
          <p className="joined">
            Joined {profile.joinDate}
          </p>
        </header>
  
        { badgeAmount > 0 && (
        <ul className={badgeAmount >= 3 ? 'golden badge-list': 'badge-list'}>
        {profile.badges.map(( {slug, label} ) => (
          <li key={slug}>{label}</li>
        ))}
        </ul> )
          
        }
        
      </article>
    );
  }
  
  export default ProfileCard;