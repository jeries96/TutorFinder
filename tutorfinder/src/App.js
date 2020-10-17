import React from 'react';
import './App.css';

// To router
import {Switch , Route ,HashRouter} from 'react-router-dom';


//pages
import HomePage from './Pages/HomePage/HomePage'
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
//components
import MainProfileCard from './Components/Cards/MainProfileCard/MainProfileCard';
import Nav from './Components/Nav/Nav' 
import MatchingTeachers from './Pages/MatchingTeachers/MatchingTeachers'

function App() {
  return (
    <HashRouter>
    <div className="App"> 
      <Nav/>
      <Switch> 
      <Route path="/" exact component={HomePage} />
      <Route path="/SignIn" component={SignIn} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/forgotPassword" component={ForgotPassword} />
      <Route path="/teachers" component={MatchingTeachers} />
      <Route path="/profile" component={MainProfileCard} />
      </Switch> 
    </div>
    </HashRouter>
  );
}

export default App;
