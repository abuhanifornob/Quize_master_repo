import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'


const Home = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 css-style"
            src="https://img2.thejournal.ie/inline/5088004/original/?width=630&version=5088004"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 css-style"
            src="https://res.cloudinary.com/edapp/images/w_680,h_350/v1655783588/blog-media/Blog%20hero%20image/Blog%20Hero/online_quiz_makers/online_quiz_makers-jpg?_i=AA"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 css-style"
            src="https://img2.thejournal.ie/inline/5088004/original/?width=630&version=5088004"
            
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3 className='slide-title'>Third slide label</h3>
            <p className='slide-content'>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        
    );
};

export default Home;