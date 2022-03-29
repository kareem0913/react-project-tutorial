import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeItem}) => {
  const [readMore, setReadMore] = useState(false);
  return <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-info">${price}</h4>
      </div>
      <p>{readMore?info: info.substring(0, 300)}
          <button onClick={() => setReadMore(!readMore)}>{readMore? 'show less' : 'read more'}</button>
      </p>
      <button onClick={() => removeItem(id)} className="delete-btn">not intersted</button>
    </footer>
  </article>;
};

export default Tour;
