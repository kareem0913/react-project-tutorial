import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItem] = useState(items)
  const [categorys, setCategory] = useState([]);
  const filterItem = (category) => {
    if(category === 'all'){
      setMenuItem(items);
      return;
    }
    const newItem = items.filter(el => el.category === category);
    setMenuItem(newItem);
  }

  return <main>
    <section className='menu section'>
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories filterItem={filterItem} items={items}/>
      <Menu item={menuItems}/>
    </section>
  </main>;
}

export default App;
