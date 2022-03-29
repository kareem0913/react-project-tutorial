import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);

  const cheakNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1
    }
    return number;
  }

  const nextPerson = () => {
    setIndex(index => {
      return cheakNumber(index + 1)
    });
  }
  const prevPerson = () => {
     setIndex(index => {
      return cheakNumber(index - 1)
    });
  }
  const randomPerson = () => {
    let number = Math.floor(Math.random() * people.length);
    if (index === number) {
      number = index + 1
    }
    return setIndex(cheakNumber(number))
  }
  const {id, name, image, job, text} = people[index];
  return <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="jbo">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container"> 
        <button onClick={prevPerson} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextPerson} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomPerson} className="random-btn">random</button>
  </article>;
};

export default Review;
