import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestion] = useState(data);
  return <main>
    <div className="container">
      <h3>questions and answer about login</h3>
      <section>
        {
          questions.map(item => {
            return <SingleQuestion key={item.id} {...item}/>
          })
        }
      </section>
    </div>
  </main>
}

export default App;
 