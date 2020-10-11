import React from 'react';
import './App.css';

// To navigate between pages 
import {Switch , Route ,HashRouter} from 'react-router-dom';

//components
import Nav from './Components/Nav/Nav' 
import HomePage from './Components/HomePage/HomePage'
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <HashRouter>
      
    <div className="App"> 
      <Nav/>
      
      <Switch> 

      <Route path="/" exact component={HomePage} />
      <Route path="/SignIn" component={SignIn} />
      <Route path="/SignUp" component={SignUp} />
      </Switch>
      
    </div>
    </HashRouter>
  );
}

export default App;
