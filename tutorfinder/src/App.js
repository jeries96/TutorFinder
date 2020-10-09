import React from 'react';
import './App.css';

// To navigate between pages 
import {Switch , Route ,HashRouter} from 'react-router-dom';

//components
import Nav from './Components/Nav/Nav' 
import HomePage from './Components/HomePage/HomePage'
import SignIn from './Components/SignIn/SignIn'
function App() {
  return (
    <HashRouter>
      
    <div className="App"> 
      <Nav/>
      <Switch> 

      <Route path="/" exact component={HomePage} />
      <Route path="/SignIn" component={SignIn} />

      </Switch>
      
      
    </div>
    </HashRouter>
  );
}

export default App;
