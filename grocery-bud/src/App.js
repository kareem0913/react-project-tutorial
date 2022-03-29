import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  const list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  }
  return [];
}
function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage());
  const [Edit, setEdit] = useState(false);
  const [idd, setId] = useState(null)
  const [showModal, setShowModal] = useState({show:false, msg: ''});

  const handelr = (event) => {
    event.preventDefault();
    if (name.length === 0) {
      setShowModal({show:true, msg:'please insert corect name'})
      return 
    }
    setList(list => {
      if (Edit) {
        setShowModal({show:true, msg:'Edit Item'})
        const newList = list.filter(el => el.id !== idd)
        const newEditItem = {idd, name};
        setId(null)
        return [...newList, newEditItem]
      }
      setShowModal({show:true, msg:'add new item'})
      const newItem = {id : new Date().getTime().toString() , name}
      return [...list, newItem];
    });
    setName('')
    setEdit(false)
  }
  const deleteItem = (id) => {
    setShowModal({show:true, msg:'delete item'})
    const newList = list.filter(el => el.id !== id);
    setList(newList)
  }
  const EditItem = (id) => {
    const newName = list.find(el => el.id === id)
    setName(newName.name);
    setEdit(true)
    setId(id)
  }
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])
  const {show, msg} = showModal;
  return <section className='section-center'>
     
       <form className='grocery-form' onSubmit={handelr}>
          {show && <Alert setShowModal={setShowModal} showModal={showModal} message={msg}/>}
          <h3>grocery bud</h3>
          <div className="form-control">
            <input className='grocery' type="text" placeholder='e.eggs' value={name} onChange={(e) => setName(e.target.value)}/>
            <button type='submit' className='submit-btn'>{Edit ? 'edit' : 'add'}</button>
          </div>
      </form>
     {list.length > 0 && 
      <div className='grocery-container'>
          <List list={list} EditItem={EditItem} deleteItem={deleteItem}/>
          <button className='clear-btn' onClick={() => setList([])}>clear all</button>
      </div>
     }
  </section>
}

export default App
