import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [users, setData] = useState(data);
  const [index, setIndex] = useState(0);
  const [state, setState] = useState(true);

  const cheakNumber = (num) => {
    if (num >= data.length) {
      return 0
    }
    if (num < 0) {
      return data.length - 1
    }
    return num;
  }

  const slide = () => {
    const time = setInterval(() => {
      setIndex(index => {
          if (index === data.length - 1) {
            return index = 0
          }
          return index + 1
        })
    }, 3000)

    const view = document.getElementById('view')
    view.addEventListener('mouseenter', () => {
      clearInterval(time);
      setState(false)
    })
    view.addEventListener('mouseleave', () => {
      setState(true)
    })
  }

useEffect(() => {
  if (state) {
    return slide();
  }
}, [state]);

const {id, name, image, title, quote} = users[index];

  return <section className="section">
    <div className="title">
      <h2><span>/ reviews</span></h2>
    </div>
    <div className="section-center">
     <article id='view'>
       <img src={image} alt={name} className='person-img' />
       <h4>{name}</h4>
       <p className="title">{title}</p>
       <p className="text">{quote}</p>
       <FaQuoteRight className='icon'/>
     </article>
     <button className="prev" onClick={() => setIndex(index => cheakNumber(index - 1))}><FiChevronLeft /> </button>
     <button className="next" onClick={() => setIndex(index => cheakNumber(index + 1))}><FiChevronRight /> </button>
    </div>
  </section>;
}

export default App;
