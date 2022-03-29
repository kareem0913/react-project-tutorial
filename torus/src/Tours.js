import React from 'react';
import Tour from './Tour';


const Tours = ({tours, removeItem}) => {
  
  return <section>
    <div className="title">
      <h2>our Tours {tours.length}</h2>
      <div className="underline"></div>
    </div>
    <div>
      {tours.map(item => {
        return <Tour key={item.id} {...item} removeItem={removeItem}/>
      })}
    </div>
  </section>;
};

export default Tours;
