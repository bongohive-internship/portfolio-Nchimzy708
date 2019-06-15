import React from 'react';
import myPic from './1.jpeg';
import './App.css';
import hobbies from './components/hobbies';
import './animate.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <div class="main">
              <ul>
                <li><a href="#" >soft skills</a></li>
                <li><a href="hobbies">hobbies</a></li>
                <li><a href="gallery.html">fears</a></li>
                <li><a href="#">fav programming language</a></li>
                <li><a href="#">schools Attended</a></li>
                </ul>
            
          </div>
        <img src={myPic} className="App-logo" alt="logo" />
       <h1 class="animated infinite bounce slower">
         Welcome to my Portfolio 
       </h1>
       <ol>
          <li> My Name is Nchimunya Banda </li>
          
       </ol>
      </header>
    </div>
  );
}

export default App;
