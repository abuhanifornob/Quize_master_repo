import React from 'react';
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import "./Blog.css"

const Blog = () => {
    const [open, setOpen] = useState(false);
    const[open1,setOpen1]=useState(false);
    const[open2,setOpen2]=useState(false);
    return (
        <div className='blog'>
          <h3>Quiz Master Blog  !!! </h3>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
      What is the purpose of react router?
      </Button>
      <br />
    
      <Collapse in={open}>
        <div id="example-collapse-text" className='answer'>
        ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
          <br/> <br />
          React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.
        </div>
      </Collapse>
      <Button
       className='btn'
        onClick={() => setOpen1(!open1)}
        aria-controls="example-collapse-text1"
        aria-expanded={open1}
      >
        What is React Context API and How it works?
      </Button>
      <Collapse in={open1}>
        <div id="example-collapse-text1" className='answer'>
            <h3>What is Context API?</h3>
       
            The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

            <h3>How it works?</h3>
            React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state
        </div>
      </Collapse>
      <Button
        onClick={() => setOpen2(!open2)}
        aria-controls="example-collapse-text2"
        aria-expanded={open2}
      >
        React useRef() hool .......
      </Button>
      <Collapse in={open2}>
        <div id="example-collapse-text2" className='answer'>
        useRef() hook creates references.
<br />
Calling const reference = useRef(initialValue) with the initial value returns a special object named reference. The reference object has a property current: you can use this property to read the reference value reference.current, or update reference.current = newValue.
<br />
Between the component re-renderings, the value of the reference is persistent.
<br />
Updating a reference, contrary to updating state, doesn't trigger component re-rendering.
<br />
References can also access DOM elements. Assign the reference to ref attribute of the element you'd like to access: 
<br />
Want to improve you React knowledge further? Follow A Simple Explanation of React.useEffect().
<br />
Challenge: write a custom hook useEffectSkipFirstRender() that works as useEffect(), only that it doesn't invoke the callback after initial rendering (Hint: you need to use useRef()). Share your solution in a comment below!
        </div>
      </Collapse>
      </div>
    );
};

export default Blog;