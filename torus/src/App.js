import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'


function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeItem = (id) => {
     setTours(tours => {
       return tours.filter(el => el.id !== id);
     })
  }
  const fetchTour = () => {
    setLoading(true)
    fetch(url).then(res => {
      if (res.status >= 200 && res.status <= 299) {
        setLoading(false);
        return res.json();
      }
    }).
    then(data => setTours(data))
    .catch(error => console.log(error));
  }
  useEffect(() => {
    fetchTour();
  }, [])
  if (loading) {
    return <main>
      <Loading />
    </main>
  }else if (tours.length === 0) {
    return <main>
      <div className="title">
        <h2>no tours</h2>
        <div className="underline"></div>
        <button className='btn' onClick={() => fetchTour()}> Refresh</button>
      </div>
    </main>
  }else{
    return <main>
      < Tours  tours={tours} removeItem={removeItem} />
    </main>
  }
}

export default App
