import React, { useState } from 'react';
import data from './data';
import List from './List';


function App() {
  const [people, setPeople] = useState(data);

  const myfunction = () => {
    setPeople([])
    setTimeout(() => {
      setPeople(data)
    }, 2000);
  }

  return <main>
    <section className='container'>
      <h3>{people.length} birthday cart</h3>
      <List people={people}/>
      <button onClick={() => myfunction()}>clear All</button>
      {/* <button onClick={() => setPeople([])}>clear All</button> */}
    </section>
  </main>
}

export default App;
