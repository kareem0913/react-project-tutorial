import React, { useState } from 'react';
import Review from './Review';
function App() {
  return <main>
   <section className="container">
         <div className="title">
           <h1>our reviwes</h1>
           <div className="underline"></div>
         </div>
         <Review />
   </section>
  </main>;
}

export default App;
