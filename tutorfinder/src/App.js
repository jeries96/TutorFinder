import React from 'react';
import './App.css';

// To navigate between pages 
import {Switch , Route ,HashRouter} from 'react-router-dom';

//components
import Nav from './Components/Nav/Nav' 
import HomePage from './Components/HomePage/HomePage'
import SignIn from './Components/SignIn/SignIn'
import SubjectCard from './Components/Cards/SubjectCards/SubjectCard'
function App() {
  return (
    <HashRouter>

    <div className="App"> 
      <Nav/>
    <SubjectCard />
      <Switch> 

      <Route path="/" exact component={HomePage} />
      <Route path="/SignIn" component={SignIn} />
       

      </Switch>
      
      
    </div>
    </HashRouter>
  );
}

export default App;
