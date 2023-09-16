
//first exercise in course

function render(reactElement, containerDOMElement) {

    const node = document.createElement(reactElement.type);
    node.textContent = reactElement.children;
    
    
    for (const key in reactElement.props) {
      let value = reactElement.props[key];
      node.setAttribute(key, value)
    }
    
    containerDOMElement.appendChild(node);
    }
    
    const reactElement = {
      type: 'a',
      props: {
        href: 'https://wikipedia.org/',
      },
      children: 'Read more on Wikipedia',
    };
    
    const containerDOMElement =
      document.querySelector('#root');
    
    render(reactElement, containerDOMElement);

