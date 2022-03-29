import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([]);

  const chaekNumber = (number) => {
    if (number > 8) {
      return 8;
    }
    if (number < 0) {
      return 1
    }
    return number;
  }
  const handler = (event) => {
    event.preventDefault();
    const newText = data.slice(0, chaekNumber(parseInt(count)));
    setText(newText);
  }
  return (
  <section className='section-center'>
    <h3>tired of boring lorem ipsum</h3>
    <form onSubmit={handler} className="lorem-form">
      <label htmlFor="text">Paragraf : </label>
      <input type="number" id='text' value={count} onChange={(e) => setCount(e.target.value)}/>
      <button type='sumbimt' className="btn">submit</button>
    </form>
    <article className="lorem-text">
      {
        text.map((item, i) => {
          return <p key={i}>{item}</p>
        })
      }
    </article>
  </section>
    )
}

export default App;
