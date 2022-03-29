import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({list, EditItem, deleteItem}) => {
  return  <div className='grocery-list'>
        {
          list.map(item => {
            return <article className='grocery-item' key={item.id}>
              <p className='title'>{item.name}</p>
              <div className="btn-container">
                <button className='eidt-btn' onClick={() => EditItem(item.id)}><FaEdit /></button>
                <button className='delete-btn' onClick={() => deleteItem(item.id)}><FaTrash /></button>
              </div>
              {/* <button onClick={() => EditItem(item.id)}>edit</button>
              <button onClick={() => deleteItem(item.id)}>delete</button> */}
            </article>
          })
        }
      </div>
}

export default List
