import React, { useState } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { useFetch } from './fetch'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

const App = () => {
  const {loading, data} = useFetch(url);
  const [index, setIndex] = useState(0);
  if (loading) {
  return <section className="section loading">
    <h1>loading...</h1>
  </section>
}
const {company, dates, duties, title} = data[index];
  return <section className='section'>
      <div className="title">
        <h2>expierence</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {
            data.map((item, i) => {
              return <button className={`job-btn ${index === i && 'active-btn'}`} key={item.id} onClick={() => setIndex(i)}>{item.company}</button>
            })
          }
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {
            duties.map((item, i) => {
              return <div key={i} className='job-desc'>
                <FaAngleDoubleRight className='job-icon' />
                <p>{item}</p>
              </div>
            })
          }
        </article>
      </div>
  </section>
}

export default App
