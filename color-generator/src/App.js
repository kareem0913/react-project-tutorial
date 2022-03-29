import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#ff1919').all(10));
  
  const handler = (event) => {
    event.preventDefault();
    try {
      let colors = new Values(color).all(10)
      setList(colors);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  }
  return <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handler}>
          <input className={error ? 'error' : null} type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder='#999'/>
          <button type='submit' className="btn">submit</button>
        </form>
      </section>
      <section className="colors">
        {
          list.map((item, i) => {
            return <SingleColor key={i} {...item} index={i} hexColor={item.hex}/>
          })
        }
      </section>
  </>
}

export default App
