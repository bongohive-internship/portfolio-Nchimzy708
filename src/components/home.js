import React from 'react';
import myPic from '../1.jpeg';


export function Home(props) {
    return (<div>
         <img src={myPic} className="App-logo" alt="logo" />
       <h1 class="animated infinite bounce slower">
         Welcome to my Portfolio 
       </h1>
       <ol>
          <li> My Name is Nchimunya Banda </li>
         
       </ol>
    </div>)
}