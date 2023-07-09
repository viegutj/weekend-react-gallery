import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';


function App() {
  // --- Write React.js hooks here!
  const [galleryList, setGalleryList] = useState([])

  // --- Write client-side Axios routes here!

  // GET route using Axios to retrieve images and display them to the DOM
  function getGalleryData (){
  // axios GET
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      // console.log('GET response is: ', response);
      // console.log('GET response.data is: ', response.data);
      setGalleryList(response.data);
    }).catch((error) => {
      console.log('error in GET: ', error);
    })
  }
  // useEffect for GET route on client-side
    // This acts like out 'onReady' from jQuery
  useEffect(() => {
    getGalleryData();
  })

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of Cute Dogs</h1>
        </header>
        <h2>Jonathan Viegut: React Project</h2>
        <GalleryList class="GalleryList" galleryList={galleryList}/>
      </div>
    );
}

export default App;