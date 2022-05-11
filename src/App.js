import React, { useState } from 'react';
import './App.css';
import data from './Data/maindata.json'
import Profile from './Profile/Profile';
import Add from './Adding/Add';



function App() {
  const [added, setAdding] = useState([]);

  const addProfile = (pd) => {
    const newProfile = [...added, pd];
    setAdding(newProfile);


  }
  return (
    <div className="App">
      <section className='profile'>
        {
          data.map(data => <Profile addprofile={addProfile} data={data} key={data.id}></Profile>)
        }
      </section>

      <section className='add'>
        <Add data={added}></Add>
      </section>



    </div>
  );
}

export default App;
