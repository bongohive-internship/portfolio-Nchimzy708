import React from 'react';
import './App.css';
import './animate.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import hobbies from './components/hobbies';
import {Home} from './components/home';


function App() {
  return (
   <Router>

<div className="App">
      
      <header className="App-header">
      <div class="main">
              <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/hobbies">hobbies</Link></li>
                <li><a href="gallery.html">fears</a></li>
                <li><a href="#">fav programming language</a></li>
                <li><a href="#">schools Attended</a></li>
                </ul>
            
          </div>
      <Route exact path="/" component={Home} />
      <Route exact path="/hobbies" component={hobbies} />
      </header>
    </div>
   </Router>
  );
}

export default App;

  

