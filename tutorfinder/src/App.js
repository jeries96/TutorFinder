import React from 'react';
import './App.css';

// To navigate between pages 
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';

//components
import Nav from './Components/Nav/Nav' 
import HomePage from './Components/HomePage/HomePage'
import SignIn from './Components/SignIn/SignIn'

function App() {
  return (
    <Router>
    <div className="App"> 
      <Nav/>
      <Switch> 

      <Route path="/" exact component={HomePage} />
      <Route path="/SignIn" component={SignIn} />
       

      </Switch>
     
      
    </div>
    </Router>
  );
}

export default App;
