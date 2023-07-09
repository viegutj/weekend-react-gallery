import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.css';


function App() {
  // --- Write React.js hooks here!
  const [galleryList, setGalleryList] = useState([])

  // --- Write client-side Axios routes here!

  // GET route using Axios to retrieve images and display them to the DOM
  function getGalleryData (){
  // axios GET
    Axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('GET response is: ', response);
      console.log('GET response.data is: ', response.data);
      setGalleryList(response.data)
    }).catch((error) => {
      console.log('error in GET: ', error);
    })
  }
  // useEffect for GET route on client-side
    // This acts like out 'onReady' from jQuery
  useEffect(() => {
    getGalleryData
  })

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        {/* <GalleryList /> */}
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;