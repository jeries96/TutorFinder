import React from 'react';
import './App.css';

// To navigate between pages 
import {Switch , Route ,HashRouter} from 'react-router-dom';

//components
import Nav from './Components/Nav/Nav' 
import HomePage from './Components/HomePage/HomePage'
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/SignUp/SignUp';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import MainProfileCard from './Components/Cards/MainProfileCard/MainProfileCard';

import MiniProfileCard from './Components/Cards/MiniProfileCard/MiniProfileCard';
function App() {
  return (
    <HashRouter>
      
    <div className="App"> 
      <Nav/>
      {/* <Testimonials /> */}
      <Switch> 

      <Route path="/" exact component={HomePage} />
      <Route path="/SignIn" component={SignIn} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/forgotPassword" component={ForgotPassword} />
      <Route path="/teachers" component={MiniProfileCard} />
      <Route path="/profile" component={MainProfileCard} />
      </Switch>
      
    </div>
    </HashRouter>
  );
}

export default App;
