// Exercise #1: Avatar selection 

// Acceptance Criteria 

// You should create an array that holds the data needed for all avatars.
// That array should be iterated over, creating an <Avatar /> element for each item in the array.
// There should be no key warnings in the console.


import Avatar from './Avatar';

const avatarData = [
    {
      src: 'https://sandpack-bundler.vercel.app/img/avatars/001.png',
      alt: 'person with curly hair and a black T-shirt'
    },
    {
      src: 'https://sandpack-bundler.vercel.app/img/avatars/002.png',
      alt: 'person wearing a hijab and glasses'
    },
    {
      src: 'https://sandpack-bundler.vercel.app/img/avatars/003.png',
      alt: 'person with short hair wearing a blue hoodie'
    },
    {
      src: 'https://sandpack-bundler.vercel.app/img/avatars/004.png',
      alt: 'person with a pink mohawk and a raised eyebrow'
      },
  ]

function App() {
  return (
    <div className="avatar-set">
    {
    avatarData.map(({alt, src}) => (
        <Avatar
        key={Math.round()}
        src={src}
        alt={alt}
        />
    ))}
    </div>
  )
}

export default App;

// Avatar component for reference


// function Avatar({ src, alt }) {
//     return (
//       <button className="avatar-btn">
//         <img
//           className="avatar"
//           src={src}
//           alt={alt}
//         />
//       </button>
//     );
//   }
  
//   export default Avatar; 


// Exercise #2: Shopping cart

// Acceptance Criteria 

// Update the CartTable component (in the second file) to use iteration.
// Make sure that there are no key warnings in the console.
// In App, we should be rendering two CartTable elements:
    // One for the “in stock” elements, in the current spot
    // One for the “out of stock” elements, below the “Sold Out” heading.

    import CartTable from './CartTable';

    const items = [
      {
        id: 'hk123',
        imageSrc: 'https://sandpack-bundler.vercel.app/img/shopping-cart-coffee-machine.jpg',
        imageAlt: 'A pink drip coffee machine with the “Hello Kitty” logo',
        title: '“Hello Kitty” Coffee Machine',
        price: '89.99',
        inStock: true,
      },
      {
        id: 'co999',
        imageSrc: 'https://sandpack-bundler.vercel.app/img/shopping-cart-can-opener.jpg',
        imageAlt: 'A black can opener',
        title: 'Safety Can Opener',
        price: '19.95',
        inStock: false,
      },
      {
        id: 'cnl333',
        imageSrc: 'https://sandpack-bundler.vercel.app/img/shopping-cart-night-light.png',
        imageAlt: 'A kid-friendly nightlight sculpted to look like a dog astronaut',
        title: 'Astro-pup Night Light',
        price: '130.00',
        inStock: true,
      },
      {
        id: 'scb777',
        imageSrc: 'https://sandpack-bundler.vercel.app/img/shopping-cart-backpack.jpg',
        imageAlt: 'A pink backpack with a unicorn illustration',
        title: 'Magical Unicorn Backpack',
        price: '74.98',
        inStock: true,
      },
    ];
    
    function App() {

        const inStock = items.filter( 
            (item) => item.inStock
        );

        const outOfStock = items.filter(
            (item) => !item.inStock
        );

      return (
        <>
          <h2>Shopping cart</h2>
          <CartTable items={inStock} />
          <div className="actions">
            <button>Continue checkout</button>
          </div>
    
          <h2>Sold out</h2>
          <CartTable items={outOfStock}  />
        </>
      );
    }
    
    export default App;

    // Update the CartTable component (in the second file) to use iteration.
    // Make sure that there are no key warnings in the console.

    //CartTable component for reference

    function CartTable({ items }) {
        // TODO: Map through “items”, creating 1 row per item. There are 4 items currently
        return (
          <table className="shopping-cart">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
            { items.map(({id, imageSrc, imageAlt, title, price}) => (
            <tr className="cart-row" key={id}>
            <td>
            <img
                className="product-thumb"
                src={imageSrc}
                alt={imageAlt}
            />
            </td>
            <td>
            {title}
            </td>
            <td>
            ${price}
            </td>
            </tr>
            )
            )}
            </tbody>
          </table>
        );
      }
      
      export default CartTable;


